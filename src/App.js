import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./componets/Header/Header";
import Tv from './Tv/Tv';
import Ipad from './Ipad/Ipad';
import Iphone from './Iphone/Iphone';
import Cart from './Cart/Cart';
import Watch from './Watch/Watch';
import Music from './Music/Music';
import Main from './componets/Main/Main';
// import Section7 from './componets/section7/Footer';
import Footer from "./componets/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          {/* <Main /> */}

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/music" element={<Music />} />
            <Route path="/ipad" element={<Ipad />} />
            <Route path="/iphone" element={<Iphone />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
