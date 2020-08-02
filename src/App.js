import React from 'react';
import './App.css';
import Header from './header/header.js'
import Slider from './body/slider.js'
import Card from './body/cards.js'
import FooterPagePro from './Footer.footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Header></Header>
    <Slider></Slider>
    <Card></Card>
    <FooterPagePro></FooterPagePro>
    </>
  );
}

export default App;
