import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';
import '../Styles/MinimalisticIntro.css';
import banner from '../Images/banner.jpeg'

class MinimalisticIntro extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div id='parallaxintro'>
        <MDBView
          src={banner}
          fixed
        >
          <MDBMask className='rgba-white-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '15rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 black-text text-center'>
                <h1 className='display-3 mb-0 pt-md-5 pt-5 black-text font-weight-bold text-layout'>
                  {this.props.translate.name}
                </h1>
                <hr className='hr-dark my-4' />
                <h5 className='pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 black-text font-weight-bold text-layout'>
                  {this.props.translate.position}
                </h5>
                <MDBBtn outline color='black' >
                <NavLink 
                        to='/Catalogo'
                        className="nav-link"
                        activeClassName="active"
                >
                   <p className="black-text text-layout">
                      {this.props.translate.btnCatalogo}
                   </p> 
                  </NavLink>
                </MDBBtn>
                <MDBBtn outline color='black'>
                <NavLink 
                      to='/contacto'
                      className="nav-link"
                    activeClassName="active"
                >
                   <p className="black-text text-layout">
                      {this.props.translate.btnContacto}
                   </p> 
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