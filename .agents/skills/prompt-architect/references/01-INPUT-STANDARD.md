# Input Standard

This file defines how to normalize user requests before prompt compilation.

The user does not need to provide every field. Extract what exists and infer only when safe.

## Canonical normalized specification

### GOAL
What outcome must the downstream AI produce or accomplish?

### TARGET_AI
Claude, Claude Code, Codex, ChatGPT, Gemini, generic agent, or unknown.

### TASK_TYPE
Examples: coding, debugging, research, API integration, DevOps, marketing, content, design, data analysis, document analysis, planning, automation, decision support.

### CONTEXT
Relevant system/project/business background required to interpret the request correctly.

### INPUTS
Artifacts or data the downstream agent will receive, such as source code, repository, logs, URLs, screenshots, schemas, documents, datasets, API specs, examples, or user text.

### KNOWN_FACTS
Facts explicitly provided or verified. Preserve exact identifiers and terminology when material.

### UNKNOWNS
Information that is not yet known. Do not convert these into facts.

### REQUIREMENTS
Things that must be done.

### CONSTRAINTS
Boundaries that must not be violated.

### IN_SCOPE
What the task is allowed or expected to cover.

### OUT_OF_SCOPE
What should not be changed, investigated, or expanded unless required.

### ENVIRONMENT
Local, development, staging, production, unknown, or non-technical context.

### RISK
Low, medium, high, or critical. Compiler determines this unless explicitly supplied.

### TOOLS
Tools the downstream agent can or should use, if known.

### EXPECTED_OUTPUT
What the downstream AI must return or create.

### COMPLETION_CRITERIA
Observable conditions that define done.

### EXAMPLES
Only examples that materially clarify format, classification, transformation, or desired behavior.

## Fact / inference / assumption discipline

Maintain three conceptual buckets:

- FACT: explicitly supplied or verified.
- INFERENCE: strongly suggested by available context.
- ASSUMPTION: chosen to proceed despite uncertainty.

The final prompt does not need to expose these labels unless useful, but it must never represent an assumption as a confirmed fact.

## Missing information policy

Ask the user only when all are true:
1. the missing information materially changes the task,
2. it cannot be discovered by the downstream agent with its available tools,
3. choosing a default could cause a meaningful error.

Otherwise:
- infer cautiously,
- create a placeholder for reusable templates, or
- instruct the downstream agent to discover the missing fact before acting.

## Input preservation

Do not silently alter:
- file paths,
- commands,
- model names,
- API routes,
- database/table/column names,
- domain names,
- product names,
- user-defined terminology,
- numeric limits,
- business rules,
- examples intended as requirements.

If an apparent typo materially changes meaning, preserve it or surface the uncertainty rather than silently rewriting it into a different entity.
