# Financial Metrics & Tracking Framework

**Added pass 5, 2026-08-16.** The Exit Readiness Plan ([PE-ACQUISITION-THESIS.md](PE-ACQUISITION-THESIS.md)) names five headline metrics a growth equity investor's initial screen checks against. This document breaks that out into the fuller set of financial and operating metrics a hybrid software-and-services business like Growth99 should be tracking on an ongoing basis — both because a real investor's diligence will go several layers deeper than the headline five, and because these are the metrics that let the business actually manage toward the targets rather than just report on them after the fact. Organized by category; every acronym is defined at first use.

## 1. Growth & Revenue

- **Annual recurring revenue (ARR) and monthly recurring revenue (MRR)** — the core size-of-business number, tracked both in total and split between platform/SaaS (Software-as-a-Service) revenue and managed-services revenue. A blended total hides the mix question that determines the valuation multiple; the split is the more useful number to actually manage against.
- **Revenue growth rate** — year-over-year, and sequentially quarter-over-quarter to catch inflection points earlier than an annual view would.
- **The ARR bridge (or ARR waterfall)** — the reconciliation of how recurring revenue moved in a period: new-business ARR (from newly signed customers), expansion ARR (upsells and cross-sells into the existing base), contraction ARR (downgrades), and churned ARR (lost customers). This single view is more diagnostic than any single growth number, because it shows whether growth is coming from new logos, from the existing base, or both — and whether the leaks are concentrated in downgrades or full cancellations.
- **Bookings versus recognized revenue** — relevant if any portion of the business sells on annual prepay or multi-month contracts; bookings lead revenue recognition and are an earlier signal of momentum.

## 2. Retention & Churn

- **Gross revenue retention (GRR)** — the percentage of recurring revenue retained from existing customers over a period, counting only cancellations and downgrades, with expansion revenue excluded. This is the "floor" — it can never exceed 100%.
- **Net revenue retention (NRR)** — GRR plus expansion revenue from upsells and cross-sells; NRR above 100% means the existing customer base is growing in dollar terms even before counting any new logos. GRR and NRR are frequently conflated but tell different stories: a business can have strong NRR because a handful of large accounts are expanding fast, while still bleeding smaller accounts underneath — worth tracking both, not just the blended NRR figure referenced in the Exit Readiness Plan.
- **Logo churn versus revenue churn** — the percentage of customer accounts lost versus the percentage of revenue lost; these diverge when churn is concentrated in smaller or larger accounts specifically. Given the customer base is mostly small, single-location practices, logo churn is likely to run meaningfully higher than revenue churn, and that gap is itself worth watching over time.
- **Cohort retention curves** — retention plotted separately for each signup vintage (e.g., every customer who joined in a given month, tracked forward), rather than one blended churn rate for the whole customer base. This is the most direct way to test whether the post-October-2024 leadership transition and any subsequent product or service changes are actually improving retention, since newer cohorts can be compared directly against older ones.
- **Churn reason coding** — distinguishing voluntary cancellations (a customer actively decides to leave) from involuntary churn (a failed payment, an expired card, a practice that closed entirely). These require different fixes: voluntary churn points to product or service problems, involuntary churn often points to billing-process fixes that are comparatively easy wins.

## 3. Unit Economics & Sales Efficiency

- **Customer acquisition cost (CAC)** — the fully-loaded cost of sales and marketing spend required to acquire one new paying customer, ideally broken out by channel (paid advertising, organic/inbound, referral, outbound sales) since blended CAC can mask a channel that's become uneconomical.
- **CAC payback period** — how many months of a new customer's gross margin it takes to recover the cost of acquiring them; shorter is better and more capital-efficient.
- **Customer lifetime value (LTV)** — the total gross margin a customer is expected to generate over the life of the relationship, typically estimated as average revenue per customer times gross margin percentage, divided by the churn rate. The ratio of LTV to CAC (commonly expected to be 3-to-1 or better in healthy SaaS businesses) is a standard single-number efficiency check.
- **The "Magic Number"** — net new ARR generated in a quarter, divided by the sales and marketing spend in the prior quarter. A quick, widely-used read on go-to-market efficiency that's worth tracking alongside CAC payback rather than instead of it.
- **Sales cycle length, win rate, and average contract value (ACV)** — the underlying sales-motion metrics that roll up into CAC and growth rate; useful for diagnosing *why* CAC or growth is moving, not just that it moved.

## 4. Margin & Profitability

- **Gross margin, split by revenue line** — platform/SaaS revenue margin versus managed-services revenue margin, tracked separately rather than blended. This is the number that most directly answers the "software company or agency" question raised throughout this vault, and it's actionable in a way the blended figure isn't.
- **Contribution margin by product or tier** — useful once there's more than one meaningfully different offering (e.g., the AI-driven product versus a baseline tier versus premium account-managed service), to understand which parts of the business are actually profitable on a standalone basis.
- **EBITDA margin (earnings before interest, taxes, depreciation, and amortization, as a percentage of revenue)** — the standard operating-profitability proxy, and the target already established in the Exit Readiness Plan. Best tracked alongside its components: sales and marketing spend, research and development/product spend, and general and administrative overhead, each as a percentage of revenue, so a change in the margin number can be traced to a specific driver.
- **The "Rule of 40"** — a widely used single-number growth equity heuristic stating that revenue growth rate plus profit margin (commonly EBITDA margin) should sum to roughly 40% or more. It's a useful way to combine the growth and profitability targets in the Exit Readiness Plan into one check: a business growing at the low end of the target range needs correspondingly stronger margin to clear the combined bar, and vice versa.

## 5. Customer Health & Concentration

- **Total customer count and its growth rate**, segmented by practice size/tier, since a small number of large accounts behaves very differently from a large number of small ones.
- **Revenue concentration** — the percentage of total revenue coming from the largest handful of customers, or from any single franchise or multi-location ownership group. This vault's earlier research flagged this as an open question given Growth99's scale likely keeps concentration low, but it should be confirmed and tracked rather than assumed.
- **Customer satisfaction signals** — net promoter score (NPS) or equivalent survey data, plus support-ticket volume and resolution time, as leading indicators that typically move before churn does.
- **Product usage and feature adoption**, especially for the AI-driven lead-response product and any premium tiers — usage depth is generally a better predictor of retention than revenue alone, and is the data source needed to make the AI product's impact provable, per the Exit Readiness Plan.

## 6. Cash & Working Capital

- **Cash balance and runway** — likely a lower-priority concern if the business is already EBITDA-positive, but still worth tracking, particularly through any period of investment in the levers described in the Exit Readiness Plan.
- **Deferred revenue / billings** — a leading indicator of forward bookings wherever any portion of the business collects payment ahead of service delivery (e.g., annual contracts).
- **Days sales outstanding (DSO)** — a measure of collection efficiency; rising DSO can be an early signal of customer financial distress before it shows up as outright churn, which is a meaningful signal given the customer base is small, cash-sensitive businesses.

## 7. Services-Specific Operational Metrics

Because a meaningful share of the business is delivered through account managers and campaign staff rather than pure software, standard SaaS metrics alone won't capture the full picture:

- **Utilization rate** — the percentage of account-manager and delivery-staff time that's productive/billable versus idle or administrative, a direct input into the services gross margin.
- **Revenue per account manager (or per full-time delivery employee)** — a productivity metric that should trend upward if the automation levers described in the Exit Readiness Plan are working.
- **Services gross margin, tracked as its own line separate from platform gross margin** — this is arguably the single most important number in the whole framework for this specific business, since it's the number that will show whether the services side of the business is a genuine profit center, a necessary loss-leader that drives retention, or a drag that needs restructuring.

## How This Connects to the Exit Readiness Plan

The five headline metrics in the Exit Readiness Plan (revenue growth rate, CAC/payback, gross margin, EBITDA margin, and NRR/churn) are the subset of this framework that a growth equity investor's initial screen is most likely to check first. The rest of this framework is what makes those five numbers trustworthy and actionable rather than just asserted — cohort retention curves are what make an NRR figure credible, the split of gross margin by revenue line is what makes the >75% target meaningful rather than a blended number that could be hiding a weak underlying mix, and the services-specific metrics are what make the margin-expansion levers in the plan actually executable rather than aspirational.
