import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import Catalogo from './Pages/Catalogo';
import Contacto from './Pages/Contacto';
import CatalogueContext from './context/CatalogueContext';


function App() {
  return (
    <>
    <CatalogueContext>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
              <Route exact path="/Catalogo" component={Catalogo} />
              <Route exact path="/Contacto" component={Contacto} />
          </Switch>
          <Footer/>
        </Router>
    </CatalogueContext>
    </>
  );
}

export default App;
