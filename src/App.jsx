import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import CartProvider from "./Context/CartContext";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </AuthProvider>
  );
}
export default App;
