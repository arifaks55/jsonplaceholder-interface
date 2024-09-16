import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';  // CSS dosyanızı buradan import edin

const container = document.getElementById('root');
const root = createRoot(container); // createRoot kullanıyoruz

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
