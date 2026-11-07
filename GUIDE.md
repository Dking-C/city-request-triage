# City Request Triage

A small portfolio prototype showing how a public service request can move from ingestion through validation, routing, prioritization, exception review, and reporting.

## Open the prototype

Open `city_request_triage.html` in a modern browser. It starts with synthetic demonstration records. Select **Load live 311 sample** to request up to 40 recent records from the NYC Open Data API, then select **Run triage workflow**. Export the processed queue as CSV if you want to inspect the output.

The live API call runs in the browser, so it needs internet access and the data portal must allow the request. If that is unavailable, the synthetic records still demonstrate the workflow.

## Stack

- NYC Open Data Socrata API: public source
- HTML, CSS, JavaScript: small client-side prototype
- Browser memory: demo queue and run log
- CSV: portable export for downstream review

The current prototype does not need n8n or Make to demonstrate the decision logic. Those tools become useful when you want scheduled ingestion, durable storage, and notifications. Airtable or a small database can replace browser memory when you add persistence.

## Workflow design

1. **Ingest:** request a bounded sample of recent 311 records.
2. **Validate:** missing identifiers, categories, or boroughs go to a human review queue.
3. **Route:** category and detail keywords suggest a team (DOT, DEP, DSNY, HPD, or NYPD).
4. **Prioritize:** demo keyword rules assign High, Medium, or Standard priority.
5. **Explain:** attach a reason to every routing decision so a reviewer can understand why a record moved.
6. **Review exceptions:** missing required fields, duplicate IDs, and unmatched categories are held for a person rather than silently routed.
7. **Report:** search and filter the queue, inspect counts and the run log, and download a CSV with decision reasons.

Routing rules are illustrative portfolio logic. They are not NYC policy, agency service levels, or a claim that requests will be sent to city staff. The prototype does not send messages or write to a city system.

## Good next improvements

- Move routing keywords into an editable rules table.
- Add durable deduplication across repeated imports with an idempotency key.
- Persist runs and changes in Airtable or Supabase.
- Add retry and error states around ingestion and notification steps.
- Connect a scheduled Make or n8n flow to ingest records and send a notification to a test inbox or Slack channel.
- Track manual handling time and exception rate on a fixed sample to support a before/after case study.

## Data source

[NYC Open Data: 311 Service Requests from 2020 to Present](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2020-to-Present/erm2-nwe9/about_data). The portal describes the dataset as daily updated and notes that records contain request details, responding agency, and geographic information without customer identifying information. The prototype fetches only a small recent sample and uses a subset of fields.

