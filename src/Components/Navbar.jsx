import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
const Navbar = () => {
  const { cart } = useCart();
  const { user,logout } = useAuth();
  // تعداد کل محصولات درون سبد خرید
  const CartItemTotal = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to={"/"} className="text-xl font-bold text-gray-800">
            Online Shop
          </Link>
          <ul className="flex items-center space-x-4">
            <Link className="text-gray-600 hover:text-gray-900" to={"/"}>
              Home
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900"
              to={"/products"}
            >
              Products
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 relative"
              to={"/cart"}
            >
              Cart
              {CartItemTotal > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {CartItemTotal}
                </span>
              )}
            </Link>
            {user ? (
              <>
                <Link
                  className="text-gray-600 hover:text-gray-900"
                  to={"/profile"}
                >
                  Profile
                </Link>
                <button onClick={logout} className="border-0 text-gray-600 hover:text-gray-900 cursor-pointer">
                  Logout
                </button>
              </>
            ) : (
              <Link className="text-gray-600 hover:text-gray-900" to={"/login"}>
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
