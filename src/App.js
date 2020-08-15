import React from "react";
import "./App.css";
import Header from "./header/header.js";
import FooterPagePro from "./Footer/footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./product/product";
import {Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./body/home";
function App() {
  return (
    <>
      <BrowserRouter >
      <Header></Header>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/product/:id" component={Product} exact={true} />
      </Switch>
      <FooterPagePro></FooterPagePro>
      </BrowserRouter>
    </>
  );
}

export default App;
