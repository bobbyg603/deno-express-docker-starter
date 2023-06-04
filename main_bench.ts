const stagingUrl = Deno.env.get("STAGING_URL") || "http://localhost:5090";

Deno.bench("Single User", async () => {
    await fetch(`${stagingUrl}/users/2`);
});

Deno.bench("All Users", async () => {
    await fetch(`${stagingUrl}/users`);
});