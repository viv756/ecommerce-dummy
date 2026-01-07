import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
