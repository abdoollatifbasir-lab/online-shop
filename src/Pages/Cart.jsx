import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, updateQuantity,removeFromCart,getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is empty</h1>
        <Link className="text-blue-600  hover:text-blue-900" to={"/products"}>
          continue Shopping
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md flex items-center"
          >
            <img
              src={item.images[0]}
              className="w-24 h-24 object-cover rounded-md"
              alt=""
            />
            <div className="flex-grow ml-6">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
              <div className="flex items-center mt-2">
                <label htmlFor="">Quantity :</label>
                <select
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  name=""
                  id=""
                  value={item.quantity}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <button onClick={()=>removeFromCart(item.id)} className="text-red-600 hover:text-red-800">
                remove
              </button>
              <p className=" font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-bold">${getCartTotal().toFixed(2)}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors">Procced to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
