import axios from 'axios';

// Axios instance — uses Vite proxy in dev, absolute URL in prod
const api = axios.create({
  baseURL: 'https://drt-solar-backend.onrender.com/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// ── Contact ──────────────────────────────────────────────────────────────────
export const submitContact = (data) => api.post('/contact', data).then((r) => r.data);
export const submitContactForm = submitContact; // alias
export const getEnquiries = () => api.get('/contact/enquiries').then((r) => r.data);

// ── Products ─────────────────────────────────────────────────────────────────
export const getProducts = (category = '') =>
  api.get('/products', { params: category ? { category } : {} }).then((r) => r.data);
export const getProductById = (id) => api.get(`/products/${id}`).then((r) => r.data);

// ── Testimonials ──────────────────────────────────────────────────────────────
export const getTestimonials = () => api.get('/testimonials').then((r) => r.data);

// ── Newsletter ────────────────────────────────────────────────────────────────
export const submitNewsletter = (data) => api.post('/newsletter', data).then((r) => r.data);
export const subscribeNewsletter = submitNewsletter; // alias

export default api;
