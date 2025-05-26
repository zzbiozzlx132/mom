import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // <= Đổi import ở đây
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter> {/* <= Đổi component ở đây */}
      <App />
    </HashRouter>
  </StrictMode>
);