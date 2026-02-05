import { useEffect, useState } from "react";
import { FaStore, FaUtensils, FaMotorcycle, FaCheckCircle } from "react-icons/fa";

export default function OrderStatus() {
  const steps = [
    { name: "Order Received", icon: FaStore },
    { name: "Preparing", icon: FaUtensils },
    { name: "Out for Delivery", icon: FaMotorcycle },
    { name: "Delivered", icon: FaCheckCircle },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setCurrentStep(1), 3000),
      setTimeout(() => setCurrentStep(2), 7000),
      setTimeout(() => {
        setCurrentStep(3);
        setShowPopup(true);
      }, 9000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-10">
          📦 Order Status
        </h2>

        {/* Progress Tracker */}
        <div className="flex items-center justify-between relative">
          {/* LINE */}
          <div className="absolute top-6 left-0 w-full h-1 bg-gray-200"></div>
          <div
            className="absolute top-6 left-0 h-1 bg-orange-500 transition-all duration-700"
            style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
          ></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index <= currentStep;

            return (
              <div key={index} className="relative flex flex-col items-center">
                <div
                  className={`
                    w-12 h-12 flex items-center justify-center rounded-full
                    transition-all duration-500
                    ${isActive
                      ? "bg-orange-500 text-white scale-110"
                      : "bg-gray-200 text-gray-500"}
                  `}
                >
                  <Icon />
                </div>

                <p
                  className={`mt-2 text-sm font-medium ${
                    isActive ? "text-orange-500" : "text-gray-500"
                  }`}
                >
                  {step.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* DELIVERY POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center animate-bounce">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">
              Order Delivered 🎉
            </h3>
            <p className="text-gray-500">
              Enjoy your meal!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
