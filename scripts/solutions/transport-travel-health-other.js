// Startup blueprints for Transportation, Travel, Healthtech and Other.

module.exports = {
  "Transportation": [
    {
      match: "school buses run late",
      startup: "BusWatch",
      pitch: "Live school-bus tracking with boarding scans and delay alerts, so parents know where the child is without calling the school.",
      who: "Parents whose children ride a school bus with no communication when it runs late.",
      tags: ["mobility", "schools", "safety"],
      how: [
        "Install a GPS unit and a driver app that scans each child at boarding and drop-off.",
        "Send parents a live map, a delay alert with a new ETA, and an arrival confirmation.",
        "Give the school a dashboard for route exceptions and a transport audit log."
      ],
      mvp: [
        "GPS unit and driver scan app",
        "Parent tracking page and alerts",
        "School transport dashboard"
      ],
      model: "Per-bus monthly SaaS paid by the school, passed into the fee.",
      price: "₹2,499–₹3,999 per bus/month.",
      gtm: "School transport heads and bus-operator associations; start with 50 buses in one city.",
      moat: "School contracts and route reliability data.",
      risks: ["School budget cycles", "Driver adoption", "Connectivity gaps"],
      market: { tam: "₹1,500 Cr school transport operations", time: "6–9 months", capital: "₹35–60 lakh" },
      verdict: "A parent's anxiety is a notification away from relief."
    },
    {
      match: "office shuttles dynamically routed",
      startup: "ShuttleNow",
      pitch: "Demand-responsive office shuttles that route around who actually booked today, not a fixed route drawn two years ago.",
      who: "Business-park employees waiting 25 minutes for a half-empty shuttle; employers paying for unused seats.",
      tags: ["mobility", "b2b", "routing"],
      how: [
        "Let employees request a seat by 4 pm for the next day, then optimise routes and departure times from the bookings.",
        "Track occupancy and arrival performance, and re-plan routes weekly as teams shift to hybrid schedules.",
        "Bill the employer per occupied seat and report cost per commute against the old fixed contract."
      ],
      mvp: [
        "Booking app and route optimiser",
        "Driver navigation app",
        "Employer occupancy dashboard"
      ],
      model: "Per-seat monthly fee plus a per-route optimisation fee.",
      price: "₹1,200–₹2,000 per seat/month.",
      gtm: "Business-park facility managers and large IT campuses; pilot on two routes.",
      moat: "Demand data and multi-tenant density in a park.",
      risks: ["Employer contracts", "Driver supply", "Hybrid-work volatility"],
      market: { tam: "₹10,000 Cr employee transport", time: "8–12 months", capital: "₹80 lakh–₹1.5 Cr" },
      verdict: "Fixed routes are a scheduling habit that hybrid work has made expensive."
    },
    {
      match: "late-night women’s mobility",
      startup: "SheRide",
      pitch: "A women-only driver network for late nights, with live tracking, a panic button and a response team that actually calls back.",
      who: "Women working night shifts or returning late who do not trust a random cab.",
      tags: ["mobility", "safety", "women"],
      how: [
        "Recruit and verify women drivers with background checks, a safety training module and an in-ride SOS device.",
        "Share live trip details with two emergency contacts and run a 24/7 response desk with a 60-second callback SLA.",
        "Restrict late-night trips to verified riders and drivers, and publish safety response times."
      ],
      mvp: [
        "Verified women driver pool",
        "Live tracking and SOS workflow",
        "24/7 response desk"
      ],
      model: "Ride commission plus a corporate night-shift transport contract.",
      price: "₹40–₹70 per late-night trip; corporate plans per seat.",
      gtm: "BPO and hospital night-shift employers, women's employee resource groups, and campus networks.",
      moat: "A verified women driver network and measured response times.",
      risks: ["Driver supply at night", "Safety liability", "High operating cost"],
      market: { tam: "₹4,000 Cr night-shift commute", time: "9–12 months", capital: "₹80 lakh–₹1.5 Cr" },
      verdict: "Safety is not a feature toggle; it is a response team."
    },
    {
      match: "EV drivers see real-time charger",
      startup: "ChargeSure",
      pitch: "Verified real-time charger status — working, occupied, queue length — before an EV driver commits to the detour.",
      who: "EV owners burned by apps listing chargers that are broken or occupied.",
      tags: ["mobility", "ev", "data"],
      how: [
        "Pull status from charger operators via OCPP/API where available, and fill gaps with a driver check-in button and a 15-minute freshness rule.",
        "Show queue estimates, connector type compatibility and a one-tap reservation where operators allow it.",
        "Sell the verified status feed to map apps, fleets and OEM navigation systems."
      ],
      mvp: [
        "Operator integrations and check-in flow",
        "Status map with confidence score",
        "Fleet dashboard and API"
      ],
      model: "Operator subscriptions, fleet SaaS and data licensing.",
      price: "₹2,999/month per operator; ₹499/vehicle/month fleet.",
      gtm: "Charger operators who want utilisation, OEM apps and fleet operators.",
      moat: "Status coverage and a reliability score per charger.",
      risks: ["Operator data access", "Stale status", "Thin revenue per charger"],
      market: { tam: "₹2,000 Cr EV charging software and data", time: "7–10 months", capital: "₹50–80 lakh" },
      verdict: "The charging network's real problem is trust in the map."
    },
    {
      match: "commuters waste 90 minutes",
      startup: "Multimodal",
      pitch: "A peak-hour commute planner that combines metro, shuttle, bike and walking into one guaranteed itinerary — and pays you if it fails.",
      who: "Metro commuters losing 15–20 hours a week to fragmented, unreliable routes.",
      tags: ["mobility", "commute", "planning"],
      how: [
        "Model first/last-mile options against real peak-hour timings, crowding and reliability, not static schedules.",
        "Offer a guaranteed arrival time on the recommended itinerary, with a cab credit if it slips by more than 15 minutes.",
        "Add a carpool match for the last mile where transit does not reach."
      ],
      mvp: [
        "Multimodal routing engine",
        "Guarantee and credit workflow",
        "Two-city coverage"
      ],
      model: "Subscription plus affiliate revenue from cab and bike partners.",
      price: "₹99–₹199/month; guarantee included for premium.",
      gtm: "Corporate commute benefits and metro-station activation.",
      moat: "Peak-hour reliability data by corridor.",
      risks: ["Transit data access", "Guarantee cost", "Low willingness to pay"],
      market: { tam: "₹3,000 Cr commute planning and benefits", time: "8–12 months", capital: "₹60–90 lakh" },
      verdict: "Commuters do not need another map; they need a promise."
    }
  ],

  "Travel": [
    {
      match: "WiFi unreliable for travelers",
      startup: "WiFiCheck",
      pitch: "Measured, verified WiFi speed at hotels and cafés — tested by guests, not claimed by marketing.",
      who: "Remote workers and travellers choosing a stay partly on connectivity.",
      tags: ["travel", "connectivity", "reviews"],
      how: [
        "Run an automatic speed and latency test when a guest joins the network, with a 20-second opt-in.",
        "Publish a verified WiFi score per property and per area (room, lobby, café), updated weekly.",
        "Licence the badge and feed to booking sites and hotels that want to prove their claim."
      ],
      mvp: [
        "Speed-test flow and venue profile",
        "Verified badge and map",
        "Two-city venue coverage"
      ],
      model: "Venue certification fees, booking affiliate revenue and a data API.",
      price: "₹4,999/year per venue; free for travellers.",
      gtm: "Digital-nomad communities, boutique hotels and co-working cafés.",
      moat: "Longitudinal measurement data by venue.",
      risks: ["Coverage density", "Gaming by venues", "Low venue willingness to pay"],
      market: { tam: "₹1,000 Cr travel connectivity data", time: "6–9 months", capital: "₹25–45 lakh" },
      verdict: "Speed claims are cheap; a timestamped test is not."
    },
    {
      match: "women-first travel app",
      startup: "SoloSafe",
      pitch: "A women-first travel app with verified local guardians, safety maps and a one-tap SOS that reaches a real person nearby.",
      who: "Solo women travellers who want local help without relying on strangers online.",
      tags: ["travel", "safety", "community"],
      how: [
        "Recruit background-checked local guardians — residents, hostel owners, women-led businesses — with a verification interview.",
        "Map safe areas, transport and verified stays, and let travellers request a guardian meet-up or a check-in call.",
        "Run a 24/7 SOS line with location sharing and a local escalation partner."
      ],
      mvp: [
        "Guardian verification and profiles",
        "Safety map and itinerary check-ins",
        "SOS and escalation workflow"
      ],
      model: "Membership, guardian commission and safety-certified stay listings.",
      price: "₹299/trip or ₹999/year; guardian meet-up ₹499.",
      gtm: "Solo-travel communities, women's travel creators and hostels.",
      moat: "A verified guardian network in each city.",
      risks: ["Vetting and safety liability", "Thin coverage per city", "Trust cold start"],
      market: { tam: "₹2,000 Cr women's travel services", time: "9–12 months", capital: "₹60–90 lakh" },
      verdict: "Safety at a destination is a supply network, not a panic button."
    },
    {
      match: "find power outlets",
      startup: "PowerShare",
      pitch: "A powerbank-sharing network at transit hubs and cafés — pick up when your phone dies, drop it at the next stop.",
      who: "Travellers whose phone dies mid-sightseeing or between trains.",
      tags: ["travel", "hardware", "network"],
      how: [
        "Place kiosks with 20–40 powerbanks at stations, airports and partner cafés, unlocked by QR.",
        "Price by hours used and let users drop at any kiosk in the network.",
        "Add a lost-device charge and a map of live kiosk inventory."
      ],
      mvp: [
        "Kiosk and powerbank hardware",
        "QR unlock and billing",
        "10 kiosks across two transit hubs"
      ],
      model: "Rental fees, kiosk advertising and café partnership revenue.",
      price: "₹10/hour, ₹99/day, ₹299 lost-device charge.",
      gtm: "Railway stations, airports, malls and café chains.",
      moat: "Kiosk density and a drop-anywhere network.",
      risks: ["Hardware theft and damage", "Capex", "Kiosk real estate"],
      market: { tam: "₹800 Cr charging and powerbank rental", time: "8–12 months", capital: "₹80 lakh–₹1.5 Cr" },
      verdict: "A dead phone is the one travel emergency everyone has."
    },
    {
      match: "trusted doctors with clear costs",
      startup: "MedTravel",
      pitch: "A traveller medical helpline that finds a verified, English-speaking doctor nearby with the cost stated before the visit.",
      who: "International and out-of-state travellers who fall ill in a city they do not know.",
      tags: ["travel", "health", "marketplace"],
      how: [
        "Build a verified provider network with language, speciality, price range and insurance acceptance.",
        "Run a WhatsApp/phone triage that books the right provider and sends an upfront cost estimate.",
        "Add teleconsult as a first step and a follow-up check-in after treatment."
      ],
      mvp: [
        "Provider network in three tourist cities",
        "Triage and booking desk",
        "Cost estimate and payment flow"
      ],
      model: "Booking commission, insurer partnerships and a membership for frequent travellers.",
      price: "₹499 consultation; 12% booking commission.",
      gtm: "Hotels, travel insurers, tour operators and airport help desks.",
      moat: "Verified provider supply and language coverage.",
      risks: ["Medical liability", "Provider quality", "Seasonality"],
      market: { tam: "₹3,000 Cr travel health assistance", time: "8–12 months", capital: "₹50–80 lakh" },
      verdict: "Falling ill abroad is a navigation problem before it is a medical one."
    },
    {
      match: "regional menus",
      startup: "MenuLens",
      pitch: "Scan any regional menu and get it in your language, with dish explanations, allergens and a pronunciation guide.",
      who: "Interstate travellers staring at a menu in a script they cannot read.",
      tags: ["travel", "ai", "language"],
      how: [
        "Build OCR for Indian scripts plus a dish knowledge base with ingredients, spice level and allergens.",
        "Translate into the traveller's language and add audio pronunciation and a 'what to order' shortlist.",
        "Let restaurants upload a structured menu so travellers see it before arriving."
      ],
      mvp: [
        "OCR and translation for four scripts",
        "Dish database of 1,000 items",
        "Offline mode for poor connectivity"
      ],
      model: "Freemium app, restaurant listings and travel affiliate revenue.",
      price: "Free; ₹99/month for offline packs and allergy filters.",
      gtm: "Travel creators, tourism boards and restaurant associations.",
      moat: "Dish-level data and script OCR accuracy.",
      risks: ["OCR quality", "Commoditised translation", "Restaurant data collection"],
      market: { tam: "₹600 Cr travel language tools", time: "5–8 months", capital: "₹25–45 lakh" },
      verdict: "The menu is the last un-translated interface in travel."
    },
    {
      match: "authentic experiences beyond",
      startup: "LocalLoop",
      pitch: "Verified local insiders who design a half-day route around your interests — not a group tour bus.",
      who: "Travellers tired of the same five landmarks and the same guidebook.",
      tags: ["travel", "experiences", "marketplace"],
      how: [
        "Recruit and interview locals with deep neighbourhood knowledge, then certify them on safety and storytelling.",
        "Match by interest — food, craft, music, architecture — and co-create a route with fixed pricing and a meeting point.",
        "Add a post-experience review and a curated 'locals' shortlist' for each city."
      ],
      mvp: [
        "30 verified insiders in two cities",
        "Interest matching and booking",
        "Route templates and safety protocol"
      ],
      model: "20% commission on experiences; corporate offsite bookings.",
      price: "₹1,499–₹3,999 per half-day.",
      gtm: "Boutique hotels, travel creators and city tourism boards.",
      moat: "Vetted local supply and route quality.",
      risks: ["Inconsistent quality", "Safety and liability", "Seasonality"],
      market: { tam: "₹5,000 Cr experiential travel", time: "6–9 months", capital: "₹35–60 lakh" },
      verdict: "Authenticity scales through people, not inventory."
    }
  ],

  "Healthtech": [
    {
      match: "medicine prices vary wildly",
      startup: "MedPrice",
      pitch: "Compare the real price of the same medicine across nearby pharmacies, with generic equivalents and expiry-aware stock.",
      who: "Patients paying 30–50% more for the same molecule at the next pharmacy.",
      tags: ["healthtech", "pharmacy", "price"],
      how: [
        "Collect pharmacy-level prices through store partnerships and customer-submitted bills, normalised by brand, strength and pack.",
        "Show the cheapest nearby options plus equivalent generics with the same salt composition.",
        "Let users reserve for pickup and upload the bill to keep prices current."
      ],
      mvp: [
        "Drug and salt composition database",
        "Price comparison for 5,000 SKUs in one city",
        "Reserve-and-pickup flow"
      ],
      model: "Pharmacy referral fees, sponsored listings and a price-data API.",
      price: "Free to patients; ₹2,999/month pharmacy plan.",
      gtm: "Chronic-care patient groups, clinic pharmacies and neighbourhood pharmacy chains.",
      moat: "Crowdsourced price data at pack level.",
      risks: ["Price data freshness", "Pharmacy resistance", "Regulatory limits on drug advertising"],
      market: { tam: "₹2 lakh Cr pharma retail", time: "7–10 months", capital: "₹50–80 lakh" },
      verdict: "Drug prices are not secret; they are just not compared."
    },
    {
      match: "compare conflicting diagnoses",
      startup: "SecondRead",
      pitch: "A structured second opinion: your records, an independent specialist review, and a plain-language comparison of why the diagnoses differ.",
      who: "Patients with serious conditions who receive contradictory advice and do not know whom to trust.",
      tags: ["healthtech", "diagnosis", "telehealth"],
      how: [
        "Collect reports, imaging and prescriptions into a structured case file with a timeline of symptoms and tests.",
        "Route to an independent specialist in the same field who reviews the file and answers a fixed question set.",
        "Deliver a comparison memo: where the diagnoses diverge, what evidence is missing, and which test would settle it."
      ],
      mvp: [
        "Case-file intake and timeline builder",
        "Specialist panel of 30",
        "Comparison report template"
      ],
      model: "Per-review fee, with hospital and insurer partnerships.",
      price: "₹2,499–₹7,999 per second opinion.",
      gtm: "Oncology and cardiology patient groups, insurer case management and hospital discharge desks.",
      moat: "A specialist panel and structured case outcomes.",
      risks: ["Clinical liability", "Specialist supply", "Patients use it once"],
      market: { tam: "₹4,000 Cr second-opinion and telehealth", time: "8–12 months", capital: "₹60–90 lakh" },
      verdict: "The second opinion is valuable because it is structured, not because it is second."
    },
    {
      match: "emergency rooms lack systems",
      startup: "TriageFast",
      pitch: "A triage support layer that scores arriving patients on vitals and symptoms so the sickest are seen first.",
      who: "Emergency departments running first-come-first-serve; patients deteriorating in the waiting room.",
      tags: ["healthtech", "hospital", "triage"],
      how: [
        "Capture vitals and a short symptom set at arrival, then compute an ESI-style acuity score with a clear escalation rule.",
        "Show a live triage board to the clinical team with re-assessment timers for waiting patients.",
        "Log door-to-doctor times and deterioration events for audit and quality reporting."
      ],
      mvp: [
        "Triage scoring engine",
        "Waiting-room board and timers",
        "Audit dashboard"
      ],
      model: "Per-bed hospital SaaS plus implementation.",
      price: "₹50,000–₹2 lakh/month per hospital.",
      gtm: "Mid-sized private hospitals and trauma centres; start with one pilot ED.",
      moat: "Triage outcome data and clinical validation.",
      risks: ["Clinical validation needed", "Nurse workflow change", "Liability"],
      market: { tam: "₹3,000 Cr hospital operations software", time: "10–14 months", capital: "₹1–2 Cr" },
      verdict: "The waiting room is where the next avoidable death hides."
    },
    {
      match: "access patient medical histories",
      startup: "HealthVault",
      pitch: "A patient-owned record that pulls history from every hospital and shares it with a doctor through a consent link.",
      who: "Patients repeating tests because the new hospital cannot see the old file.",
      tags: ["healthtech", "records", "abdm"],
      how: [
        "Integrate with ABDM/ABHA and hospital HMIS systems to pull prescriptions, labs and discharge summaries into one timeline.",
        "Let the patient grant time-limited, revocable access to a specific doctor via a QR or link.",
        "Add an offline PDF pack for hospitals that are not yet digital."
      ],
      mvp: [
        "ABDM integration and hospital connectors",
        "Consent-based sharing",
        "Portable health timeline"
      ],
      model: "Free consumer vault; hospital integration fees; insurer partnerships.",
      price: "Free; ₹25,000–₹2 lakh hospital integration.",
      gtm: "ABDM sandbox partners, hospital chains and insurance claim teams.",
      moat: "Hospital integrations and patient consent graph.",
      risks: ["Hospital interoperability", "Privacy and security", "ABDM adoption pace"],
      market: { tam: "₹5,000 Cr health data infrastructure", time: "12–18 months", capital: "₹1.5–3 Cr" },
      verdict: "The patient should own the record, not the hospital that happened to be visited."
    },
    {
      match: "rural patients waste time traveling",
      startup: "SampleRun",
      pitch: "Doorstep sample collection in villages, with a daily pickup route to a certified lab and reports back on WhatsApp.",
      who: "Rural patients travelling 30–50 km for a basic blood test.",
      tags: ["healthtech", "diagnostics", "rural"],
      how: [
        "Train local phlebotomists and equip them with cold-chain sample boxes and a route app.",
        "Tie up with accredited labs for testing and return reports in the patient's language on WhatsApp.",
        "Add a mobile X-ray/ultrasound van on a weekly circuit for imaging tests."
      ],
      mvp: [
        "10 phlebotomists across 30 villages",
        "Cold-chain pickup and lab partner",
        "WhatsApp report delivery"
      ],
      model: "Per-test margin shared with the lab; government and insurer contracts.",
      price: "₹150–₹600 per test; ₹99 collection fee.",
      gtm: "Primary health centres, ASHA networks and district lab partners.",
      moat: "Village-level collection density and cold-chain reliability.",
      risks: ["Sample integrity", "Lab quality", "Low ticket economics"],
      market: { tam: "₹20,000 Cr diagnostics; rural access a large gap", time: "8–12 months", capital: "₹60–90 lakh" },
      verdict: "Bring the lab to the sample, not the patient to the lab."
    },
    {
      match: "not designed for women",
      startup: "Sakhi Diagnostics",
      pitch: "Women-only diagnostic visits with female phlebotomists, home collection and privacy-first transport.",
      who: "Women in conservative areas postponing tests because they cannot travel alone or face male staff.",
      tags: ["healthtech", "women", "diagnostics"],
      how: [
        "Build an all-women collection and sonography assistant team, with home visits and a female attendant.",
        "Offer private, appointment-only slots and a discreet report delivery channel.",
        "Partner with local transport providers vetted for women's safety for clinic visits that need equipment."
      ],
      mvp: [
        "Female phlebotomy team",
        "Home collection and privacy protocol",
        "Two-clinic partnership"
      ],
      model: "Per-test margin plus a subscription for antenatal and chronic panels.",
      price: "₹299–₹999 per visit; ₹149 collection fee.",
      gtm: "Women's self-help groups, gynaecologists and district health programmes.",
      moat: "A trusted all-women network in conservative geographies.",
      risks: ["Cultural access", "Staff safety", "Lab partnerships"],
      market: { tam: "₹4,000 Cr women's diagnostics", time: "8–12 months", capital: "₹50–80 lakh" },
      verdict: "Privacy is a clinical requirement, not a courtesy."
    },
    {
      match: "specialist doctors in smaller cities",
      startup: "SpecialistNow",
      pitch: "Tele-specialist appointments within 48 hours, supported by a local clinic room and a trained nurse for the examination.",
      who: "Tier-2/3 patients waiting three weeks or travelling to a metro for a cardiologist.",
      tags: ["healthtech", "telehealth", "specialists"],
      how: [
        "Recruit super-specialists for scheduled tele-slots and partner with local clinics that provide an exam room and nurse.",
        "Ship or use local diagnostic devices — ECG, stethoscope, ultrasound probe — so the consult is not just a video call.",
        "Close the loop with a local prescription, lab order and follow-up scheduled in the same flow."
      ],
      mvp: [
        "Specialist roster and booking",
        "10 partner clinics with nurse support",
        "Connected device kit"
      ],
      model: "Consultation fee share plus clinic and lab referral revenue.",
      price: "₹499–₹1,499 per consult; clinic fee ₹200.",
      gtm: "Local clinics, pharmacy chains and district hospital referral desks.",
      moat: "Specialist supply and clinic coverage outside metros.",
      risks: ["Specialist retention", "Clinical quality", "Device logistics"],
      market: { tam: "₹8,000 Cr specialist consultations", time: "9–12 months", capital: "₹80 lakh–₹1.5 Cr" },
      verdict: "Telemedicine fails without a room, a nurse and a device."
    },
    {
      match: "branded drugs dominate",
      startup: "GenericFirst",
      pitch: "Generic substitution made trustworthy: quality-test reports, bioavailability evidence and a doctor-facing switch tool.",
      who: "Patients overpaying 3–10x for brands; doctors unsure about generic quality.",
      tags: ["healthtech", "pharma", "generics"],
      how: [
        "Publish batch-level quality test results for generic manufacturers from accredited labs.",
        "Give doctors a substitution tool that maps brand to salt, dose and therapeutic equivalence with evidence.",
        "Offer patients a pharmacy switch with the same molecule at a lower price and a pharmacist review."
      ],
      mvp: [
        "Salt-mapping database",
        "Quality test reports for 100 generics",
        "Doctor substitution tool"
      ],
      model: "Pharmacy margin, manufacturer verification fees and insurer partnerships.",
      price: "10–15% of the price difference; free to doctors.",
      gtm: "Physician associations, insurer networks and corporate pharmacy programmes.",
      moat: "Independent quality data on generics.",
      risks: ["Doctor trust", "Manufacturer pushback", "Quality testing cost"],
      market: { tam: "₹2 lakh Cr pharma retail; substitution a large savings pool", time: "10–14 months", capital: "₹1–2 Cr" },
      verdict: "Generics do not need marketing; they need evidence."
    },
    {
      match: "hospitals hide procedure pricing",
      startup: "PriceMed",
      pitch: "Standard procedure prices and an itemised pre-admission estimate, plus a bill audit after discharge.",
      who: "Patients receiving a ₹2 lakh bill with no idea what was agreed.",
      tags: ["healthtech", "transparency", "insurance"],
      how: [
        "Build standard price ranges by procedure, city and hospital tier from actual bills and insurer data.",
        "Generate a pre-admission estimate with consumables, doctor fees and facility charges, signed by the hospital.",
        "Audit the final bill against the estimate and flag unexplained line items for negotiation or insurance review."
      ],
      mvp: [
        "Procedure price database",
        "Estimate generator",
        "Bill audit checklist and dispute pack"
      ],
      model: "Per-estimate fee, insurer partnerships and a share of verified savings.",
      price: "₹999 per estimate; 10% of recovered overcharges.",
      gtm: "Insurers, TPAs and corporate health benefits teams.",
      moat: "Actual bill data by procedure and hospital.",
      risks: ["Hospital resistance", "Data collection", "Liability on estimates"],
      market: { tam: "₹10 lakh Cr healthcare spend; price opacity a systemic pain", time: "10–14 months", capital: "₹1–2 Cr" },
      verdict: "The bill arrives after the leverage is gone; the estimate arrives before."
    },
    {
      match: "digital copies of medical records",
      startup: "RecordMe",
      pitch: "Walk into any hospital, walk out with your records digitised — reports, scans and prescriptions in one portable vault.",
      who: "Patients carrying folders of films and reports between specialists.",
      tags: ["healthtech", "records", "consumer"],
      how: [
        "Offer a hospital-desk and home service that scans, OCRs and indexes reports, prescriptions and imaging films.",
        "Structure the data into a searchable timeline and generate a specialist-ready summary.",
        "Share via a secure link with consent and export a print-ready pack."
      ],
      mvp: [
        "Scanning and OCR pipeline",
        "Record timeline and summary",
        "Secure sharing links"
      ],
      model: "Per-record digitisation fee plus a storage subscription.",
      price: "₹499 per 100 pages; ₹999/year storage.",
      gtm: "Hospital discharge desks, specialist clinics and home-collection partnerships.",
      moat: "Digitisation operations and structured record data.",
      risks: ["Privacy and security", "Scan quality", "Hospital cooperation"],
      market: { tam: "₹1,500 Cr personal health records", time: "7–10 months", capital: "₹40–70 lakh" },
      verdict: "The paper folder is the patient's only current health record."
    }
  ],

  "Other": [
    {
      match: "segregated waste is actually recycled",
      startup: "BinProof",
      pitch: "Track a household's segregated waste from bin to recycler, with weight and photo proof at every handoff.",
      who: "Citizens who segregate diligently and suspect it all gets mixed in the truck.",
      tags: ["civic", "waste", "verification"],
      how: [
        "Tag household bins with a QR and scan at collection, recording weight and a photo of the segregated bag.",
        "Scan again at the transfer station and the recycling facility, and reconcile the chain to flag mixing.",
        "Show residents a monthly diversion certificate and reward consistent segregation with municipal benefits."
      ],
      mvp: [
        "Bin QR and collector app",
        "Chain-of-custody dashboard",
        "Two-ward pilot with a recycler"
      ],
      model: "Municipal contracts, recycler fees and CSR sponsorship.",
      price: "₹30–₹60 per household/month; municipal pilot ₹10–25 lakh.",
      gtm: "Municipal solid-waste departments and resident welfare associations.",
      moat: "Verified diversion data and municipal relationships.",
      risks: ["Municipal procurement", "Collector compliance", "Contamination at source"],
      market: { tam: "₹2,000 Cr waste management software and services", time: "9–12 months", capital: "₹50–80 lakh" },
      verdict: "Segregation only survives if someone can prove what happened next."
    },
    {
      match: "detect underground leaks",
      startup: "LeakEar",
      pitch: "Acoustic sensors on the water network plus citizen reports that pinpoint a leak before it drains a colony's supply.",
      who: "Municipal water boards losing 40% of supply; residents facing dry taps.",
      tags: ["civic", "water", "iot"],
      how: [
        "Clamp acoustic loggers onto mains at intervals and detect leak signatures from vibration patterns.",
        "Correlate with citizen reports and pressure data to localise the leak to a 50-metre segment.",
        "Dispatch a repair crew and measure water recovered per fix to prove the ROI."
      ],
      mvp: [
        "10 sensor nodes on one zone",
        "Leak-detection dashboard",
        "Citizen reporting app"
      ],
      model: "Municipal subscription plus a share of water saved.",
      price: "₹15,000–₹25,000 per sensor/year; pilot ₹8–15 lakh.",
      gtm: "Water utilities in leak-prone cities and smart-city missions.",
      moat: "Leak-signature data by pipe material and age.",
      risks: ["Municipal sales cycles", "Sensor deployment", "Repair crew availability"],
      market: { tam: "₹3,000 Cr non-revenue water solutions", time: "10–14 months", capital: "₹80 lakh–₹1.5 Cr" },
      verdict: "The water is already being lost; the sensor just makes it visible."
    },
    {
      match: "on-demand arborist tech",
      startup: "TreeSafe",
      pitch: "Certified arborists on demand for hazardous trees, with a risk assessment and a pruning plan before monsoon.",
      who: "Residents and societies with branches over power lines and a municipality that takes a year.",
      tags: ["civic", "services", "safety"],
      how: [
        "Certify arborists on a risk-scoring protocol (species, lean, cracks, proximity to infrastructure).",
        "Dispatch a crew with insurance and a written pruning plan; coordinate with the local utility for power-line work.",
        "Run pre-monsoon assessment camps for societies and publish a tree-risk map."
      ],
      mvp: [
        "Certified arborist roster",
        "Risk assessment protocol",
        "Society and utility contracts"
      ],
      model: "Per-assessment and pruning fee; annual society contracts.",
      price: "₹1,499 assessment; ₹4,999–₹25,000 pruning.",
      gtm: "Housing societies, utilities and municipal parks departments.",
      moat: "Certified arborist supply and risk data.",
      risks: ["High-risk work liability", "Utility coordination", "Seasonality"],
      market: { tam: "₹800 Cr urban tree care", time: "7–10 months", capital: "₹30–50 lakh" },
      verdict: "A falling branch is an emergency; pruning it is a scheduled service."
    },
    {
      match: "e-waste pickup with instant rewards",
      startup: "Ecycle",
      pitch: "Doorstep e-waste pickup with instant UPI rewards, certified recycling and proof of data destruction.",
      who: "Households hoarding old phones and laptops because disposal is inconvenient.",
      tags: ["civic", "e-waste", "rewards"],
      how: [
        "Quote an instant value from a photo and model, then schedule a doorstep pickup with a weighing scale.",
        "Pay instantly via UPI and route devices to certified refurbishers or recyclers.",
        "Issue a data-destruction certificate for storage devices and a recycling certificate for the household."
      ],
      mvp: [
        "Photo-based valuation",
        "Pickup app and UPI payout",
        "Certified recycler partnership"
      ],
      model: "Refurbishment margin, recycler fees and brand take-back contracts.",
      price: "₹50–₹3,000 payout per device; free pickup.",
      gtm: "Apartment societies, office IT asset disposal and brand take-back programmes.",
      moat: "Certified recycling chain and household pickup density.",
      risks: ["Data security", "Device valuation", "Recycler compliance"],
      market: { tam: "₹4,000 Cr e-waste, mostly informal", time: "7–10 months", capital: "₹50–80 lakh" },
      verdict: "Make disposal pay better than the drawer."
    },
    {
      match: "societies manage monsoon waterlogging",
      startup: "DrainWatch",
      pitch: "Pre-monsoon drain audits, crowdsourced waterlogging reports and live alerts for the routes societies use daily.",
      who: "Residents wading through knee-deep water because drains were never cleaned.",
      tags: ["civic", "water", "community"],
      how: [
        "Audit and photograph every drain in a ward before monsoon, with a cleaning status and a responsible contractor.",
        "Collect resident reports with photos and GPS, and cluster them into a live waterlogging map.",
        "Sell the audit and alert layer to municipalities and societies, and publish a ward readiness score."
      ],
      mvp: [
        "Drain audit app and map",
        "Resident reporting and alerts",
        "Two-ward pilot"
      ],
      model: "Municipal contracts and society subscriptions; CSR funding.",
      price: "₹5,000/society/year; ₹5–10 lakh per ward audit.",
      gtm: "RWAs, ward councillors and municipal stormwater departments.",
      moat: "Ward-level drain condition data and resident reports.",
      risks: ["Municipal dependence", "Seasonality", "Report verification"],
      market: { tam: "₹1,000 Cr urban drainage services", time: "8–12 months", capital: "₹40–70 lakh" },
      verdict: "Waterlogging is predictable; the data just arrives too late."
    }
  ]
};
