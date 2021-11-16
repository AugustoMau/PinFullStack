import React from 'react';
import './assets/css/styles.css';
import Header from './components/header/header'
import About from './components/about/about';
import Product from './components/product/product';
import Services from './components/services';
//import Contact from './components/contact/contact';
//import Forms from './components/contact/forms';
import SendForm from './components/contact/sendform';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Product/>
      <Services/>
      <SendForm/>
      <Footer/>
    </div>
  );
}

export default App;
