import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom/dist';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import './index.css';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
// import Profile from './pages/Profile.jsx';
// import Login from './pages/Login.jsx';
// import SignUp from './pages/SignUp.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact', 
        element: <Contact />,
      }
      // {
      //   path: 'profile',
      //   element: <Profile />,
      // },
      // {
      //   path: 'login',
      //   element: <Login />,
      // },
      // {
      //   path: 'signup',
      //   element: <SignUp />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
