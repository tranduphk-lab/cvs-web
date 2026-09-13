# Pattern Library

Select only patterns relevant to the task. Combine without duplicating rules.

## GENERAL
Use for ordinary tasks without a more specific pattern.

Key elements:
- objective,
- relevant context,
- requirements,
- constraints,
- output contract.

## CODING
Use for implementation, refactoring, feature work, or repository changes.

Recommended behavior:
1. Inspect the existing codebase and relevant configuration before editing.
2. Identify the current architecture and conventions.
3. Make the smallest sufficient change.
4. Preserve existing public behavior unless change is required.
5. Avoid speculative rewrites.
6. Run relevant tests, type checks, linting, builds, or targeted validation.
7. Report files changed and verification results.

Useful output contract:
- What was found
- What changed
- Files changed
- Tests/checks run
- Results
- Remaining risks or unresolved items

## DEBUGGING
Use when symptoms, incorrect results, crashes, or regressions need root-cause analysis.

Recommended behavior:
1. Reproduce or trace the failure when possible.
2. Separate symptom from root cause.
3. Inspect data flow and boundary conditions.
4. Validate the suspected cause with evidence.
5. Fix root cause rather than masking the symptom.
6. Add or update a regression test when appropriate.
7. Verify the original failure no longer occurs.

Avoid speculative fixes before locating evidence.

## CODE_REVIEW
Use for git diff, PR, patch, or code quality review.

Review dimensions as relevant:
- correctness,
- regressions,
- data integrity,
- security,
- performance,
- maintainability,
- tests,
- compatibility.

Prioritize findings by impact and confidence. Distinguish confirmed defects from suggestions.

## API_INTEGRATION
Use for external/internal API work.

Recommended behavior:
- identify source of truth for endpoint behavior,
- inspect existing client/adapter code,
- verify auth and required identifiers,
- map request/response fields explicitly,
- distinguish create/update/read/sync semantics,
- handle error responses and retries appropriately,
- avoid inventing undocumented endpoints,
- verify idempotency and reference storage where relevant,
- define observable integration tests.

## DEVOPS
Use for VPS, containers, CI/CD, reverse proxies, DNS, deployment, services, environment configuration.

Recommended behavior:
- inspect actual environment before mutation,
- distinguish local/dev/staging/prod,
- preserve a rollback path for high-risk changes,
- validate service status/config syntax,
- avoid exposing secrets,
- report commands/actions and resulting state,
- verify network/service behavior after changes.

## PRODUCTION_SAFETY
Combine with coding, API, DevOps, database, or other live-system work.

Add proportional controls:
- inspect before modify,
- no destructive action without necessity and explicit authorization where appropriate,
- preserve data and existing behavior,
- backup/rollback for irreversible or schema-impacting changes,
- staged or minimal changes,
- verify before and after state,
- stop when observed environment contradicts assumptions,
- report unverified risk rather than concealing it.

## DATABASE
Use for schema, query, migration, indexes, data corrections, or performance.

Recommended behavior:
- inspect schema and data characteristics,
- assess locking and migration impact,
- protect data integrity,
- avoid full-table destructive operations unless explicitly required,
- verify constraints/indexes/query plans where relevant,
- include rollback or safe-forward strategy for high-risk migrations,
- test on representative data when possible.

## RESEARCH
Use for web/deep research, market research, technology evaluation, current facts, or source synthesis.

Recommended behavior:
- define research questions,
- prioritize authoritative and current sources,
- distinguish primary from secondary evidence,
- cite material claims,
- separate fact, interpretation, and uncertainty,
- compare conflicting sources,
- ensure dates correspond to the event, not merely publication time,
- end with conclusions tied to evidence.

## DATA_ANALYSIS
Use for datasets, metrics, experiments, dashboards, forecasts, or quantitative comparisons.

Recommended behavior:
- inspect schema and data quality,
- state transformations and assumptions,
- validate units and definitions,
- avoid silently dropping missing/outlier data,
- use reproducible calculations,
- distinguish descriptive results from causal claims,
- produce requested tables/charts/metrics,
- include sanity checks.

## MARKETING
Use for campaigns, positioning, ads, growth, ICP, hooks, scripts, funnels.

Recommended behavior:
- identify product, audience, market, objective, channel, offer, and constraints,
- ground claims in supplied or researched facts,
- separate strategy from creative execution,
- create differentiated angles rather than superficial wording variants,
- tailor copy/creative to channel format,
- define success metric when relevant.

## CREATIVE
Combine with marketing, video, design, or content work.

Recommended behavior:
- define intended emotional/behavioral response,
- preserve brand/product facts,
- specify concept, pacing, hierarchy, or narrative structure as relevant,
- encourage variation in concepts rather than synonyms,
- avoid unsupported product claims.

## CONTENT
Use for articles, posts, scripts, documentation, email, social content.

Recommended behavior:
- define audience, purpose, tone, medium, length, and CTA when relevant,
- prioritize clarity and information hierarchy,
- preserve facts,
- match platform conventions,
- avoid filler and repeated conclusions.

## DESIGN
Use for UI/UX, landing pages, visual systems, product interfaces, design prompts.

Recommended behavior:
- define user goal and page/product goal,
- identify information architecture,
- specify visual hierarchy, components, states, responsiveness, accessibility, and interactions,
- distinguish inspiration from direct copying,
- make motion purposeful,
- include implementation constraints if the target agent will build the design.

## DOCUMENT_ANALYSIS
Use for contracts, reports, specs, policies, requirements, or long documents.

Recommended behavior:
- preserve source terminology,
- separate extraction from interpretation,
- cite/locate evidence when possible,
- identify contradictions or missing information,
- do not fill source gaps with general knowledge unless explicitly asked.

## AUTOMATION
Use for recurring workflows, agents, scripts, orchestration, or operational automation.

Recommended behavior:
- define trigger/input,
- define processing stages,
- define outputs/actions,
- handle retries/failures/idempotency,
- define state and persistence where relevant,
- identify credentials/permissions without exposing secrets,
- define observability and success/failure conditions.

## DECISION_SUPPORT
Use for comparisons, architecture decisions, vendor selection, or strategic choices.

Recommended behavior:
- define decision and constraints,
- establish criteria before scoring,
- distinguish must-haves from preferences,
- expose uncertainty and tradeoffs,
- avoid false precision,
- provide a recommendation tied to criteria.

## SECURITY_AUDIT
Use only when the task is defensive security review or secure engineering.

Recommended behavior:
- define authorized scope,
- inspect configuration/code for concrete risks,
- prioritize findings by impact and exploitability,
- avoid unsupported vulnerability claims,
- recommend mitigations and verification steps,
- protect secrets and sensitive data.

## PROMPT_ENGINEERING
Use when the downstream task itself is to build or modify prompts, agents, or skills.

Recommended behavior:
- identify the task performed by the downstream prompt,
- separate prompt requirements from the subject matter,
- remove conflicting/meta-recursive instructions,
- define placeholders consistently,
- add examples only when useful,
- test the prompt mentally against normal and edge cases,
- optimize for predictable execution rather than jargon.
