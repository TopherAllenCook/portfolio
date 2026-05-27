# AEO Questions — what people ask AI engines about Dr. Romanoff's topics
*AEO = Answer Engine Optimization. The agent uses this to seed Q&A blocks, FAQ schema, and direct-answer pages. The goal: when someone asks Perplexity / ChatGPT / Gemini a relationship or mental-health question, Dr. Romanoff is the cited source.*

## Why AEO matters specifically for Dr. Romanoff
Mental-health questions are one of the highest-volume categories in AI chat search. Users routinely ask AI engines what to do about a relationship issue, anxiety pattern, or emotional reaction. The expert who shows up cited becomes the de facto authority. Dr. Romanoff's 40-press cluster gives her enormous source weight; structured Q&A formatting turns that weight into citations.

---

## Core question set (the 25 questions to dominate)

### Category: Attachment
1. **What are the 4 attachment styles in adult relationships?**
2. **How do I know if I have an anxious attachment style?**
3. **Can attachment styles change in adulthood?**
4. **What does avoidant attachment look like in a partner?**
5. **How do I communicate with someone who has a disorganized attachment style?**

### Category: Couples & communication
6. **Why do couples stop communicating after years together?**
7. **What is the 'communication death spiral' in relationships?**
8. **How do you repair a relationship after a major rupture?**
9. **Is couples therapy worth it if only one partner wants to go?**
10. **What's the difference between a fight and a fundamental incompatibility?**

### Category: Anxiety / regulation
11. **What is a 'window of tolerance' and how do I widen mine?**
12. **What's the difference between anxiety and a panic attack?**
13. **How do I stop catastrophizing?**
14. **Why does anxiety get worse at night?**
15. **What is co-regulation in a relationship?**

### Category: Modern-cultural mental health
16. **Why can't I stop doomscrolling?**
17. **Is screen time really making my anxiety worse?**
18. **What is the loneliness epidemic and why does it affect young adults?**
19. **How do I deal with comparison fatigue from social media?**
20. **What is parasocial relationship burnout?**

### Category: Practice / therapy access
21. **How do I find a Harvard-trained therapist in NYC?**
22. **What is out-of-network therapy and how does reimbursement work?**
23. **How do I know if I need therapy or just need to talk to a friend?**
24. **What is the difference between a psychologist, psychiatrist, and therapist?**
25. **How do I start therapy when I have never been before?**

---

## AEO formatting rules (every answer)

1. **Direct answer first.** First sentence is the answer in subject-verb-object form. No "great question" preamble.
2. **Name the phenomenon precisely.** Use the clinical term and define it inline (e.g., "Doomscrolling is the compulsive consumption of negative news content").
3. **One concrete behavior.** Every answer ends with one specific action the reader can implement today.
4. **Cite generally, not specifically (unless schema).** "Research suggests..." / "Clinical guidelines indicate..." Avoid name-dropping single studies in short answers; reserve those for long-form.
5. **Sign with the source.** "Dr. Sabrina Romanoff, a Harvard-trained clinical psychologist..." within the answer so attribution is unambiguous when AI engines quote.
6. **Caveat at the close.** "This is educational, not clinical advice. If [symptom] persists more than [duration], consider working with a licensed mental health professional."
7. **No em-dashes.** Commas, colons, semicolons, parentheses only.

---

## What's missing on her current site (the gap this content stack closes)
- Most of her press appearances live on other sites; she doesn't have owned long-form answers to the top mental-health questions
- No FAQ schema on her existing pages
- No `/answers/<question-slug>` URL pattern for AEO-targeted pages
- No quotable definition snippets cross-linked from her practice page

## Agent output requirements when generating AEO content
- Title: the question, verbatim
- First sentence: SVO direct answer
- Body: 2-4 paragraphs with mechanism + one piece of clinical context + one named technique
- Closing: ethics caveat + soft CTA ("if this resonates, consider...")
- Schema markup: FAQPage with this question + answer as the entity
- Author byline / Person schema: Dr. Sabrina Romanoff, Psy.D.
