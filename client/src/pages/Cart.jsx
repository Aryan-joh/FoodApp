import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // EMPTY CART PLACEHOLDER
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="w-40 mb-6 opacity-80"
        />
        <h2 className="text-xl font-semibold mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mb-4">
          Add some delicious food to get started 🍕
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* CART ITEMS */}
        <div className="md:col-span-2 space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white shadow rounded-xl p-4"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-lg object-cover"
              />

              {/* INFO */}
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">
                  ₹{item.price} each
                </p>
              </div>

              {/* QUANTITY CONTROL */}
              <div className="
                flex items-center gap-3
                bg-orange-500 text-white
                px-3 py-1 rounded-full
              ">
                <button onClick={() => removeFromCart(item.id)}>
                  <FaMinus size={12} />
                </button>

                <span className="font-semibold">
                  {item.qty}
                </span>

                <button onClick={() => addToCart(item)}>
                  <FaPlus size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white shadow rounded-xl p-6 h-fit">
          <h3 className="text-lg font-semibold mb-4">
            Order Summary
          </h3>

          <div className="flex justify-between text-sm mb-2">
            <span>Items Total</span>
            <span>₹{totalAmount}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Delivery Fee</span>
            <span>₹40</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>₹{totalAmount + 40}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              py-3
              rounded-xl
              font-semibold
              cursor-pointer
            "
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
