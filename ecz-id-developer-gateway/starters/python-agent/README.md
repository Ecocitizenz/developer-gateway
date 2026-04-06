# Generic Python Agent Starter

Build any ECZ-ID-backed agent from scratch using Python. The most flexible starting point.

## Prerequisites
- Python 3.10+
- ECZ-ID Business Passport + Agent Credential (from TrustOps)

## Quick Start
1. Copy this directory
2. `cp .env.example .env`
3. Go to [TrustOps](https://trustops.ecocitizenz.com/start) to acquire credentials
4. Fill in `.env` with your TrustOps-issued credentials
5. Follow the build guide at [developers.ecocitizenz.com/agent-starter-kits/python-agent](https://developers.ecocitizenz.com/agent-starter-kits/python-agent)

## Required Passports
- ECZ-ID Business Passport (parent)
- ECZ-ID Agent Credential

## Files
- `.env.example` — Credential template
- `manifest.example.json` — ECZ-ID manifest scaffold
- `verify_example.py` — Resolver verification example
- `agent.py` — Agent entry point (create this)

## Important
This scaffold provides structure only. Credentials are acquired through TrustOps, not GitHub.
Verification is through Resolver. See the full guide on the Developer Gateway.
