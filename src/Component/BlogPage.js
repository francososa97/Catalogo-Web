
import React, { useContext } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn} from "mdbreact";
import { CatalogueContext } from '../context/CatalogueContext';
import git from '../Images/iconfinder_github_3.png';
import store from '../Images/store.PNG';
import veterinarian from '../Images/veterinario.PNG';
import br from '../Images/br.PNG';
import song from '../Images/canciones.PNG';
import weather from '../Images/clima.PNG';
import budget from '../Images/presupuesto.PNG';
import coin from '../Images/coin.PNG';
import CamelCase from '../Images/CamelCase.PNG';
import ListadoCustomer from '../Images/ListadoCustomer.PNG';
import Reservas from '../Images/Reservas.PNG';
import reproductor from '../Images/reproductor.PNG';
import Triviador from "../Images/Triviador.PNG";

const BlogPage = () => {

  const {catalogue}  = useContext(CatalogueContext);

  const SetImg = (titleProject)=>{

    let imgProject;
    switch(titleProject)
    {
      case "Reproductor de playlist":
        imgProject=reproductor;
        break;
      case "Buscador de clientes":
        imgProject=ListadoCustomer;
        break;
      case "Transformador de palabras en CamelCase":
        imgProject=CamelCase;
        break;
      case "Generador de turnos de veterinario":
        imgProject=veterinarian;
        break;
      case "Presupuestador automático":
        imgProject=budget;
        break;
      case "Clima react":
        imgProject=weather;
        break;
      case "Store Front-end":
        imgProject=store;
        break;
      case "Fraces populares":
        imgProject=br;
        break;
      case "Buscador de letras de canciones":
        imgProject=song;
        break;
      case "Reserva de envios.":
        imgProject=Reservas;
        break;
      case "Found Image":
        imgProject=coin;
        break;
      case "Triviador":
        imgProject=Triviador;
        break;
      default:
        imgProject=coin;
        break;
    };
    return imgProject;
  }
  
  return (
    <MDBCard className="mt-5 px-5 pb-5">
      <MDBCardBody>
          {
            catalogue.map(project=>{
              return(
                <>
                <MDBRow>
                  <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                      <img
                        className="img-fluid"
                        src={SetImg(project.title)}
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
                      <MDBBtn color="elegant" rounded size='md'>
                        <MDBIcon far icon='clone' className='left' /> Visitar la aplicacion
                    </MDBBtn>
                    </a>
                    {project.urlGit.length > 0
                        ? <a href={project.urlGit}><img src={git} alt="" className="icon-git"/></a>
                        : null}
                    
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