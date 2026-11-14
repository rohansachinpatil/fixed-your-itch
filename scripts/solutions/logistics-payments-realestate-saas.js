// Startup blueprints for Logistics, Payment Issues, Real Estate and SaaS.

module.exports = {
  "Logistics": [
    {
      match: "booking cargo vehicles",
      startup: "LoadLane",
      pitch: "Book a mini-truck for one sofa in 90 seconds, with a fare based on distance, loading and floor — not a negotiation.",
      who: "Consumers and small businesses moving single pieces of furniture or appliances across a city.",
      tags: ["logistics", "on-demand", "mobility"],
      how: [
        "Standardise vehicle classes (pickup, tempo, 1-tonne) with an upfront fare for distance, loading help and floor count.",
        "Verify drivers and vehicles, track the trip, and add damage cover up to ₹25,000 per booking.",
        "Schedule same-day slots and let the driver photograph the item at pickup and drop."
      ],
      mvp: [
        "Fare calculator and booking flow",
        "150 verified drivers in one city",
        "Live tracking and proof-of-delivery photos"
      ],
      model: "18–22% commission per trip plus a subscription for small businesses.",
      price: "₹399 base for 3 km; ₹18–₹28/km after.",
      gtm: "Furniture stores, appliance retailers and moving-adjacent searches.",
      moat: "Driver density and a transparent fare engine that ends haggling.",
      risks: ["Driver supply and retention", "Traffic variability", "Damage liability"],
      market: { tam: "₹40,000 Cr intra-city cargo, largely informal", time: "7–10 months", capital: "₹60–90 lakh" },
      verdict: "Cargo is where ride-hailing was in 2014 — same playbook, different load."
    },
    {
      match: "first-mile transport to factory",
      startup: "ShiftBus",
      pitch: "Employer-paid micro-transit that collects factory workers from their neighbourhoods and gets them home after shift.",
      who: "Factory workers losing 2–3 hours daily; plant HR teams battling absenteeism and attrition.",
      tags: ["mobility", "b2b", "transit"],
      how: [
        "Cluster worker home addresses and build dynamic 12–16 seat routes per shift, with a driver app and seat manifest.",
        "Track boarding by QR and alert HR to no-shows; adjust routes weekly as worker addresses change.",
        "Bill the employer per seat per month, with a subsidy split that can include the worker."
      ],
      mvp: [
        "Route clustering engine",
        "Driver app with manifest and boarding scan",
        "Employer dashboard and billing"
      ],
      model: "Per-seat monthly contracts with industrial plants; own or partner fleet.",
      price: "₹900–₹1,600 per seat/month.",
      gtm: "Industrial estates and plant HR heads; pilot on one shift and prove attendance gains.",
      moat: "Route data and multi-plant density that lowers cost per seat.",
      risks: ["Long B2B sales cycles", "Shift changes break routes", "Fleet capex"],
      market: { tam: "₹10,000 Cr employee transport", time: "9–12 months", capital: "₹80 lakh–₹2 Cr" },
      verdict: "The buyer is the factory, the user is the worker, and the metric is attendance."
    },
    {
      match: "lose or damage 5% of packages",
      startup: "ParcelProof",
      pitch: "A chain-of-custody scan at every hop, with photo evidence and a claim decided in 48 hours instead of 45 days.",
      who: "E-commerce sellers and individuals losing 3–5% of shipments to damage or loss.",
      tags: ["logistics", "insurance", "trust"],
      how: [
        "Give each parcel a QR that every handler scans, with a mandatory condition photo at pickup, hub and delivery.",
        "Adjudicate claims from the scan trail and photos automatically, with a human review for high-value cases.",
        "Offer per-shipment cover priced from the seller's actual damage history."
      ],
      mvp: [
        "Handler scan app",
        "Evidence timeline per parcel",
        "Claims engine and cover pricing"
      ],
      model: "Per-parcel fee plus insurance premium commission.",
      price: "₹3–₹8 per parcel; cover from 0.4% of declared value.",
      gtm: "Start with D2C sellers doing 2,000+ shipments a month; prove claim-time reduction.",
      moat: "Claims and damage data by courier, route and packaging type.",
      risks: ["Courier cooperation", "Photo compliance", "Fraud"],
      market: { tam: "₹1.2 lakh Cr e-commerce logistics; damage and loss a ₹4,000 Cr cost", time: "8–12 months", capital: "₹70 lakh–₹1.2 Cr" },
      verdict: "Proof at every hop turns an argument into a claim."
    },
    {
      match: "regional logistics lack real-time tracking",
      startup: "TrackBridge",
      pitch: "A tracking and ETA layer that sits on top of regional couriers, using a driver app and WhatsApp scans instead of API integrations.",
      who: "SMEs shipping through local transport companies that still run on phone calls.",
      tags: ["logistics", "saas", "tracking"],
      how: [
        "Give each regional courier a driver app or WhatsApp flow to scan LR numbers at pickup, transit and delivery.",
        "Normalise the events into one tracking API and a customer-facing tracking page with a predicted ETA.",
        "Sell the tracking page to shippers and the ops dashboard to couriers."
      ],
      mvp: [
        "Scan-to-track driver flow",
        "Unified tracking page and API",
        "ETA model trained on lane history"
      ],
      model: "SaaS per shipper plus a per-scan fee from couriers.",
      price: "₹4,999/month per shipper; ₹1 per scan.",
      gtm: "Regional transport associations and SME exporter clusters.",
      moat: "Lane-level event data and courier network coverage.",
      risks: ["Courier digitisation resistance", "Data gaps", "Low SaaS budgets"],
      market: { tam: "₹60,000 Cr regional road logistics", time: "9–12 months", capital: "₹50–80 lakh" },
      verdict: "You do not need every courier's API — you need the driver's phone."
    },
    {
      match: "compare courier rates easily",
      startup: "RateLane",
      pitch: "One screen that compares live courier rates by pincode, weight and service level, then books the label.",
      who: "E-commerce sellers wasting an hour a day checking five courier portals.",
      tags: ["logistics", "saas", "pricing"],
      how: [
        "Ingest rate cards and serviceability from major and regional couriers, normalising zone, weight and volumetric rules.",
        "Show the true cost per shipment including RTO risk, then book and print the label in one click.",
        "Track performance by courier and auto-route future shipments to the best combination of cost and delivery rate."
      ],
      mvp: [
        "Rate normalisation engine",
        "Comparison and label booking",
        "Courier scorecard"
      ],
      model: "Per-label booking fee plus a SaaS tier.",
      price: "₹2 per label; ₹1,999/month for analytics.",
      gtm: "Seller communities, e-commerce enablers and 3PL consultants.",
      moat: "Normalised rate and performance data across couriers.",
      risks: ["Rate-card accuracy", "Courier API limits", "Thin per-label economics"],
      market: { tam: "₹1.2 lakh Cr e-commerce logistics", time: "7–10 months", capital: "₹50–80 lakh" },
      verdict: "The rate card is the product; the booking is the habit."
    },
    {
      match: "reverse logistics be dynamically priced",
      startup: "ReverseBid",
      pitch: "Dynamic reverse-pickup pricing that batches returns by pincode so small sellers stop paying a 35% premium.",
      who: "D2C brands and small sellers whose return costs eat their margin.",
      tags: ["logistics", "returns", "pricing"],
      how: [
        "Aggregate reverse pickups by pincode and time window, then auction the route to nearby couriers.",
        "Price each pickup from distance, batch density and courier capacity, and pass the saving through.",
        "Grade returns at pickup so the seller knows resale, refurbish or scrap before it reaches the warehouse."
      ],
      mvp: [
        "Pickup aggregation engine",
        "Courier bidding console",
        "Return grading at pickup"
      ],
      model: "Per-pickup fee plus a share of the savings versus standard reverse rates.",
      price: "₹35–₹70 per pickup versus ₹70–₹120 retail.",
      gtm: "D2C brands with return rates above 10%, plus marketplace reverse-logistics contracts.",
      moat: "Pincode-level batch density.",
      risks: ["Courier reliability", "Return fraud", "Volume concentration"],
      market: { tam: "₹6,000 Cr reverse logistics", time: "8–12 months", capital: "₹60–90 lakh" },
      verdict: "Density is the discount."
    },
    {
      match: "bulk shipping discounts",
      startup: "ShipPool",
      pitch: "Pool small sellers into one negotiated courier contract, so 100 shipments a month get 1,000-shipment rates.",
      who: "Small online sellers paying retail rates while larger competitors pay 40–50% less.",
      tags: ["logistics", "marketplace", "pricing"],
      how: [
        "Aggregate members' volumes under a single master contract and allocate pooled rates by usage.",
        "Provide one pickup and one label flow, with a shared wallet and transparent per-shipment billing.",
        "Use the pool's volume to negotiate regional courier rates and pass most of the discount through."
      ],
      mvp: [
        "Pooled rate card and wallet",
        "Label and pickup workflow",
        "Master courier contracts in three zones"
      ],
      model: "3–5% platform fee on pooled shipping spend.",
      price: "Free to join; discount of 20–35% versus retail.",
      gtm: "Seller WhatsApp groups, export clusters and e-commerce meetups.",
      moat: "Aggregated volume and courier contracts.",
      risks: ["Adverse selection of low-volume sellers", "Courier renegotiation", "Working capital"],
      market: { tam: "₹1.2 lakh Cr e-commerce logistics", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "Small sellers do not need a courier; they need a buyer with leverage."
    },
    {
      match: "fragile-handling monitored",
      startup: "FragileGuard",
      pitch: "A shock-and-tilt sensor with a chain-of-custody seal that proves whether a fragile parcel was mishandled.",
      who: "Sellers shipping electronics, glassware and ceramics with 10–15% damage rates.",
      tags: ["logistics", "sensors", "insurance"],
      how: [
        "Ship a reusable shock/tilt logger inside the package that records the worst impact and timestamps it.",
        "Bind the sensor to the parcel's scan trail so a damage claim shows exactly which hop caused it.",
        "Offer a damage-free guarantee: refund or replace if the logger proves mishandling."
      ],
      mvp: [
        "Sensor and reader prototype",
        "Parcel binding and evidence report",
        "Guarantee terms with three sellers"
      ],
      model: "Per-shipment sensor rental plus a guarantee premium.",
      price: "₹25–₹60 per shipment; guarantee from 0.8% of value.",
      gtm: "Premium electronics and decor sellers; prove damage reduction over 1,000 parcels.",
      moat: "Mishandling data by courier and route.",
      risks: ["Sensor return logistics", "Unit cost", "Courier disputes"],
      market: { tam: "₹4,000 Cr fragile shipping; damage a direct cost", time: "8–12 months", capital: "₹70 lakh–₹1.2 Cr" },
      verdict: "Fragile stickers are a request; sensors are evidence."
    }
  ],

  "Payment Issues": [
    {
      match: "subscription pause logic",
      startup: "PausePay",
      pitch: "A one-tap pause for UPI autopay and card mandates — freeze for a month or three instead of cancelling and redoing KYC.",
      who: "Subscribers travelling or between jobs who keep paying for unused gym, OTT and SaaS plans.",
      tags: ["fintech", "payments", "subscriptions"],
      how: [
        "Build a consumer app that lists active mandates via the bank/UPI mandate APIs and offers a pause window.",
        "Work with merchants to honour pause windows through a standard SDK and a pause-aware billing schedule.",
        "Resume automatically on the chosen date, with a reminder 48 hours before the next debit."
      ],
      mvp: [
        "Mandate discovery and pause flow",
        "Merchant SDK for pause-aware billing",
        "Five launch merchants"
      ],
      model: "Small fee per paused mandate plus merchant SaaS for churn reduction.",
      price: "₹19 per pause; ₹2,999/month merchant plan.",
      gtm: "Gym and OTT partnerships; consumer launch around travel and job-change seasons.",
      moat: "Merchant integrations and mandate-level retention data.",
      risks: ["NPCI/bank rules on mandate modification", "Merchant resistance", "Low consumer fee tolerance"],
      market: { tam: "₹2,000 Cr subscription billing; pause a retention wedge", time: "9–12 months", capital: "₹60–90 lakh" },
      verdict: "Cancellation is a churn event; pause is a retention product."
    },
    {
      match: "redeem credit card reward points",
      startup: "PointValue",
      pitch: "See what every reward point is actually worth, across redemption options, transfer partners and expiry dates.",
      who: "Cardholders sitting on 50,000 points and redeeming them for a 30% haircut.",
      tags: ["fintech", "rewards", "consumer"],
      how: [
        "Aggregate reward balances and redemption catalogues across major issuers, normalising value per point.",
        "Rank options by effective rupee value, flag poor-value redemptions and alert before points expire.",
        "Guide the transfer to airline/hotel partners when that yields more value, with a step-by-step flow."
      ],
      mvp: [
        "Issuer catalogue and value engine",
        "Portfolio dashboard and expiry alerts",
        "Redemption playbooks"
      ],
      model: "Affiliate revenue from partners and a premium subscription.",
      price: "Free basic; ₹149/month premium alerts.",
      gtm: "Credit-card communities and personal-finance creators; publish a monthly 'best redemption' index.",
      moat: "Continuously updated redemption catalogue and valuation data.",
      risks: ["Issuer terms changes", "Data accuracy", "Affiliate bias"],
      market: { tam: "₹25,000 Cr card rewards issued annually", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "Points are a currency with no price tag — until someone publishes one."
    },
    {
      match: "confusing cashback terms",
      startup: "CashbackClear",
      pitch: "Before you pay, see the exact cashback you will get after every condition — then track whether it actually landed.",
      who: "Shoppers burned by '10% up to ₹100' offers that pay nothing.",
      tags: ["fintech", "cashback", "transparency"],
      how: [
        "Parse offer terms into rules (minimum spend, merchant list, cap, first-time-only) and compute the expected payout for this specific transaction.",
        "Show a pre-payment verdict and log the promise so the user can claim later.",
        "Auto-detect missing cashback from SMS/email and generate a claim with the offer evidence."
      ],
      mvp: [
        "Offer parser for 30 major campaigns",
        "Pre-payment eligibility check",
        "Cashback ledger and claim pack"
      ],
      model: "Affiliate revenue plus a premium claims service.",
      price: "Free; ₹49/month for automatic claims.",
      gtm: "Deal communities and UPI app partnerships; publish a 'cashback that never arrived' report.",
      moat: "Offer-term data and claim outcomes.",
      risks: ["Offer data freshness", "Platform hostility", "Claim success rate"],
      market: { tam: "₹8,000 Cr cashback and rewards spend", time: "5–8 months", capital: "₹30–50 lakh" },
      verdict: "The fine print is the product."
    },
    {
      match: "apartment maintenance payments lack itemized",
      startup: "SocietyLedger",
      pitch: "Itemised maintenance billing for housing societies, with vendor bills, expense categories and a resident-facing ledger.",
      who: "Residents paying ₹3,000–10,000 a month with no idea where it goes; committee treasurers drowning in spreadsheets.",
      tags: ["fintech", "societies", "transparency"],
      how: [
        "Give the treasurer a billing module with heads (security, housekeeping, utilities, sinking fund) and vendor invoice uploads.",
        "Publish a resident ledger with the month's breakdown, variance against budget and reserve fund balance.",
        "Collect maintenance via UPI with auto-reconciliation and overdue reminders."
      ],
      mvp: [
        "Billing heads and invoice vault",
        "Resident ledger and payment flow",
        "Monthly report PDF"
      ],
      model: "₹25–₹60 per flat per month; implementation fee for large societies.",
      price: "₹4,999/month for a 150-flat society.",
      gtm: "Society committees, facility managers and apartment federations.",
      moat: "Society-level financial history and committee switching costs.",
      risks: ["Committee politics", "Treasurer turnover", "Price sensitivity"],
      market: { tam: "₹1 lakh Cr+ society maintenance spend", time: "7–10 months", capital: "₹40–70 lakh" },
      verdict: "Transparency is a treasurer's best defence."
    },
    {
      match: "reconcile bank statement",
      startup: "TxnTag",
      pitch: "Every bank and UPI transaction auto-labelled with a real merchant name, a note and a category you can trust.",
      who: "Individuals staring at ₹50 debits coded as 'UPI/1234567890'.",
      tags: ["fintech", "spending", "reconciliation"],
      how: [
        "Resolve merchant IDs to brands using a payments-merchant graph, and let users confirm or correct the label once.",
        "Auto-suggest notes from calendar, email receipts and prior behaviour, then categorise with a personal rules engine.",
        "Generate a month-end reconciliation view that flags duplicates, subscriptions and unusual charges."
      ],
      mvp: [
        "Merchant resolution database",
        "Statement import and labelling",
        "Monthly reconciliation report"
      ],
      model: "Freemium consumer app; white-label reconciliation for accountants.",
      price: "Free for one account; ₹99/month for unlimited.",
      gtm: "Personal-finance creators and CA firms serving salaried clients.",
      moat: "The merchant-ID graph, which improves with every correction.",
      risks: ["Bank data access", "Privacy", "Merchant coverage"],
      market: { tam: "₹2,000 Cr personal finance tools", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "The cryptic merchant ID is the root of every budgeting failure."
    },
    {
      match: "reward visibility missing across UPI",
      startup: "RewardVault",
      pitch: "One dashboard for cashback earned, pending and expiring across every payment app and wallet.",
      who: "Users juggling PhonePe, Paytm, GPay and Amazon Pay rewards without a total.",
      tags: ["fintech", "rewards", "aggregator"],
      how: [
        "Ingest reward notifications from SMS, email and account linking into a single ledger.",
        "Show earned, pending and expiring amounts by app, with a claim checklist for each.",
        "Alert before expiry and recommend the best redemption path per platform."
      ],
      mvp: [
        "Notification parser for four apps",
        "Reward ledger and expiry calendar",
        "Claim checklist"
      ],
      model: "Affiliate redemptions and a premium tier.",
      price: "Free; ₹49/month premium.",
      gtm: "Frugal-living communities and UPI-heavy user segments.",
      moat: "Cross-platform reward data and expiry patterns.",
      risks: ["Parsing reliability", "Platform access", "Small ticket value"],
      market: { tam: "₹8,000 Cr cashback and rewards", time: "5–8 months", capital: "₹25–45 lakh" },
      verdict: "Rewards expire quietly; a ledger makes them loud."
    },
    {
      match: "foreign transaction pricing",
      startup: "FXTrue",
      pitch: "The real cost of spending abroad — card markup, ATM fees and FX spread — before you leave home.",
      who: "Travellers paying 3–5% more than the advertised rate on forex cards.",
      tags: ["fintech", "forex", "travel"],
      how: [
        "Model the all-in cost of each card, forex card and cash channel using live rates plus issuer markups and fees.",
        "Let travellers simulate their itinerary spend and see which combination is cheapest.",
        "Track actual transactions against the estimate and flag overcharges for dispute."
      ],
      mvp: [
        "Issuer fee database",
        "Trip cost simulator",
        "Transaction tracker"
      ],
      model: "Card referral commissions and a premium trip plan.",
      price: "Free; ₹199 per trip plan.",
      gtm: "Travel creators, visa agencies and international student groups.",
      moat: "Issuer fee data and real transaction benchmarks.",
      risks: ["Fee changes", "Referral bias", "Low repeat use"],
      market: { tam: "₹1.5 lakh Cr outbound travel spend", time: "5–8 months", capital: "₹30–50 lakh" },
      verdict: "Zero markup is a story; the all-in cost is the truth."
    },
    {
      match: "multiple payment app wallets",
      startup: "WalletOne",
      pitch: "See every wallet balance in one place and sweep idle money back to your bank in a tap.",
      who: "Users holding ₹500–2,000 idle in four wallets before every payment.",
      tags: ["fintech", "wallets", "aggregator"],
      how: [
        "Link wallet accounts through available APIs and notification parsing to show combined balance.",
        "Offer a sweep to bank or a UPI top-up suggestion when a wallet is short, avoiding failed payments.",
        "Recommend which wallet to pay from based on balance and offers at checkout."
      ],
      mvp: [
        "Balance aggregation for four wallets",
        "Sweep and top-up flows",
        "Checkout recommendation"
      ],
      model: "Affiliate top-up revenue and a small sweep fee.",
      price: "Free; ₹9 per sweep.",
      gtm: "UPI-heavy users and wallet cashback communities.",
      moat: "Cross-wallet balance data and sweep rails.",
      risks: ["Wallet API access", "Regulatory limits", "Low monetisation"],
      market: { tam: "₹1,000 Cr wallet float management", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "Idle float is a small pain with a large aggregate."
    }
  ],

  "Real Estate": [
    {
      match: "neighborhood quality data",
      startup: "LocalityScore",
      pitch: "A standard report on schools, crime, air, water, power and commute for any neighbourhood — before you commit a crore.",
      who: "Homebuyers choosing between projects with glossy brochures and no comparable data.",
      tags: ["proptech", "data", "research"],
      how: [
        "Combine public data (AQI, crime, water quality, outages, infrastructure plans) with on-ground audits and resident surveys.",
        "Score each locality on eight dimensions and publish a comparable report with sources and confidence levels.",
        "Sell reports to buyers and licence the data to developers, brokers and home-loan lenders."
      ],
      mvp: [
        "Eight-dimension scoring model",
        "Reports for 50 localities in one city",
        "Resident survey panel"
      ],
      model: "Per-report fee, developer licences and lender API access.",
      price: "₹999 per report; ₹2–5 lakh/year developer licence.",
      gtm: "SEO on locality comparisons, broker partnerships, and lender risk teams.",
      moat: "Longitudinal locality data and an audit methodology.",
      risks: ["Data availability", "Defamation risk", "Buyers may not pay"],
      market: { tam: "₹8,000 Cr property research and advisory", time: "8–12 months", capital: "₹60–90 lakh" },
      verdict: "A ₹1 crore decision deserves better than a brochure."
    },
    {
      match: "QR gates for visitor parking",
      startup: "GatePass",
      pitch: "Time-limited QR permits for visitor parking, approved by the resident and enforced at the gate.",
      who: "Housing societies with chronic visitor-parking clashes and blocked owner spots.",
      tags: ["proptech", "societies", "access"],
      how: [
        "Let residents issue a QR permit for a guest with a vehicle number and expiry time.",
        "Scan at the gate, log entry/exit, and alert security when a vehicle overstays.",
        "Integrate with boom barriers and add a tow-reminder workflow for unauthorised parking."
      ],
      mvp: [
        "Resident permit app and gate scanner",
        "Overstay alerts",
        "Barrier integration for two vendors"
      ],
      model: "Per-flat monthly SaaS plus barrier hardware margin.",
      price: "₹20–₹40 per flat/month; ₹15,000 one-time integration.",
      gtm: "Society committees and security agencies; start with 20 large societies.",
      moat: "Society contracts and gate hardware integration.",
      risks: ["Committee approvals", "Security staff adoption", "Hardware fragmentation"],
      market: { tam: "₹1,500 Cr society access management", time: "7–10 months", capital: "₹40–70 lakh" },
      verdict: "Visitor parking is a permissions problem wearing a traffic costume."
    },
    {
      match: "smart water sub-meters",
      startup: "AquaMeter",
      pitch: "Affordable per-flat water sub-meters with app billing and leak alerts, retrofitted without rewiring the building.",
      who: "Societies splitting water bills equally while a few flats consume most of it.",
      tags: ["proptech", "water", "iot"],
      how: [
        "Install clamp-on or inline smart meters per flat with a low-power radio gateway per floor.",
        "Generate consumption-based bills and flag abnormal usage or a continuous-flow leak within hours.",
        "Finance the hardware through a per-flat monthly fee and share savings with the society."
      ],
      mvp: [
        "Meter and gateway hardware",
        "Society billing dashboard",
        "Leak alert workflow"
      ],
      model: "Hardware plus a per-flat SaaS fee; water-saving performance share.",
      price: "₹1,200 per flat hardware; ₹30/flat/month.",
      gtm: "Water-stressed cities and large societies with high tanker costs.",
      moat: "Installation base and consumption benchmarks.",
      risks: ["Retrofit complexity", "Plumbing variance", "Recovery of hardware cost"],
      market: { tam: "₹3,000 Cr water metering and billing", time: "9–12 months", capital: "₹80 lakh–₹1.5 Cr" },
      verdict: "You cannot conserve what you do not measure."
    },
    {
      match: "rental listings fake broker",
      startup: "RentProof",
      pitch: "Rental listings that are verified available, owner-authorised and audited — with a photo of the actual flat today.",
      who: "Tenants wasting weekends on bait listings and brokers who 'just missed' the flat.",
      tags: ["proptech", "rentals", "trust"],
      how: [
        "Require owner verification via Aadhaar-linked OTP and a property document check before a listing goes live.",
        "Send a field agent to capture a timestamped video walkthrough and confirm availability within 72 hours.",
        "Guarantee the listing: if the flat is unavailable or materially different, the tenant gets ₹500 and the broker is delisted."
      ],
      mvp: [
        "Owner verification flow",
        "Field audit app",
        "Verified listing feed and guarantee"
      ],
      model: "Listing fee from owners plus a tenant subscription for early access.",
      price: "₹999 per verified listing; ₹299 tenant pass.",
      gtm: "Start in two high-churn rental corridors; publish a fake-listing takedown counter.",
      moat: "Verified supply and audit operations.",
      risks: ["Verification cost", "Broker backlash", "Listing freshness"],
      market: { tam: "₹1.2 lakh Cr rental market", time: "8–12 months", capital: "₹60–90 lakh" },
      verdict: "Verification is the entire product; everything else is a listing site."
    },
    {
      match: "discover dampness",
      startup: "DampScan",
      pitch: "A pre-purchase moisture, thermal and structural inspection that finds seepage before the keys change hands.",
      who: "Buyers spending life savings on a home with hidden damp and termite damage.",
      tags: ["proptech", "inspection", "trust"],
      how: [
        "Run a standard 90-minute inspection with thermal imaging, moisture meters and a structural checklist.",
        "Produce a report with annotated images, severity, likely cause and a repair cost range.",
        "Offer a 12-month re-inspection guarantee and a repair-partner quote."
      ],
      mvp: [
        "Inspection protocol and equipment kit",
        "Report generator with photo annotations",
        "Ten certified inspectors"
      ],
      model: "Per-inspection fee plus repair partner commissions.",
      price: "₹4,999–₹9,999 per home; ₹1,999 for a single-room check.",
      gtm: "Home-loan lenders, buyer agents and resale listings; partner with banks for pre-disbursement checks.",
      moat: "Inspection data and lender trust.",
      risks: ["Liability on missed defects", "Inspector quality", "Buyers skip inspections to save money"],
      market: { tam: "₹1,500 Cr home inspection, early stage", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "The most expensive defect is the one you meet after possession."
    },
    {
      match: "NRIs remotely secure vacant",
      startup: "GuardianHome",
      pitch: "Remote property guardianship for NRIs: sensors, cameras, periodic visits and a local escalation team when something moves.",
      who: "NRI owners of vacant homes worried about squatters, illegal construction and burst pipes.",
      tags: ["proptech", "security", "remote"],
      how: [
        "Install a cellular-connected sensor kit (door, motion, water, power) that works without home broadband.",
        "Schedule monthly physical visits with a photo report, and keep a document vault for taxes and utilities.",
        "Escalate to a verified local representative and lawyer when an alert needs a physical response."
      ],
      mvp: [
        "Sensor kit and monitoring app",
        "Monthly visit protocol",
        "Local representative network"
      ],
      model: "Annual subscription plus hardware and visit fees.",
      price: "₹24,999–₹49,999/year; ₹4,999 per extra visit.",
      gtm: "NRI associations, property lawyers and wealth managers.",
      moat: "Local response networks across cities and trust with absent owners.",
      risks: ["Connectivity in older buildings", "False alarms", "Local legal complexity"],
      market: { tam: "₹2,000 Cr NRI property management", time: "8–12 months", capital: "₹60–90 lakh" },
      verdict: "Absence is the vulnerability; presence is the product."
    },
    {
      match: "property ads lie about commute",
      startup: "CommuteTrue",
      pitch: "Peak-hour door-to-door commute times measured from real trips, not straight-line map distances.",
      who: "Buyers and renters misled by '5 minutes from metro' claims.",
      tags: ["proptech", "mobility", "data"],
      how: [
        "Compute commute time to major employment hubs using transit, driving and walking legs at 8–10 am, not off-peak.",
        "Publish a commute score per listing with the route and time band, and audit claims against it.",
        "Licence the API to portals and brokers, and let buyers compare two homes by commute."
      ],
      mvp: [
        "Commute engine with peak-hour profiles",
        "Listing embed widget",
        "Reports for 200 projects"
      ],
      model: "Portal and developer licences; consumer premium reports.",
      price: "₹499 per report; ₹1–3 lakh/year portal licence.",
      gtm: "Consumer advocate PR, portal partnerships and relocation companies.",
      moat: "Peak-hour trip data by corridor.",
      risks: ["Data licensing costs", "Portals may resist", "Traffic variability"],
      market: { tam: "₹1,000 Cr property data and research", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "Distance sells homes; commute is what buyers actually live with."
    }
  ],

  "SaaS": [
    {
      match: "CRM systems too complex",
      startup: "ChhotaCRM",
      pitch: "A WhatsApp-native CRM for three-person businesses: contacts, follow-ups, quotes and payments, with nothing to configure.",
      who: "Micro-businesses that live in WhatsApp and abandon enterprise CRMs in week two.",
      tags: ["saas", "crm", "sme"],
      how: [
        "Sync WhatsApp conversations into contact cards with a next-action reminder and a simple pipeline.",
        "Add quote creation, payment links and a follow-up sequence that runs inside WhatsApp.",
        "Ship opinionated defaults by trade (interior, tuition, clinic) so setup is a 10-minute import, not a project."
      ],
      mvp: [
        "WhatsApp sync and contact cards",
        "Follow-up reminders and quote builder",
        "Three trade templates"
      ],
      model: "Per-seat SaaS with a WhatsApp message pack.",
      price: "₹499/user/month; ₹1,499 for a three-person team.",
      gtm: "Trade WhatsApp groups, distributor networks and a free contact-import tool.",
      moat: "Trade-specific templates and conversation data locked into workflows.",
      risks: ["WhatsApp API policy", "Churn in micro-SMBs", "Low willingness to pay"],
      market: { tam: "₹3,000 Cr Indian SME CRM opportunity", time: "7–10 months", capital: "₹50–80 lakh" },
      verdict: "The CRM already exists — it is called WhatsApp, minus the memory."
    },
    {
      match: "unused SaaS subscriptions",
      startup: "SeatSweep",
      pitch: "Find every SaaS tool, every unused seat and every auto-renewal — then cancel or renegotiate it in one click.",
      who: "Finance and ops teams with 40 tools and no single owner of software spend.",
      tags: ["saas", "finops", "procurement"],
      how: [
        "Connect email, cards and SSO logs to discover tools, seats, spend and last-login dates.",
        "Score each subscription for utilisation and overlap, then generate a cancel or downgrade action plan.",
        "Execute cancellations and renewal negotiations with vendor-specific playbooks and a savings report."
      ],
      mvp: [
        "Discovery from email and card feeds",
        "Utilisation dashboard",
        "Cancellation playbooks"
      ],
      model: "SaaS fee plus a share of first-year savings.",
      price: "₹15,000/month; 10% of verified savings.",
      gtm: "CFO and startup communities; offer a free spend audit as the wedge.",
      moat: "Vendor pricing and cancellation playbooks plus benchmark data.",
      risks: ["Card data access", "Vendor cooperation", "Customers cancel in-house after the audit"],
      market: { tam: "₹40,000 Cr SaaS spend; 20–30% waste", time: "7–10 months", capital: "₹60–90 lakh" },
      verdict: "Every unused seat is a subscription someone forgot to own."
    },
    {
      match: "shop owners create websites",
      startup: "DukaanSite",
      pitch: "Speak your shop details and get a working storefront with catalogue, hours, location and WhatsApp ordering.",
      who: "Kirana and boutique owners with no time, design skill or budget for a website.",
      tags: ["saas", "websites", "sme"],
      how: [
        "Use a voice-guided interview in the shopkeeper's language to capture products, prices, hours and photos.",
        "Generate a mobile-first storefront with WhatsApp checkout, UPI details and Google Maps directions.",
        "Add a repeat-order list and festival offer banner the owner can update by voice."
      ],
      mvp: [
        "Voice onboarding in three languages",
        "Storefront generator and hosting",
        "WhatsApp order flow"
      ],
      model: "Freemium storefront with a paid custom domain and catalogue sync.",
      price: "Free basic; ₹299/month pro; ₹1,999 setup.",
      gtm: "Distributor vans, local shop associations and a referral scheme for shopkeepers.",
      moat: "Local-language onboarding and merchant distribution.",
      risks: ["Very low ARPU", "Support burden", "Competition from aggregators"],
      market: { tam: "₹2,000 Cr SME website and commerce tools", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "The shopkeeper will not learn a builder; the builder must learn the shopkeeper."
    },
    {
      match: "data flow seamlessly between Excel",
      startup: "Glue",
      pitch: "No-code connectors that keep Excel, CRM, invoicing and payments in sync for Indian SME stacks.",
      who: "SMEs where a staff member copies rows between spreadsheets, Zoho and Tally every day.",
      tags: ["saas", "integration", "sme"],
      how: [
        "Ship prebuilt connectors for the ten tools Indian SMEs actually use, with field mapping and dedupe rules.",
        "Run syncs on a schedule or webhook, with a conflict log that a non-technical owner can resolve.",
        "Add templates for common flows: lead to CRM, invoice to Tally, payment to ledger."
      ],
      mvp: [
        "Five connectors and a mapping UI",
        "Sync engine with conflict log",
        "Three workflow templates"
      ],
      model: "Per-connection monthly fee plus implementation services.",
      price: "₹1,999/month for five connections; ₹15,000 implementation.",
      gtm: "CA firms and implementation partners who already configure Tally and Zoho.",
      moat: "Connector coverage and partner distribution.",
      risks: ["API instability", "Zapier competition", "Support-heavy product"],
      market: { tam: "₹5,000 Cr SME automation", time: "8–12 months", capital: "₹60–90 lakh" },
      verdict: "SMEs do not need APIs; they need the copy-paste to stop."
    },
    {
      match: "meetings waste 4 hours",
      startup: "Samvaad",
      pitch: "Meeting notes built for Indian accents and code-switching, with decisions and action items pushed to the tools teams already use.",
      who: "Teams losing half the day to status calls and rewriting notes afterwards.",
      tags: ["saas", "ai", "productivity"],
      how: [
        "Transcribe with accent- and code-switch-aware models, then extract decisions, owners and deadlines.",
        "Push action items to Slack, Jira, Asana or WhatsApp, and draft the follow-up message.",
        "Replace recurring status meetings with an async digest generated from the previous week's updates."
      ],
      mvp: [
        "Transcription and summary pipeline",
        "Action-item extraction and integrations",
        "Weekly async digest"
      ],
      model: "Per-seat SaaS with a usage cap.",
      price: "₹499/user/month; ₹4,999 for a 10-person team.",
      gtm: "Remote-first Indian startups, agencies and GCC teams.",
      moat: "Accent and code-switch training data plus workflow integrations.",
      risks: ["Commoditised transcription", "Privacy concerns", "Meeting-tool bundling"],
      market: { tam: "₹2,500 Cr meeting productivity software", time: "6–9 months", capital: "₹50–80 lakh" },
      verdict: "The note is not the product; the follow-through is."
    },
    {
      match: "manual payroll calculations",
      startup: "PayrollLite",
      pitch: "One-click payroll for teams under ten: attendance, leave, overtime, festival bonus and compliance in a single run.",
      who: "Small business owners spending a weekend a month on salaries and PF/ESI.",
      tags: ["saas", "payroll", "sme"],
      how: [
        "Import attendance from a shared sheet or biometric device, then calculate salary, leave and overtime automatically.",
        "Handle PF, ESI, TDS and payslips with a compliance calendar and challan reminders.",
        "Pay salaries via bank/UPI in one batch and file the statutory returns from the same data."
      ],
      mvp: [
        "Attendance import and payroll engine",
        "Payslip and compliance output",
        "Batch salary payment"
      ],
      model: "Per-employee monthly fee with a compliance add-on.",
      price: "₹99/employee/month; ₹499 base.",
      gtm: "CA firms, trade associations and small-business WhatsApp groups.",
      moat: "Compliance rules engine and CA distribution.",
      risks: ["Regulatory changes", "Payroll errors are high-stakes", "Low ARPU"],
      market: { tam: "₹8,000 Cr payroll and compliance", time: "8–12 months", capital: "₹50–80 lakh" },
      verdict: "Tiny teams need payroll to feel like sending a message, not filing a return."
    },
    {
      match: "kirana stores predict restocking",
      startup: "StockSense",
      pitch: "Demand forecasts and reorder suggestions for kirana stores, built from the billing data they already generate.",
      who: "Kirana owners guessing which of 800 SKUs to reorder before a festival or a heatwave.",
      tags: ["saas", "retail", "forecasting"],
      how: [
        "Connect to the store's billing software or upload daily sales, then forecast SKU demand by weekday, season and festival.",
        "Generate an order sheet with suggested quantities and a WhatsApp order to the distributor.",
        "Flag slow movers and expiring stock with a discount suggestion."
      ],
      mvp: [
        "Billing integrations and CSV import",
        "SKU-level forecast and order sheet",
        "WhatsApp distributor ordering"
      ],
      model: "₹499–₹999/month per store plus a distributor referral fee.",
      price: "₹799/month; ₹2,999 for a three-store bundle.",
      gtm: "Billing-software partnerships and FMCG distributor networks.",
      moat: "Store-level demand data and distributor relationships.",
      risks: ["Data quality", "Owner discipline", "Distributor disintermediation"],
      market: { tam: "₹12 lakh kirana stores; retail analytics a ₹2,000 Cr opportunity", time: "8–12 months", capital: "₹60–90 lakh" },
      verdict: "The billing machine already knows; the owner just cannot hear it."
    },
    {
      match: "quick customer feedback beyond surveys",
      startup: "Echo5",
      pitch: "A five-second voice review at the counter — the customer speaks, the owner gets a sentiment score and a clip.",
      who: "Local service businesses that get three survey responses a year.",
      tags: ["saas", "feedback", "voice"],
      how: [
        "Put a QR at the counter or checkout; the customer records a five-second voice note with one tap, no login.",
        "Transcribe and score sentiment and themes, then surface the clips that need the owner's attention.",
        "Route negative feedback to a recovery workflow and positive clips to the business's Google reviews."
      ],
      mvp: [
        "QR voice capture page",
        "Transcription and sentiment dashboard",
        "Review-routing flow"
      ],
      model: "Per-location monthly SaaS.",
      price: "₹999/month per location.",
      gtm: "Restaurants, salons and clinics; sell through POS and Google-review agencies.",
      moat: "Voice feedback corpus and recovery playbooks.",
      risks: ["Low response rates", "Fake reviews", "Privacy consent"],
      market: { tam: "₹1,500 Cr SMB feedback and reputation tools", time: "5–8 months", capital: "₹30–50 lakh" },
      verdict: "A five-second voice note beats a twelve-question survey every time."
    },
    {
      match: "affordable cybersecurity checks",
      startup: "ShieldScan",
      pitch: "A one-click security audit for small business websites, with plain-language fixes and continuous monitoring.",
      who: "SMEs running a storefront with no security team and no budget for a pentest.",
      tags: ["saas", "security", "sme"],
      how: [
        "Scan for exposed admin panels, outdated plugins, missing headers, leaked credentials and malware signatures.",
        "Translate findings into a prioritised fix list with copy-paste instructions for Shopify, WordPress and custom sites.",
        "Monitor continuously and alert on new exposures, with a monthly compliance certificate."
      ],
      mvp: [
        "Scanner for the top 30 misconfigurations",
        "Plain-language fix guide",
        "Monitoring and alerts"
      ],
      model: "Tiered monthly subscription plus remediation services.",
      price: "₹1,499/month basic; ₹4,999/month with monitoring.",
      gtm: "Web agencies, hosting providers and e-commerce seller communities.",
      moat: "Scan coverage and remediation playbooks.",
      risks: ["False positives", "Liability after a breach", "Commoditised scanners"],
      market: { tam: "₹6,000 Cr SMB cybersecurity", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "Small businesses do not need a pentest; they need the five things to fix today."
    },
    {
      match: "small brands optimize digital ads",
      startup: "AdSprint",
      pitch: "An autopilot ad optimizer for small budgets: it reallocates spend daily and explains every change in one line.",
      who: "Small brands spending ₹50,000–₹3 lakh a month with no dedicated media buyer.",
      tags: ["saas", "adtech", "sme"],
      how: [
        "Connect Google and Meta accounts, set a target CPA and a hard budget guardrail.",
        "Reallocate budget across keywords, creatives and audiences daily, pausing anything that breaches the guardrail.",
        "Send a weekly plain-language report with the three changes that mattered and the next experiment."
      ],
      mvp: [
        "Ad account connectors",
        "Budget reallocation engine",
        "Weekly explainer report"
      ],
      model: "Flat SaaS fee plus a small share of verified savings.",
      price: "₹7,999/month; 5% of ad spend above ₹1 lakh.",
      gtm: "D2C communities, agency overflow work and Shopify app listings.",
      moat: "Cross-account performance benchmarks for small budgets.",
      risks: ["Platform API changes", "Attribution noise", "Agencies may undercut"],
      market: { tam: "₹40,000 Cr digital ad spend; SMB slice underserved", time: "7–10 months", capital: "₹50–80 lakh" },
      verdict: "Small budgets fail from neglect, not from bad strategy."
    }
  ]
};
