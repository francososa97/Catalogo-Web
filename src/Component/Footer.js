import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon } from "mdbreact";
import ImgPerfil from '../Images/Perfil.png';

const FooterPagePro = () => {
  return (
    <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
      <div style={{ backgroundColor: "#42a5f5" }}>
        <MDBContainer>
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
              Full stack developer
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="li-ic" href="https://www.linkedin.com/in/franco-sosa-ab8032140/">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a href="https://github.com/francososa97">
              <MDBIcon fab icon="github"/>
                </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
          <img
                tag="img"
                src={ImgPerfil}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Franco Damián González Sosa</h5>
              <p className="text-uppercase blue-text">Full stack developer</p>
          </MDBCol>
          <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Descripcion</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
            Soy un entusiasta de la tecnología que está en constante aprendizaje y conocimiento 
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Stack Tecnologico</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="https://docs.microsoft.com/en-us/dotnet/csharp/getting-started/introduction-to-the-csharp-language-and-the-net-framework" className="dark-grey-text">
                .Net
              </a>
            </p>
            <p>
              <a href="https://es.reactjs.org/" className="dark-grey-text">
                React
              </a>
            </p>
            <p>
              <a href="https://docs.microsoft.com/en-us/sql/?view=sql-server-ver15" className="dark-grey-text">
                Sql server
              </a>
            </p>
            <p>
              <a href="https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.1" className="dark-grey-text">
                Asp.net Core
              </a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Fortalezas</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!" className="dark-grey-text">
              Exelente solución de problemas técnicos.
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
              implementacion de buenas
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
              Reparacion de sistemas informáticos
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
              Manejo y utilizacion de servidores
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
              Comodidad desarrollando back end y front end
              </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contacto</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> Castelar, Buenos Aires, Argentina.
            </p>
            <p>
              <i className="fa fa-envelope mr-3" />franco.gonzalez.sosa@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> 01144186438
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;