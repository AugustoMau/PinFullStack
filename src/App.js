import React from 'react';
import './assets/css/styles.css';
import Header from './components/header/header'
import About from './components/about/about';
import Product from './components/product/product';
import Services from './components/services';
import Contact from './components/contact/contact';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Product/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
