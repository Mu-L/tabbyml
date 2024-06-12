(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{53211:function(n,e,t){Promise.resolve().then(t.bind(t,99968))},99968:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y},metadata:function(){return I}});var r=t(36164),s=t(40055),i=t(70410),a=t(99047),o=t(6230),u=t(3546),d=t(70652),l=t.n(d),c=t(97651),f=t.n(c),$=t(74630),g=t(99092),p=t.n(g),m=t(74248),h=t(81565),b=t(29),v=t(90379);function x(n){let{count:e,activeClass:t,tooltip:s}=n;return(0,r.jsx)(b.pn,{delayDuration:0,children:(0,r.jsxs)(b.u,{children:[(0,r.jsx)(b.aJ,{children:(0,r.jsx)("div",{className:(0,m.cn)("flex h-8 w-8 cursor-default items-center justify-center rounded-full",{[t]:e,"bg-muted text-muted":!e}),children:e||""})}),(0,r.jsx)(b._v,{children:(0,r.jsx)("p",{children:s})})]})})}function S(n){let{name:e}=n,[{data:t,fetching:a}]=(0,s.aM)({query:i.yB,variables:{jobs:[e]}});return(0,r.jsx)(o.Z,{loading:a,fallback:(0,r.jsx)(v.tB,{className:"w-1/3"}),children:(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)(x,{count:null==t?void 0:t.jobRunStats.success,activeClass:"bg-green-600 text-xs text-white",tooltip:"Success"}),(0,r.jsx)(x,{count:null==t?void 0:t.jobRunStats.pending,activeClass:"bg-blue-600 text-xs text-white",tooltip:"Pending"}),(0,r.jsx)(x,{count:null==t?void 0:t.jobRunStats.failed,activeClass:"bg-red-600 text-xs text-white",tooltip:"Failed"})]})})}function j(n){var e;let{name:t}=n,[{data:d,fetching:c}]=(0,s.aM)({query:i.GG,variables:{last:10,jobs:[t]}}),g=null==d?void 0:null===(e=d.jobRuns)||void 0===e?void 0:e.edges,x=(0,u.useMemo)(()=>null==g?void 0:g.slice().reverse(),[g]),j=null==x?void 0:x[0],I=null==x?void 0:x.find(n=>!!n.node.finishedAt),y=I?p()(I.node.finishedAt).format("YYYY-MM-DD HH:mm"):null;return(0,r.jsx)(o.Z,{loading:c,fallback:(0,r.jsx)(a.SC,{children:(0,r.jsx)(a.pj,{colSpan:4,children:(0,r.jsx)(v.tB,{})})}),children:(0,r.jsxs)(a.SC,{className:"h-16",children:[(0,r.jsx)(a.pj,{className:"font-bold",children:t}),(0,r.jsx)(a.pj,{children:(0,r.jsx)("div",{className:"grid grid-cols-5 flex-wrap gap-1.5  xl:flex",children:null==x?void 0:x.map(n=>{var e;let{createdAt:t,finishedAt:s}=n.node,i=t&&p()(t).format("YYYY-MM-DD HH:mm"),a=null!==(e=t&&s&&f().humanizer({language:"shortEn",languages:{shortEn:{d:()=>"d",h:()=>"h",m:()=>"m",s:()=>"s"}}})(p().duration(p()(s).diff(t)).asMilliseconds(),{units:["d","h","m","s"],round:!1,largest:1,spacer:"",language:"shortEn"}))&&void 0!==e?e:null,o="";if(null!==a){let n=a.endsWith("s");if(n)o=a;else{let n=a.charAt(a.length-1),e=parseInt(a)+1;o=e+n}}return(0,r.jsx)(b.pn,{delayDuration:0,children:(0,r.jsxs)(b.u,{children:[(0,r.jsx)(b.aJ,{asChild:!0,children:(0,r.jsxs)(l(),{href:"/jobs/detail?id=".concat(n.node.id),className:(0,m.cn)("flex h-8 w-8 items-center justify-center rounded text-xs text-white hover:opacity-70",{"bg-blue-600":(0,$.Z)(n.node.exitCode),"bg-green-600":0===n.node.exitCode,"bg-red-600":!(0,$.Z)(n.node.exitCode)&&0!==n.node.exitCode}),children:[o,!o&&(0,r.jsx)(h.IconSpinner,{})]})}),(0,r.jsx)(b._v,{children:i&&(0,r.jsx)("p",{children:i})})]})},n.node.id)})})}),(0,r.jsx)(a.pj,{children:(0,r.jsx)(l(),{href:"/jobs/detail?id=".concat(null==j?void 0:j.node.id),className:"flex items-center underline",children:(0,r.jsx)("p",{children:y})})}),(0,r.jsx)(a.pj,{children:(0,r.jsx)(S,{name:t})})]})})}let I={title:"Jobs"};function y(){let[{data:n,fetching:e}]=(0,s.aM)({query:i.DQ});return(0,r.jsx)(o.Z,{loading:e,children:(0,r.jsxs)(a.iA,{children:[(0,r.jsx)(a.xD,{children:(0,r.jsxs)(a.SC,{children:[(0,r.jsx)(a.ss,{className:"w-[20%]",children:"Job"}),(0,r.jsx)(a.ss,{className:"w-56 xl:w-auto",children:"Recent Tasks"}),(0,r.jsx)(a.ss,{className:"w-auto xl:w-[20%]",children:"Last Run"}),(0,r.jsx)(a.ss,{className:"w-[20%]",children:"Job Runs"})]})}),(0,r.jsx)(a.RM,{children:null==n?void 0:n.jobs.map(n=>(0,r.jsx)(j,{name:n},n))})]})})}},6230:function(n,e,t){"use strict";var r=t(36164),s=t(3546),i=t(24449),a=t(90379);e.Z=n=>{let{loading:e,fallback:t,delay:o,children:u}=n,[d,l]=s.useState(!e),[c]=(0,i.n)(d,null!=o?o:200);return(s.useEffect(()=>{e||d||l(!0)},[e]),c)?u:t||(0,r.jsx)(a.cg,{})}},90379:function(n,e,t){"use strict";t.d(e,{PF:function(){return u},cg:function(){return a},tB:function(){return o}});var r=t(36164),s=t(74248),i=t(3448);let a=n=>{let{className:e,...t}=n;return(0,r.jsxs)("div",{className:(0,s.cn)("space-y-3",e),...t,children:[(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"})]})},o=n=>{let{className:e,...t}=n;return(0,r.jsx)(i.O,{className:(0,s.cn)("h-4 w-full",e),...t})},u=n=>{let{className:e,...t}=n;return(0,r.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",e),...t,children:[(0,r.jsx)(i.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(i.O,{className:"h-4 w-full"})]})}},3448:function(n,e,t){"use strict";t.d(e,{O:function(){return i}});var r=t(36164),s=t(74248);function i(n){let{className:e,...t}=n;return(0,r.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",e),...t})}},99047:function(n,e,t){"use strict";t.d(e,{RM:function(){return u},SC:function(){return l},iA:function(){return a},pj:function(){return f},ss:function(){return c},xD:function(){return o}});var r=t(36164),s=t(3546),i=t(74248);let a=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("table",{ref:e,className:(0,i.cn)("w-full caption-bottom text-sm",t),...s})});a.displayName="Table";let o=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("thead",{ref:e,className:(0,i.cn)("[&_tr]:border-b",t),...s})});o.displayName="TableHeader";let u=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("tbody",{ref:e,className:(0,i.cn)("[&_tr:last-child]:border-0",t),...s})});u.displayName="TableBody";let d=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("tfoot",{ref:e,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s})});d.displayName="TableFooter";let l=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("tr",{ref:e,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s})});l.displayName="TableRow";let c=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("th",{ref:e,className:(0,i.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...s})});c.displayName="TableHead";let f=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("td",{ref:e,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...s})});f.displayName="TableCell";let $=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("caption",{ref:e,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",t),...s})});$.displayName="TableCaption"},29:function(n,e,t){"use strict";t.d(e,{_v:function(){return l},aJ:function(){return d},pn:function(){return o},u:function(){return u}});var r=t(36164),s=t(3546),i=t(44421),a=t(74248);let o=i.zt,u=i.fC,d=i.xz,l=s.forwardRef((n,e)=>{let{className:t,sideOffset:s=4,...o}=n;return(0,r.jsx)(i.VY,{ref:e,sideOffset:s,className:(0,a.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",t),...o})});l.displayName=i.VY.displayName},75561:function(n,e,t){"use strict";t.d(e,{B:function(){return i}});var r=t(18500);let s={"\n  query ListUserEvents(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n  ) {\n    userEvents(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n      start: $start\n      end: $end\n      users: $users\n    ) {\n      edges {\n        node {\n          id\n          userId\n          createdAt\n          kind\n          payload\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.UQ,"\n  mutation uploadUserAvatarBase64($id: ID!, $avatarBase64: String!) {\n    uploadUserAvatarBase64(id: $id, avatarBase64: $avatarBase64)\n  }\n":r.eI,"\n  mutation UpdateUserName($id: ID!, $name: String!) {\n    updateUserName(id: $id, name: $name)\n  }\n":r.DQ,"\n  mutation PasswordChange($input: PasswordChangeInput!) {\n    passwordChange(input: $input)\n  }\n":r.oZ,"\n  mutation updateEmailSetting($input: EmailSettingInput!) {\n    updateEmailSetting(input: $input)\n  }\n":r.gl,"\n  mutation deleteEmailSetting {\n    deleteEmailSetting\n  }\n":r.wZ,"\n  mutation SendTestEmail($to: String!) {\n    sendTestEmail(to: $to)\n  }\n":r.nI,"\n  query emailSetting {\n    emailSetting {\n      smtpUsername\n      smtpServer\n      fromAddress\n      encryption\n      authMethod\n      smtpPort\n    }\n  }\n":r.k6,"\n  mutation UpdateIntegration($input: UpdateIntegrationInput!) {\n    updateIntegration(input: $input)\n  }\n":r.fc,"\n  mutation DeleteIntegration($id: ID!, $kind: IntegrationKind!) {\n    deleteIntegration(id: $id, kind: $kind)\n  }\n":r.AU,"\n  mutation UpdateIntegratedRepositoryActive($id: ID!, $active: Boolean!) {\n    updateIntegratedRepositoryActive(id: $id, active: $active)\n  }\n":r.o7,"\n  mutation CreateIntegration($input: CreateIntegrationInput!) {\n    createIntegration(input: $input)\n  }\n":r.fY,"\n  mutation deleteGitRepository($id: ID!) {\n    deleteGitRepository(id: $id)\n  }\n":r.TS,"\n  mutation createGitRepository($name: String!, $gitUrl: String!) {\n    createGitRepository(name: $name, gitUrl: $gitUrl)\n  }\n":r.ad,"\n  mutation updateOauthCredential($input: UpdateOAuthCredentialInput!) {\n    updateOauthCredential(input: $input)\n  }\n":r.m,"\n  mutation deleteOauthCredential($provider: OAuthProvider!) {\n    deleteOauthCredential(provider: $provider)\n  }\n":r.ZH,"\n  query OAuthCallbackUrl($provider: OAuthProvider!) {\n    oauthCallbackUrl(provider: $provider)\n  }\n":r.L$,"\n  query OAuthCredential($provider: OAuthProvider!) {\n    oauthCredential(provider: $provider) {\n      provider\n      clientId\n      createdAt\n      updatedAt\n    }\n  }\n":r.Fd,"\n  mutation updateNetworkSettingMutation($input: NetworkSettingInput!) {\n    updateNetworkSetting(input: $input)\n  }\n":r.rN,"\n  mutation updateSecuritySetting($input: SecuritySettingInput!) {\n    updateSecuritySetting(input: $input)\n  }\n":r.Nl,"\n  query SecuritySetting {\n    securitySetting {\n      allowedRegisterDomainList\n      disableClientSideTelemetry\n    }\n  }\n":r.rU,"\n  mutation UploadLicense($license: String!) {\n    uploadLicense(license: $license)\n  }\n":r.Yo,"\n  mutation ResetLicense {\n    resetLicense\n  }\n":r.d0,"\n  mutation CreateInvitation($email: String!) {\n    createInvitation(email: $email)\n  }\n":r.ib,"\n  mutation DeleteInvitation($id: ID!) {\n    deleteInvitation(id: $id)\n  }\n":r.YM,"\n  mutation updateUserRole($id: ID!, $isAdmin: Boolean!) {\n    updateUserRole(id: $id, isAdmin: $isAdmin)\n  }\n":r.XF,"\n  mutation UpdateUserActive($id: ID!, $active: Boolean!) {\n    updateUserActive(id: $id, active: $active)\n  }\n":r.dv,"\n  query GetRegistrationToken {\n    registrationToken\n  }\n":r.bh,"\n  mutation ResetRegistrationToken {\n    resetRegistrationToken\n  }\n":r.wW,"\n  query GetDiskUsageStats {\n    diskUsageStats {\n      events {\n        filepath\n        sizeKb\n      }\n      indexedRepositories {\n        filepath\n        sizeKb\n      }\n      database {\n        filepath\n        sizeKb\n      }\n      models {\n        filepath\n        sizeKb\n      }\n    }\n  }\n":r.xX,"\n  mutation ResetUserAuthToken {\n    resetUserAuthToken\n  }\n":r.qq,"\n  mutation passwordReset($input: PasswordResetInput!) {\n    passwordReset(input: $input)\n  }\n":r.vK,"\n  mutation requestPasswordResetEmail($input: RequestPasswordResetEmailInput!) {\n    requestPasswordResetEmail(input: $input)\n  }\n":r.i8,"\n  mutation requestInvitationEmail($input: RequestInvitationInput!) {\n    requestInvitationEmail(input: $input) {\n      email\n      code\n    }\n  }\n":r.S_,"\n  mutation tokenAuth($email: String!, $password: String!) {\n    tokenAuth(email: $email, password: $password) {\n      accessToken\n      refreshToken\n    }\n  }\n":r.UO,"\n  mutation register(\n    $name: String!\n    $email: String!\n    $password1: String!\n    $password2: String!\n    $invitationCode: String\n  ) {\n    register(\n      name: $name\n      email: $email\n      password1: $password1\n      password2: $password2\n      invitationCode: $invitationCode\n    ) {\n      accessToken\n      refreshToken\n    }\n  }\n":r.YR,"\n  query RepositorySearch($kind: RepositoryKind!, $id: ID!, $pattern: String!) {\n    repositorySearch(kind: $kind, id: $id, pattern: $pattern) {\n      type\n      path\n      indices\n    }\n  }\n":r.BH,"\n  query RepositoryList {\n    repositoryList {\n      id\n      name\n      kind\n      gitUrl\n    }\n  }\n":r.HC,"\n  query GetLicenseInfo {\n    license {\n      type\n      status\n      seats\n      seatsUsed\n      issuedAt\n      expiresAt\n    }\n  }\n":r.eZ,"\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isPasswordSet\n      name\n    }\n  }\n":r.fk,"\n  query NetworkSetting {\n    networkSetting {\n      externalUrl\n    }\n  }\n":r.m2,"\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n      isDemoMode\n    }\n  }\n":r.a,"\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n":r.FR,"\n  mutation LogoutAllSessions {\n    logoutAllSessions\n  }\n":r.Il,"\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.Xx,"\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.Mi,"\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          finishedAt\n          exitCode\n          stdout\n          stderr\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.$S,"\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n":r.np,"\n  query ListJobs {\n    jobs\n  }\n":r.Ax,"\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n          name\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.by,"\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n":r.Wd,"\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n":r.Sm,"\n  query ListIntegrations(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integrations(\n      ids: $ids\n      kind: $kind\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.KZ,"\n  query ListIntegratedRepositories(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integratedRepositories(\n      ids: $ids\n      kind: $kind\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          gitUrl\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.qt};function i(n){var e;return null!==(e=s[n])&&void 0!==e?e:{}}},43240:function(n,e,t){"use strict";t.d(e,{BX:function(){return r.B}});var r=t(75561)},24449:function(n,e,t){"use strict";t.d(e,{S:function(){return o},n:function(){return u}});var r=t(3546),s=t(45391),i=t(16784);let a=n=>{let e=(0,i.d)(n);r.useEffect(()=>()=>{e.current()},[])};function o(n,e,t){let o=(0,i.d)(n),u=r.useMemo(()=>(0,s.Z)(function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return o.current(...e)},e,t),[]);return a(()=>u.cancel()),{run:u,cancel:u.cancel,flush:u.flush}}function u(n,e,t){let[s,i]=r.useState(n),{run:a}=o(()=>{i(n)},e,t);return r.useEffect(()=>{a()},[n]),[s,i]}},16784:function(n,e,t){"use strict";t.d(e,{d:function(){return s}});var r=t(3546);function s(n){let e=r.useRef(n);return e.current=n,e}},70410:function(n,e,t){"use strict";t.d(e,{Cl:function(){return c},DQ:function(){return u},GG:function(){return a},S1:function(){return i},Y6:function(){return l},kb:function(){return f},lE:function(){return s},ts:function(){return $},yB:function(){return o},yw:function(){return d}});var r=t(43240);let s=(0,r.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),i=(0,r.BX)("\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,r.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          finishedAt\n          exitCode\n          stdout\n          stderr\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,r.BX)("\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n"),u=(0,r.BX)("\n  query ListJobs {\n    jobs\n  }\n"),d=(0,r.BX)("\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n          name\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),l=(0,r.BX)("\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n"),c=(0,r.BX)("\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n"),f=(0,r.BX)("\n  query ListIntegrations(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integrations(\n      ids: $ids\n      kind: $kind\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),$=(0,r.BX)("\n  query ListIntegratedRepositories(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integratedRepositories(\n      ids: $ids\n      kind: $kind\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          gitUrl\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n")},7600:function(n,e,t){"use strict";var r=t(48717).Z.Symbol;e.Z=r},17996:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var r=t(7600),s=Object.prototype,i=s.hasOwnProperty,a=s.toString,o=r.Z?r.Z.toStringTag:void 0,u=function(n){var e=i.call(n,o),t=n[o];try{n[o]=void 0;var r=!0}catch(n){}var s=a.call(n);return r&&(e?n[o]=t:delete n[o]),s},d=Object.prototype.toString,l=r.Z?r.Z.toStringTag:void 0,c=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":l&&l in Object(n)?u(n):d.call(n)}},64380:function(n,e){"use strict";var t="object"==typeof global&&global&&global.Object===Object&&global;e.Z=t},48717:function(n,e,t){"use strict";var r=t(64380),s="object"==typeof self&&self&&self.Object===Object&&self,i=r.Z||s||Function("return this")();e.Z=i},84639:function(n,e){"use strict";e.Z=function(n){var e=typeof n;return null!=n&&("object"==e||"function"==e)}},96786:function(n,e){"use strict";e.Z=function(n){return null!=n&&"object"==typeof n}},55357:function(n,e,t){"use strict";var r=t(17996),s=t(96786);e.Z=function(n){return"symbol"==typeof n||(0,s.Z)(n)&&"[object Symbol]"==(0,r.Z)(n)}},59348:function(n,e,t){"use strict";t.d(e,{Z:function(){return $}});var r=/\s/,s=function(n){for(var e=n.length;e--&&r.test(n.charAt(e)););return e},i=/^\s+/,a=t(84639),o=t(55357),u=0/0,d=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,$=function(n){if("number"==typeof n)return n;if((0,o.Z)(n))return u;if((0,a.Z)(n)){var e,t="function"==typeof n.valueOf?n.valueOf():n;n=(0,a.Z)(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=(e=n)?e.slice(0,s(e)+1).replace(i,""):e;var r=l.test(n);return r||c.test(n)?f(n.slice(2),r?2:8):d.test(n)?u:+n}}},function(n){n.O(0,[7565,872,55,658,652,6201,3449,2672,9735,7444,1565,3375,5289,1744],function(){return n(n.s=53211)}),_N_E=n.O()}]);