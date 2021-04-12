import React from "react";
import {  MDBCollapse,MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";
import recetas from '../Images/recetas.jpg'
import bitcoin from '../Images/bitcoin.jpg'
import cafe from '../Images/cafe.jpg'
import pokedex from '../Images/fondo-prueba3.jpg';

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
            <MDBCard className="card-pokedex" style={{backgroundImage:`url(${pokedex})`}}>
              
              <div 
                style={{
                    backgroundImage:
                    {pokedex}
                  }} 
                className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
                <h6 className="deep-orange-text" >
                  <MDBIcon far icon="file-alt" />
                  <strong> CRUD</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong>
                  Pokedex
                  </strong>
                </h3>
                <p className='pb-3'>
                  En este proyecto, se obtienen todos los pokemones de la región de kanto, en el cual se puede pueden visualizar todos los resultados en una tabla inteligente donde podemos modificar la cantidad de resultados que queremos ver, además vamos a poder obtener todos los detalles de cada Pokémon y modificarle los valores de su peso y altura.
                </p>
                <a href="https://poke-pokedex-spa.netlify.app/">
                  <MDBBtn color='orange' rounded size='md'>
                      <MDBIcon far icon='clone' className='left' /> Visitar la aplicacion
                  </MDBBtn>
                </a>
              </div>
            </MDBCard>
          </MDBCol>

          <MDBCol md='6' className='md-0 mb-4'>
          <MDBCard className="card-cripto" style={{backgroundImage:`url(${bitcoin})`}}>
              <div className='text-white text-center align-items-center rgba-black-strong py-5 px-4 rounded'  style={{padding: 30}} >
                  <h6 className='pink-text'>
                    <MDBIcon icon='coins' />
                    <strong> Cotizador</strong>
                  </h6>
                  <h3 className='py-3 font-weight-bold'>
                    <strong>Criptomonedas al instante</strong>
                  </h3>
                  <p className='pb-3'>
                    Gracias a esta aplicación vamos a poder consultar la cotización de diferentes criptomonedas en el instante, 
                    además de esto al momento de darnos la cotización también nos dará el precio más alto del día y el más bajo también y 
                    cuando fue la última actualización de la cotización.
                  </p>
                  <a href="https://cotizador-bitcoin-monedas.netlify.app/">
                  <MDBBtn color='pink' rounded size='md'>
                      <MDBIcon far icon='clone' className='left' /> Visitar la aplicacion
                  </MDBBtn>
                </a>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol md='6' className='md-0 mb-4'>
            <MDBCard
              className='card-restaurante'
              style={{backgroundImage:`url(${cafe})`}}
            >
              <div 
                  className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
                <div>
                  <h6 className='green-text'>
                    <MDBIcon icon='utensils' />
                    <strong> Restaurante</strong>
                  </h6>
                  <h3 className='py-3 font-weight-bold'>
                    <strong>Restaurante crud</strong>
                  </h3>
                  <p className='pb-3'>
                    En esta aplicación web vamos a poder realizar todas las funciones de un CRUD (Crear, Leer, Actualizar y Borrar) tradicional. 
                    En el mismo vamos a gestionar productos o platos de un restaurante. Además, como valor agregado, 
                    la aplicación cuenta con ciertas validaciones para generar productos o platos y actualiza el stock en el instante.
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
          
          <MDBCol md='12' className='mb-4'>
            <MDBCard className="card-bebidas" style={{backgroundImage:`url(${recetas})`}}>
              <div 
                style={{
                    backgroundImage:
                    {recetas}
                  }} 
                className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
                <h6 className='purple-text'>
                  <MDBIcon icon='cocktail' />
                  <strong> Recetas</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong>
                  Recetas de bebidas
                  </strong>
                </h3>
                <p className='pb-3'>
                Con esta útil aplicación web que utiliza SAS (software as service) usted podrá hacer búsquedas de bebidas tanto por nombre como por categoría. 
                En la misma podrá visualizar los resultados y podrá acceder a un apartado en una pantalla modal donde encontrará la preparación y los ingredientes en una lista desordenada.
                </p>
                <a href="https://serene-saha-ee66a7.netlify.app/">
                  <MDBBtn color='secondary' rounded size='md'>
                      <MDBIcon far icon='clone' className='left' /> Visitar la aplicacion
                  </MDBBtn>
                </a>
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


/*
    background-color: #cccccc;
    height: 352px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

*/