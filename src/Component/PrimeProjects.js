import React from "react";
import {  MDBCollapse,MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn  } from "mdbreact";

class PrimeProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      collapseProjects: true,
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
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5' onClick={()=> this.toggleSingleCollapse('collapseProjects')}>
        Mis mejores proyectos
        {this.state.collapseProjects  ? <MDBIcon icon="angle-double-up" className="ml-3"/> : <MDBIcon icon="angle-double-down" className="ml-3"/>}
      </h2>
      <MDBCollapse  isOpen={this.state.collapseProjects}>
      <MDBRow>
        <MDBCol md='12' className='mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://pixabay.com/get/5ee4d040494fad0bffd8992cc62b347f163cdae04e507440722f79d59e45cd_1280.jpg)'
            }}
          >
            <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
              <h6 className='purple-text'>
                <MDBIcon icon='cocktail' />
                <strong> Recetas</strong>
              </h6>
              <h3 className='py-3 font-weight-bold'>
                <strong>Recetas de bebidas</strong>
              </h3>
              <p className='pb-3'>
                Con esta util aplicacion web que utiliza sas (software as service) usted podra hacer busquedas de bebidas tanto por nombre como por categoria. En la misma podra visualizar los resultados y podra acceder un apartado en una pantalla modal donde encontrara la preparacion y los ingredientes en una lista desordenada.
              </p>
              <a href="https://serene-saha-ee66a7.netlify.app/">
                <MDBBtn color='secondary' rounded size='md'>
                    <MDBIcon far icon='clone' className='left' /> Visitar la aplicacion
                </MDBBtn>
              </a>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6' className='md-0 mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://pixabay.com/get/54e0d5444d54a514f6da8c7dda79367d163edde657546c4870267cd4954fc55fbf_1280.jpg)'
            }}
          >
            <div className='text-white text-center  d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
              <div>
                <h6 className='pink-text'>
                  <MDBIcon icon='coins' />
                  <strong> Cotizador</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong>Criptomonedas al instante</strong>
                </h3>
                <p className='pb-3'>
                  Gracias a esta aplicacion vamos a poder consultar la cotizacion de diferentes criptomonedas en el instante, ademas de esto al momento de darnos la cotizacion tambien nos dara el precio mas alto del dia y el mas bajo tambien y cuando fue la ultima actualizacion de la cotizacion.
                </p>
                
                <a href="https://cotizador-bitcoin-monedas.netlify.app/">
                <MDBBtn color='pink' rounded size='md'>
                    <MDBIcon far icon='clone' className='left' /> Visitar la aplicacion
                </MDBBtn>
              </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6' className='md-0 mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://pixabay.com/get/52e4dc4a4f50b108f5d084609629347d143cdde1564c704c7c287bd6954dc35a_1280.jpg)'
            }}
          >
            <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
              <div>
                <h6 className='green-text'>
                  <MDBIcon icon='utensils' />
                  <strong> Restaurante</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong>Restaurante crud</strong>
                </h3>
                <p className='pb-3'>
                  En esta aplicacion web vamos a poder realizar todas las funciones de un CRUD (Crear, Leer, Actualizar y Borrar) tradicional. En el mismo vamos a gestionar productos o platos de un restaurant. Ademas como valor agregado la aplicacion cuenta con ciertas validaciones para generar productos o platos y actualiza el stock en el instante.
                </p>
                <a href="https://restaurant-descargarjson.netlify.app/">
                <MDBBtn color='success' rounded size='md'>
                    <MDBIcon far icon='clone' className='left' /> Visitar la aplicacion
                </MDBBtn>
              </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBCollapse>

    </section>
  );
}
}

export default PrimeProjects;