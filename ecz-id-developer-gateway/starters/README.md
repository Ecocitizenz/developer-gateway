# ECZ-ID Agent Starter Kits — Repository Scaffolds

Each subdirectory contains a minimal starter scaffold for building an ECZ-ID-backed agent.
These are **not production templates** — they are guided starting points that work with the
[ECZ-ID Developer Gateway](https://developers.ecocitizenz.com).

## How to use

1. Choose a starter kit from the [Starter Kits page](https://developers.ecocitizenz.com/agent-starter-kits)
2. Copy the scaffold directory
3. Follow the guided build steps on the kit page
4. At the **TrustOps Credentialing Checkpoint**, go to [TrustOps](https://trustops.ecocitizenz.com/start) to acquire your passports and credentials
5. Return with your credentials, inject them into `.env`, and complete integration
6. Verify through [Resolver](https://resolver.ecocitizenz.org)
7. Deploy anywhere

## Kit index

| Kit | Directory | Difficulty | Platform |
|-----|-----------|-----------|----------|
| Claude Skill Starter | `claude-skill/` | Beginner | Anthropic Claude |
| Claude Subagent Starter | `claude-subagent/` | Intermediate | Anthropic Claude |
| MCP Agent Starter | `mcp-agent/` | Intermediate | MCP Protocol |
| API Workflow Agent | `api-workflow/` | Intermediate | Any |
| Generic Python Agent | `python-agent/` | Beginner | Python |
| Research Agent | `research-agent/` | Advanced | Python |
| Support & Intake Agent | `support-intake/` | Beginner | Any |
| Compliance & Evidence Agent | `compliance-evidence/` | Advanced | Python |
| Operations & Incident Agent | `operations-incident/` | Intermediate | Python |
| OpenClaw Integration | `openclaw-integration/` | Intermediate | OpenClaw / Abacus |

## Required credentials (from TrustOps)

All kits require at minimum:
- ECZ-ID Business Passport (parent)
- ECZ-ID Agent Credential (child)

Some kits require additional domain-specific passports — see each kit's README.

## Important notes

- **This gateway does not provision credentials.** All passports, API keys, and manifests are acquired through [TrustOps](https://trustops.ecocitizenz.com/start).
- **Verification is through Resolver.** Use [Resolver](https://resolver.ecocitizenz.org) to verify any ECZ-ID identity.
- Pricing, packages, and commercial terms are defined in TrustOps, not here.
