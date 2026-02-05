# 🍔 Food Delivery Order Management App

A modern **Food Delivery Order Management** application built using **React + Vite + Tailwind CSS**.  
This project demonstrates a simplified food ordering workflow including menu browsing, cart management, checkout, and real-time order status tracking.

---

## 🚀 Features

### ✅ Menu Display
- Displays food items in a card-based layout.
- Each item includes:
  - Image
  - Name
  - Description
  - Price
- Responsive grid layout (4 items per row on desktop).

### ✅ Cart Management
- Add items to cart.
- Increase or decrease quantity.
- Automatic cart count update in navbar.
- Item image and quantity visible in cart.
- Order summary with total calculation.

### ✅ Checkout Flow
- User enters delivery details:
  - Name
  - Address
  - Phone number
- Simulated payment flow.
- Redirects to order status page after checkout.

### ✅ Order Status Tracking
- Animated order progress steps:
  - Order Received (Restaurant)
  - Preparing (Chef)
  - Out for Delivery (Rider)
  - Delivered
- Animated progress bar.
- Delivery completion popup.

### ✅ UI/UX
- Built using Tailwind CSS.
- Responsive design.
- Modern food delivery style interface.

---

## 🛠️ Tech Stack

- Frontend: React.js (Vite)
- Styling: Tailwind CSS
- Routing: React Router DOM
- State Management: React Context API
- Icons: React Icons
src/
│
├── assets/
│ ├── images/
│ └── assets.js
│
├── components/
│ ├── Navbar.jsx
│ └── FoodCard.jsx
│
├── context/
│ └── CartContext.jsx
│
├── data/
│ └── menuData.js
│
├── pages/
│ ├── Home.jsx
│ ├── Cart.jsx
│ ├── Checkout.jsx
│ └── OrderStatus.jsx
│
├── App.jsx
└── main.jsx


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone <your-repo-link>

2️⃣ Navigate to project
cd food-delivery-frontend

3️⃣ Install dependencies
npm install

4️⃣ Run development server
npm run dev


App will run at:

http://localhost:5173
---

## 📁 Project Structure

