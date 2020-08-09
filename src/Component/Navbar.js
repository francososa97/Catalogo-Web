import React from 'react';
import { Link,NavLink  } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav,MDBHamburgerToggler  ,MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      collapse1: false,
      collapseID: ''
    };
    this.onClick = this.onClick.bind(this);
  }
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }
  
  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
            <MDBNavbar color="blue lighten-1" onClick={()=> this.toggleSingleCollapse('collapse1')} >
            <MDBNavbarBrand>
            <strong className="white-text">Franco Sosa</strong>
            </MDBNavbarBrand>
            <MDBHamburgerToggler color="white" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
              <ul className="navbar-nav mr-auto">
                  <li>
                  <NavLink 
                        to='/'
                        className="nav-link"
                        activeClassName="active"
                    >
                      <p className="white-text">Home</p>
                    </NavLink>
                  </li>
                  <li>
                  <NavLink 
                        to='/Catalogo'
                        className="nav-link"
                        activeClassName="active"
                    >
                      <p className="white-text">Catalogo</p>
                    </NavLink>
                  </li>
                  <li>
                  <Link 
                       to='/Contacto'
                         className="nav-link"
                        activeClassName="active"
                    >
                      <p className="white-text">Contacto</p>
                    </Link>
                  </li>
                </ul>
              </MDBCollapse>
        </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default Navbar;