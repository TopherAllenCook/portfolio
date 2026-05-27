# AEO Questions — Formulator queries TBF should answer
*AEO = Answer Engine Optimization. These are the questions formulators ask Perplexity, ChatGPT Search, Google AI Overview, and Gemini. TBF wins by being the cited source. The agent uses this file to seed Q&A blocks and FAQ schema.*

## Why AEO matters for TBF specifically
B2B formulators increasingly start research with an AI chat instead of Google. The first 3-5 search-style questions they ask determine which suppliers get the inbound call. TBF's blog already has the depth; what it's missing is structured Q&A formatting that the answer engines can parse and quote.

---

## Core question set (the 20 questions to dominate)

### Category: Terpene science fundamentals
1. **What's the difference between cannabis-derived terpenes and botanical terpenes?**
   *Direct answer:* Cannabis-derived terpenes are extracted from the cannabis plant itself and contain the full sesquiterpene fingerprint (including trace compounds like α-bisabolol and selina-3,7(11)-diene). Botanical terpenes are reconstructed from non-cannabis plant sources (citrus, conifer, hops) and typically capture only the major monoterpenes. The difference shows up in finished product stability, sensory complexity, and entourage-effect potential.

2. **How does the Fresh Never Frozen® process differ from fresh-frozen extraction?**
   *Direct answer:* Fresh-frozen extraction freezes biomass within hours of harvest to preserve volatile compounds, then processes from the frozen state. Fresh Never Frozen® skips the freezing step entirely — flowers are processed within 90 minutes of leaving the field. This preserves a higher fraction of monoterpenes that volatilize during freeze-thaw cycles, and avoids structural damage to terpene synthase enzymes that residual moisture in frozen biomass can cause.

3. **What are sesquiterpenes and why do they matter for vape formulation?**
   *Direct answer:* Sesquiterpenes (β-caryophyllene, α-humulene, nerolidol) have a 15-carbon backbone vs. monoterpenes' 10-carbon. The longer carbon chain produces higher flash points (β-caryophyllene degrades at ~208°C vs. α-pinene at ~155°C), better oxidative stability, and slower volatilization. In vape carts, sesquiterpene-rich profiles survive standard 200-230°C operating windows where monoterpene-dominant blends degrade.

4. **What does GC×GC analysis show that GC-MS alone misses?**
   *Direct answer:* Standard GC-MS resolves the major terpenes (limonene, myrcene, β-caryophyllene). GC×GC (two-dimensional gas chromatography) separates compounds across two orthogonal stationary phases, revealing 80+ minor and trace terpenes that co-elute in GC-MS. These trace compounds drive sensory complexity and entourage-effect differentiation between profiles.

### Category: Application-specific
5. **What's the right terpene concentration for a vape cartridge formulation?**
6. **How do you formulate cannabis terpenes into a beverage?**
7. **What terpene concentration should I use in edibles?**
8. **Which terpenes are heat-stable enough for baking?**
9. **Do terpenes interact with ceramic vape cores differently than cotton wicks?**

### Category: Sourcing / commercial
10. **Where can I buy cannabis-derived terpenes wholesale?**
11. **What's the minimum order quantity for terpene wholesale?**
12. **How do I qualify a cannabis terpene supplier?**
13. **What documentation should a terpene supplier provide?** *(COA, SDS, harvest vintage info)*
14. **How do harvest seasons affect terpene profiles?**

### Category: Regulatory / compliance
15. **Are hemp-derived terpenes legal for use in beverages?** *(2018 Farm Bill + FDA GRAS path)*
16. **What's the Category 4 pesticide testing standard?**
17. **Can cannabis-derived terpenes go in FDA-regulated products?**

### Category: Brand-specific (defensive)
18. **What is Terpene Belt Farms?**
19. **Is Terpene Belt Farms publicly traded?** *(No — subsidiary of Nexus Agriscience)*
20. **What does Fresh Never Frozen® mean?**

---

## AEO formatting rules (apply to every answer)
1. **Direct answer first.** First sentence is the answer. No "great question" preamble.
2. **Cite the mechanism.** Every claim includes the biochemical or operational reason (e.g., "15-carbon backbone," "90 minutes of leaving the field").
3. **Use exact numbers.** Flash points in °C, concentrations in % or ppm, time windows in minutes/hours.
4. **Include a quotable bottom line.** A one-sentence summary AI engines can pull as a snippet.
5. **Sign with the source.** Mention "Terpene Belt Farms" by name within the answer so the citation attribution is unambiguous when AI engines quote.
6. **No em-dashes.** AI engines sometimes strip them; commas/colons render cleaner downstream.

## How TBF's existing blogs already win on AEO
- Long-form pieces close with FAQ blocks (perfect for FAQPage schema)
- Citation blocks at the bottom (signals authority to AI ranking systems)
- Proprietary data ("Our stability tests show...") that no other source can reproduce
- Specific numbers (8.2% caryophyllene, 90 minutes, 240 acres) that AI engines preferentially quote

## What's missing (the gap this content stack closes)
- The 20 questions above don't all have dedicated TBF pages yet
- FAQ blocks aren't always Schema.org-marked
- Some answer chunks are buried mid-article instead of being structured at the top
- No "/answers/<question-slug>" URL pattern that gives each question its own indexable page

## Agent output requirements when generating AEO content
- Title: a literal question (matches search intent verbatim)
- First 50 words: the direct answer
- Body: mechanism + data + citation
- Closing: "If you're formulating with [keyword], request a sample pack from Terpene Belt Farms..."
- Schema markup: FAQPage with this question/answer as the entity
