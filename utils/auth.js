// utils/auth.js

export function getAuthHeader() {
    if (typeof window === "undefined") {
      return {};
    }
  
    const token = localStorage.getItem("token");
  
    return token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};
  }
  
  export function getUser() {
    if (typeof window === "undefined") {
      return null;
    }
  
    const user = localStorage.getItem("user");
  
    return user ? JSON.parse(user) : null;
  }
  
  export function isAdmin() {
    const user = getUser();
  
    return (
      user?.role === "ADMIN" ||
      user?.role === "EDITOR"
    );
  }