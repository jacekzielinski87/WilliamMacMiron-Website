// services/publicService.js
const API_URL = "https://wmm-1-0-0.onrender.com";

export const getLanguages = async () => {
  try {
    const response = await fetch(`${API_URL}/languages`);

    // Sprawdzamy czy nas nie zablokowali
    if (response.status === 403) {
      console.error("IP ZABLOKOWANE (403).");
      return []; // Zwracamy pustą listę, żeby strona nie wybuchła
    }

    if (!response.ok) return [];

    return await response.json();
  } catch (error) {
    console.error("Błąd połączenia:", error);
    return [];
  }
};
