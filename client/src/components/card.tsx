import { BsFillCartPlusFill } from "react-icons/bs";

type Props = {
  product: {
    name: string;
    price: number;
    image: string;
  };
};

const Card = ({ product }: Props) => {
  return (
    <div className="block max-w-[18rem] rounded-lg shadow-lg">
      <div className="relative  bg-cover bg-no-repeat w-full">
        <img className="rounded-t-lg object-cover w-full h-50" src={`${product.image}`} alt="img" />
      </div>
      <div className="p-6 flex flex-col gap-4">
        <p className="text-base font-semibold">{product.name}</p>
        <div className="flex justify-between items-center">
          <p>{product.price}</p>
          <BsFillCartPlusFill size={25} />
        </div>
      </div>
    </div>
  );
};

export default Card;
