use std::sync::Arc;

use anyhow::Context;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use tabby_common::config::CodeRepository;
use tabby_index::public::CodeIndexer;
use tabby_inference::Embedding;
use tabby_schema::{job::JobService, repository::GitRepositoryService};

use super::{helper::Job, BackgroundJobEvent, JobLogger};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SchedulerGitJob {
    repository: CodeRepository,
}

impl SchedulerGitJob {
    pub fn new(repository: CodeRepository) -> Self {
        Self { repository }
    }
}

impl Job for SchedulerGitJob {
    const NAME: &'static str = "scheduler_git";
}

impl SchedulerGitJob {
    pub async fn run(self, embedding: Arc<dyn Embedding>) -> tabby_schema::Result<()> {
        let repository = self.repository;
        tokio::spawn(async move {
            let mut code = CodeIndexer::default();
            code.refresh(embedding, &repository).await
        })
        .await
        .context("Job execution failed")??;
        Ok(())
    }

    pub async fn cron(
        _now: DateTime<Utc>,
        git_repository: Arc<dyn GitRepositoryService>,
        job: Arc<dyn JobService>,
        db: tabby_db::DbConn,
        job_id: i64,
    ) -> tabby_schema::Result<()> {
        let logger = JobLogger::new(db.clone(), job_id);
        let repositories = match git_repository.repository_list().await {
            Ok(repos) => repos,
            Err(err) => {
                logkit::warn!(exit_code = -1; "Failed to list repositories: {}", err);
                logger.finalize().await;
                return Err(err);
            }
        };

        let repositories: Vec<_> = repositories
            .into_iter()
            .map(|repo| CodeRepository::new(&repo.git_url, &repo.source_id))
            .collect();

        for repository in repositories {
            let _ = job
                .trigger(BackgroundJobEvent::SchedulerGitRepository(repository).to_command())
                .await;
        }

        logger.finalize().await;
        Ok(())
    }
}
