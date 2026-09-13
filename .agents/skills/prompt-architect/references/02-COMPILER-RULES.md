# Compiler Rules

## 1. Prompt depth

Choose the minimum level that reliably solves the task.

### LEVEL 1 — SIMPLE
For low-risk transformations and straightforward tasks.
Typical sections:
- Objective
- Input
- Output

### LEVEL 2 — STRUCTURED
For content, planning, ordinary analysis, and tasks needing audience/style constraints.
Typical sections:
- Role/Competency
- Objective
- Context
- Requirements
- Constraints
- Output Contract

### LEVEL 3 — PROFESSIONAL
For research, API analysis, business analysis, data work, and multi-step tasks.
Typical sections:
- Role
- Objective
- Context
- Sources / Inputs
- Scope
- Requirements
- Constraints
- Method / Execution Protocol
- Verification
- Output Contract

### LEVEL 4 — AGENTIC
For Claude Code, Codex, tool-enabled workflows, debugging, repository work, integration work, and autonomous execution.
Typical sections:
- Role/Competency
- Objective
- Context
- Source of Truth
- Inputs
- Scope
- Requirements
- Constraints
- Uncertainty Policy
- Execution Protocol
- Tool Policy
- Verification
- Output Contract
- Completion Criteria

### LEVEL 5 — PRODUCTION / HIGH RISK
For production systems, database migrations, destructive changes, security-sensitive operations, infrastructure, payments, authentication, deployment, or other high-impact work.
Add as appropriate:
- Preconditions
- Risk Controls
- Backup / rollback expectations
- Prohibited Actions
- Failure Handling
- Staged execution
- Regression testing
- Data integrity checks
- Explicit completion evidence

Do not automatically use Level 5 merely because the user says "important".

## 2. Risk classification

### LOW
Failure is easy to detect and cheap to reverse.
Examples: caption, brainstorming, text formatting.

### MEDIUM
Failure creates moderate rework or inaccurate analysis but limited operational harm.
Examples: UI refactor, ordinary internal scripts, non-production analysis.

### HIGH
Failure can disrupt a live service, corrupt behavior, expose sensitive information, or create costly operational errors.
Examples: production code, external API write integration, deployment config, authentication changes.

### CRITICAL
Failure may cause data loss, irreversible destructive changes, serious security exposure, financial harm, or broad service outage.
Examples: destructive production DB migration, credential rotation across live systems, mass-delete operations.

Risk controls must be proportional; do not overload low-risk prompts with production ceremony.

## 3. Architecture selection

Use only relevant sections.

### Role / Competency
Specify capabilities needed for the task. Avoid exaggerated identity claims.

### Objective
One clear primary outcome. Add secondary objectives only when necessary.

### Context
State only context that changes interpretation or execution.

### Source of Truth
Use when multiple sources, code/docs/system state, or potentially conflicting evidence exist.

### Inputs
List what the agent can inspect or what variables it receives.

### Scope
Use when accidental expansion is plausible.

### Requirements
Positive obligations: what must be done.

### Constraints
Boundaries: what must not happen.

### Uncertainty Policy
Use where incomplete facts or changing systems could cause hallucination.

### Execution Protocol
Use for multi-step or agentic work. Describe observable workflow, not hidden reasoning.

### Tool Policy
Use when tools, browsing, repository access, shell, tests, APIs, or files materially affect correctness.

### Verification
Define checks that prove the work is correct.

### Output Contract
Specify structure, format, required sections, and reporting style.

### Completion Criteria
Define observable "done" conditions.

### Examples
Use only when they improve behavior more than they cost in prompt length.

## 4. Conflict resolution

When instructions conflict:
1. Preserve explicit user non-negotiables.
2. Resolve internal contradictions in the generated prompt rather than passing them downstream.
3. Prefer specific instructions over generic ones when both can coexist.
4. Do not include examples that contradict current rules.
5. Do not create artificial requirements just to satisfy a template shape.

## 5. Prompt economy

Remove instructions that:
- restate the objective without adding precision,
- are generic motivational language,
- duplicate another section,
- cannot be tested or acted on,
- impose unnecessary formatting,
- force arbitrary counts such as exactly three items without task justification.

## 6. XML / Markdown / structured formats

Do not force XML globally.
Choose the format best suited to the downstream agent and task.

Markdown is the default for human-readable agent prompts.
Use XML-like tags when hierarchical boundaries materially improve parsing or long-context reliability.
Use JSON/YAML only when machine-readable structure is explicitly useful.

If XML is used:
- keep nesting valid,
- do not contradict rules in examples,
- do not mix placeholder syntaxes,
- avoid CDATA unless the task truly requires raw embedded markup and the target supports it.

## 7. Verification framework

Quality gates should be observable. Candidate gates:
- requirements coverage,
- no dropped constraints,
- factual grounding,
- placeholder consistency,
- syntax/format validity,
- tests passing,
- regression checks,
- data integrity,
- API/documentation consistency,
- no unexpected files or interfaces changed,
- output fulfills completion criteria.

## 8. Clarification policy

Do not turn prompt generation into an interview.

Ask only for blocking information. Otherwise build a strong prompt that instructs the downstream agent how to discover uncertain facts.

For reusable templates, prefer placeholders to clarification.

## 9. Downstream model adaptation

### Claude Code / coding agents
Favor repository inspection, explicit scopes, tool use, tests, minimal diffs, and verifiable completion.

### Codex
Favor precise execution boundaries, repository/tool inspection, concrete commands/checks where appropriate, and clear completion/reporting contracts.

### ChatGPT / general assistants
Favor context clarity, source boundaries, explicit deliverable structure, and appropriate reasoning/verification instructions without assuming filesystem/tool access.

### Research agents
Favor source quality, freshness requirements, citation rules, claim/evidence separation, uncertainty reporting, and synthesis criteria.

Do not invent capabilities for a target model or environment.
