const token_key = 'controlz_token';

export function setToken(token: string) {
    localStorage.setItem(token_key, token);
}

export function getToken() {
    return localStorage.getItem(token_key);
}

export function removeToken() {
    localStorage.removeItem(token_key);
}