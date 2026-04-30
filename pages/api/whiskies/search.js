import db from "../../../db.json";

const toSlug = (value = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const queryValue = Array.isArray(req.query.query)
    ? req.query.query[0]
    : req.query.query;

  if (!queryValue || queryValue.trim().length < 2) {
    return res.status(200).json([]);
  }

  const normalizedQuery = queryValue.trim().toLowerCase();
  const whiskies = Array.isArray(db?.whiskies) ? db.whiskies : [];

  const results = whiskies
    .filter((whisky) => whisky?.name?.toLowerCase().includes(normalizedQuery))
    .map((whisky) => ({
      ...whisky,
      title: whisky.name,
      slug: whisky.slug || toSlug(whisky.name),
    }));

  return res.status(200).json(results);
}
