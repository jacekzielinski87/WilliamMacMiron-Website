export default async function handler(req, res) {
    try {
      const backendRes = await fetch(
        `${process.env.API_URL}/admin/items`,
        {
          method: req.method,
  
          headers: {
            "Content-Type": "application/json",
            Authorization:
              req.headers.authorization || "",
          },
  
          body:
            req.method !== "GET"
              ? JSON.stringify(req.body)
              : undefined,
        }
      );
  
      const data = await backendRes.json();
  
      res
        .status(backendRes.status)
        .json(data);
    } catch (err) {
      console.error(err);
  
      res.status(500).json({
        error: "Server error",
      });
    }
  }