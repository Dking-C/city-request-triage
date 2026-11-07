# City Request Triage

A browser based portfolio prototype that turns a small public 311 request sample into a prioritized, reviewable work queue.

## Try it

Open the [hosted prototype](https://city-request-triage.vercel.app). It starts with synthetic demo records. Use **Load live 311 sample** to fetch up to 40 recent requests through the Vercel API route, or **Import CSV** to load an export, then choose **Run triage workflow**. Export the resulting queue as CSV.

The live request runs through `api/requests.js` on Vercel, which fetches NYC Open Data server-side and caches a small response briefly. No API key is required. For a local static preview, double-click [`start_local_server.bat`](start_local_server.bat); use synthetic demo records or CSV import there. The local Python server does not run the Vercel API route.

## What it demonstrates

- Fetch a bounded public-data sample through a same-origin Vercel API route.
- Apply category and keyword routing rules.
- Assign priorities using transparent prototype rules.
- Explain each routing decision with a reason.
- Catch missing fields, duplicate IDs, and unmatched categories for human review.
- Search and filter the queue, record the run, and export decision reasons with the data.

Routing rules and priorities are illustrative. This prototype does not represent NYC policy, contact city staff, or write to a city system. See [`GUIDE.md`](GUIDE.md) for the workflow design, stack, limitations, and next improvements.

## Data

[NYC Open Data: 311 Service Requests from 2020 to Present](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2020-to-Present/erm2-nwe9/about_data)

