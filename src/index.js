import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { DataContextProvider } from './context/DataContext';
import { ModelContextProvider } from './context/UIContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <DataContextProvider>
  <ModelContextProvider>
  <React.StrictMode>
    <Router >
      <App />
    </Router>
  </React.StrictMode>
  </ModelContextProvider>
  </DataContextProvider>
  </AuthContextProvider>
);