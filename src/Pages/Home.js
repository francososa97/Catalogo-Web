import React from 'react';
import {MDBRow, MDBCol, MDBCard, MDBCardBody} from "mdbreact";
import MinimalisticIntro from '../Component/MinimalisticIntro';
import site from '../Images/sitio.PNG'
import site2 from '../Images/jumbotron.PNG'
import WorkExperience from '../Component/WorkExperience';

const Home = () => {
  
    return(
        <>
          <MinimalisticIntro/>
          <MDBCard className="">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol lg="5">
                      <img
                        className="img-fluid"
                        src={site}
                        alt=""
                      />
                  </MDBCol>
                  <MDBCol lg="7" className="mt-5">
                      <h3 className="font-weight-bold mb-3 p-0 mt-5">
                        <strong>En lo académico</strong>
                      </h3>
                      <p>
                        Mi nombre es Franco Damián González Sosa, terminé la secundaria técnica en el 2016, me recibí de Técnico Superior en Informática. 
                        Luego de eso, me dedique a aprender desarrollo web. Hice bastantes cursos y al mismo tiempo ingresé a Ingeniería en Informática en la UNLAM (Universidad Nacional de la Matanza), 
                        donde cursé dos años. Actualmente estudio Analista de Sistemas en el mismo instituto que realice mi secundaria, en el Instituto Superior San Judas Tadeo. 
                        Estoy en mi segundo año de carrera, tengo planeado continuar mis estudios en Ingeniería de Sistemas en la UAI (Universidad Abierta Interamericana). 
                        En mi linkedin tengo todas mis certificaciones y más detalles de mi formación académica.
                      </p>
                  </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                  <MDBCol lg="7">
                    <h3 className="font-weight-bold mb-3 p-0">
                      <strong>En lo laboral</strong>
                    </h3>
                    <WorkExperience/>
                  </MDBCol>
                  <MDBCol lg="5">
                      <img
                        className="img-fluid"
                        src={site2}
                        alt=""
                      />
                  </MDBCol>
                </MDBRow>
                <hr className="my-5" />
              </MDBCardBody>
            </MDBCard>
        </>
      );
};
export default Home;