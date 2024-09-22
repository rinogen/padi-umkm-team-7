import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext({
  token: null,
  username: null,
  isAuthenticated: false,
  setToken: () => {},
  login: () => {},
  loginWithGoogle: () => {},
  register: () => {},
  logout: () => {},
});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [username, setUsername] = useState(
    localStorage.getItem('username') || null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        'https://be-lb-pd-7.vercel.app/api/users/login',
        { username, password }
      );
      console.log('Login response:', response.data.data);
      setToken(response.data.data.token);
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('username', response.data.data.username);
      setUsername(response.data.data.username);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      const response = await axios.get(
        'https://be-lb-pd-7.vercel.app/api/users/google',
        { withCredentials: true }
      );
      setIsAuthenticated(false);
      setToken(response.data.data.token);
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('username', response.data.data.username);
      setUsername(response.data.data.username);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Google login failed', error);
      throw error;
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    if (storedToken) {
      setToken(storedToken);
      setUsername(storedUsername);
      setIsAuthenticated(true);
    }
  }, []);

  const register = async (username, password) => {
    try {
      await axios.post('https://be-lb-pd-7.vercel.app/api/users/registration', {
        username,
        password,
      });
      await login(username, password);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const logout = () => {
    setToken(null);
    setUsername(null);
    setIsAuthenticated(false);
    window.location.reload();
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        token,
        isAuthenticated,
        setToken,
        login,
        loginWithGoogle,
        register,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
