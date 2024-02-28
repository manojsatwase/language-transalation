import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import './bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>
);


