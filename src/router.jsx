import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/products",
        element:<Products/>,
      },
      {
        path: "/products/:id",
        element:<ProductDetail/>,
      },
      {
        path: "/login",
        element:<Login/>,
      },
      {
        path: "/cart",
        element:<Cart/>,
      },
      {
        path: "/Profile",
        element:<Profile/>,
      },
    ],
  },
]);
