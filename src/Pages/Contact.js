import React from 'react';
import Progress from '../Component/Progress';
import { MDBRow, MDBCol, MDBContainer,MDBCollapse, MDBInput,MDBIcon, MDBBtn} from "mdbreact";
import Notificacion from "../Component/Notificacion";
import Contacto from "../Component/Contacto.js";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      collapseContact: true,
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
    return(
      <>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left contact-containter">
          <Progress/>
          <h2 className="h1-responsive font-weight-bold text-center my-5" onClick={()=> this.toggleSingleCollapse('collapseContact')}>
            Contacto
            {this.state.collapseContact  ? <MDBIcon icon="angle-double-up" className="ml-3"/> : <MDBIcon icon="angle-double-down" className="ml-3"/>}
          </h2>
          <MDBCollapse isOpen={this.state.collapseContact}>
            <Contacto/>
          </MDBCollapse>
        </MDBContainer>
      </>
    );
  }
};
export default Contact;
