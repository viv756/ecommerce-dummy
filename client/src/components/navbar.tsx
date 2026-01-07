import flipkart from "../assets/flipkart.svg";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex justify-between h-20 items-center border-b-zinc-300 border-b px-15">
      <img src={flipkart} alt="" className="h-10 w-10" />
      <div>
        <FaCartShopping size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
