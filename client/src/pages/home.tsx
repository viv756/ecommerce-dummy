import { useEffect, useState } from "react";
import Card from "../components/card";
import Navbar from "../components/navbar";
import { baseURL } from "../lib/baseUrl";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${baseURL}/product/get/all`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch products");
        }

        setProducts(data.products); // adjust based on API response
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-10">
        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid sm:grid-cols-4 gap-6 place-content-center">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
