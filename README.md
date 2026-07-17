# JB-Automation-

# Job application agent

Safe, approval-first job discovery for public Greenhouse, Lever, and explicitly configured JSON feeds. It never scrapes LinkedIn, guesses addresses, or sends a draft automatically.

## Setup

Requires Node.js 22+. Copy `.env.example` to `.env` and set secrets locally; GitHub Actions uses repository secrets. Add your PDF as `resume/resume.pdf` (it is intentionally ignored), then add board tokens to `config/job-sources.json`: `greenhouse` and `lever` accept public board/site names; `manualFeeds` accepts public JSON feeds with job fields.

Run `npm install`, `npm run discover`, then review `data/pending-applications.json`. Move only explicitly reviewed records to `data/approved-applications.json`, setting `approved` to `true`. Run `npm run mcp:inspect` with `HOSTINGER_MCP_TOKEN` to inspect the live Hostinger schema; the sender deliberately refuses to send when it cannot discover a compatible send tool. Run `npm run send:approved` only after approval.

## Architecture and safety

Providers normalize public jobs; filters reject senior/unrelated/over-four-year roles; deterministic resume matching produces a score and missing-skill list. Drafts are persisted in JSON, IDs hash company/title/URL/recipient, and sending enforces approval, unsent state, unique same-run recipient, and the configured daily limit. Reports are written to `reports/` and the workflows upload them as artifacts.

The discover workflow runs weekdays at 03:30 UTC (~09:00 IST); sending is manual. `OPENAI_API_KEY` is reserved for optional future AI enrichment—the current matcher intentionally remains deterministic so it cannot invent qualifications. Hostinger schemas vary: inspect the server first, then adapt the argument mapping in `src/email/send-approved.ts` if the discovered tool uses different field names. Never commit your resume or secrets.

## Troubleshooting

`resume/resume.pdf` missing means discovery cannot build a profile. An empty report usually means no source boards were configured. If Hostinger reports no compatible tool, run inspection and check the tool’s required attachment and recipient fields. Run `npm test`, `npm run lint`, and `npm run build` before deploying changes.
