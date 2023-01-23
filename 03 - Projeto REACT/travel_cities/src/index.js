import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CitiesDashboard from './components/CitiesDashboard';
import CitiesList from './components/CitiesList';
import Cities from './components/Cities';

const root=ReactDOM.createRoot( document.getElementById('root'));
root.render(
  /*<React.StrictMode>
    {/*<App></App>
  </React.StrictMode>,*/
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />} >
          <Route path='citiesDashboard' element={<CitiesDashboard />} />
          <Route path='citiesDashboard/citiesList' element={<CitiesList />} />
          <Route path='citiesDashboard/citiesList/cities' element={<Cities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
 
);
