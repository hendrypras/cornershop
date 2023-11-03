import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ProductProvider } from './context/ProductContext.jsx';
import './styles/globals.scss';
import { Layout } from './components/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <Layout>
        <App />
      </Layout>
    </ProductProvider>
  </React.StrictMode>
);
