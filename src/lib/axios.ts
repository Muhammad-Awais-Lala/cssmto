import axios from 'axios';

const baseURL = (import.meta as any).env?.VITE_API_BASE_URL as string | undefined;

export const apiClient = axios.create({
  baseURL: baseURL ?? 'http://localhost:8000',
  timeout: 150000, // 150 seconds 
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default apiClient;
