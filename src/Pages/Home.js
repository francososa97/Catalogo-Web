import React from 'react';
import {MDBRow, MDBCol, MDBCard, MDBCardBody} from "mdbreact";
import Ubicacion from '../Component/Ubicacion';
import MinimalisticIntro from '../Component/MinimalisticIntro';
import sitio from '../Images/sitio.PNG'
import sitio2 from '../Images/jumbotron.PNG'
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
                        src={sitio}
                        alt=""
                      />
                  </MDBCol>
                  <MDBCol lg="7" className="mt-5">
                      <h3 className="font-weight-bold mb-3 p-0 mt-5">
                        <strong>En lo académico</strong>
                      </h3>
                      <p>
                        Mi nombre es Franco Damián González Sosa, termine la secundaria técnica en el 2016 me recibí de Técnico Superior en Informática. 
                        Luego de eso me dedique a aprender desarrollo web hice bastantes cursos y en el mismo tiempo ingrese a ingeniería en informática en la UNLAM 
                        (Universidad Nacional de la Matanza), después de dos años de cursada, me di cuenta que no era el lugar para mi. 
                        Actualmente estudio Analista de Sistemas en el mismo instituto que realice mi secundaria. Estoy en mi segundo año de carrera, 
                        tengo planeado continuar mis estudios en Ingeniería de Sistemas en la UAI (Universidad Abierta Interamericana). 
                        En mi linkedin tengo todas mis certificaciones y mas detalles de mi formación académica.
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
                        src={sitio2}
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