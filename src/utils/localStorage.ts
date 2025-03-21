// Save/retrieve local storage data:
import { LS_KEY } from '@/types/localstorage';

export const getLS = (key: keyof typeof LS_KEY) => {
  if (!key) return;
  return JSON.parse(localStorage.getItem(key) || JSON.stringify(null));
};

export const setLS = (key: keyof typeof LS_KEY, value: unknown) => {
  if (!key) return;
  return localStorage.setItem(key, JSON.stringify(value));
};

export const removeLS = (key: keyof typeof LS_KEY) => localStorage.removeItem(key);
