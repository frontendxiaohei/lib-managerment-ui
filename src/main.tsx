import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './views/Login/index.tsx';
import { Register } from './views/Register/index.tsx';
import { BookManage } from './views/BookManager/index.tsx';



const routes = [
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/",
    element: <BookManage/>,
  },
];

const router = createBrowserRouter(routes)


const root = createRoot(document.getElementById('root')!);


root.render(
  <RouterProvider router={router} />
);
