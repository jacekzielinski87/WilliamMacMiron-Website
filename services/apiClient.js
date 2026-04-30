export async function apiCLient(url, options ={}) {
    const token = typeof window !== "undefined"
    ? localStorage.getItem("token")
    : null;


return fetch(`${process.env.NEXT_PUBLIC.API.URL}${url}`,{
    ...options,
    headers:{
        "Content-Type": "application/json",
        ...(token && {Authorization: `Bearer ${token}`}),
        ...(options.headers || {}),    
    },
    });
}