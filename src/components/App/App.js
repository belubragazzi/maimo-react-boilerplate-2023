import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import CardsContainer from '../CardsContainer/CardsContainer';
import { Element } from 'react-scroll';
const App = () => {
  return (
    <div className='App'>
<Element name="header" className="element">
        <Header />
</Element>
<Element name="hero" className="element">
        <Hero />
</Element>
      
<Element name="about" className="element">
        <About />
</Element>
<Element name="gallery" className="element">
        <CardsContainer />
</Element>
<Element name="form" className="element">
        <Form />
</Element>    
        <Footer />
   

    </div>
  );
};

export default App;
