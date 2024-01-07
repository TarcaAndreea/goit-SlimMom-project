import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'Redux/store';
import HomePage from '../Pages/HomePage';
import RegisterPage from '../Pages/RegisterPage';
import Loginpage from '../Pages/LoginPage';
import ContactsPage from '../Pages/CalculatorPage';
import NotFoundPage from 'Pages/NotFoundPage';
import PrivateRoutes from './Routes/PrivateRoutes';

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};
