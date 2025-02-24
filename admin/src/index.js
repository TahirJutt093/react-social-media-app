import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
    <Routes>
        <Route path="./components/AdminDashboard/App" element={<App/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
