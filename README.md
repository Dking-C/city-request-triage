# City Request Triage

A browser based portfolio prototype that turns a small public 311 request sample into a prioritized, reviewable work queue.

## Try it

Open [`index.html`](index.html) in a modern browser. The page starts with synthetic demo records. Use **Load live 311 sample** to fetch up to 40 recent requests from NYC Open Data, or **Import CSV** to load an export, then choose **Run triage workflow**. Export the resulting queue as CSV.

No build tools or API key are required. The live sample needs an internet connection and browser access to the data portal. If the API is unavailable, import a CSV export or use the synthetic demo records.

## What it demonstrates

- Ingest a bounded sample from a public API.
- Apply category and keyword routing rules.
- Assign priorities using transparent prototype rules.
- Explain each routing decision with a reason.
- Catch missing fields, duplicate IDs, and unmatched categories for human review.
- Search and filter the queue, record the run, and export decision reasons with the data.

Routing rules and priorities are illustrative. This prototype does not represent NYC policy, contact city staff, or write to a city system. See [`GUIDE.md`](GUIDE.md) for the workflow design, stack, limitations, and next improvements.

## Data

[NYC Open Data: 311 Service Requests from 2020 to Present](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2020-to-Present/erm2-nwe9/about_data)

