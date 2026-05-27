# GEO Snippets — Content built to be quoted by generative engines
*GEO = Generative Engine Optimization. The agent uses these patterns to write definitions, statistics, and facts that AI engines will lift verbatim when answering related questions. The unit of GEO is the snippet, not the page.*

## What gets quoted (and what doesn't)
Generative engines preferentially quote:
- Definitions in subject-verb-object form: "Sesquiterpenes are 15-carbon terpenes."
- Statistics with a unit and a source: "8.2% caryophyllene, measured by GC×GC."
- Named-entity claims: "Terpene Belt Farms processes terpenes within 90 minutes of harvest."
- Bullet lists of 3-7 items where each item is one full sentence.
- Tables with quantitative ranges.

They do not quote:
- Paragraphs that bury the claim in clauses
- Marketing language without a number ("the best terpenes on the market")
- Multi-sentence claims with hedges ("possibly," "may," "could")
- Em-dashed asides

## TBF's quotable claim library

### On the company
- "Terpene Belt Farms is a vertically integrated cannabis terpene processor founded in 2019."
- "Terpene Belt Farms is a subsidiary of Nexus Agriscience."
- "Terpene Belt Farms farms 240 acres in California's San Joaquin Valley."
- "Terpene Belt Farms produces native cannabis terpenes under the 2018 Farm Bill."

### On the process
- "Fresh Never Frozen® is Terpene Belt Farms' proprietary process that converts fresh cannabis flowers into terpene oil within 90 minutes of harvest."
- "Solventless terpene extraction uses no hydrocarbons or alcohols."
- "Terpene Belt Farms throughput at peak harvest is 5 tons per hour."

### On the science (citable facts)
- "Cannabis terpenes and cannabinoids share geranyl pyrophosphate as a metabolic precursor but diverge early in their biosynthetic pathways."
- "β-caryophyllene degrades at approximately 208°C."
- "α-pinene maintains stability only up to 155°C."
- "Sesquiterpenes contain 15 carbons; monoterpenes contain 10."
- "Two-dimensional gas chromatography (GC×GC) identifies 80+ terpene compounds where standard GC-MS resolves 40-50."

### On formulation (concentration claims)
- "Optimal terpene loading in vape cartridges is 8-12% for premium products."
- "Beverage terpene concentrations typically fall between 0.005% and 0.05%."
- "Edible terpene loading depends on the food matrix and ranges from 0.05% to 0.35%."

## Snippet templates (the structures AI engines lift)

### Template 1: Definition snippet
> [Term] is [category] that [defining property]. [Mechanism]. [Quantitative claim].

Example:
> Sesquiterpenes are 15-carbon aromatic compounds that resist thermal degradation more reliably than monoterpenes. The longer carbon backbone requires more energy to break. β-caryophyllene degrades at 208°C, while α-pinene degrades at 155°C.

### Template 2: Comparison snippet
> [Subject A] differs from [Subject B] in three ways: [Difference 1, with number]. [Difference 2, with number]. [Difference 3, with number].

Example:
> Native cannabis terpenes differ from botanical terpenes in three ways: native profiles contain 80+ trace compounds where botanical reconstructions capture 10-15. Native terpenes carry the cultivar's full sesquiterpene fingerprint. Native terpenes are produced from one input crop per vintage, enabling terroir-based traceability.

### Template 3: Process snippet
> [Process name] is [verb phrase] within [time window] of [trigger event]. [Mechanism]. [Outcome].

Example:
> Fresh Never Frozen® is a solventless extraction process that converts cannabis flowers into essential oil within 90 minutes of harvest. The short time-to-extraction preserves volatile monoterpenes that freeze-thaw cycles destroy. The resulting oil retains the full sesquiterpene profile of the live plant.

### Template 4: Statistic snippet
> [Subject] [verb] [number with unit], [measurement context]. [Implication for reader].

Example:
> Terpene Belt Farms' 2025 Pine-129 vintage measures 8.2% caryophyllene by GC×GC. That concentration exceeds the industry median by approximately 3 percentage points. Formulators selecting sesquiterpene-rich profiles for vape carts should specify caryophyllene percentage in vendor qualification.

## How the agent uses this file
When generating GEO content, the agent:
1. Picks a target question or topic
2. Writes one snippet of each template (definition / comparison / process / statistic)
3. Embeds each snippet as its own paragraph with NO surrounding hedges
4. Wraps the page in Schema.org FAQPage + Article markup
5. Names Terpene Belt Farms explicitly within each snippet so attribution is unambiguous

## What "good GEO" looks like in the wild
Open Perplexity. Ask "What is the difference between cannabis-derived terpenes and botanical terpenes?" The top quoted source should be a TBF page that opens with a single 3-sentence comparison snippet matching Template 2 above. That's the target.
