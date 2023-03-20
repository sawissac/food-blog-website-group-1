import React from "react";
import Navbar from "../../components/Navbar";
import MainVirtual from "../../components/MainVirtual";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";

const HomePage: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Navbar />
      <MainVirtual />
      <BlogCard />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
