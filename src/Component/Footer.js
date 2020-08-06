import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon, MDBBtn } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
      <div style={{ backgroundColor: "#42a5f5" }}>
        <MDBContainer>
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
              Ssr Full stack developer / Software engineer
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
          <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Descripcion</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              Soy un entuciasta de la tecnologia que esta en constante aprendisaje y conocimiento 
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Products</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!" className="dark-grey-text">
                MDBootstrap
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                MDWordPress
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                BrandFlow
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Bootstrap Angular
              </a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!" className="dark-grey-text">
                Your Account
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Become an Affiliate
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Shipping Rates
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Help
              </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
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