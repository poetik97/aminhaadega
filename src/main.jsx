import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '/style/style.css';

console.log("React App iniciado com sucesso!");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
