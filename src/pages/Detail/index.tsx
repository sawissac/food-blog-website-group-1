import React from "react";
import Navbar from "../../components/Navbar";
import Detail from "../../components/Detail";
import Footer from "../../components/Footer";
import Progress from "../../components/Progress";

const DetailPage: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Progress />
      <Navbar />
      <Detail />
      <Footer />
    </React.Fragment>
  );
};

export default DetailPage;
