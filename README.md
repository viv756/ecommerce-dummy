# 🛒 Mini Ecommerce Application (Flipkart-style Demo)

A **mini ecommerce web application** built as an interview-ready project inspired by platforms like Flipkart. This project focuses on **core ecommerce functionality** such as product listing, cart management, checkout, and a **dummy payment flow**, without integrating real payment gateways.

---

## 🚀 Features

* 🏠 Product listing page
* 🛒 Add products to cart
* ➕ Auto-increment quantity for same products
* ❌ Remove products from cart
* 💰 Real-time total price calculation
* 💳 Dummy payment flow (no Razorpay / Stripe)
* 📦 Order creation after payment
* ✅ Order success page
* 🌐 Global cart state using React Context API

---

## 🧠 Why Dummy Payment?

This project intentionally avoids real payment gateways. Instead, it **simulates a real-world payment flow**:

1. User clicks **Checkout**
2. Frontend sends cart data to backend
3. Backend creates an order
4. Payment status is marked as **PAID** (dummy)
5. User is redirected to **Order Success** page


---

## 🛠 Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* React Router
* Context API

### Backend

* Node.js
* Express.js
* TypeScript
* MongoDB (Mongoose)

---

## 📂 Project Structure

```
frontend/
 ├── components/
 │   ├── Card.tsx
 │   └── Navbar.tsx
 ├── context/
 │   └── contextProvider.tsx
 ├── pages/
 │   ├── HomePage.tsx
 │   ├── CartPage.tsx
 │   └── OrderSuccess.tsx
 ├── lib/
 │   └── baseUrl.ts
 └── App.tsx

backend/
 ├── controllers/
 │   └── payment.controller.ts
 ├── models/
 │   └── order.model.ts
 ├── routes/
 │   └── payment.routes.ts
 └── server.ts
```

---

## 🔄 Application Flow

```
Home Page
   ↓
Add to Cart
   ↓
Cart Page
   ↓
Checkout
   ↓
Dummy Payment API
   ↓
Order Created (PAID)
   ↓
Order Success Page
```

---

## 📦 Cart Logic

* Cart state is managed globally using **React Context API**
* Quantity is handled inside the context, not the UI
* Prevents duplicate items
* Total price calculated dynamically

---

## 💳 Dummy Payment API

**Endpoint:**

```
POST /api/payment/dummy
```

**Request Body:**

```json
{
  "orders": [
    {
      "_id": "productId",
      "price": 100,
      "quantity": 2,
      "image": "image_url"
    }
  ],
  "totalAmount": 200
}
```

**Response:**

```json
{
  "success": true,
  "message": "Order placed successfully (Dummy Payment)",
  "order": { ... }
}
```

---

## 🧪 How to Run Locally

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
npm install
npm run dev
```

---

## 👨‍💻 Author

**Vivek V R**
MERN Stack Developer

---
