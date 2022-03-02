import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';

// keep track of the current category we are viewing
const Home = () => {
  

  return (
    <div className="container">
      <CategoryMenu />
      <ProductList/>
      <Cart/>
    </div>
  );
};

export default Home;
