import React from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <ProductCard
        image="https://via.placeholder.com/150x250.png?text=Mobile+Phone"
        name="iPhone 15 Pro"
        price="999"
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
