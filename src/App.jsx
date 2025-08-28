import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Articles from "./components/articles/Articles";
import Product from "./components/product/Product";
import User from "./components/user/User";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Articles />
        <Product />
        <User />
      </main>
      <Footer />
    </>
  );
};

export default App;
