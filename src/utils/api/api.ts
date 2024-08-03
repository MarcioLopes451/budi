import axios from 'axios';

const API_URL = 'http://localhost:5173/budi/';

export const register = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}register`, { email, password });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Access the AxiosError specific properties
      console.error('Error during registration:', error.response?.data);
      throw new Error(error.response?.data?.message || 'Registration failed');
    } else {
      console.error('Unexpected error:', error);
      throw new Error('Unexpected error during registration');
    }
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}login`, { email, password });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Access the AxiosError specific properties
      console.error('Error during login:', error.response?.data);
      throw new Error(error.response?.data?.message || 'Login failed');
    } else {
      console.error('Unexpected error:', error);
      throw new Error('Unexpected error during login');
    }
  }
};