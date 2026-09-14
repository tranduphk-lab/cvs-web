# Brand Package & Registry Spec

This is the persistence layer. A brand is not ephemeral chat output - it is a structured,
versioned, queryable package on disk, indexed by a registry. Think `package.json` +
`node_modules`, for a brand.

Every skill reads the package first and writes its output into the package, so a brand
accumulates coherently across sessions instead of being regenerated from scratch each time.

## 1. The brand package

A brand lives in one folder:

```text
<brand>/                 # ./brand/ | brands/<slug>/ | <product>/brand/
  brand.yaml             # Queryable manifest
  context.md             # Brand DNA
  naming.md
  strategy.md
  architecture.md
  identity.md
  voice.md
  messaging.md
  positioning.md
  story.md
  guidelines.md
  audit.md
  assets/
```

Skills create only the files they produce; the package grows over time. `brand.yaml` is
always present.

### `brand.yaml` schema

```yaml
schema_version: 1
slug: cofoundy
name: Cofoundy
one_liner: One sentence on what it is.
tagline: ""
archetype: ""
status: draft
stage: ""
industry: ""
languages: [en]
links:
  domain: ""
  repo: ""
created: 2026-06-16
updated: 2026-06-16
version: 1
artifacts:
  context: false
  naming: false
  strategy: false
  architecture: false
  identity: false
  voice: false
  messaging: false
  positioning: false
  story: false
  guidelines: false
  audit: false
```

## 2. The registry

When you manage more than one brand, a registry indexes them so an agent can find each brand
without opening every package.

`brands/registry.yaml`:

```yaml
schema_version: 1
brands:
  - slug: cofoundy
    name: Cofoundy
    one_liner: One sentence on what it is.
    path: brands/cofoundy
    status: active
    created: 2026-06-16
```

The registry is the source of truth. Locations and one-liners belong in this git-tracked,
queryable file rather than in agent memory.

## 3. Discovery contract

Before doing brand work, a skill loads the brand package:

1. Look for `brand.yaml` in `./`, then `./brand/`, then `brands/<slug>/` when a slug is known.
2. If found, read `brand.yaml`, `context.md`, and any relevant sibling files. Do not ask again
   for information already captured.
3. If not found, run `brand-init` or `brand-context` to create the package first.
4. If a legacy `.agents/brand-context.md` exists, read it and offer to migrate it with
   `brand-init`.

After producing output, write it into the package, set the matching `artifacts.<name>` flag to
`true`, and refresh `updated`.

## 4. Tooling

`skills/brand-init/scripts/brand.sh` is dependency-free:

```bash
brand.sh init --name "Cofoundy" [--slug cofoundy] [--one-liner "..."] [--out DIR] [--date YYYY-MM-DD] [--register brands/registry.yaml]
brand.sh list [--registry brands/registry.yaml]
brand.sh set --package DIR --key one_liner --value "..."
```

`init` scaffolds the package, `brand.yaml`, and `assets/`, and can optionally update the
registry. Scripts do not read the system clock; pass `--date` for reproducible runs.
