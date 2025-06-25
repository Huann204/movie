import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Header />
      <Content />
      <Footer />
    </HashRouter>
  );
}

export default App;
