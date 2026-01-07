import { useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const { state } = useLocation();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-green-700 h-50 w-80 p-5 rounded-2xl text-center justify-center flex flex-col">
        <h1 className="text-2xl font-bold mb-2 text-white">Payment Successful 🎉</h1>
        <p className="text-white">Order ID: {state?.order?._id}</p>
      </div>
    </div>
  );
};

export default OrderSuccess;
