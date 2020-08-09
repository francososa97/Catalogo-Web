import React from 'react';
import { BrowserRouter as Router,NavLink } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';
import '../Styles/MinimalisticIntro.css';

class MinimalisticIntro extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }
  render() {
    const navStyle = { marginTop: '4rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );

    const { collapsed } = this.state;
    return (
      <div id='parallaxintro'>
        <MDBView
          src={'https://mdbootstrap.com/img/Photos/Others/images/76.jpg'}
          fixed
        >
          <MDBMask className='rgba-white-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '15rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold'>
                  Franco Sosa
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold'>
                  Ssr full stack developer
                </h5>
                <MDBBtn outline color='white' >
                <NavLink 
                        to='/Catalogo'
                        className="nav-link"
                        activeClassName="active"
                    >
                   <p className="white-text">Catalogo</p> 
                  </NavLink>
                </MDBBtn>
                <MDBBtn outline color='white'>
                <NavLink 
                      to='/Contacto'
                      className="nav-link"
                    activeClassName="active"
                    >
                   <p className="white-text">Contacto</p> 
                  </NavLink>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default MinimalisticIntro;