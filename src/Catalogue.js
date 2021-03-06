import React from 'react';
import './Styles/styles.css';
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
              <Route exact path="/catalogo" component={Catalogue} />
              <Route exact path="/contacto" component={Contact} />
          </Switch>
          <Footer/>
        </Router>
    </CatalogueContext>
    </>
  );
}
export default App;
