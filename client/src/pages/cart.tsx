import Navbar from "../components/navbar";
import { useCart } from "../context/contextProvider";
import { baseURL } from "../lib/baseUrl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${baseURL}/product/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orders: cartItems,
          totalAmount: totalPrice,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Payment failed");
      }

      // success → navigate to order success page
      navigate("/order-success", { state: { order: data.order } });
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center pt-10">
        <div className="w-125 border rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center border-b py-3"
                >
                  <div>
                    <img
                      src={item.image}
                      alt=""
                      className="w-10 h-10"
                    />
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="font-semibold">
                      ₹{item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-between mt-6 font-semibold">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

              <button
                className="w-full bg-black text-white py-2 mt-6 rounded disabled:opacity-50"
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? "Processing Payment..." : "Checkout"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
