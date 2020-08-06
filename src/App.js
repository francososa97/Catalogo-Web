import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Catalogo from './Component/Catalogo';
import Contacto from './Component/Contacto';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/Catalogo" 
                  render={ () => (
                    <Catalogo/>
                  ) } 
            />
          <Route exact path="/Contacto" 
                  render={ () => (
                    <Contacto/>
                  ) } 
            />
      </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
