import axios from 'axios';
import config from '../config';

export const getCategories = () => axios.get(`${config.API_BASE_URL}/categories`);

export const getProducts = () => axios.get(`${config.API_BASE_URL}/products`);

export const getCart = () => axios.get(`${config.API_BASE_URL}/cart`);

export const addToCart = (productId) => axios.post(`${config.API_BASE_URL}/cart`, { productId });
export const getProductById = (id) => axios.get(`${config.API_BASE_URL}/products/${id}`);