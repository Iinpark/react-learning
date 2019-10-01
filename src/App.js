import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
      <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Content UsersBase={props.UsersBase} MessagesBase={props.MessagesBase}/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
