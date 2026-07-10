# The Content Stack — what each automation does
*Synthesis of the 8 ranked automations from the Marketing Engineer roadmap, paired with the actual n8n workflows already shipped and the ones queued for the first 90 days.*

## Shipped (live in n8n)
1. **TBF Content Demo — Four Surfaces** (`workflow ID Q18KG1AOdwNEn1B6`)
   - Webhook: `https://webhook-endpoint-redacted.invalid/webhook/tbf-content-demo`
   - Input: `{ topic: string }`
   - Output: `{ surfaces: { instagram, linkedin, email_subject, email_body, blog_headline, blog_lede } }`
   - Voice Manual loaded as system prompt; Claude Sonnet 4.6 + Structured Output Parser
   - Average round-trip: 25-30s
   - Status: ✅ Live on production

2. **TBF Full Content Stack — SEO + AEO + GEO + Social** (queued for build)
   - Webhook: TBD
   - Input: `{ topic: string, audience?: "vape" | "beverage" | "edible" | "distributor" }`
   - Output: full 12-surface bundle (social + SEO meta + AEO Q&A + GEO snippets)
   - Average round-trip: ~60s
   - Status: 🟡 Building

## Roadmap (in priority order)
3. **Sample-Pack Triage Agent** — webhook on form submit → Apify scrape requester domain → classify (vape/beverage/edible) → personalized technical reply email drafted in Voice Manual style → Airtable approval queue → Gmail send
4. **Vintage Release Engine** — Airtable webhook on new COA → triggers `tbf-content-demo` → splits into trade press email, LinkedIn announcement, IG carousel, wholesale broadcast → queued for approval
5. **Blog Splinter** — RSS poll → new blog detected → splinters into 7 LinkedIn carousels, 5 X threads, 10 IG captions, one cold-email pitch → Airtable approval
6. **Terpene Research Watcher** — daily cron on PubMed + Google Scholar + trade press → relevance classifier → if hook detected, draft a TBF technical commentary post → Slack alert
7. **Formulator Q&A Bot** — IG DM / LinkedIn DM webhook → RAG over the brain → cited technical reply with linked SKU page → human approval before send
8. **Friday Founder Digest** — Friday 4pm cron → consolidates competitor moves, press, sample-pack volume, top DMs, regulatory news → 1-page brief → Obsidian vault + Slack DM
9. **Conference Pipeline** — weekly scrape of cannabis-industry CFPs → drafts speaker pitches and one-pagers tuned per audience
10. **Newsletter Automation** — Tuesday cron → pulls the week's blog + a vintage spotlight + a formulator FAQ + one industry-news take → six-agent assembly → Google Doc draft

## The architecture lesson here
Every workflow shares the same three components:
- **Trigger**: webhook, cron, RSS, or Airtable change
- **Brain load**: read `voice-manual.md` + relevant context file from this folder
- **Agent + Claude**: the executor with structured output parser
- **Human-in-loop surface**: Airtable, Slack, or email approval queue

Once the brain is finalized, ALL ten of these workflows reuse the same Voice Manual prompt scaffold. Building #3-#10 doesn't require re-prompting; it requires wiring different triggers and output sinks.

## Cost shape (current)
- Anthropic API spend (Claude Sonnet 4.6): ~$0.01-$0.03 per 4-surface generation, ~$0.05-$0.10 per full content stack run
- n8n cloud: existing plan (no marginal cost per workflow)
- Apify enrichment (for Sample-Pack Triage): ~$0.005 per scrape
- Estimated monthly cost at moderate volume (50 sample requests/wk, 1 harvest release/wk, 2 blogs/mo): under $200/mo

## Compounding effect
By month 3, the brain has accumulated:
- All blog content embedded for RAG
- All COAs structured for the vintage engine
- All competitor briefs for the founder digest
- Formulator DM patterns for the Q&A bot

At that point, every new workflow ships in hours, not days, because the brain is already populated.
