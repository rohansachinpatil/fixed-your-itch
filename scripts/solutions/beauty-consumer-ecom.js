// Startup blueprints for Beauty & Personal Care, Consumer Services and E-commerce.
// `match` is a lowercase substring of the scraped problem title; order does not matter.

module.exports = {
  "Beauty & Personal Care": [
    {
      match: "makeup artists ignore diverse skin tones",
      startup: "Rang Studio",
      pitch: "A makeup-artist marketplace indexed by skin tone and undertone, so brides book artists who have actually worked on complexions like theirs.",
      who: "Brides and event clients with medium-to-deep skin tones who have been 'fair-shaded' by artists trained on one default palette.",
      tags: ["marketplace", "beauty", "trust"],
      how: [
        "Build artist portfolios that are searchable by shade range, undertone and skin type, with unedited before/after photos taken under the same lighting.",
        "Certify artists on a diverse-shade curriculum developed with makeup educators, and publish the foundation/concealer lines each artist carries.",
        "Let clients book a paid 20-minute shade consultation before the event, with the fee adjusted against the final booking."
      ],
      mvp: [
        "Artist profile schema: shade range, undertone specialities, kit list, verified photos",
        "Two-city supply of 40 certified artists",
        "Booking and consultation flow with deposits"
      ],
      model: "15–20% booking commission, paid artist certification, and brand sampling fees for inclusive shade lines.",
      price: "₹1,500–₹2,500 consultation; marketplace take rate 15% on ₹8,000–₹35,000 bookings.",
      gtm: "Launch in wedding-heavy cities through bridal communities and makeup-education institutes; publish a public 'shade-blind' salon index for PR.",
      moat: "A structured, verified portfolio of artists by shade range plus a certification standard that artists advertise.",
      risks: ["Supply of genuinely skilled artists is thin", "Photo verification can be gamed", "Seasonality of wedding demand"],
      market: { tam: "₹12,000 Cr+ Indian beauty services, with bridal makeup the highest-ticket slice", time: "5–7 months", capital: "₹40–70 lakh" },
      verdict: "Inclusive beauty is a supply-verification problem before it is a branding problem."
    },
    {
      match: "saree draping professionals",
      startup: "Drape",
      pitch: "On-demand saree draping at home in 60 minutes, with a fixed menu of drape styles and morning slots that actually exist.",
      who: "Working women with 7–10 am functions, weddings and office ethnic days who need a skilled draper at short notice.",
      tags: ["on-demand", "beauty", "hyperlocal"],
      how: [
        "Recruit and train drapers on a standard style menu (Nivi, dhoti, lehenga-drape, mumty) with a 45-minute service-level target.",
        "Offer pre-booked early-morning slots and a 90-minute express window priced separately, with live draper tracking.",
        "Add a pin-and-finish guarantee: if the drape slips within four hours, a draper returns free."
      ],
      mvp: [
        "WhatsApp booking with four fixed drape styles and slot inventory",
        "20 trained drapers across two zones",
        "Style guide cards the customer keeps"
      ],
      model: "Per-visit fee plus a monthly 'event wardrobe' pass; stylist supply is gig-based.",
      price: "₹499–₹899 per drape; ₹199 extra for pre-7 am; ₹1,999 for a five-event pass.",
      gtm: "Partner with salon chains, bridal boutiques and office women's networks; rank on 'saree draping near me'.",
      moat: "Trained draper density per zone and a reliability score that is hard to replicate quickly.",
      risks: ["Very low ticket size", "Quality varies by draper", "Demand clusters on wedding dates"],
      market: { tam: "₹1,800 Cr unorganised saree-draping and event-grooming services", time: "4–6 months", capital: "₹20–35 lakh" },
      verdict: "A narrow, recurring need with almost no organised supply — density is the whole game."
    },
    {
      match: "preferred stylist",
      startup: "ChairLock",
      pitch: "Booking software that only sells a slot when the requested stylist can actually deliver it — with duration-aware buffers and a late-start guarantee.",
      who: "Salon customers who keep getting reassigned, and salon owners losing regulars to inconsistent service.",
      tags: ["saas", "beauty", "scheduling"],
      how: [
        "Model each service's real duration distribution per stylist, then block calendar time from the actual p90 rather than the menu estimate.",
        "Expose stylist-specific booking pages and hold a 10-minute buffer after overrun-prone services.",
        "Publish a live queue to the customer and auto-issue a credit if the chair is more than 10 minutes late."
      ],
      mvp: [
        "Stylist calendar and service-duration templates",
        "Customer booking page with stylist lock",
        "Late-start credit rule engine"
      ],
      model: "₹2,500–₹6,000 monthly SaaS per salon plus a small per-booking fee on prepaid appointments.",
      price: "₹3,999/month standard; ₹9,999/month for multi-outlet chains.",
      gtm: "Start with 25 independent salons in one city; use the customer-facing guarantee as the wedge against generic booking apps.",
      moat: "Per-stylist duration data and switching costs once the salon's calendar and clients live here.",
      risks: ["Salons resist exposing real calendars", "Integration with existing POS", "Staff turnover resets schedules"],
      market: { tam: "₹9,000 Cr salon services; scheduling software is a ₹600 Cr wedge", time: "6–9 months", capital: "₹50–80 lakh" },
      verdict: "The broken promise is a data problem — sell the guarantee, not the calendar."
    },
    {
      match: "skincare products fail",
      startup: "Barrier Lab",
      pitch: "Skincare formulated and stability-tested for Indian humidity, pollution and UV — with the test data printed on every product.",
      who: "Urban Indian consumers who bought imported actives that pill, break down or irritate in 30°C-plus, 80% humidity conditions.",
      tags: ["d2c", "beauty", "formulation"],
      how: [
        "Run a climate-chamber stability programme at 35°C/80% RH and publish texture, pH and actives-retention results per batch.",
        "Design lightweight, film-forming textures and barrier-first actives for polluted, high-UV cities, with a 4-week usage patch test.",
        "Sell a skin-climate diagnostic that maps humidity, pollution and UV exposure to a three-step routine."
      ],
      mvp: [
        "Three SKUs: cleanser, barrier serum, SPF 50 gel",
        "Stability and patch-test reports per batch",
        "Diagnostic quiz and routine builder"
      ],
      model: "D2C margin plus a replenishment subscription; later, formulation licensing to other brands.",
      price: "₹499–₹1,299 per SKU; ₹1,999 routine bundle.",
      gtm: "Dermatologist and esthetician sampling, climate-data-led content, and quick-commerce listing once repeat rates hold.",
      moat: "Climate-specific clinical data and a formulation library that imported brands cannot claim.",
      risks: ["Crowded D2C skincare market", "Regulatory claims limits", "High CAC without a diagnostic wedge"],
      market: { tam: "₹20,000 Cr Indian skincare market; climate-fit segment nascent", time: "9–12 months", capital: "₹80 lakh–₹1.5 Cr" },
      verdict: "Formulation for the actual climate is a defensible product claim, not a marketing angle."
    },
    {
      match: "mehendi artists",
      startup: "Mehndi Now",
      pitch: "Fixed-price mehendi artists for small home celebrations, priced by design complexity instead of wedding-season hype.",
      who: "Families hosting 10–40 guest gatherings — engagements, poojas, baby showers — who cannot justify wedding-rate artists.",
      tags: ["marketplace", "beauty", "events"],
      how: [
        "Publish a five-tier design menu with fixed prices and time estimates, so a small function can book without negotiation.",
        "Recruit part-time artists and fill their weekday and afternoon capacity with small-event demand.",
        "Add a henna-paste quality check and a patch test, plus a photo proof of the finished design."
      ],
      mvp: [
        "Design menu and price calculator",
        "Artist availability calendar by pincode",
        "Prepaid booking with a 2-hour arrival window"
      ],
      model: "20% commission on bookings; artist training and starter-kit sales.",
      price: "₹1,200 for four hands (simple) to ₹6,500 for bridal-style; ₹299 per extra guest.",
      gtm: "Instagram design gallery, society WhatsApp groups, and partnerships with small-event decorators and caterers.",
      moat: "A price-menu brand and artist utilisation data in off-peak slots.",
      risks: ["Seasonal demand", "Cash-heavy artist base", "Quality inconsistency"],
      market: { tam: "₹900 Cr mehendi services, mostly informal", time: "4–6 months", capital: "₹15–25 lakh" },
      verdict: "Small celebrations are underserved because the industry only prices for weddings."
    },
    {
      match: "beard grooming",
      startup: "Stubble & Co",
      pitch: "A standardised beard-grooming service inside existing barbershops — trained staff, modern tool kits and a fixed price menu.",
      who: "Men aged 22–40 who want shape, fade and beard design without upscale lounge prices.",
      tags: ["services", "beauty", "franchise"],
      how: [
        "Train neighbourhood barbers on six beard styles with a tool kit, sanitation protocol and 30-minute service standard.",
        "List certified shops with transparent prices and before/after photos; let customers book a specific barber.",
        "Sell a monthly grooming membership that works across partner shops."
      ],
      mvp: [
        "Certification kit and training module",
        "20 partner shops in one city",
        "Booking page with style menu"
      ],
      model: "Certification fees, product kit sales, and a share of membership revenue.",
      price: "₹249–₹499 per service; ₹799 monthly membership for two visits.",
      gtm: "Hyperlocal Instagram before/after content and shop-front co-branding; expand shop-by-shop in dense clusters.",
      moat: "A trained barber network and a recognisable service standard inside existing real estate.",
      risks: ["Low differentiation from barbershops", "Training attrition", "Price-sensitive segment"],
      market: { tam: "₹6,000 Cr men's grooming services", time: "5–8 months", capital: "₹30–50 lakh" },
      verdict: "Asset-light standardisation beats building premium lounges."
    },
    {
      match: "30-minute waits",
      startup: "SlotTrue",
      pitch: "A live salon queue that tells you the real start time and pays you back when the chair runs late.",
      who: "Salon customers who book a 6 pm slot and still wait 30 minutes; salon owners who lose walk-ins to unpredictable throughput.",
      tags: ["saas", "beauty", "queue"],
      how: [
        "Instrument each chair with a lightweight tablet flow that timestamps service start and finish, building real throughput data.",
        "Predict start times from the queue and service mix, then show customers a live 'you'll be seated at 6:12' status.",
        "Auto-apply a credit when the predicted time slips beyond 10 minutes, funded from the salon's marketing budget."
      ],
      mvp: [
        "Chair-side check-in/check-out app",
        "Customer live-status page",
        "Late-credit ledger"
      ],
      model: "SaaS per chair with a performance fee tied to redeemed credits.",
      price: "₹999/month per chair; ₹25,000/month for a 10-chair salon.",
      gtm: "Sell through salon equipment distributors and existing booking partners; lead with the queue, not the software.",
      moat: "Chair-level service-time data that improves prediction with every appointment.",
      risks: ["Salon staff skip check-ins", "Hardware handling", "Small salons resist monthly fees"],
      market: { tam: "₹9,000 Cr salon services; queue software a ₹400 Cr opportunity", time: "6–8 months", capital: "₹40–60 lakh" },
      verdict: "If you can predict the wait, you can sell the fix."
    },
    {
      match: "lab-grade raw ingredients",
      startup: "Lab Pantry",
      pitch: "A certified small-quantity marketplace for cosmetic ingredients, with COAs, safety data sheets and formulation recipes.",
      who: "Home skincare makers and small indie brands who cannot meet supplier minimums or verify purity.",
      tags: ["marketplace", "beauty", "supply"],
      how: [
        "Stock 150 cosmetic-grade ingredients in 50g–1kg packs with batch-linked COA and SDS documents.",
        "Publish tested starter formulas with percentages and stability notes, so buyers can actually use what they purchase.",
        "Add a lab-testing add-on for indie brands that need microbial and heavy-metal reports."
      ],
      mvp: [
        "Catalog with COA/SDS downloads",
        "Repackaging line with batch traceability",
        "Formula library and community"
      ],
      model: "Product margin, testing fees, and a paid formulator community.",
      price: "₹150–₹900 per pack; ₹2,500 per microbial test.",
      gtm: "SEO on ingredient + formulation queries, DIY skincare creators, and Instagram education.",
      moat: "Supplier relationships, batch documentation and a trusted formulation library.",
      risks: ["Regulatory classification of cosmetic ingredients", "Inventory complexity", "Small order economics"],
      market: { tam: "₹1,200 Cr indie beauty inputs and DIY segment", time: "6–9 months", capital: "₹35–60 lakh" },
      verdict: "Trust documentation is the product; the ingredients are the attach."
    },
    {
      match: "elderly people find at-home beautician",
      startup: "GlowVisits",
      pitch: "At-home beauty and grooming for seniors, delivered by therapists trained in mobility, skin fragility and dignity.",
      who: "Seniors and people with limited mobility who cannot travel to a salon; their adult children who book and pay.",
      tags: ["services", "eldercare", "beauty"],
      how: [
        "Train therapists on safe positioning, fragile-skin products, and a 45-minute low-movement service protocol.",
        "Offer a fixed menu — haircut, manicure, facial, beard trim — with a caregiver present option and photo consent rules.",
        "Build recurring monthly visits with the family, billed to the adult child living elsewhere."
      ],
      mvp: [
        "10-therapist trained network in one city",
        "Senior-safe product kit",
        "Family booking and visit report"
      ],
      model: "Per-visit fee plus a monthly subscription; B2B contracts with retirement communities.",
      price: "₹899–₹1,999 per visit; ₹4,999 quarterly plan.",
      gtm: "Tie-ups with elder-care agencies, retirement homes and geriatric clinics; the payer is the NRI or out-of-city child.",
      moat: "Trained therapist supply and trust with families, which compounds into recurring schedules.",
      risks: ["High service cost per visit", "Liability with fragile clients", "Therapist retention"],
      market: { tam: "₹2,500 Cr senior care services; beauty a small but high-intent slice", time: "6–9 months", capital: "₹30–50 lakh" },
      verdict: "The buyer and the user are different people — build for both."
    },
    {
      match: "hair color treatments damage",
      startup: "ColorSafe",
      pitch: "A colour service with a strand test, staged lightening and an eight-week damage guarantee — sold as a salon certification.",
      who: "Clients spending ₹3,000–8,000 on colour who end up with breakage; salons losing repeat visits to damage complaints.",
      tags: ["services", "beauty", "guarantee"],
      how: [
        "Mandate a strand test and hair-health score before any bleach, with a staged two-session protocol for dark-to-light lifts.",
        "Bundle bond-builder treatment into the service price and a low-cost aftercare kit, instead of upselling ₹3,000 serums.",
        "Back the service with an eight-week breakage guarantee: free corrective treatment or a partial refund."
      ],
      mvp: [
        "Hair-health scoring protocol and app",
        "Certified salon network",
        "Guarantee terms and aftercare kit"
      ],
      model: "Certification and audit fees from salons, plus aftercare product margin.",
      price: "₹4,999–₹12,000 per colour service; ₹15,000/year salon certification.",
      gtm: "Sell to premium salons as a damage-reduction standard; consumers search for 'guaranteed hair colour'.",
      moat: "A published protocol and guarantee that a discount salon cannot credibly copy.",
      risks: ["Guarantee abuse", "Salon protocol drift", "Ingredient cost pressure"],
      market: { tam: "₹4,000 Cr salon colour services", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "A guarantee forces the protocol — and the protocol is the moat."
    }
  ],

  "Consumer Services": [
    {
      match: "evening childcare",
      startup: "SitterHour",
      pitch: "Verified evening childcare by the hour, with police checks, insurance and a two-hour minimum.",
      who: "Dual-income parents with late shifts, school events or evening plans, and no grandparent backup.",
      tags: ["marketplace", "childcare", "trust"],
      how: [
        "Recruit caregivers with verified ID, police verification, reference checks and a paediatric first-aid certificate.",
        "Offer 2–5 hour evening slots with check-in/check-out photos, a activity log and live arrival tracking.",
        "Carry accident insurance per session and run a replacement guarantee if a sitter cancels."
      ],
      mvp: [
        "Vetted supply of 50 sitters",
        "In-app booking with 2-hour minimum",
        "Session report and emergency contacts"
      ],
      model: "Commission per booking plus a monthly family membership for priority slots.",
      price: "₹249–₹349 per hour; ₹499/month membership.",
      gtm: "Apartment communities, preschool parent groups and corporate HR benefits.",
      moat: "Local verified supply and trust density; parents rebook the same sitter.",
      risks: ["Safety liability", "High vetting cost", "Sitter no-shows"],
      market: { tam: "₹8,000 Cr urban childcare, with evening gaps underserved", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "Trust is expensive to build and therefore valuable once built."
    },
    {
      match: "digital proof for in-warranty",
      startup: "ProofOfCare",
      pitch: "A warranty wallet that turns a photo of any bill into a retrievable, claimable product record.",
      who: "Households losing warranty claims because the bill faded or the card is missing.",
      tags: ["consumer", "warranty", "fintech-adjacent"],
      how: [
        "Scan or forward invoices; OCR extracts product, serial number, purchase date and warranty terms into a searchable wallet.",
        "Store service and repair records against each product, with reminders before warranty expiry.",
        "Generate a claim pack (invoice, warranty, service history) and route it to the brand's service desk."
      ],
      mvp: [
        "Invoice OCR and product matching",
        "Warranty expiry reminders",
        "Shareable claim PDF"
      ],
      model: "Freemium consumer app; brand SaaS for claims processing; affiliate revenue on extended warranties and repairs.",
      price: "Free for 20 products; ₹499/year for unlimited; ₹15,000/month brand dashboard.",
      gtm: "App-store SEO on 'warranty tracker', partnerships with appliance brands and service aggregators.",
      moat: "A user's product and service graph plus brand integrations.",
      risks: ["OCR accuracy across bill formats", "Brands may not accept digital proof", "Low willingness to pay"],
      market: { tam: "₹3,000 Cr appliance service market; warranty leakage a measurable pain", time: "5–8 months", capital: "₹35–60 lakh" },
      verdict: "Own the proof and you own the repair moment."
    },
    {
      match: "valet customers",
      startup: "ValetCam",
      pitch: "A valet operations layer with photo check-in, geofenced parking and live car status for the customer.",
      who: "Malls, restaurants and hotels running valet; customers anxious about where their car went.",
      tags: ["b2b", "mobility", "trust"],
      how: [
        "Issue a digital valet ticket with four-corner photos, odometer and fuel level at handover.",
        "Track the parked location by geofence and surface 'parked / requested / arriving' status to the customer.",
        "Flag unauthorized movement with a geofence alert and keep a timestamped chain of custody."
      ],
      mvp: [
        "Valet app with photo capture",
        "Customer status page via QR",
        "Venue dashboard and audit log"
      ],
      model: "Per-venue SaaS plus a per-transaction fee.",
      price: "₹15,000–₹40,000/month per venue; ₹5 per car.",
      gtm: "Sell to mall operators and restaurant groups; pilot at two high-volume venues and use damage-claim reduction as the ROI story.",
      moat: "Venue contracts and the audit trail that becomes the liability shield.",
      risks: ["Venue sales cycles", "Valet staff adoption", "Low willingness to pay outside premium venues"],
      market: { tam: "₹600 Cr organised valet operations", time: "6–9 months", capital: "₹30–50 lakh" },
      verdict: "Liability reduction is an easier sale than customer delight."
    },
    {
      match: "pet owners find trusted home-stay",
      startup: "PetNest",
      pitch: "Verified home boarding for pets — a real family home, daily photo updates and insurance, instead of a cage.",
      who: "Pet owners travelling for work or holidays who refuse kennels.",
      tags: ["marketplace", "pets", "trust"],
      how: [
        "Certify host homes with a safety audit, pet-free-of-hazards checklist and a meet-and-greet before booking.",
        "Match by pet temperament, size and medical needs; require vaccination records and a vet-on-call tie-up.",
        "Send scheduled photo/video updates and a daily wellbeing log; include emergency vet cover."
      ],
      mvp: [
        "50 audited host homes",
        "Meet-and-greet workflow",
        "Daily update feed and vet hotline"
      ],
      model: "20% commission per night; host certification fee; insurance attach.",
      price: "₹600–₹1,200 per night; ₹299 certification.",
      gtm: "Vet clinics, pet-grooming salons and breed-specific communities; content on kennel alternatives.",
      moat: "Audited host supply and repeat trust with pet parents.",
      risks: ["Pet safety incidents", "Host churn", "Seasonal demand"],
      market: { tam: "₹2,000 Cr pet services, boarding growing fast", time: "5–8 months", capital: "₹25–45 lakh" },
      verdict: "Pet parents pay for peace of mind, not square footage."
    },
    {
      match: "same-day personalized gifting",
      startup: "LastMinute",
      pitch: "A gifting concierge on WhatsApp that assembles a personalised gift from local inventory and delivers it in two hours.",
      who: "Professionals who remember an anniversary at 4 pm and need to look thoughtful by 8 pm.",
      tags: ["commerce", "gifting", "concierge"],
      how: [
        "Curate a local inventory of gifts, flowers, cakes and personalisation options with real-time stock from partner stores.",
        "Take a short brief (relationship, budget, occasion) on WhatsApp and return three options in minutes.",
        "Batch orders to nearby stores for two-hour delivery and add a handwritten note and photo proof."
      ],
      mvp: [
        "WhatsApp concierge and 30-item curated catalog",
        "Partner network of 25 local stores",
        "Two-hour delivery slot engine"
      ],
      model: "Product margin plus a concierge fee; corporate gifting contracts.",
      price: "₹999–₹4,999 per gift; ₹199 concierge fee.",
      gtm: "Instagram ads around occasions, office admin networks, and calendar-reminder integrations.",
      moat: "Local inventory density and a concierge playbook that produces good taste at speed.",
      risks: ["Thin margins", "Delivery SLA failures", "Occasion seasonality"],
      market: { tam: "₹8,000 Cr gifting market; same-day personalised is a premium niche", time: "4–6 months", capital: "₹20–35 lakh" },
      verdict: "Sell the save, not the gift."
    },
    {
      match: "circle markets",
      startup: "Spotly",
      pitch: "See and reserve a real parking spot before you enter a crowded market, using lots that already exist.",
      who: "Shoppers and visitors to dense commercial areas who lose 20 minutes circling.",
      tags: ["mobility", "parking", "marketplace"],
      how: [
        "Onboard private lots, society basements and temple/market parking with an attendant app that updates occupancy.",
        "Show live availability by area and let drivers reserve a 30-minute hold with a small fee.",
        "Price dynamically by demand and share revenue with the lot owner."
      ],
      mvp: [
        "Attendant occupancy app",
        "Consumer search and reservation",
        "UPI settlement for lot owners"
      ],
      model: "Booking fee commission plus SaaS for lot owners.",
      price: "₹20–₹60 per reservation; 10% of parking revenue.",
      gtm: "Start with three high-congestion market clusters; partner with merchant associations who want footfall.",
      moat: "Exclusive lot inventory in dense zones — the supply side is the moat.",
      risks: ["Fragmented lot ownership", "Attendants skip updates", "Municipal resistance"],
      market: { tam: "₹5,000 Cr urban parking, mostly unorganised", time: "7–10 months", capital: "₹60–90 lakh" },
      verdict: "Parking is a supply-contract business disguised as an app."
    },
    {
      match: "silk, embroidery and designer clothing",
      startup: "Heirloom Care",
      pitch: "Specialist cleaning for silk, embroidery and designer wear, with fabric-specific protocols, photo documentation and insurance.",
      who: "Owners of ₹15,000-plus sarees, lehengas and suits who have lost a garment to a neighbourhood dry cleaner.",
      tags: ["services", "logistics", "premium"],
      how: [
        "Tag each garment by fabric, embellishment and colour-fastness, then route to a protocol (solvent, hand-finish, no-spin).",
        "Photograph before and after, flag pre-existing damage, and insure each piece up to a declared value.",
        "Offer doorstep pickup in a garment box, a 5–7 day turnaround, and a rewash guarantee."
      ],
      mvp: [
        "Fabric intake protocol and tagging",
        "Central specialised cleaning unit",
        "Pickup/delivery in two cities"
      ],
      model: "Per-garment cleaning fee, restoration services, and seasonal storage subscriptions.",
      price: "₹499–₹1,499 per garment; ₹299 storage per month.",
      gtm: "Partnerships with bridal boutiques, designer stores and tailor shops; trust content on fabric care.",
      moat: "Protocol knowledge, trained finishers and insurance-backed trust.",
      risks: ["Damage liability", "Logistics handling", "Capacity constraints"],
      market: { tam: "₹3,500 Cr premium garment care", time: "6–9 months", capital: "₹50–80 lakh" },
      verdict: "Premium garments need a specialist, not a faster dry cleaner."
    },
    {
      match: "appliance technicians overcharge",
      startup: "FixFair",
      pitch: "Transparent appliance repair with a capped diagnosis fee, a public parts price index and payment released only after the fix works.",
      who: "Households quoted ₹4,500 for a ₹900 part, with no way to verify.",
      tags: ["services", "repair", "transparency"],
      how: [
        "Publish a parts price index by model and a fixed diagnosis fee that is waived if the repair is booked.",
        "Send a verified technician who logs the fault code and part number in-app; the customer approves the quote before work starts.",
        "Hold payment in escrow for 48 hours and require a 90-day repair warranty."
      ],
      mvp: [
        "Parts price database for top 20 appliance models",
        "Technician app with quote approval",
        "Escrow and warranty workflow"
      ],
      model: "Fixed service fee plus parts margin; extended warranty plans.",
      price: "₹299 diagnosis; repairs ₹599–₹2,999; 90-day warranty included.",
      gtm: "SEO on error codes and model numbers, plus society service camps.",
      moat: "A proprietary parts-price and failure dataset that makes quotes credible.",
      risks: ["Technician incentive to overcharge", "Parts sourcing", "Model coverage breadth"],
      market: { tam: "₹12,000 Cr appliance repair market", time: "7–10 months", capital: "₹50–90 lakh" },
      verdict: "Price transparency is the product; escrow makes it enforceable."
    },
    {
      match: "domestic help quits suddenly",
      startup: "HomeStandby",
      pitch: "On-call vetted household help for the week your cook disappears — a backup plan, not a full-time hire.",
      who: "Working couples whose household runs on one domestic worker and collapses when they quit.",
      tags: ["services", "household", "subscription"],
      how: [
        "Build a pool of verified part-time cooks, cleaners and nannies who want extra shifts.",
        "Sell a standby membership that guarantees a replacement within 24 hours for a defined set of tasks.",
        "Standardise recipes and cleaning checklists so a substitute can step in without a long handover."
      ],
      mvp: [
        "Verified backup pool in two zones",
        "24-hour replacement SLA",
        "Task checklists and family preferences profile"
      ],
      model: "Monthly membership plus per-shift fees when used.",
      price: "₹499/month standby; ₹399 per 4-hour shift.",
      gtm: "Apartment WhatsApp groups, HR benefits and existing maid-agency partnerships.",
      moat: "A standby pool large enough to honour the SLA — a density business.",
      risks: ["SLA failures damage trust", "Worker reliability", "Membership churn if unused"],
      market: { tam: "₹20,000 Cr domestic help market; backup is an unserved wedge", time: "6–9 months", capital: "₹30–50 lakh" },
      verdict: "Sell insurance-like peace of mind on top of an informal labour market."
    },
    {
      match: "animal rescue help",
      startup: "RescueLine",
      pitch: "One GPS-aware number for injured strays — it finds the nearest rescue NGO, vet or municipal van and dispatches the right one.",
      who: "Good samaritans who spot an injured animal and do not know whom to call.",
      tags: ["social", "animals", "dispatch"],
      how: [
        "Aggregate verified rescuers, NGOs, vets and municipal animal vans by service area and capability.",
        "Triage the case with three questions and dispatch to the nearest capable responder, with a live status to the caller.",
        "Log outcomes and response times, and route donations to the rescues that actually show up."
      ],
      mvp: [
        "Directory and dispatch console",
        "Caller web app with photo upload",
        "Responder WhatsApp workflow"
      ],
      model: "Grants and donations, plus vet/ambulance referral fees; municipal contracts.",
      price: "Free to citizens; ₹5,000–₹25,000/month NGO tooling.",
      gtm: "Animal welfare communities, municipal animal welfare boards, and vet clinics.",
      moat: "Responder network coverage and outcome data.",
      risks: ["Fragmented, volunteer-run supply", "Funding dependence", "Dispatch reliability"],
      market: { tam: "₹800 Cr animal welfare services, largely donation-funded", time: "6–9 months", capital: "₹25–40 lakh" },
      verdict: "A coordination layer can save lives without owning a single ambulance."
    }
  ],

  "E-commerce": [
    {
      match: "items unavailable",
      startup: "ShelfCheck",
      pitch: "Live shelf inventory from neighbourhood stores, so shoppers can check stock and reserve before leaving home.",
      who: "Shoppers making wasted trips; small retailers losing sales to 'out of stock' walkouts.",
      tags: ["retail", "inventory", "local"],
      how: [
        "Integrate with billing/POS systems and a lightweight stock-count app for stores without one.",
        "Expose a consumer search by pincode with 'in stock now' confidence and a free 2-hour hold.",
        "Track walk-in conversion for retailers so the integration pays for itself."
      ],
      mvp: [
        "POS connectors for three billing systems",
        "Consumer stock search",
        "Reservation and pickup confirmation"
      ],
      model: "Retailer SaaS per store plus promoted placement.",
      price: "₹999–₹2,499/month per store; free for consumers.",
      gtm: "Start with electronics and pharmacy where stock-outs hurt most; sell through distributor networks.",
      moat: "Store-level inventory data and POS integrations.",
      risks: ["Inventory accuracy", "Small retailers resist digitisation", "Marketplace competition"],
      market: { tam: "₹40 lakh+ kirana and specialty stores; retail software a ₹2,000 Cr market", time: "8–12 months", capital: "₹60 lakh–₹1 Cr" },
      verdict: "The data already exists at the counter — the product is making it searchable."
    },
    {
      match: "price negotiation and bulk discounts",
      startup: "Negotiate",
      pitch: "An offer-and-counter layer for online retail, with volume tiers and clearance pricing built in.",
      who: "Shoppers who miss bargaining; D2C brands sitting on slow-moving or near-expiry stock.",
      tags: ["commerce", "pricing", "marketplace"],
      how: [
        "Give brands a rules engine to set floor prices, volume tiers and expiry-based discounts.",
        "Let shoppers make an offer or start a group buy; the engine auto-accepts, counters or expires.",
        "Settle the order on the brand's existing checkout so no new payment rail is needed."
      ],
      mvp: [
        "Offer widget for D2C storefronts",
        "Rules engine and counter-offer logic",
        "Group-buy link sharing"
      ],
      model: "Success fee on incremental sales plus a SaaS tier for brands.",
      price: "3–5% of negotiated GMV; ₹4,999/month brand plan.",
      gtm: "Land 30 D2C brands with excess inventory; consumer launch through group-buy deals.",
      moat: "Pricing-response data across brands and categories.",
      risks: ["Brands fear price erosion", "Thin margins", "Marketplace giants can copy"],
      market: { tam: "₹1.5 lakh Cr online retail; negotiation a wedge into D2C", time: "6–9 months", capital: "₹50–80 lakh" },
      verdict: "India never stopped bargaining — online retail just forgot how."
    },
    {
      match: "bruised fruits and vegetables",
      startup: "FreshGrade",
      pitch: "Quality-graded produce for quick commerce, with a pack-side photo and a no-questions refund if the grade is missed.",
      who: "Quick-commerce shoppers who pay a premium and receive bruised produce.",
      tags: ["food", "quality", "quick-commerce"],
      how: [
        "Grade produce at the dark store into A/B/C with a size, firmness and blemish standard, and photograph each packed bag.",
        "Route A-grade to express orders, B-grade to discounted 'value' baskets, and C-grade to processing partners.",
        "Guarantee the grade at delivery with instant credit if it fails."
      ],
      mvp: [
        "Grading rubric and pack-station camera",
        "B-grade value basket line",
        "Instant credit workflow"
      ],
      model: "Supply produce to quick-commerce platforms at a grading premium; run own value baskets.",
      price: "8–12% grading premium; ₹49–₹99 value baskets.",
      gtm: "Sell into two quick-commerce dark stores as a pilot, then expand city by city.",
      moat: "Grading standards and cold-chain handling data that reduce wastage.",
      risks: ["Perishable inventory risk", "Platform disintermediation", "Grading labour cost"],
      market: { tam: "₹80,000 Cr fresh produce retail; grading a quality wedge", time: "6–9 months", capital: "₹70 lakh–₹1.2 Cr" },
      verdict: "Quick commerce optimised speed; the next battle is consistency."
    },
    {
      match: "verify product authenticity",
      startup: "BatchCheck",
      pitch: "Scan the batch code before you buy — authenticity, expiry and manufacturer verified at the unit level.",
      who: "Beauty and personal-care buyers on marketplaces who fear counterfeits.",
      tags: ["trust", "beauty", "authentication"],
      how: [
        "Issue serialised QR/batch codes to brands at packaging, with a scan ledger that detects duplicates and out-of-territory stock.",
        "Let shoppers scan in-app or via the e-commerce listing to see authenticity, manufacture and expiry details.",
        "Alert brands to suspicious scan clusters and provide a takedown evidence pack."
      ],
      mvp: [
        "Code-generation and brand onboarding",
        "Consumer scan app",
        "Duplicate-scan alert dashboard"
      ],
      model: "Per-code fee, brand SaaS, and verification-as-a-service for marketplaces.",
      price: "₹0.80–₹2 per code; ₹25,000/month brand dashboard.",
      gtm: "Start with 10 indie beauty brands sold on marketplaces; use counterfeit seizures as proof.",
      moat: "Brand code inventory and a scan network that gets smarter with volume.",
      risks: ["Brands resist unit-level coding", "Consumers may not scan", "Counterfeiters copy QR codes"],
      market: { tam: "₹15,000 Cr beauty e-commerce; authentication a trust layer", time: "8–12 months", capital: "₹60 lakh–₹1 Cr" },
      verdict: "If a buyer can verify one scan, the counterfeit economy loses its edge."
    },
    {
      match: "oversized wasteful packaging",
      startup: "RightSize",
      pitch: "Right-sized, reusable packaging for e-commerce — engineered per order, not picked from three box sizes.",
      who: "E-commerce warehouses over-boxing small orders; eco-conscious shoppers buried in plastic.",
      tags: ["sustainability", "logistics", "packaging"],
      how: [
        "Feed order dimensions into a cartonisation algorithm that selects or cuts the smallest viable mailer.",
        "Offer a reusable mailer with a ₹50 deposit that is collected on the next delivery.",
        "Report packaging waste and cost saved per 1,000 orders to the brand."
      ],
      mvp: [
        "Cartonisation API and box-size catalogue",
        "Reusable mailer with deposit tracking",
        "Waste dashboard"
      ],
      model: "Packaging supply margin plus a per-order optimisation fee.",
      price: "₹6–₹18 per order; reusable mailer ₹35 with ₹50 deposit.",
      gtm: "Target D2C brands with sustainability commitments and 5,000+ monthly orders.",
      moat: "Order-profile data and a deposit-return network.",
      risks: ["Deposit return logistics", "Warehouse integration effort", "Cost pressure"],
      market: { tam: "₹60,000 Cr e-commerce logistics; packaging a ₹4,000 Cr slice", time: "7–10 months", capital: "₹60–90 lakh" },
      verdict: "Packaging is a cost line and a brand signal at the same time."
    },
    {
      match: "return online purchases outside",
      startup: "ReturnDrop",
      pitch: "A 24/7 locker network for e-commerce returns, with drop-off in two minutes at the corner store.",
      who: "9-to-6 professionals who cannot wait at home for a pickup slot.",
      tags: ["logistics", "returns", "network"],
      how: [
        "Install smart lockers in kirana stores and society gates, with barcode-based drop-off and size-based compartments.",
        "Integrate with marketplaces to generate a return label and auto-notify the courier for bulk pickup.",
        "Compensate the host store per parcel and track chain of custody to the warehouse."
      ],
      mvp: [
        "50 lockers in one city",
        "Barcode drop-off flow",
        "Marketplace return-label integration"
      ],
      model: "Per-parcel handling fee from marketplaces plus locker advertising.",
      price: "₹25–₹45 per return; free to consumers.",
      gtm: "Sign two marketplaces for reverse-logistics volume, then expand the locker network.",
      moat: "Locker density and host-store relationships.",
      risks: ["Locker capex", "Marketplace concentration", "Parcel damage disputes"],
      market: { tam: "₹1.2 lakh Cr e-commerce; returns 8–12% of GMV", time: "9–12 months", capital: "₹1–2 Cr" },
      verdict: "Returns are the unglamorous half of e-commerce, and still unbuilt."
    },
    {
      match: "hidden shipping fees",
      startup: "TrueTotal",
      pitch: "The landed price before you commit — shipping, handling and platform fees surfaced at product-list level.",
      who: "Budget shoppers who abandon checkout when a ₹499 item becomes ₹749.",
      tags: ["commerce", "transparency", "browser"],
      how: [
        "Compute landed cost from pincode, weight, seller and payment method, then display it on the listing page.",
        "Ship as a browser extension and a price-comparison site that ranks by total cost, not sticker price.",
        "Track fee changes over time and alert users when a seller quietly raises shipping."
      ],
      mvp: [
        "Extension for three major marketplaces",
        "Landed-cost engine",
        "Fee-history tracker"
      ],
      model: "Affiliate commissions, promoted honest sellers, and a data API for consumer advocates.",
      price: "Free to consumers; affiliate revenue per redirected purchase.",
      gtm: "Launch on Product Hunt and frugal-living communities; publish a 'hidden fee index' for press.",
      moat: "Fee-data history and comparison SEO.",
      risks: ["Marketplace terms of service", "Affiliate dependency", "Extension distribution"],
      market: { tam: "₹1.5 lakh Cr online retail; fee transparency a media and affiliate play", time: "4–6 months", capital: "₹15–30 lakh" },
      verdict: "The sticker price is a lie; being the honest number is a brand."
    },
    {
      match: "fashion products look different",
      startup: "FitReel",
      pitch: "Short video reviews from shoppers with the same body measurements, embedded on the product page.",
      who: "Online fashion buyers burned by photos that hide fit, fabric and colour.",
      tags: ["fashion", "ugc", "fit"],
      how: [
        "Incentivise buyers to record a 15-second review with height, size worn and a fit rating.",
        "Match reviews to the shopper's measurements and show only relevant clips on the product page.",
        "Sell the widget to brands with a return-rate dashboard."
      ],
      mvp: [
        "Review capture flow and measurement profile",
        "Embeddable widget",
        "Fit-match ranking"
      ],
      model: "Brand SaaS plus a per-video bounty.",
      price: "₹9,999/month per brand; ₹100 per accepted video.",
      gtm: "Start with 20 D2C apparel brands; use return-rate reduction as the sales pitch.",
      moat: "A measurement-tagged review library that compounds.",
      risks: ["Cold-start content", "Brand control concerns", "Video moderation cost"],
      market: { tam: "₹60,000 Cr online fashion; returns are a ₹6,000 Cr cost pool", time: "6–9 months", capital: "₹40–70 lakh" },
      verdict: "Fit content is the cheapest return-reduction technology available."
    },
    {
      match: "large families get wholesale grocery",
      startup: "FamilyBulk",
      pitch: "Wholesale grocery tiers for large households, with monthly staples delivered at distributor prices.",
      who: "Joint families and 6+ member households buying 20kg staples at retail rates.",
      tags: ["grocery", "commerce", "subscription"],
      how: [
        "Build a monthly staples basket with volume tiers that unlock at 10kg, 25kg and 50kg.",
        "Pool orders from nearby households to hit distributor minimums and pass the discount through.",
        "Lock a monthly subscription with a delivery window and a price guarantee."
      ],
      mvp: [
        "Staples SKUs with tiered pricing",
        "Neighbourhood pooling engine",
        "Monthly subscription and delivery route"
      ],
      model: "Margin on staples plus a subscription fee.",
      price: "5–12% below retail; ₹99/month delivery plan.",
      gtm: "Apartment clusters and joint-family WhatsApp groups; start with atta, rice, oil and pulses.",
      moat: "Local pooling density and supplier terms.",
      risks: ["Grocery margins are thin", "Working-capital intensity", "Quick-commerce competition"],
      market: { tam: "₹40 lakh Cr grocery; bulk household a niche wedge", time: "7–10 months", capital: "₹60–90 lakh" },
      verdict: "Aggregate demand at the household level and the distributor margin comes back."
    },
    {
      match: "rural residents receive doorstep",
      startup: "GaonDrop",
      pitch: "Village-level delivery through a trusted local shop, with address normalisation and pooled last-mile routes.",
      who: "Rural shoppers forced to travel 10–20 km to a district hub for every parcel.",
      tags: ["rural", "logistics", "commerce"],
      how: [
        "Onboard kirana shops as pickup points and equip them with a parcel app and OTP handover.",
        "Normalise rural addresses using landmarks, phone numbers and geo-pins at the point of order.",
        "Pool parcels from multiple couriers into one daily route per cluster."
      ],
      mvp: [
        "50 village pickup points",
        "Address normalisation flow",
        "Courier aggregation and route sheet"
      ],
      model: "Per-parcel last-mile fee from couriers/marketplaces plus a commission on assisted orders.",
      price: "₹20–₹40 per parcel; 3% on assisted purchases.",
      gtm: "Partner with one marketplace and two regional couriers; start in one district with dense village clusters.",
      moat: "Village-level partner network and address data.",
      risks: ["Low parcel density", "Cash handling", "Partner reliability"],
      market: { tam: "₹8,000 Cr rural last-mile, growing with e-commerce penetration", time: "9–12 months", capital: "₹80 lakh–₹1.5 Cr" },
      verdict: "The last mile in rural India is a person, not a route."
    }
  ]
};
