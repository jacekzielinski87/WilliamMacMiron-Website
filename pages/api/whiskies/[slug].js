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

  const rawSlug = Array.isArray(req.query.slug) ? req.query.slug[0] : req.query.slug;
  if (!rawSlug) {
    return res.status(400).json({ message: "Missing slug" });
  }

  const whiskies = Array.isArray(db?.whiskies) ? db.whiskies : [];
  const whisky = whiskies.find((item) => toSlug(item?.name || "") === rawSlug);

  if (!whisky) {
    return res.status(404).json({ message: "Whisky not found" });
  }

  return res.status(200).json({
    ...whisky,
    title: whisky.name,
    slug: rawSlug,
  });
}
