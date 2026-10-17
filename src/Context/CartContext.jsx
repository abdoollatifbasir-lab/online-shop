import { createContext, useContext, useEffect, useState } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // خواندن اطلاعات از localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  //قراردادن اطلاعات درlocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // فعل اضافه کردن محصول به سبد خرید
  const addToCart = (product) => {
    setCart((prevcart) => {
      const existingItem = prevcart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevcart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevcart, { ...product, quantity: 1 }];
    });
  };
  //فعل حذف کردن از سبد خرید
  const removeFromCart = (productId) => {
    setCart((prevcart) => prevcart.filter((item) => item.id !== productId));
  };
  // فعل خالی کردن سبد خرید
  const clearcart = () => {
    setCart([]);
  };
  // این تابع برای تغییر تعداد یک محصول در سبد خرید است
  const updateQuantity = (productId, q) => {
    setCart((prevcart) =>
      prevcart.map((item) =>
        item.id === productId ? { ...item, quantity: q } : item,
      ),
    );
  };
  // این تابع برای محاسبهٔ مبلغ کل سبد خرید است
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getCartTotal,
        removeFromCart,
        clearcart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// این کد یک هوک سفارشی به نام useCart می‌سازد تا کامپوننت‌ها بتوانند خیلی راحت به CartContext دسترسی پیدا کنند.
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    console.log("«این کامپوننت فرزند CartContext.Provider نیست.»");
  }
  return context;
};
export default CartProvider;
