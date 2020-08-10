import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import store from '../Images/store.PNG';
import veterinario from '../Images/veterinario.PNG';
import br from '../Images/br.PNG';
import canciones from '../Images/canciones.PNG';
import clima from '../Images/clima.PNG';
import presupuesto from '../Images/presupuesto.PNG';
import coin from '../Images/coin.PNG';



const BlogPage = () => {

  const projects= [
    {
      title:"Generador de turnos de veterinario",
      tecnologyBody:"Con ayuda del state de react y hooks con props se obtuvo esta aplicación web que guarda información de un formulario para registrar turnos de una veterinaria, si se actualiza o se cierra la página esto se guarda en cache y cuando vuelva a ingresar, se podrá acceder nuevamente a la información.",
      userBody:" El usuario puede generar turnos para una veterinaria y si ocurre el caso de que la aplicación se cierra involuntariamente persistirá la información. El usuario tiene la opción de eliminar el turno definitivamente.",
      srcimg:veterinario,
      url:"https://citas-reservas-1-1-0.netlify.app/"
    },
    {
      title:"Presupuestador automático",
      tecnologyBody:"Se define un valor del presupuesto total que se guarda en el state. Luego con nuevos valores, que cargados por el usuario, se restan del presupuesto total y genera una lista de los gastos. En el caso de superar el presupuesto total la aplicación web lo informará por debajo del presupuesto restante.",
      userBody:"El usuario elige un presupuesto total. Luego podrá cargar los gastos que se restarán del mismo y en el caso de que supere dicho presupuesto, se convierta en 0 avisará través de una card de error, que ha superado.",
      srcimg:presupuesto,
      url:"https://caclcular-presupuesto.netlify.app/"
    },
    {
      title:"Clima react",
      tecnologyBody:"Consulta una api de climas, guarda la información en el state y lo muestra en un componente parametrizable por la respuesta de la api.", 
      userBody:"Cargando la información al formulario, mostrará el clima de la zona elegida mostrando el resultado de una manera amigable para el usuario.",
      srcimg:clima,
      url:"https://clima-react-practica.netlify.app/"
    },
    {
      title:"Store Front-end",
      tecnologyBody:"En este proyecto se utiliza JWT (json web token) que permite validar la “sesión” del usuario para mostrar o no el contenido.",
      userBody:"El usuario podrá ver productos y acceder a su descripción, también podrá hacer búsquedas acerca de este producto de manera protegida ya que si no, el contenido de la página los productos y el buscador se ocultan y no puede ser accesibles.",
      srcimg:store,
      url:"https://nifty-lamarr-803955.netlify.app/"
    },
    {
      title:"Fraces populares",
      tecnologyBody:"Con un api, un timer y un refresh logramos poder hacer una aplicación web en la que a los 10-15 segundos se actualiza la frase a través de una animación.",
      userBody:"Para los fanáticos de Breaking bad en esta aplicación web, se van mostrando frases de diversos personajes. Y sólo con apretar un botón, se obtiene una nueva frase.",
      srcimg:br,
      url:"https://frases-brakinbad.netlify.app/"
    },
    {
      title:"Buscador de letras de canciones",
      tecnologyBody:"Utiliza dos apis una para consultar la letra y otra que es un buscador de imágenes que se le atribuyen dos valores: el de artista y el de la canción entonces otorga una imagen del artista y la letra de la canción buscada.",
      userBody:"El usuario completando el formulario podrá acceder a una sección oculta de la página con el resultado de la búsqueda que hizo.",
      srcimg:canciones,
      url:"https://buscar-letra-musica.netlify.app/"
    },
    {
      title:"Found Image",
      tecnologyBody:"En este buscador de imágenes se consume un api y usa hooks para poder guardar la información del formulario y así obtener las imágenes como resultado.",
      userBody:"El usuario podrá obtener imágenes en alta calidad y lo redirigirá en donde está la imagen y podrá descargarla.",
      srcimg:coin,
      url:"https://buscador-imagen.netlify.app/"
    },
  ]
  
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