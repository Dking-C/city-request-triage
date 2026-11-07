export default {
  async fetch(request) {
    if (request.method !== "GET") {
      return Response.json(
        { error: "Only GET requests are supported." },
        { status: 405, headers: { Allow: "GET" } },
      );
    }

    const upstreamUrl = new URL(
      "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
    );
    upstreamUrl.search = new URLSearchParams({
      $select:
        "unique_key,created_date,agency,complaint_type,descriptor,borough,status",
      $order: "created_date DESC",
      $limit: "40",
    }).toString();

    try {
      const upstream = await fetch(upstreamUrl, {
        headers: { Accept: "application/json" },
      });
      const body = await upstream.text();
      const headers = {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        "Content-Type": "application/json; charset=utf-8",
      };

      if (!upstream.ok) {
        console.error("NYC Open Data returned an error", upstream.status, body);
        return Response.json(
          { error: `NYC Open Data returned HTTP ${upstream.status}.` },
          { status: 502, headers },
        );
      }

      return new Response(body, { status: 200, headers });
    } catch (error) {
      console.error("NYC Open Data request failed", error);
      return Response.json(
        { error: "The Vercel server could not reach NYC Open Data." },
        { status: 502 },
      );
    }
  },
};

