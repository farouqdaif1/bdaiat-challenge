import axios from "axios";
const API_URL = "https://dummyjson.com/products";
export const fetchProducts = () => axios.get(API_URL);
