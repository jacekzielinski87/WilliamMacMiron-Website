export function getAuthHeader() {
    if(typeof window === 'undefined') return {};

    const token = localStorage.getItem('token');

    return token 
    ? {Authorization: `Bearer ${token}`}
    :{};
}