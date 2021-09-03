import React from "react";
import "./home.css";
import Header from "../componets/header";
import Footer from "../componets/footer";
import Body from "../componets/body";
function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
