import axios from 'axios';

// const baseURL = process.env.NEXT_PUBLIC_API_URL + '/api';

const baseURL = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL + '/api'
  : '/api';

export const NextServer = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
