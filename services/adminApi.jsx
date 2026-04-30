export async function getCategories() {
    const res = await fetch("/api/admin/categories");
    return res.json();
}

export async function getCategory(id) {
    const res = await fetch (`/apr/admin/categories/${id}`);
    return res.json();
}

export async function updateCategory(id, data) {
    return fetch(`/api/admin/categories/${id}`,{
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
});
}

export async function publishCategory(id) {
    return fetch(`/api/admin/categories/${id}/publish`,{
        method: "POST",
    });
}

export async function archiveCategory(id) {
    return fetch(`/api/admin/categories/${id}/archive`,{
        method: "POST",
    });
}



 