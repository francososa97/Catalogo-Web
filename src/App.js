import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import Catalogue from './Pages/Catalogue';
import Contact from './Pages/Contact';
import CatalogueContext from './context/CatalogueContext';


function App() {
  return (
    <>
    <CatalogueContext>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
              <Route exact path="/Catalogo" component={Catalogue} />
              <Route exact path="/Contacto" component={Contact} />
          </Switch>
          <Footer/>
        </Router>
    </CatalogueContext>
    </>
  );
}

export default App;
