import { BsFillCartPlusFill } from "react-icons/bs";
import { useCart } from "../context/contextProvider";

type Props = {
  product: {
    name: string;
    price: number;
    image: string;
    _id: string;
  };
};

const Card = ({ product }: Props) => {
  const { addToCart } = useCart();

  const { name, image, _id, price } = product;
  return (
    <div className="block max-w-[18rem] rounded-lg shadow-lg">
      <div className="relative  bg-cover bg-no-repeat w-full">
        <img className="rounded-t-lg object-cover w-full h-50" src={`${product.image}`} alt="img" />
      </div>
      <div className="p-6 flex flex-col gap-4">
        <p className="text-base font-semibold">{product.name}</p>
        <div className="flex justify-between items-center">
          <p>${product.price}</p>
          <button onClick={() => addToCart({ name, image, _id, price })}>
            <BsFillCartPlusFill size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
