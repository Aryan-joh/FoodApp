import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/order-status");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="
        w-full 
        max-w-lg 
        bg-white 
        shadow-lg 
        rounded-2xl 
        p-6
      ">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Checkout
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="
                w-full 
                px-4 
                py-2 
                border 
                rounded-lg 
                focus:outline-none 
                focus:ring-2 
                focus:ring-orange-500
              "
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Address
            </label>
            <textarea
              placeholder="Enter your address"
              required
              rows="3"
              className="
                w-full 
                px-4 
                py-2 
                border 
                rounded-lg 
                focus:outline-none 
                focus:ring-2 
                focus:ring-orange-500
              "
            ></textarea>
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              required
              className="
                w-full 
                px-4 
                py-2 
                border 
                rounded-lg 
                focus:outline-none 
                focus:ring-2 
                focus:ring-orange-500
              "
            />
          </div>

          {/* PAYMENT INFO (SIMULATED) */}
          <div className="bg-orange-50 p-3 rounded-lg text-sm text-orange-700">
            💳 Payment will be processed securely
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
              cursor-pointer
            "
          >
            Pay & Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
