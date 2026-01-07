import { BsFillCartPlusFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className="block max-w-[18rem] rounded-lg shadow-lg">
      <div className="relative  bg-cover bg-no-repeat">
        <img
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      <div className="p-6 flex flex-col gap-4">
        <p className="text-base font-semibold">Product Name</p>
        <div className="flex justify-between items-center">
          <p>$180</p>
          <BsFillCartPlusFill size={25} />
        </div>
      </div>
    </div>
  );
};

export default Card;
