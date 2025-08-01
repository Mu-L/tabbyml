use anyhow::Result;
use chrono::{DateTime, Utc};
use sqlx::{query, query_as, types::Json, FromRow};
use tabby_db_macros::query_paged_as;

use crate::{Attachment, AttachmentCode, AttachmentCodeFileList, AttachmentDoc, DbConn};

#[derive(FromRow)]
pub struct PageDAO {
    pub id: i64,
    pub author_id: i64,
    pub title: Option<String>,
    pub code_source_id: Option<String>,
    pub content: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(sqlx::FromRow)]
pub struct PageSectionDAO {
    pub id: i64,
    pub page_id: i64,

    pub title: String,
    pub content: Option<String>,
    pub position: i64,
    pub attachment: Option<Json<Attachment>>,

    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl DbConn {
    pub async fn create_page(&self, author_id: i64, code_source_id: Option<&str>) -> Result<i64> {
        let res = query!(
            "INSERT INTO pages(author_id, code_source_id) VALUES (?, ?)",
            author_id,
            code_source_id
        )
        .execute(&self.pool)
        .await?;

        Ok(res.last_insert_rowid())
    }

    pub async fn update_page_title(&self, page_id: i64, title: &str) -> Result<()> {
        query!(
            "UPDATE pages SET title = ?, updated_at = DATETIME('now') WHERE id = ?",
            title,
            page_id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }

    pub async fn append_page_content(&self, page_id: i64, content: &str) -> Result<()> {
        query!(
            "UPDATE pages SET content = COALESCE(content, '') || ?, updated_at = DATETIME('now') WHERE id = ?",
            content,
            page_id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }

    pub async fn update_page_content(&self, page_id: i64, content: &str) -> Result<()> {
        query!(
            "UPDATE pages SET content = ?, updated_at = DATETIME('now') WHERE id = ?",
            content,
            page_id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }

    pub async fn list_pages(
        &self,
        ids: Option<&[i64]>,
        limit: Option<usize>,
        skip_id: Option<i32>,
        backwards: bool,
    ) -> Result<Vec<PageDAO>> {
        let condition = match ids {
            Some(ids) => format!(
                "id IN ({})",
                ids.iter()
                    .map(|id| id.to_string())
                    .collect::<Vec<String>>()
                    .join(",")
            ),
            None => "1 = 1".to_string(),
        };

        let pages = query_paged_as!(
            PageDAO,
            "pages",
            [
                "id",
                "author_id",
                "title",
                "code_source_id",
                "content",
                "created_at" as "created_at: DateTime<Utc>",
                "updated_at" as "updated_at: DateTime<Utc>"
            ],
            limit,
            skip_id,
            backwards,
            Some(condition)
        )
        .fetch_all(&self.pool)
        .await?;

        Ok(pages)
    }

    pub async fn delete_page(&self, id: i64) -> Result<()> {
        query!("DELETE FROM pages WHERE id = ?", id,)
            .execute(&self.pool)
            .await?;

        Ok(())
    }

    pub async fn get_page(&self, id: i64) -> Result<Option<PageDAO>> {
        let page = query_as!(
            PageDAO,
            r#"SELECT
                id,
                author_id,
                title,
                code_source_id,
                content,
                created_at as "created_at: DateTime<Utc>",
                updated_at  as "updated_at: DateTime<Utc>"
            FROM pages
            WHERE id = ?"#,
            id
        )
        .fetch_optional(&self.pool)
        .await?;

        Ok(page)
    }

    pub async fn get_page_title(&self, id: i64) -> Result<String> {
        query!(
            r#"SELECT
            title
            FROM pages
            WHERE id = ?"#,
            id
        )
        .fetch_optional(&self.pool)
        .await?
        .ok_or_else(|| anyhow::anyhow!("Page not found"))?
        .title
        .ok_or_else(|| anyhow::anyhow!("Title not found"))
    }

    pub async fn list_page_sections(
        &self,
        page_id: i64,
        limit: Option<usize>,
        skip_id: Option<i32>,
        backwards: bool,
    ) -> Result<Vec<PageSectionDAO>> {
        let condition = format!("page_id = {page_id}");
        let sections = query_paged_as!(
            PageSectionDAO,
            "page_sections",
            [
                "id",
                "page_id",
                "title",
                "content",
                "position",
                "attachment" as "attachment: Json<Attachment>",
                "created_at" as "created_at: DateTime<Utc>",
                "updated_at" as "updated_at: DateTime<Utc>"
            ],
            limit,
            skip_id,
            backwards,
            Some(condition)
        )
        .fetch_all(&self.pool)
        .await?;

        Ok(sections)
    }

    pub async fn get_page_section(&self, id: i64) -> Result<Option<PageSectionDAO>> {
        let section = query_as!(
            PageSectionDAO,
            r#"SELECT
                id,
                page_id,
                title,
                position,
                content,
                attachment as "attachment: Json<Attachment>",
                created_at as "created_at: DateTime<Utc>",
                updated_at  as "updated_at: DateTime<Utc>"
            FROM page_sections
            WHERE id = ?"#,
            id
        )
        .fetch_optional(&self.pool)
        .await?;

        Ok(section)
    }

    // create_page_section creates a new section in the specified page with the given title,
    // returning the id and position of the newly created section.
    pub async fn create_page_section(&self, page_id: i64, title: &str) -> Result<PageSectionDAO> {
        let res = query!(
            r#"
            WITH max_pos AS (
                SELECT COALESCE(MAX(position) + 1, 0) as next_pos
                FROM page_sections
                WHERE page_id = ?1
            )
            INSERT INTO page_sections(page_id, title, position)
            SELECT
                ?1,
                ?2,
                (SELECT next_pos FROM max_pos)
            RETURNING
              id,
              page_id,
              title,
              position,
              content,
              created_at as "created_at: DateTime<Utc>",
              updated_at as "updated_at: DateTime<Utc>"
            "#,
            page_id,
            title,
        )
        .fetch_one(&self.pool)
        .await?;

        Ok(PageSectionDAO {
            id: res.id,
            page_id: res.page_id,
            title: res.title,
            position: res.position,
            content: res.content,
            created_at: res.created_at,
            updated_at: res.updated_at,
            attachment: None,
        })
    }

    pub async fn update_page_section_code_attachments(
        &self,
        section_id: i64,
        code_attachments: &[AttachmentCode],
    ) -> Result<()> {
        let code_attachments = Json(code_attachments);
        query!(
            "UPDATE page_sections SET attachment = JSON_SET(attachment, '$.code', JSON(?)), updated_at = DATETIME('now') WHERE id = ?",
            code_attachments,
            section_id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }

    pub async fn update_page_section_code_file_list(
        &self,
        section_id: i64,
        file_list: &[String],
        truncated: bool,
    ) -> Result<()> {
        let code_file_list_attachment = Json(AttachmentCodeFileList {
            file_list: file_list.into(),
            truncated,
        });
        query!(
            "UPDATE page_sections SET attachment = JSON_SET(attachment, '$.code_file_list', JSON(?)), updated_at = DATETIME('now') WHERE id = ?",
            code_file_list_attachment,
            section_id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }

    pub async fn update_page_section_doc_attachments(
        &self,
        section_id: i64,
        doc_attachments: &[AttachmentDoc],
    ) -> Result<()> {
        let doc_attachments = Json(doc_attachments);
        query!(
            "UPDATE page_sections SET attachment = JSON_SET(attachment, '$.doc', JSON(?)), updated_at = DATETIME('now') WHERE id = ?",
            doc_attachments,
            section_id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }

    pub async fn update_page_section_title(&self, id: i64, title: &str) -> Result<()> {
        query!(
            "UPDATE page_sections SET title = ?, updated_at = DATETIME('now') WHERE id = ?",
            title,
            id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }

    pub async fn append_page_section_content(&self, id: i64, content: &str) -> Result<()> {
        query!(
            "UPDATE page_sections SET content = COALESCE(content, '') || ?, updated_at = DATETIME('now') WHERE id = ?",
            content,
            id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }

    pub async fn update_page_section_content(&self, id: i64, content: &str) -> Result<()> {
        query!(
            "UPDATE page_sections SET content = ?, updated_at = DATETIME('now') WHERE id = ?",
            content,
            id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }

    pub async fn delete_page_sections_without_content(&self, page_id: i64) -> Result<()> {
        query!(
            "DELETE FROM page_sections WHERE page_id = ? AND COALESCE(content, '') = ''",
            page_id
        )
        .execute(&self.pool)
        .await?;

        Ok(())
    }

    pub async fn delete_page_section(&self, id: i64) -> Result<()> {
        query!("DELETE FROM page_sections WHERE id = ?", id,)
            .execute(&self.pool)
            .await?;

        Ok(())
    }

    pub async fn move_page_section(&self, page_id: i64, id: i64, up: bool) -> Result<()> {
        let mut tx = self.pool.begin().await?;

        let current_position = query!("SELECT position FROM page_sections WHERE id = ?", id)
            .fetch_one(&mut *tx)
            .await?
            .position;
        let new_position = if up {
            current_position - 1
        } else {
            current_position + 1
        };

        let swap_section_id = query!(
            "SELECT id FROM page_sections WHERE page_id = ? AND position = ?",
            page_id,
            new_position
        )
        .fetch_one(&mut *tx)
        .await?
        .id;

        query!("UPDATE page_sections SET position = ? WHERE id = ?", -1, id)
            .execute(&mut *tx)
            .await?;
        query!(
            "UPDATE page_sections SET position = ? WHERE id = ?",
            current_position,
            swap_section_id
        )
        .execute(&mut *tx)
        .await?;
        query!(
            "UPDATE page_sections SET position = ? WHERE id = ?",
            new_position,
            id
        )
        .execute(&mut *tx)
        .await?;

        tx.commit().await?;
        Ok(())
    }
}
