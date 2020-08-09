import React from 'react';
import {MDBCollapse,MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import Progress from '../Component/Progress';

class Contacto extends React.Component {
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

    <Progress/>

    <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <h2 className="h1-responsive font-weight-bold text-center my-5" onClick={()=> this.toggleSingleCollapse('collapseContact')}>
            Contacto
            {this.state.collapseContact  ? <MDBIcon icon="angle-double-up" className="ml-3"/> : <MDBIcon icon="angle-double-down" className="ml-3"/>}
          </h2>
    <MDBCollapse isOpen={this.state.collapseContact}>
    <p className="text-center w-responsive mx-auto pb-5">
      Deja aqui tu consulta o comentario!
    </p>
    <MDBRow>
      <MDBCol md="9" className="md-0 mb-5">
        <form>
          <MDBRow>
            <MDBCol md="6">
              <div className="md-form mb-0">
                <MDBInput type="text" id="contact-name" label="Tu nombre" />
              </div>
            </MDBCol>
            <MDBCol md="6">
              <div className="md-form mb-0">
                <MDBInput
                  type="text"
                  id="contact-email"
                  label="Tu mail"
                />
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
              <div className="md-form mb-0">
                <MDBInput type="text" id="contact-subject" label="Asunto" />
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
              <div className="md-form mb-0">
                <MDBInput
                  type="textarea"
                  id="contact-message"
                  label="Tu mensaje"
                />
              </div>
            </MDBCol>
          </MDBRow>
        </form>
        <div className="text-center text-md-left">
          <MDBBtn color="primary" size="md">
            Send
          </MDBBtn>
        </div>
      </MDBCol>
      <MDBCol md="3" className="text-center">
        <ul className="list-unstyled mb-0">
          <li>
            <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
            <p>Castelar, CP 1712, Arg</p>
          </li>
          <li>
            <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
            <p>+549 1144186438</p>
          </li>
          <li>
            <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
            <p>franco.gonzalez.sosa@gmail.com</p>
          </li>
        </ul>
      </MDBCol>
    </MDBRow>
    </MDBCollapse>
  </MDBContainer>
  </>
  );

  }
};
export default Contacto;


/*
return(
        <>

        <Progress/>


        <MDBContainer>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Contactanos
        </h2>
        <p className="text-center w-responsive mx-auto pb-5">
          Deja aqui tu consulta o comentario!
        </p>
        <MDBRow>
          <MDBCol md="9" className="md-0 mb-5">
            <form>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput type="text" id="contact-name" label="Tu nombre" />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-email"
                      label="Tu mail"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput type="text" id="contact-subject" label="Asunto" />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="contact-message"
                      label="Tu mensaje"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </form>
            <div className="text-center text-md-left">
              <MDBBtn color="primary" size="md">
                Send
              </MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="3" className="text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
                <p>Castelar, CP 1712, Arg</p>
              </li>
              <li>
                <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
                <p>+549 1144186438</p>
              </li>
              <li>
                <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
                <p>franco.gonzalez.sosa@gmail.com</p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
      );

*/