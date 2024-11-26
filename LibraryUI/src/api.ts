const BASE_URL = 'https://localhost:7130/library/api';

export const GET_CATEGORIES = `${BASE_URL}/categories`;
export const ADD_CATEGORY = `${BASE_URL}/categories`;
export const UPDATE_CATEGORY = (id: number) => `${BASE_URL}/categories/${id}`;
export const GET_CATEGORY_BY_ID = (id: number) => `${BASE_URL}/categories/${id}`;
export const DELETE_CATEGORY_BY_ID = (id: number) => `${BASE_URL}/categories/${id}`;

export const GET_BOOKS = `${BASE_URL}/books`;
export const ADD_BOOK = `${BASE_URL}/books`;
export const UPDATE_BOOK = (id: number) => `${BASE_URL}/books/${id}`;
export const GET_BOOK_BY_ID = (id: number) => `${BASE_URL}/books/${id}`;
export const DELETE_BOOK_BY_ID = (id: number) => `${BASE_URL}/books/${id}`;