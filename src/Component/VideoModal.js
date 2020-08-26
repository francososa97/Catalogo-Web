import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBIframe } from "mdbreact";
import Holograma from '../Images/Holograma.3gpp';

class IframePage extends Component {
state = {
  modal1: false,
}

toggle = nr => () => {
  let modalNumber = "modal" + nr;
  this.setState({
    ...this.state,
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <MDBContainer className="mt-1">
      <MDBBtn color="info" onClick={this.toggle(1)}>Video de muestra</MDBBtn>
      <MDBModal size="lg" isOpen={this.state.modal1} toggle={this.toggle(1)}>
        <MDBModalBody className="mb-0 p-0">
          <MDBIframe title="This is a unique title" src={Holograma} />
        </MDBModalBody>
        <MDBModalFooter className="justify-content-center">
          <MDBBtn color="info" outline rounded size="md" className="ml-4" onClick={this.toggle(1)}>
            Cerrar
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default IframePage;