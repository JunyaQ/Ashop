import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

// keep track of the current category we are viewing
const Home = () => {
  const [currentCategory, setCategory] = useState("");
  

  return (
    <div className="container">
      <CategoryMenu />
      <ProductList/>
    </div>
  );
};

export default Home;
