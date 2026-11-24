
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to Online Shopping</h2>;
}

function Products() {
  return (
    <div>
      <h2>Our Products</h2>
      <p>Mobile - ₹20000</p>
      <p>Laptop - ₹50000</p>
      <p>Headphones - ₹1500</p>
      <p>Smart Watch - ₹2500</p>
    </div>
  );
}

function Cart() {
  return <h2>Your Shopping Cart</h2>;
}
function Products() {
  const [cart, setCart] = useState([]);
  const products = [{name:"Mobile",price:20000},{name:"Laptop",price:50000}];

  return products.map(p => <div>{p.name} - ₹{p.price}
    <button onClick={() => setCart([...cart,p])}>Add to Cart</button>
  </div>);
}

function App() {
  return (
    <BrowserRouter>
      <h1>ShopEasy</h1>

      <Link to="/">Home</Link> |
      <Link to="/products">Products</Link> |
      <Link to="/cart">Cart</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
