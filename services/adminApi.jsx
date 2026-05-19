// services/adminApi.js

const API = "/api/admin";

function authHeaders() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function getCategories() {
  const res = await fetch(`${API}/categories`, {
    headers: authHeaders(),
  });

  return res.json();
}

export async function publishCategory(id) {
  return fetch(`${API}/categories/${id}/publish`, {
    method: "POST",
    headers: authHeaders(),
  });
}

export async function archiveCategory(id) {
  return fetch(`${API}/categories/${id}/archive`, {
    method: "POST",
    headers: authHeaders(),
  });
}

export async function createItem(data) {
  return fetch(`${API}/items`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });

    return res.json();
}