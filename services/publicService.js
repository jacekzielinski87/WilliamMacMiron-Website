// services/publicService.js
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://onrender.com";
const FALLBACK_LANGUAGES = [{ id: "en", code: "en", name: "English" }];

const toSlug = (value = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normalizeWhisky = (item = {}) => {
  const title = item.title || item.name || "";
  const aroma = typeof item.aroma === "object" ? item.aroma?.notes : item.aroma;
  const taste = typeof item.taste === "object" ? item.taste?.notes : item.taste;
  const finish = typeof item.finish === "object" ? item.finish?.notes : item.finish;
  const rating =
    item.rating ??
    (typeof item.aroma === "object" && typeof item.taste === "object" && typeof item.finish === "object"
      ? Math.round((Number(item.aroma?.score || 0) + Number(item.taste?.score || 0) + Number(item.finish?.score || 0)) / 3)
      : null);

  return {
    ...item,
    title,
    slug: item.slug || toSlug(title),
    aroma: aroma || "-",
    taste: taste || "-",
    finish: finish || "-",
    intensity: item.intensity || "-",
    rating: Number.isFinite(rating) ? rating : null,
  };
};

const safeJsonFetch = async (url, fallbackValue) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Błąd HTTP! Status: ${response.status} dla: ${url}`);
      return fallbackValue;
    }
    return await response.json();
  } catch (error) {
    console.error(`Błąd sieci dla: ${url}`, error);
    return fallbackValue;
  }
};

// --- EKSPORTOWANE FUNKCJE ---

export const getLanguages = async () => {
  try {
    const response = await fetch(`${API_URL}/languages`);
    // Jeśli serwer odrzuci (403), zwróć domyślne języki zamiast błędu
    if (!response.ok) return FALLBACK_LANGUAGES;
    return await response.json();
  } catch (error) {
    return FALLBACK_LANGUAGES;
  }
};


export const getMenu = async (langCode) => {
  if (!langCode) return null;
  return await safeJsonFetch(`${API_URL}/menu/${encodeURIComponent(langCode)}`, null);
};

export const searchItems = async (query) => {
  const trimmedQuery = (query || "").trim();
  if (trimmedQuery.length < 2) return [];

  // Poprawiony URL zgodnie z dokumentacją backendu
  const url = `${API_URL}/public/search?q=${encodeURIComponent(trimmedQuery)}&lang=pl`;
  const data = await safeJsonFetch(url, { content: [] });
  
  // Backend zwraca wyniki w polu 'content'
  const results = data.content || data;
  return Array.isArray(results) ? results.map(normalizeWhisky) : [];
};

export const getItem = async (slug) => {
  if (!slug) return null;
  // Zakładając endpoint /public/items/{slug} - typowy dla detali
  const url = `${API_URL}/public/items/${encodeURIComponent(slug)}?lang=pl`;
  const item = await safeJsonFetch(url, null);
  return item ? normalizeWhisky(item) : null;
};
