import { useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const { state } = useLocation();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-2">
        Payment Successful 🎉
      </h1>
      <p className="text-gray-600">
        Order ID: {state?.order?._id}
      </p>
    </div>
  );
};

export default OrderSuccess;
