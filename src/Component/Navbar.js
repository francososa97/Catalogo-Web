import React from 'react';
import { NavLink } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand,MDBHamburgerToggler, MDBCollapse} from 'mdbreact';
import git from '../Images/iconfinder_github_3.png';
import translateIcon from '../Images/Icons/transalteIcon.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      collapse1: false,
      collapseID: '',
      urlGit: 'https://github.com/francososa97',
      translate: this.props.translate
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
              <strong className="white-text">{this.state.translate.name}</strong>
              <a href={this.state.urlGit}>
                <img src={git} alt="" className="icon-git-xs"/>
              </a>
              <img src={translateIcon} onClick={() => this.props.setLanguage("english")} alt="" className="icon-git-xs"/>
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
                      <p className="white-text">{this.state.translate.titleHome}</p>
                    </NavLink>
                  </li>
                  <li>
                  <NavLink 
                        to='/Catalogo'
                        className="nav-link"
                        activeClassName="active"
                    >
                      <p className="white-text">{this.state.translate.btnCatalogo}</p>
                    </NavLink>
                  </li>
                  <li>
                  <NavLink 
                       to='/contacto'
                         className="nav-link"
                        activeClassName="active"
                    >
                      <p className="white-text">{this.state.translate.footerTitleContacto}</p>
                    </NavLink>
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