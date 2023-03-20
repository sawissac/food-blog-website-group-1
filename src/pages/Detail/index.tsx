import React from "react";
import Navbar from "../../components/Navbar";
import Detail from "../../components/Detail";
import Footer from "../../components/Footer";

const DetailPage: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Detail />
      <Footer />
    </React.Fragment>
  );
};

export default DetailPage;
