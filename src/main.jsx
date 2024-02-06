import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import Root from './routes/root.jsx';
import Contact from './routes/contact.jsx';
import ErrorPage from './ErrorPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/contacts/:contactId', element: <Contact /> },
      { path: '/signup', element: <App /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />} />
        <Route path="/contacts/:contactId" element={<Contact />} />
        <Route path="/signup" element={<App />} />
      </Routes>
    </RouterProvider>
  </React.StrictMode>
);
