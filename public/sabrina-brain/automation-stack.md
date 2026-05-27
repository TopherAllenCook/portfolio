# The Content Stack — Dr. Romanoff's automations
*Live and queued workflows tuned to her creator-economy + clinical-practice surface mix. Different from a B2B brand stack: more press-focused, more short-form, more topic-reactive.*

## Shipped (live in n8n)
1. **TBF Content Demo — Four Surfaces** (`workflow ID Q18KG1AOdwNEn1B6`) — generalizable, not Sabrina-specific yet.
2. **TBF Full Content Stack** (`workflow ID YLHnkohCbTtnkFb8`) — generalizable, not Sabrina-specific yet.
3. **Sabrina Content Stack — Press + Social + AEO + GEO** (queued for build)
   - Will mirror the TBF Full Content Stack but with Sabrina's brain files loaded
   - Output schema: press_quote, instagram, tiktok_script, podcast_pitch, seo_meta, aeo_qa, geo_snippets

## Roadmap (priority order for Dr. Romanoff specifically)

### 1. Press-Quote Generator (highest ROI for her)
- Webhook trigger from her assistant or a press-inquiry form
- Input: journalist outlet + topic + deadline + word-count
- Brain loaded: voice-manual + brand-canon + press-history + research-corpus
- Output: 2-3 quote drafts, each self-contained and pull-quote-ready, plus credentials block for attribution
- ROI: 5-15 minutes of her time saved per response, 40+ inbound requests/month → ~5-10 hours/week reclaimed

### 2. Cultural-Moment Watcher
- Cron + RSS on lifestyle / pop-culture sites
- When a major moment hits (celebrity breakup, viral TikTok trend, mental-health-relevant news), agent drafts:
  - A press-quote angle she can pitch outlets
  - An IG caption taking her position
  - A 30-second Reel script
- Founder review + post
- ROI: turns her press cluster into proactive newsjacking instead of reactive reply

### 3. Reality-TV Psychology Engine
- Manual trigger when she's planning a TV-recap appearance
- Input: show + episode + episode summary
- Output: 5-8 clinical observations she can lead with, each tied to a named psychological concept
- ROI: prep time per appearance drops from 60-90 min to 15

### 4. Podcast Pitch Engine
- Trigger from her preferred targeting list (podcast directories)
- Output: customized 120-word pitch per show + 3 specific topic ideas drawn from her press-history specialty inventory
- ROI: outbound pitch capacity expands without staffing

### 5. Therapy-Client FAQ Bot (RAG over the brain)
- Webhook on contact-form submission
- Auto-replies with answers to common pre-booking questions (insurance, fees, telehealth, scheduling) using language from FAQ + services-catalog
- Tags the inquiry for her to follow up on the clinical match question
- ROI: reduces email back-and-forth before consultation

### 6. AEO Page Generator
- For each of the 25 AEO questions in `aeo-questions.md`, generate a `/answers/<slug>` page
- Each page: question as H1, SVO direct answer, full-answer body, FAQPage schema, Person schema
- ROI: claim search authority on the highest-volume mental-health questions over 6-12 months

### 7. Newsletter Engine (when she's ready to launch)
- Weekly Tuesday cron
- Pulls from: this week's cultural moments + one clinical concept + one client-friendly research note
- 300-500 words, formatted in her voice
- ROI: owned distribution channel; reduces dependency on the press cluster

## Architecture parity with TBF
Every workflow shares the same three-component shape:
- Trigger (webhook / cron / RSS)
- Brain load (voice-manual + relevant context files)
- Agent + Claude with structured output parser
- Human-in-loop approval (Airtable, Slack, or email)

The brain loading is the leverage point: same n8n architecture, different brain folder, completely different brand voice on the same infrastructure.

## Cost shape
- Per press-quote draft: ~$0.02 in API spend
- Per Cultural-Moment watcher run: ~$0.05
- Estimated monthly: under $100/mo at moderate volume (40 press responses, 4 cultural moments, 2 TV recaps, 8 podcast pitches)
