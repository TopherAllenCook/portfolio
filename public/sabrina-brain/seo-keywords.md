# SEO Keywords — Dr. Sabrina Romanoff
*The keyword universe she should rank for. Agent uses these for SEO mode output (meta titles, H1s, internal-link suggestions).*

## Tier 1 — high-intent commercial (must rank top-3)
| Keyword | Notes |
|---|---|
| NYC therapist couples | Local commercial intent; her highest-converting search bucket |
| NYC psychologist anxiety | Local + specialty |
| Harvard-trained psychologist NYC | Brand defensive + credentialed differentiation |
| out-of-network therapist NYC | Filters for her ideal client (OON-aware) |
| online therapy NYC psychologist | Telehealth + local |
| Sabrina Romanoff psychologist | Branded (must own top 3) |
| Dr Sabrina Romanoff therapy | Branded |

## Tier 2 — content / educational (top of funnel)
- attachment styles in relationships
- communication breakdown couples
- screen time mental health
- people-pleasing therapy
- imposter syndrome explained
- 3 signs of avoidant attachment
- doomscrolling effects
- post-pandemic anxiety
- life transitions therapy
- couples therapy worth it
- how to start therapy NYC
- out-of-network therapy reimbursement

## Tier 3 — press-leverage (claim authority on the cultural topics)
- psychology of [current reality TV show]
- attachment style [celebrity couple]
- expert says [trending mental-health topic]
- psychologist explains [viral phenomenon]
- coping with [current event]

## Tier 4 — branded / defensive
- Dr. Sabrina Romanoff Harvard
- Sabrina Romanoff Psy.D.
- drsabrinaromanoff.com
- @sabrinaromanoff

## On-page elements every Dr. Romanoff SEO page should have
- Title: `<Topic> | Dr. Sabrina Romanoff` (≤ 60 chars)
- Meta description: includes "Harvard-trained" + one specific action or insight
- H1: declarative; names the phenomenon
- ≥ 1 "three signs" or "five things" pattern block
- FAQ block (Schema.org FAQPage) — strong for AEO
- Schema.org Person markup on every page where she's the author
- Internal links: to areas-of-practice page + contact + relevant press article

## Schema.org markup defaults

### On every site page (head)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Sabrina Romanoff",
  "honorificSuffix": "Psy.D.",
  "jobTitle": "Clinical Psychologist",
  "alumniOf": { "@type": "Organization", "name": "Harvard University" },
  "url": "https://drsabrinaromanoff.com",
  "sameAs": [
    "https://twitter.com/sabrinaromanoff",
    "https://www.instagram.com/drsabrinaromanoff"
  ],
  "knowsAbout": [
    "Anxiety", "Depression", "Trauma", "Relationships",
    "Couples Therapy", "Life Transitions", "Attachment Styles"
  ]
}
```

### On every press / commentary article
Add `Article` schema with `author` = the Person schema above. This compounds her authority signal across Google + AI search engines over time.

## What's not in scope
- E-commerce keywords (no products yet)
- Local-business keywords for in-person (she's telehealth-only)
- Insurance-panel-specific keywords (she's OON only)
