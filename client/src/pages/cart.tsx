import Navbar from "../components/navbar";
import { useCart } from "../context/contextProvider";

const CartPage = () => {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <div>
      <Navbar />

      <div className="flex justify-center pt-10">
        <div className="w-[500px] border rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between items-center border-b py-3">
                  <div>
                    <img src={item.image} alt="" className="w-10 h-10" />
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="font-semibold">₹{item.price * item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 text-sm">
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
                className="w-full bg-black text-white py-2 mt-6 rounded"
                onClick={() => alert("Proceeding to Dummy Payment")}>
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
