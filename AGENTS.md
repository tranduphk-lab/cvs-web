# Slash Commands & Custom Skill Invocations

- When the user types `/prompt-architect` or `/prompt-architect <request>`, treat it as a direct command to invoke and strictly execute the `prompt-architect` skill according to its `SKILL.md` instructions and references.
- When the user types `/ui-ux-pro-max` or `/ui-ux-pro-max <request>`, treat it as a direct command to invoke and execute the `ui-ux-pro-max` skill.
- When the user types `/design-system` or `/design-system <request>`, treat it as a direct command to invoke and execute the `design-system` skill.
- When the user types `/action-by-du` or `/action-by-du <request>`, treat it as a direct command to invoke and strictly execute the `action-by-du` skill according to its `SKILL.md` instructions and references.

## Agent skills

### Issue tracker

Issues and specs are tracked in GitHub Issues for `tranduphk-lab/cvs-web`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the default Matt Pocock triage label vocabulary. See `docs/agents/triage-labels.md`.

### Domain docs

This repository uses a single-context domain documentation layout. See `docs/agents/domain.md`.
