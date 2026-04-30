export default async function handler(req, res) {
    const { id } = req.query;

    const backendRes = await fetch(`${process.env.API_URL}/admin.categories/${id}`, {
        method: req.method,
        headers: {
            "Content-Type": "application/json",
            Authorization: req.headers.authorization || "",
        },
        body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
    });

    const data = await backendRes.json();
    res.status(backendRes.status).json(data);
}
