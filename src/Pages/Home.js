import React,{useContext} from 'react';
import {MDBRow, MDBCol, MDBCard, MDBCardBody} from "mdbreact";
import MinimalisticIntro from '../Component/MinimalisticIntro';
import site from '../Images/sitio.PNG'
import site2 from '../Images/jumbotron.PNG'
import WorkExperience from '../Component/WorkExperience';
import Certification from '../Component/Certification';
import {CatalogueContext} from '../context/CatalogueContext';
const Home = () => {

  const {translate} = useContext(CatalogueContext);
  
    return(
        <>
          <MinimalisticIntro translate={translate}/>
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
                        <strong>{translate.titleAcademy}</strong>
                      </h3>
                      <p> {translate.bodyAcademy} </p>
                  </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                  <MDBCol lg="7">
                    <h3 className="font-weight-bold mb-3 p-0">
                      <strong>{translate.titleWork}</strong>
                    </h3>
                    <WorkExperience translate={translate}/>
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
                <Certification translate={translate}/>
              </MDBCardBody>
            </MDBCard>
        </>
      );
};
export default Home;