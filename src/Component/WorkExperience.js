import React, { Component } from "react";
import {MDBCollapse, MDBCard, MDBCardBody,MDBBox  } from "mdbreact";

class WorkExperience extends Component {
state={
  collapseID: "collapse1"
}

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

render() {
const { collapseID } = this.state;
  return (
    <>
        <MDBCard className="mt-5">
          <MDBBox className="m-1 ml-3" onClick={this.toggleCollapse("collapse1")}>
            Mi experiencia con 17 años
            <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon m-2" : "fa fa-angle-down m-2" } />
          </MDBBox>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
              Comencé mi vida laboral como desarrollador a los 17 años. Con algunos compañeros de la secundaria generábamos proyectos con lógicas chicas y vistas sencillas, 
              tuvimos varios proyectos de .net y otros de wordpres que requerían conocimientos de html y javascript.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard>
          <MDBBox className="m-1 ml-3 my-3" onClick={this.toggleCollapse("collapse2")}>
          Mi experiencia con 19 años
            <i className={ collapseID==="collapse2" ? "fa fa-angle-down rotate-icon m-2" : "fa fa-angle-down m-2" } />
          </MDBBox>
          <MDBCollapse id="collapse2" isOpen={collapseID}>
            <MDBCardBody>
              En mi ultimo año de secundaria tuve una pasantía con algunos de mis compañeros. 
              En esta teníamos que desarrollar un sistema que tuviera alguna función y que satisficiera alguna necesidad. 
              Desarrollamos un sistema de escritorio hecho con c# cuya función principal era comunicar lo nombramos “holograma”, 
              aparte de la aplicación que desarrollamos también tuvimos que generar un soporte de madera para apoyar el monitor y como parte esencial teníamos una 
              pirámide de plástico acrílico que también tuvimos que fabricar. Teníamos como objetivo usar apis de Skype para poder hacer una video llamada con hologramas. 
              Si si, como en start wars!.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard>
          <MDBBox className="m-1 ml-3 my-3" onClick={this.toggleCollapse("collapse3")}>
            Mi experiencia con 20 años
            <i className={ collapseID==="collapse3" ? "fa fa-angle-down rotate-icon m-2" : "fa fa-angle-down m-2" } />
          </MDBBox>
          <MDBCollapse id="collapse3" isOpen={collapseID}>
            <MDBCardBody>
              En mis 20 años entre a mi primer software Factory. Trabajamos con Python y vistas en xml por que usaban un sistema conocido como crm que requería de dichas tecnologías. 
              Fueron mi primer acercamiento en Python, utilización de crm, hacer mis pruebas unitarias y como es el dia a dia en una consultora.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard>
          <MDBBox className="m-1 ml-3 my-3" onClick={this.toggleCollapse("collapse4")}>
            Mi experiencia con 21 años hasta la actualidad
            <i className={ collapseID==="collapse4" ? "fa fa-angle-down rotate-icon m-2" : "fa fa-angle-down m-2" } />
          </MDBBox>
          <MDBCollapse id="collapse4" isOpen={collapseID}>
            <MDBCardBody>
              Un año más tarde entre en la capacitación de .net en Accenture que es donde actualmente trabajo, desde mi comienzo en Acceture estuve en el cliente del 
              banco Galicia aprendiendo desde asp.net core hasta react para las vistas. Estoy en la mesa de consumos y pago mis tarjetas donde llevamos a cabo desarrollos de 
              pequeña a gran escala y realizamos migraciones de código para pasar a diferentes tecnologías.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
      </>
    );
  }
}

export default WorkExperience;