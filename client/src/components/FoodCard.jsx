import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FoodCard({ item }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const cartItem = cart.find(i => i.id === item.id);

  return (
    <div className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow
      hover:shadow-lg
      transition
      duration-300
    ">
      {/* IMAGE */}
      <div className="relative h-44">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />

        <div className="
          absolute bottom-2 left-2
          bg-black/70 text-white
          text-xs font-semibold
          px-2 py-1 rounded
        ">
          ITEMS AT ₹{item.price}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3">
        <h3 className="font-semibold text-base truncate">
          {item.name}
        </h3>

        <p className="text-sm text-gray-500 truncate">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-sm font-medium text-gray-700">
            ⭐ 4.3 • 25–30 mins
          </span>

          {/* ADD / REDUCE */}
          {!cartItem ? (
            <button
              onClick={() => addToCart(item)}
              className="
                bg-orange-500
                hover:bg-orange-600
                text-white
                p-2
                rounded-full
                cursor-pointer
              "
            >
              <FaPlus size={12} />
            </button>
          ) : (
            <div className="
              flex items-center gap-2
              bg-orange-500 text-white
              px-2 py-1 rounded-full
              
            ">
              <button onClick={() => removeFromCart(item.id)}>
                <FaMinus size={12} />
              </button>

              <span className="text-sm font-semibold">
                {cartItem.qty}
              </span>

              <button onClick={() => addToCart(item)}>
                <FaPlus size={12} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
