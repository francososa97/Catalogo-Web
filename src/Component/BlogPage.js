
import React, { useContext } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { CatalogueContext } from '../context/CatalogueContext';

const BlogPage = () => {

  const projects  = useContext(CatalogueContext);
  console.log(projects);
  
  return (
    <MDBCard className="mt-5 px-5 pb-5">
      <MDBCardBody>
          {
            projects.map(project=>{
              return(
                <>
                <MDBRow>
                  <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                      <img
                        className="img-fluid"
                        src={project.srcimg}
                        alt=""
                      />
                      <a href={project.url}>
                        <MDBMask overlay="white-slight" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol lg="7" xl="8">
                    <h3 className="font-weight-bold mb-5 p-0">
                      <strong>{project.title}</strong>
                    </h3>
                    <MDBRow className="mb-3">
                      <MDBCol md="1" size="2">
                        <MDBIcon icon="user" size="2x" className="red-text" />
                      </MDBCol>
                      <MDBCol md="11" size="10">
                        <h5 className="font-weight-bold mb-3"> Descripción para el usuario: </h5>
                        <p className="grey-text">
                        {project.userBody}
                        </p>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                      <MDBCol md="1" size="2">
                        <MDBIcon icon="code" size="2x" className="red-text" />
                      </MDBCol>
                      <MDBCol md="11" size="10">
                        <h5 className="font-weight-bold mb-3">Descripción de la tecnologia</h5>
                        <p className="grey-text">
                        {project.tecnologyBody}
                        </p>
                      </MDBCol>
                    </MDBRow>
                    <a href={project.url}>
                      <MDBBtn color='info' rounded size='md'>
                        <MDBIcon far icon='clone' className='left' /> Visitar la aplicacion
                    </MDBBtn>
                    </a>
                  </MDBCol>
                </MDBRow>
                  <hr className="my-5" />
                </>
              );
            })
          }
          
      </MDBCardBody>
    </MDBCard>
  );
}

export default BlogPage ;