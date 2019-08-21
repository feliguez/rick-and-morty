import React, { Component } from "react";

import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, unProps } = this.props;
    return (
      <>
        <Header />
        <Hero />
        <Footer />
      </>
    );
  }
}

export default Home;
