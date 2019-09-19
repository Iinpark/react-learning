import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
