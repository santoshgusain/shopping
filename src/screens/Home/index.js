import React, { Component } from "react";
import Header from "Component/Header/index";
import Main from "./main";
import Footer from "Component/Footer/index";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    );
  }
}
