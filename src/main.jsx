import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ProviderOnlyFavorites } from './context/onlyFavorites';
import { ProviderCategories } from './context/categories';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderCategories>
        <ProviderOnlyFavorites>
          <App />
        </ProviderOnlyFavorites>
      </ProviderCategories>
    </BrowserRouter>
  </React.StrictMode>
)
