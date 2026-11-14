// Startup blueprints for EdTech, FinTech, Food & Beverage and Home Services.

module.exports = {
  "EdTech": [
    {
      match: "practical coding skills",
      startup: "Shipyard",
      pitch: "A coding school built around shipping real software: industry-simulation labs, code review and debugging drills instead of lecture notes.",
      who: "Final-year students and fresh graduates with strong marks but no working portfolio.",
      tags: ["edtech", "coding", "employability"],
      how: [
        "Replace syllabus chapters with 12 week-long simulations: a payments bug, a slow query, a broken deploy, each with tests and a reviewer.",
        "Require every learner to maintain a public repo with CI, tests and a written post-mortem for each project.",
        "Grade on debugging and code review, then route top performers to hiring partners who interview from the repo."
      ],
      mvp: [
        "Three simulation tracks with automated tests",
        "Reviewer roster of 20 working engineers",
        "Public portfolio and verified skill report"
      ],
      model: "Income-share or fixed-fee bootcamp, plus college licensing for the labs.",
      price: "₹35,000–₹75,000 per track; ₹8 lakh/year college licence.",
      gtm: "College placement cells, coding communities, and a free 'debug this repo' challenge as the top of funnel.",
      moat: "A reviewed project corpus and employer trust in the skill signal.",
      risks: ["Reviewer quality at scale", "Placement outcomes depend on the market", "Learners want credentials, not practice"],
      market: { tam: "₹25,000 Cr higher-ed and upskilling; employability a ₹4,000 Cr slice", time: "6–9 months", capital: "₹50–80 lakh" },
      verdict: "Employers do not buy degrees; they buy evidence of work."
    },
    {
      match: "college choices influenced by referral",
      startup: "Unbiased",
      pitch: "Fee-only college advisory with transparent pricing, aptitude matching and published outcome data — no referral commissions.",
      who: "Class 12 students and parents choosing between expensive private colleges with hidden incentives.",
      tags: ["edtech", "advisory", "transparency"],
      how: [
        "Build a college dataset with real fees, placement rates, median salaries and accreditation status, normalised across institutions.",
        "Run an aptitude and constraint interview, then produce three tiers of options with total cost and likely outcomes.",
        "Charge families a flat fee and publish a 'no commission' pledge, with a refund if the student's top choice is later found misrepresented."
      ],
      mvp: [
        "College outcome database for two states",
        "Advisory workflow and report template",
        "Five counsellors trained on the method"
      ],
      model: "Flat advisory fee; later, a B2B licence for schools and lenders.",
      price: "₹4,999–₹14,999 per family; ₹2,500 for a group workshop.",
      gtm: "School counsellor partnerships, parent webinars, and SEO on 'which college should I choose'.",
      moat: "Outcome data and a reputation for refusing referral money.",
      risks: ["Data collection is hard", "Families trust commissions-driven agents", "Liability on advice"],
      market: { tam: "₹3,000 Cr college admissions advisory", time: "9–12 months", capital: "₹40–70 lakh" },
      verdict: "Neutral advice is a business model, not an ethics statement."
    },
    {
      match: "tutoring shifted from answer-giving",
      startup: "ConceptLoop",
      pitch: "Tutoring that is contractually not allowed to give answers — diagnostic, Socratic sessions with a mastery score after every topic.",
      who: "Parents paying for tutors while their child still cannot solve unseen problems.",
      tags: ["edtech", "tutoring", "mastery"],
      how: [
        "Diagnose the specific gap with a short adaptive test, then run sessions where the tutor may only ask questions and set sub-steps.",
        "End each topic with an unseen problem set; a pass unlocks the next topic and triggers a parent report.",
        "Train tutors on the protocol and audit session recordings for answer-giving."
      ],
      mvp: [
        "Diagnostic question bank",
        "Tutor protocol and training module",
        "Parent progress report and mastery map"
      ],
      model: "Per-session fee with a monthly learning report; school after-hours contracts.",
      price: "₹600–₹1,200 per session; ₹4,999/month for eight sessions.",
      gtm: "Parent communities and school PTAs; lead with the diagnostic, not the tutor.",
      moat: "A mastery map per student and a trained tutor protocol.",
      risks: ["Tutors revert to old habits", "Parents want homework finished", "Outcome measurement takes time"],
      market: { tam: "₹30,000 Cr private tutoring", time: "6–9 months", capital: "₹30–50 lakh" },
      verdict: "Sell the outcome, not the hour."
    },
    {
      match: "regional language instruction",
      startup: "Bhasha",
      pitch: "High-quality regional-language versions of elite courses, with local mentors and assessments — not machine-translated subtitles.",
      who: "Talented non-metro students locked out of English-only global courseware.",
      tags: ["edtech", "localisation", "languages"],
      how: [
        "License 20 high-demand courses and rebuild them with native-language instructors, not just dubbing.",
        "Localise examples, assessments and support, with a regional mentor available for doubt sessions.",
        "Certify learners against the same assessment standard as the English version."
      ],
      mvp: [
        "Two languages, five courses",
        "Native instructor and mentor pool",
        "Assessment and certificate parity"
      ],
      model: "Course licensing margin plus a subscription for mentor support.",
      price: "₹999–₹4,999 per course; ₹499/month mentoring.",
      gtm: "Regional YouTube educators, district-level study centres, and state skilling partnerships.",
      moat: "Licensed content and a native instructor bench.",
      risks: ["Licensing costs", "Translation quality", "Small willingness to pay"],
      market: { tam: "₹18,000 Cr online learning; regional-language supply is thin", time: "9–12 months", capital: "₹80 lakh–₹1.2 Cr" },
      verdict: "English is not the barrier; English-only assessment is."
    },
    {
      match: "step-by-step, student-friendly kits",
      startup: "KidKit",
      pitch: "Age-appropriate project kits with materials, step cards and a safety check — so the assignment is the child's, not the parent's.",
      who: "Parents of Class 3–8 students scrambling the night before a science fair.",
      tags: ["edtech", "diy", "subscription"],
      how: [
        "Map school project briefs to kit templates by grade and subject, with pre-cut materials and illustrated steps.",
        "Design for independent completion in 45–90 minutes, with a 'parent hands off' instruction and a reflection sheet.",
        "Ship a monthly kit subscription and a teacher pack for schools that assign projects."
      ],
      mvp: [
        "12 kit designs across three grades",
        "Step-card system and safety checklist",
        "Subscription box and teacher pack"
      ],
      model: "Subscription boxes plus school bulk orders.",
      price: "₹499–₹899 per kit; ₹1,499/quarter subscription.",
      gtm: "School partnerships at the start of term, parent groups, and Amazon/Flipkart listings.",
      moat: "Kit design library mapped to actual school curricula.",
      risks: ["Seasonality around exams", "Shipping damage", "Schools change briefs"],
      market: { tam: "₹2,000 Cr school supplies and activity kits", time: "5–8 months", capital: "₹30–50 lakh" },
      verdict: "The customer is the parent, but the user must be the child."
    },
    {
      match: "resumes fail ATS",
      startup: "Shortlist",
      pitch: "An ATS-readiness tool that rewrites for the specific job and proves the skills with a portfolio, not just keywords.",
      who: "Fresh graduates and career switchers sending 50 applications into a void.",
      tags: ["edtech", "career", "ai"],
      how: [
        "Parse the job description and the resume, then show exactly which requirements are missing or phrased badly for ATS.",
        "Generate role-specific bullet variants that stay truthful, with a diff the candidate approves.",
        "Attach a verified skills portfolio and run a mock screening interview for the same role."
      ],
      mvp: [
        "Resume parser and JD matcher",
        "ATS-safe templates and keyword diff",
        "Mock screening with a scorecard"
      ],
      model: "Freemium with a paid application pack; university career-cell licences.",
      price: "₹299 per application pack; ₹999 for five roles; ₹50,000/year college licence.",
      gtm: "Campus placement cells, LinkedIn content, and a free ATS score as the hook.",
      moat: "Application-outcome data tied to resume changes.",
      risks: ["Advice commoditised by LLMs", "Ethical claims about ATS", "Low repeat use"],
      market: { tam: "₹1,500 Cr early-career job prep", time: "5–8 months", capital: "₹25–45 lakh" },
      verdict: "Keywords get you parsed; evidence gets you hired."
    },
    {
      match: "mock tests and analytics inaccessible",
      startup: "FreeMock",
      pitch: "Sponsor-funded mock tests and analytics for low-income aspirants — free to the student, paid for by CSR and colleges.",
      who: "NEET/JEE aspirants who cannot afford ₹15,000 test series.",
      tags: ["edtech", "exams", "access"],
      how: [
        "Build a question bank and a full-length mock engine with topic-level analytics and a weak-area plan.",
        "Fund it through CSR sponsorships and college partnerships, with sponsor branding kept away from question content.",
        "Add offline test centres and a WhatsApp doubt line for students without steady internet."
      ],
      mvp: [
        "500-question bank and two full mocks",
        "Analytics dashboard",
        "CSR sponsor kit and reporting"
      ],
      model: "CSR grants and college licences; optional paid mentoring for those who want it.",
      price: "Free to students; ₹3–8 lakh annual CSR package.",
      gtm: "District education officers, NGO networks, and CSR foundations focused on education.",
      moat: "Sponsor relationships and a large aspirant dataset.",
      risks: ["Grant dependence", "Content quality", "Cheating and test integrity"],
      market: { tam: "₹8,000 Cr test prep; bottom-of-pyramid unserved", time: "7–10 months", capital: "₹50–80 lakh" },
      verdict: "Access is a funding design problem, not a pricing problem."
    },
    {
      match: "scholarship information fragmented",
      startup: "ScholarshipSetu",
      pitch: "One verified scholarship database with eligibility matching, document checklists and a mentor who answers on WhatsApp.",
      who: "Rural and low-income students who never hear about the money they qualify for.",
      tags: ["edtech", "scholarships", "access"],
      how: [
        "Crawl and verify every central, state and private scholarship, then normalise eligibility into a filterable schema.",
        "Match students to schemes, generate a document checklist and track deadlines with reminders.",
        "Recruit verified mentors to review applications and run physical help desks in district colleges."
      ],
      mvp: [
        "500 verified schemes",
        "Eligibility matcher and checklist",
        "WhatsApp mentor roster"
      ],
      model: "CSR and foundation funding; college partnerships; no fee from students.",
      price: "Free to students; ₹2–5 lakh per district partnership.",
      gtm: "District colleges, state welfare boards and education NGOs.",
      moat: "Verified, structured scheme data and mentor coverage.",
      risks: ["Scheme data changes constantly", "Verification cost", "Funding cycles"],
      market: { tam: "₹50,000 Cr+ scholarship disbursement; discovery is the bottleneck", time: "7–10 months", capital: "₹35–60 lakh" },
      verdict: "The money exists; the map does not."
    },
    {
      match: "expensive annual subscriptions",
      startup: "TopicPass",
      pitch: "Pay for the topic you are stuck on, not the year — micro-access to exam prep with a refundable first lesson.",
      who: "Students unwilling to bet ₹12,000 on a platform before knowing if the teaching works.",
      tags: ["edtech", "pricing", "marketplace"],
      how: [
        "Split courses into topic packs with a 20-minute preview and a single-topic purchase.",
        "Give every purchase a 24-hour refund window and let students stack packs into a full course at a capped total.",
        "Let teachers publish topic packs and keep 70% of revenue."
      ],
      mvp: [
        "Topic-pack storefront",
        "Micro-payments and refund flow",
        "Creator dashboard"
      ],
      model: "30% marketplace take rate; institution licences.",
      price: "₹99–₹499 per topic pack; cap at ₹4,999 per full course.",
      gtm: "Teacher creators on YouTube, exam-season campaigns, and a free doubt-solving community.",
      moat: "Creator supply and topic-level demand data.",
      risks: ["Piracy", "Low ticket economics", "Quality control"],
      market: { tam: "₹8,000 Cr exam prep", time: "6–9 months", capital: "₹35–60 lakh" },
      verdict: "Commitment is the enemy of the first purchase."
    }
  ],

  "FinTech": [
    {
      match: "understand the insurance policies",
      startup: "PolicyPlain",
      pitch: "Upload any policy and get a plain-language map of what is covered, what is excluded and what a claim will actually pay.",
      who: "Policyholders who discover exclusions only when they file a claim.",
      tags: ["fintech", "insurance", "transparency"],
      how: [
        "Parse the policy wording into a structured coverage table: events, limits, sub-limits, waiting periods and exclusions.",
        "Show three claim scenarios with the actual payout maths, and flag gaps against the user's stated needs.",
        "Offer a paid review with a licensed advisor and a claim-assistance pack when a claim is filed."
      ],
      mvp: [
        "Policy parser for the top 10 insurers",
        "Coverage and exclusion report",
        "Claim-scenario calculator"
      ],
      model: "Per-report fee, advisor referral, and a subscription for annual policy reviews.",
      price: "₹299 per policy report; ₹999/year family plan.",
      gtm: "SEO on policy-wordings, claims stories, and partnerships with claim-help firms.",
      moat: "A structured clause library across insurers and products.",
      risks: ["Parsing accuracy", "Regulatory advice limits", "Insurers may object"],
      market: { tam: "₹9 lakh Cr insurance premiums; comprehension a trust wedge", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "The claim is won or lost at the exclusions page."
    },
    {
      match: "wedding gift money",
      startup: "Shagun",
      pitch: "A gift registry and ledger for Indian weddings — collect digitally, track who gave what, and return the right gift later.",
      who: "Families hosting weddings who manage cash envelopes and lose the record of reciprocity.",
      tags: ["fintech", "weddings", "payments"],
      how: [
        "Create an event registry with UPI collection, cash-entry logging and a private contributor ledger.",
        "Track amounts, relationships and return-gift status, with reminders for the reciprocal occasions.",
        "Settle to the family's account with a reconciliation report and a guest-facing thank-you flow."
      ],
      mvp: [
        "Wedding page and UPI collection",
        "Contributor ledger and reciprocity tracker",
        "Settlement and reconciliation report"
      ],
      model: "Transaction fee on digital gifts plus a premium registry plan.",
      price: "1.5% on digital gifts; ₹2,999 premium wedding plan.",
      gtm: "Wedding planners, banquet halls and photographers; launch in one wedding-heavy city.",
      moat: "The reciprocity graph, which becomes more useful with every event in a family network.",
      risks: ["Cash dominance", "Seasonality", "Trust with large sums"],
      market: { tam: "₹10 lakh Cr+ wedding spend; gifts a large cash segment", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "Indian weddings run on reciprocity; nobody keeps the ledger."
    },
    {
      match: "heirs access bank accounts",
      startup: "Succession",
      pitch: "A guided succession workflow that inventories accounts, audits nominations and coordinates with banks after a death.",
      who: "Families locked out of a deceased relative's accounts and policies.",
      tags: ["fintech", "estate", "legaltech"],
      how: [
        "Build a secure asset inventory the account holder can maintain, including nominations and document locations.",
        "On a claim, generate a bank-specific document pack and track each institution's process and SLA.",
        "Partner with probate lawyers and offer a paid done-for-you service for complex estates."
      ],
      mvp: [
        "Asset inventory and nomination audit",
        "Document pack generator for five banks",
        "Case tracker with institution SLAs"
      ],
      model: "Annual vault subscription plus a success fee on claims.",
      price: "₹1,499/year vault; ₹9,999–₹24,999 per claim case.",
      gtm: "Estate lawyers, senior-citizen associations and private bankers.",
      moat: "Bank process maps and case outcomes.",
      risks: ["Sensitive data security", "Slow bank processes", "Legal liability"],
      market: { tam: "₹1,200 Cr estate settlement services, largely informal", time: "9–12 months", capital: "₹60–90 lakh" },
      verdict: "Grief is not a workflow — but the paperwork can be."
    },
    {
      match: "migrant workers lose money on remittances",
      startup: "RemitRight",
      pitch: "True-cost remittance comparison and receipt tracking for migrant workers, in their language and on WhatsApp.",
      who: "Workers sending ₹10,000–₹30,000 home monthly and losing 3–6% to hidden spreads.",
      tags: ["fintech", "remittance", "transparency"],
      how: [
        "Compute the landed amount for every licensed channel, including the FX spread, fee and receiving-bank charges.",
        "Let users send through the cheapest channel from the app and store a receipt with the exact rate and fee.",
        "Add an agent-assisted mode at labour chowks for workers who cannot navigate apps."
      ],
      mvp: [
        "Rate comparison across six channels",
        "WhatsApp send flow in three languages",
        "Receipt vault and complaint pack"
      ],
      model: "Referral commission from remittance partners plus a small convenience fee.",
      price: "₹10–₹25 per transfer; free comparison.",
      gtm: "Labour contractors, migrant worker unions, and WhatsApp groups in source districts.",
      moat: "Channel-cost data and worker trust in the source districts.",
      risks: ["Partner commissions bias comparisons", "Regulatory licensing", "Low digital literacy"],
      market: { tam: "₹1 lakh Cr+ inbound remittances", time: "7–10 months", capital: "₹50–80 lakh" },
      verdict: "Transparency is worth most to the people with the least."
    },
    {
      match: "investing feel intimidating",
      startup: "GoalFirst",
      pitch: "Investing explained through a goal, not a product — a human-guided plan with plain-language trade-offs and small SIPs.",
      who: "First-time investors who freeze between 40 fund options and jargon.",
      tags: ["fintech", "investing", "advice"],
      how: [
        "Start with a goal interview (house, education, retirement) and convert it into a monthly number with a range of outcomes.",
        "Recommend a three-fund portfolio and explain every choice in one sentence, with a human advisor available on call.",
        "Show progress against the goal, not just returns, and nudge top-ups at salary dates."
      ],
      mvp: [
        "Goal planner and risk questionnaire",
        "Three-fund recommendation engine",
        "Advisor call booking and progress view"
      ],
      model: "RIA fee on assets or a flat annual planning fee; no product commissions.",
      price: "₹999/year planning; 0.4% AUM for managed portfolios.",
      gtm: "Employer financial-wellness sessions, YouTube explainers, and referral from existing investors.",
      moat: "A fee-only advice brand and goal-outcome data.",
      risks: ["Market downturns erode trust", "Regulatory compliance", "Low AUM economics early"],
      market: { tam: "₹40 lakh Cr mutual fund AUM; first-time investor segment underpenetrated", time: "9–12 months", capital: "₹70 lakh–₹1.2 Cr" },
      verdict: "People do not fear markets; they fear not understanding the next screen."
    },
    {
      match: "track where their money goes",
      startup: "Kharcha",
      pitch: "One plain-language view of spending across UPI, cards and wallets, with subscriptions spotted and a monthly review that takes five minutes.",
      who: "Salaried users whose money disappears across four apps and a credit card.",
      tags: ["fintech", "spending", "account-aggregator"],
      how: [
        "Use the Account Aggregator framework to pull bank, card and wallet transactions into one ledger.",
        "Clean merchant names into recognisable labels and auto-detect subscriptions and recurring bills.",
        "Send a weekly five-line summary with one specific saving action, not a dashboard to explore."
      ],
      mvp: [
        "AA integrations with two banks",
        "Merchant-name cleaner and subscription detector",
        "Weekly WhatsApp summary"
      ],
      model: "Freemium subscription; anonymised spend-insight partnerships.",
      price: "Free basic; ₹99/month premium.",
      gtm: "Personal-finance creators and a free 'where did my salary go' audit.",
      moat: "Merchant-label data and a habit-forming weekly summary.",
      risks: ["AA onboarding friction", "Data privacy", "Bank app competition"],
      market: { tam: "₹2,000 Cr personal finance software opportunity", time: "7–10 months", capital: "₹50–80 lakh" },
      verdict: "A dashboard is not a habit; a weekly nudge is."
    }
  ],

  "Food & Beverage": [
    {
      match: "restaurant-quality meals at home",
      startup: "PlateUp",
      pitch: "Chef-built gourmet kits that go from fridge to plate in 15 minutes, with sauces and sides pre-prepped.",
      who: "Hosts who want to serve something impressive without a three-hour kitchen session.",
      tags: ["food", "d2c", "quick-commerce"],
      how: [
        "Design a menu where the chef does the hard part (marinade, sauce, sous-vide, par-cook) and the host only sears, tosses or plates.",
        "Sell chilled kits with a 15-minute timeline card and a plating photo, portioned for 2 or 4.",
        "Launch on quick commerce for same-evening delivery, with a subscription for weekend hosting."
      ],
      mvp: [
        "Six-kit menu with tested 15-minute timelines",
        "Cold-chain packing and labelling",
        "Quick-commerce listings in one city"
      ],
      model: "Product margin plus a weekend subscription.",
      price: "₹599–₹1,299 per kit for two; ₹1,999 for four.",
      gtm: "Instagram food content, hosting communities, and quick-commerce placement before weekends.",
      moat: "Chef recipes engineered for speed and a reliable cold-chain kit format.",
      risks: ["Cold-chain cost", "Short shelf life", "Copycat kits"],
      market: { tam: "₹8,000 Cr ready-to-cook and premium convenience food", time: "6–9 months", capital: "₹60–90 lakh" },
      verdict: "Sell the applause, not the cooking."
    },
    {
      match: "cold chain integrity",
      startup: "ColdProof",
      pitch: "A ₹15 temperature logger and QR proof on every frozen delivery, so a melted tub is evidence, not an argument.",
      who: "Ice-cream and frozen-food buyers; platforms fielding unprovable complaints.",
      tags: ["food", "logistics", "sensors"],
      how: [
        "Attach a single-use time-temperature indicator to the pack at dispatch and bind it to the order QR.",
        "Let the customer scan on delivery to see whether the cold chain held, and auto-approve a refund if it did not.",
        "Feed breach data back to the dark store and delivery route to fix the worst legs."
      ],
      mvp: [
        "Single-use indicator and QR binding",
        "Consumer scan result page",
        "Platform refund and breach dashboard"
      ],
      model: "Per-indicator fee plus a platform analytics subscription.",
      price: "₹12–₹20 per pack; ₹25,000/month platform dashboard.",
      gtm: "Start with one ice-cream brand and one quick-commerce dark store.",
      moat: "Cold-chain breach data by route and pack type.",
      risks: ["Indicator cost at scale", "Platform adoption", "Indicator accuracy"],
      market: { tam: "₹15,000 Cr frozen and chilled food; spoilage a measurable cost", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "Make the invisible cold chain visible at the doorstep."
    },
    {
      match: "tiffin subscribers customize",
      startup: "TiffinFlex",
      pitch: "A tiffin subscription with a daily menu you actually choose, dietary filters and swap credits instead of a wasted day.",
      who: "Office workers stuck with dishes they dislike two or three times a week.",
      tags: ["food", "subscription", "personalisation"],
      how: [
        "Publish each kitchen's next-day menu by 6 pm and let subscribers pick one of three thalis or a swap credit.",
        "Capture allergies and preferences once, then filter every menu automatically.",
        "Settle with kitchens weekly and route demand to the least-loaded kitchen."
      ],
      mvp: [
        "Menu publishing and selection flow",
        "Preference and allergy profile",
        "Kitchen settlement dashboard"
      ],
      model: "Commission per meal plus a subscription fee; kitchen SaaS.",
      price: "₹99/month platform fee; meals ₹90–₹160.",
      gtm: "Office clusters and PG networks; onboard 20 home kitchens in one zone.",
      moat: "A demand-routing network of kitchens with reliable menus.",
      risks: ["Kitchen reliability", "Menu fatigue", "Thin margins"],
      market: { tam: "₹12,000 Cr tiffin and daily meals", time: "5–8 months", capital: "₹30–50 lakh" },
      verdict: "Choice is the missing feature in a subscription built on repetition."
    },
    {
      match: "verify alcohol authenticity",
      startup: "ProofCap",
      pitch: "A tamper-evident cap and scan-to-verify code that proves a bottle is genuine before it is opened.",
      who: "Premium spirits buyers in tier-2/3 cities worried about counterfeit and adulterated bottles.",
      tags: ["food", "authentication", "trust"],
      how: [
        "Co-design a tamper-evident cap seal with a unique QR that breaks on opening, and issue codes to brands at bottling.",
        "Let buyers scan in-app to see brand, batch, bottling date and whether the code has already been used.",
        "Work with excise-compliant retailers and flag suspicious duplicate scans to the brand."
      ],
      mvp: [
        "Cap seal prototype and code registry",
        "Consumer scan app",
        "Brand and retailer dashboard"
      ],
      model: "Per-seal fee from brands, plus retailer verification subscriptions.",
      price: "₹4–₹8 per seal; ₹10,000/month brand dashboard.",
      gtm: "Pilot with one premium brand in one state; use an authenticity guarantee as the retail hook.",
      moat: "Brand seal adoption and a scan ledger that detects diversion.",
      risks: ["Brand and excise approval cycles", "Counterfeiters clone seals", "Retailer compliance"],
      market: { tam: "₹45,000 Cr spirits retail; counterfeit fear is widespread", time: "9–12 months", capital: "₹80 lakh–₹1.5 Cr" },
      verdict: "Authentication has to happen before the first pour."
    },
    {
      match: "track sugar content",
      startup: "SugarScan",
      pitch: "Scan any Indian packaged snack and see its sugar in teaspoons, plus hidden sugars in savoury products.",
      who: "Health-conscious shoppers confused by grams on the back of a biscuit pack.",
      tags: ["food", "health", "consumer"],
      how: [
        "Build a barcode database of Indian packaged foods with sugar, additives and serving sizes, normalised to teaspoons.",
        "Flag hidden sugars in savoury categories and compare products within the same aisle.",
        "Add a daily sugar budget and a family profile with weekly intake summaries."
      ],
      mvp: [
        "5,000-product barcode database",
        "Scan and teaspoon conversion",
        "Category comparison and daily budget"
      ],
      model: "Freemium app; brand-sponsored healthier alternatives; nutritionist partnerships.",
      price: "Free; ₹99/month premium; ₹5 lakh brand placements.",
      gtm: "Health influencers, diabetes clinics, and school nutrition programmes.",
      moat: "A normalised Indian food-composition database.",
      risks: ["Label data accuracy", "Low willingness to pay", "Regulatory claims"],
      market: { tam: "₹2,000 Cr health and nutrition apps", time: "5–8 months", capital: "₹25–45 lakh" },
      verdict: "Grams do not change behaviour; teaspoons might."
    },
    {
      match: "unhealthy afternoon snacks",
      startup: "4PM",
      pitch: "A portion-controlled healthy snack box delivered to offices at 4 pm, priced per seat.",
      who: "Office workers hitting the samosa-and-biscuit slump; HR teams buying wellness perks.",
      tags: ["food", "office", "subscription"],
      how: [
        "Design a rotating 21-snack menu with under-150-calorie portions, protein and fibre targets, and no repeat within two weeks.",
        "Deliver to an office pantry in a single crate by 3:45 pm, with individual named portions.",
        "Bill per employee per month and report consumption and nutrition to HR."
      ],
      mvp: [
        "21-snack menu with nutrition specs",
        "Office crate delivery route",
        "Per-seat billing dashboard"
      ],
      model: "Per-seat monthly subscription; office pantry contracts.",
      price: "₹799–₹1,199 per seat/month.",
      gtm: "HR wellness budgets and office-admin communities; pilot in two tech parks.",
      moat: "Office route density and a proven menu rotation.",
      risks: ["Delivery window discipline", "Menu boredom", "Office churn"],
      market: { tam: "₹3,000 Cr office pantry and corporate wellness", time: "5–8 months", capital: "₹30–50 lakh" },
      verdict: "Sell to the employer's wellness budget, deliver to the employee's 4 pm."
    },
    {
      match: "pre-ground masala powder",
      startup: "Masala Mill",
      pitch: "Choose whole spices, get them freshly ground and delivered the same day, with a batch and purity report.",
      who: "Home cooks who distrust packaged masala but do not want to grind daily.",
      tags: ["food", "freshness", "d2c"],
      how: [
        "Let customers pick a blend or a standard mix from whole spices, ground to order in small batches.",
        "Print the grind date, spice origin and a purity check on every pack, and ship within hours.",
        "Offer a monthly 'fresh grind' subscription timed to household consumption."
      ],
      mvp: [
        "Six standard blends plus custom mix",
        "Small-batch grinding unit",
        "Same-day delivery in one city"
      ],
      model: "Product margin plus a subscription.",
      price: "₹149–₹399 per 100g; ₹499/month subscription.",
      gtm: "Local food creators, WhatsApp order groups, and premium grocery shelves.",
      moat: "Freshness supply chain and a custom-blend recipe library.",
      risks: ["Short shelf life", "Aroma loss in transit", "Regional taste differences"],
      market: { tam: "₹25,000 Cr spices; freshness a premium wedge", time: "6–9 months", capital: "₹35–60 lakh" },
      verdict: "Freshness is a date stamp customers can verify."
    },
    {
      match: "verify water purification",
      startup: "AquaProof",
      pitch: "A tamper-evident seal and batch test certificate on every water can — scan it and see the actual lab result.",
      who: "Households drinking 20-litre cans with no proof the water was RO-purified.",
      tags: ["food", "water", "trust"],
      how: [
        "Seal every can at the plant with a numbered cap, and bind the batch to a lab test certificate.",
        "Let customers scan the cap to see the plant, batch, test date and TDS/microbiology results.",
        "Audit suppliers quarterly and publish a plant scorecard; replace suppliers that fail."
      ],
      mvp: [
        "Numbered tamper seal and registry",
        "Consumer scan page",
        "Lab partnership and quarterly audit"
      ],
      model: "Per-seal fee from water suppliers plus a consumer subscription for home testing.",
      price: "₹3–₹6 per seal; ₹299 home water test.",
      gtm: "Apartment societies and water-supplier associations; lead with a public purity index.",
      moat: "Supplier audit data and society-level trust.",
      risks: ["Supplier resistance", "Lab cost", "Seal logistics"],
      market: { tam: "₹8,000 Cr packaged drinking water", time: "7–10 months", capital: "₹40–70 lakh" },
      verdict: "Purity claims need a receipt."
    },
    {
      match: "restaurant tables",
      startup: "QueueUp",
      pitch: "Join a restaurant's real queue remotely, see the actual wait and pre-order so the food lands when you sit.",
      who: "Diners burning 45 minutes outside a popular restaurant on a Saturday.",
      tags: ["food", "restaurants", "saas"],
      how: [
        "Give restaurants a table-turn tracker that produces a real wait estimate from seating history, not staff guesses.",
        "Let diners join the queue from Maps/Instagram, pre-order, and get a 10-minute warning.",
        "Sell the host-stand dashboard and take a small fee on pre-orders."
      ],
      mvp: [
        "Host-stand wait tracker",
        "Remote queue and pre-order page",
        "SMS/WhatsApp notifications"
      ],
      model: "Restaurant SaaS plus a commission on pre-ordered meals.",
      price: "₹2,999/month per outlet; 5% on pre-orders.",
      gtm: "Start with 30 high-wait casual dining outlets in one city; publish live wait times for consumers.",
      moat: "Table-turn data and diner demand captured before arrival.",
      risks: ["Restaurants underreport waits", "No-shows", "POS integration"],
      market: { tam: "₹4,000 Cr organised dining; wait management a wedge", time: "6–9 months", capital: "₹35–60 lakh" },
      verdict: "The queue is a data product hiding in a host stand."
    }
  ],

  "Home Services": [
    {
      match: "dispose old furniture",
      startup: "ClearOut",
      pitch: "Doorstep furniture pickup with instant value estimates, resale, donation and certified recycling in one flow.",
      who: "Families relocating who cannot sell a sofa and will not dump it on the street.",
      tags: ["home", "circular-economy", "logistics"],
      how: [
        "Quote from photos and dimensions, then pick up within 48 hours with a two-person crew.",
        "Route usable items to resale or donation partners and the rest to certified recycling, with a diversion certificate.",
        "Pay the customer instantly for resale-grade items and charge a flat fee for disposal-only jobs."
      ],
      mvp: [
        "Photo-based quote flow",
        "Pickup crew and resale warehouse",
        "Diversion certificate"
      ],
      model: "Resale margin, disposal fees, and B2B office clearance contracts.",
      price: "₹499–₹1,499 disposal; instant buy for 10–25% of resale value.",
      gtm: "Moving companies, real-estate agents and apartment handover groups.",
      moat: "Pickup density and resale/donation channel partnerships.",
      risks: ["Bulky logistics cost", "Resale demand", "Municipal compliance"],
      market: { tam: "₹2,000 Cr furniture resale and disposal", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "The value is in the pickup, not the listing."
    },
    {
      match: "verified plumbers for emergencies",
      startup: "PipeNow",
      pitch: "A verified emergency plumber at your door in 60 minutes, with night pricing published before you confirm.",
      who: "Homeowners with a burst pipe at 11 pm and no trusted plumber on call.",
      tags: ["home", "emergency", "marketplace"],
      how: [
        "Build an on-call roster of verified plumbers per zone, with ID checks, insurance and a 60-minute SLA.",
        "Publish fixed emergency call-out and common-repair prices; the customer approves before dispatch.",
        "Stock a standard parts kit in each van and guarantee the repair for 30 days."
      ],
      mvp: [
        "50-plumber on-call roster in two zones",
        "Fixed price card and dispatch app",
        "30-day repair guarantee"
      ],
      model: "Call-out fee plus parts margin; annual home-plumbing membership.",
      price: "₹399 call-out; ₹799–₹2,499 repairs; ₹1,999/year membership.",
      gtm: "SEO on emergency plumbing queries, society noticeboards and security desks.",
      moat: "Night-time supply density and trust with housing societies.",
      risks: ["After-hours supply", "Price gouging by technicians", "Liability"],
      market: { tam: "₹8,000 Cr plumbing services", time: "6–9 months", capital: "₹35–60 lakh" },
      verdict: "Emergencies are won by who answers at 11 pm."
    },
    {
      match: "painters quote prices",
      startup: "PaintQuote",
      pitch: "A measured, itemised painting quote with a locked price, material spec and milestone payments.",
      who: "Homeowners hit with a 40–60% escalation after a low initial quote.",
      tags: ["home", "pricing", "marketplace"],
      how: [
        "Measure rooms on-site or from a floor plan, then generate a line-item quote covering putty, primer, coats and labour.",
        "Lock the price for 30 days and specify brand and grade per coat, with photo evidence at each stage.",
        "Release payment in milestones after inspection, holding 10% for 30 days."
      ],
      mvp: [
        "Measurement and quote calculator",
        "Locked-price contract template",
        "Milestone inspection workflow"
      ],
      model: "Fixed 8–10% platform fee on the contracted job; painter network.",
      price: "₹18–₹32 per sq ft all-in; platform fee included.",
      gtm: "Apartment repainting cycles, real-estate handover agents and painter crew partnerships.",
      moat: "A pricing dataset by city and surface condition plus a vetted painter bench.",
      risks: ["Scope creep", "Painter substitution", "Surface surprises"],
      market: { tam: "₹30,000 Cr home painting", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "A quote is only useful if it cannot move."
    },
    {
      match: "AC installation charges",
      startup: "InstallSet",
      pitch: "A fixed, itemised AC installation price by unit type and site condition — before the box is opened.",
      who: "Buyers surprised by ₹2,000–₹8,000 installation quotes for identical work.",
      tags: ["home", "appliances", "pricing"],
      how: [
        "Publish a price table by tonnage, split/window, pipe length, bracket type and floor access.",
        "Certify installers on a checklist covering vacuuming, leak test and drainage slope, with photo proof.",
        "Offer a 90-day installation warranty and handle brand warranty paperwork."
      ],
      mvp: [
        "Price calculator and booking",
        "Certified installer network",
        "Installation checklist and warranty"
      ],
      model: "Fixed installation fee plus a certification margin; brand partnerships.",
      price: "₹1,499–₹2,999 standard; extras itemised upfront.",
      gtm: "Electronics retailers and AC brands that want to stop installation complaints.",
      moat: "Certified installer coverage and brand referral agreements.",
      risks: ["Seasonal peaks", "Installer quality", "Brand warranty conflicts"],
      market: { tam: "₹6,000 Cr AC installation and service", time: "5–8 months", capital: "₹30–50 lakh" },
      verdict: "The surprise is the product problem."
    },
    {
      match: "verify carpenter work quality",
      startup: "CraftCheck",
      pitch: "Milestone escrow and an inspection checklist for custom carpentry, with 10% held back until the fit is right.",
      who: "Homeowners commissioning wardrobes and modular furniture who pay before seeing defects.",
      tags: ["home", "escrow", "quality"],
      how: [
        "Convert the design into measurable acceptance criteria: dimensions, alignment, finish, hardware and closing tolerance.",
        "Release payment in three milestones, with photo and video inspection at each stage.",
        "Hold 10% for 30 days and provide an independent inspector for disputed defects."
      ],
      mvp: [
        "Acceptance checklist and contract template",
        "Milestone escrow flow",
        "Inspector network"
      ],
      model: "2–3% escrow fee plus inspection charges.",
      price: "₹999 per inspection; 2.5% of project value.",
      gtm: "Interior designers, modular kitchen showrooms and apartment handover communities.",
      moat: "Standardised acceptance criteria and inspector supply.",
      risks: ["Dispute resolution cost", "Carpenters refuse escrow", "Inspection subjectivity"],
      market: { tam: "₹25,000 Cr home interiors", time: "7–10 months", capital: "₹40–70 lakh" },
      verdict: "Holdback is the cheapest quality assurance ever invented."
    },
    {
      match: "pest control treatments ineffective",
      startup: "PestProof",
      pitch: "Performance-based pest control: you pay for the result, with free re-treatment until the infestation stays gone.",
      who: "Households that paid ₹5,000 and saw cockroaches return in three months.",
      tags: ["home", "guarantee", "services"],
      how: [
        "Sell a 12-month outcome contract with scheduled follow-ups at 30, 90 and 180 days, not a one-time spray.",
        "Use a documented treatment plan per pest with gel-bait and proofing, and log stations and active ingredients.",
        "Re-treat free within the warranty period; publish a customer-visible service log."
      ],
      mvp: [
        "Treatment protocol per pest type",
        "Service log app with photos",
        "12-month warranty contract"
      ],
      model: "Annual contract paid monthly; commercial contracts for restaurants and societies.",
      price: "₹999–₹1,499 per quarter; ₹3,999/year.",
      gtm: "Housing societies, restaurants and paediatric clinics; lead with the warranty.",
      moat: "Outcome data by pest and building type, plus a trained technician bench.",
      risks: ["Re-treatment cost", "Customer hygiene factors", "Chemical regulation"],
      market: { tam: "₹4,000 Cr pest control", time: "6–9 months", capital: "₹30–50 lakh" },
      verdict: "Shift the risk to the operator and the incentives fix themselves."
    },
    {
      match: "water tank cleaning",
      startup: "TankClean",
      pitch: "Verified water-tank cleaning with before/after photos, a potability test and a health certificate per tank.",
      who: "Apartment societies and villas that cannot find a specialist and have no proof of cleanliness.",
      tags: ["home", "water", "hygiene"],
      how: [
        "Build a four-step protocol: drain, scrub, disinfect, refill, with photo documentation at each stage.",
        "Take a water sample after refill and issue a potability certificate within 48 hours.",
        "Schedule annual cleaning with reminders and society-level compliance records."
      ],
      mvp: [
        "Cleaning protocol and equipment kit",
        "Photo documentation app",
        "Lab partner for potability tests"
      ],
      model: "Per-tank fee plus an annual society contract.",
      price: "₹1,499–₹3,999 per tank; ₹999 per test.",
      gtm: "Society committees, facility managers and municipal health campaigns.",
      moat: "Society contracts and a compliance record that committees can show residents.",
      risks: ["Access and safety", "Lab turnaround", "Low repeat frequency"],
      market: { tam: "₹1,200 Cr water-tank cleaning, mostly unorganised", time: "5–8 months", capital: "₹20–35 lakh" },
      verdict: "A certificate turns an invisible chore into a trust asset."
    },
    {
      match: "appliance repair shops not provide warranties",
      startup: "FixWarranty",
      pitch: "A repair warranty network: vetted local shops, genuine parts and a six-month guarantee backed by a claims fund.",
      who: "Customers whose washing machine failed again a week after a ₹2,500 repair.",
      tags: ["home", "repair", "warranty"],
      how: [
        "Onboard repair shops with parts sourcing checks and a standard six-month workmanship warranty.",
        "Register every repair with a parts list and invoice in a customer wallet, and fund claims from a small per-job premium.",
        "Send a replacement technician if the original shop cannot fix a valid claim."
      ],
      mvp: [
        "Shop onboarding and warranty terms",
        "Repair registry and wallet",
        "Claims fund and backup technician pool"
      ],
      model: "Warranty premium per repair plus shop subscription.",
      price: "₹149–₹299 per repair warranty; ₹499/year household plan.",
      gtm: "Local repair markets, appliance resale shops, and a WhatsApp warranty card customers can show.",
      moat: "Claims data on which shops and parts fail.",
      risks: ["Adverse selection", "Claims fraud", "Shop quality"],
      market: { tam: "₹12,000 Cr appliance repair", time: "7–10 months", capital: "₹40–70 lakh" },
      verdict: "Warranty is how an informal market becomes accountable."
    },
    {
      match: "electricians for small jobs",
      startup: "PointFix",
      pitch: "Fixed-price electrical points — fan, switchboard, light — booked in a two-hour slot, no full-rewiring contract required.",
      who: "Homeowners with five small electrical jobs and no electrician willing to come.",
      tags: ["home", "electrical", "marketplace"],
      how: [
        "Publish a per-point price list with a 30-minute minimum and a two-hour arrival window.",
        "Recruit electricians and fill their idle time between large contracts with small jobs.",
        "Add a safety checklist and a 30-day workmanship guarantee per point."
      ],
      mvp: [
        "Per-point price list",
        "Slot booking with 20 electricians",
        "Safety checklist and guarantee"
      ],
      model: "Per-job commission plus a materials margin; society annual contracts.",
      price: "₹199–₹499 per point; ₹99 visit fee waived on booking.",
      gtm: "Apartment societies, hardware stores and landlord groups.",
      moat: "Electrician density and a fixed-price brand for tiny jobs.",
      risks: ["Job batching economics", "Safety liability", "Materials disputes"],
      market: { tam: "₹15,000 Cr electrical services", time: "5–8 months", capital: "₹25–45 lakh" },
      verdict: "Small jobs are a scheduling problem, not a demand problem."
    },
    {
      match: "deep cleaning services lack quality",
      startup: "CleanCheck",
      pitch: "A room-by-room deep-clean checklist with photo proof per zone and 15% payment held until you sign off.",
      who: "Customers paying ₹6,000 and finding the kitchen chimney still greasy.",
      tags: ["home", "cleaning", "quality"],
      how: [
        "Break the job into 60 verifiable checkpoints across kitchen, bathrooms, bedrooms and balcony.",
        "Require the crew to photograph each checkpoint in-app; the customer reviews before payment release.",
        "Hold 15% for 48 hours and send a re-clean crew for any failed checkpoint."
      ],
      mvp: [
        "Checkpoint checklist app",
        "Crew training and supply kit",
        "Photo review and holdback flow"
      ],
      model: "Booking commission plus a crew SaaS fee.",
      price: "₹2,999–₹7,999 per home; 15% holdback.",
      gtm: "Apartment deep-clean cycles before festivals, plus real-estate handover partnerships.",
      moat: "Checkpoint standards and crew compliance data.",
      risks: ["Crew photo fatigue", "Disputes over standards", "Seasonal demand"],
      market: { tam: "₹5,000 Cr home cleaning", time: "5–8 months", capital: "₹30–50 lakh" },
      verdict: "Define clean, or the customer will define it for you."
    }
  ]
};
