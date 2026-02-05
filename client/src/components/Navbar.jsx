import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  // total number of items in cart
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <nav className="
      sticky 
      top-0 
      z-50 
      bg-white 
      shadow-sm
    ">
      <div className="
        max-w-7xl 
        mx-auto 
        px-6 
        h-16 
        flex 
        items-center 
        justify-between
      ">
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold text-orange-500"
        >
          🍔 FoodApp
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="
              text-gray-700 
              hover:text-orange-500 
              font-medium
            "
          >
            Home
          </Link>

          {/* CART ICON */}
          <Link
            to="/cart"
            className="
              relative 
              text-gray-700 
              hover:text-orange-500
            "
          >
            <FaShoppingCart size={20} />

            {/* CART COUNT BADGE */}
            {cartCount > 0 && (
              <span className="
                absolute 
                -top-2 
                -right-2 
                bg-orange-500 
                text-white 
                text-xs 
                w-5 
                h-5 
                flex 
                items-center 
                justify-center 
                rounded-full
              ">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
