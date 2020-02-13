import decode from 'jwt-decode';

export function isLoggedIn() {
  const token = getStorageItem('token');
  return !!token && !isTokenExpired(token);
}

export function getStorageItem(key) {
  return JSON.parse(localStorage.getItem(key) || '{}');
}

export function setStorageItem(key, data) {
  return localStorage.setItem(key, JSON.stringify(data));
}

export function deleteItem(key) {
  return localStorage.removeItem(key);
}

export function getToken(token) {
  return decode(token);
}

export function isTokenExpired(token) {
  try {
    const decoded = decode(token.accessToken);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    console.error('Token Expired!');
    return false;
  }
}
