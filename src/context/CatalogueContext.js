import React, { createContext, useState, useEffect } from 'react';
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

// Crear el Context
export const CatalogueContext = createContext();

// Provider es donde se encuentran las funciones y state
const CatalogueProvider = (props) => {


    // crear el state del Context
    const [Catalogue, saveCatalog] = useState([]);

    // llenamos el hooks antes de que se cargue el archivo
    useEffect(() => {
        const getCatalogue = async () => {
          const projects= [
            {
              title:"Buscador de clientes",
              tecnologyBody:"Podemos realizar búsquedas por de clientes utilizando algoritmos de búsqueda y podemos agrupar filtros de búsqueda para encontrar el cliente buscado",
              userBody:"En esta aplicación se puede utilizar un buscador avanzado en el cual podemos realizar búsquedas generales de clientes, o podemos buscar por tipo de información sea nombre, direccion,email. tambien podemos filtrar por clientes chequeados.",
              url:"https://find-customer.netlify.app/",
              urlGit:"https://github.com/francososa97/Find-Customer",
              srcimg:ListadoCustomer,
            },
            {
              title:"Reserva de envios.",
              tecnologyBody:"Dentro de la aplicación creamos los horarios a cada 30 minutos y después utilizando vectores de tipo pila vamos agotando las reservas.",
              userBody:"Podemos gestionar reservas en distintos horarios y tenemos la opción de cancelar o dar de alta una reserva.",
              srcimg:Reservas,
              urlGit:"https://github.com/francososa97/Desafio-Tecnico-1",
              url:"https://gestion-reserva.netlify.app/"
            },
            {
              title:"Transformador de palabras en CamelCase",
              tecnologyBody:"Con la tecnología de hock y métodos propios de javascrpit pude filtrar los espacios del string ingresado y pasar a mayúscula el carácter siguiente al espacio en blanco.",
              userBody:"El usuario podrá cargar palabras u oraciones y convertirlas a CamelCase.",
              srcimg:CamelCase,
              urlGit:"https://github.com/francososa97/Convertidor-a-Camel-Case",
              url:"https://camel-case.netlify.app/"
            },
            {
              title:"Generador de turnos de veterinario",
              tecnologyBody:"Con ayuda del state de react y hooks con props se obtuvo esta aplicación web que guarda información de un formulario para registrar turnos de una veterinaria, si se actualiza o se cierra la página esto se guarda en cache y cuando vuelva a ingresar, se podrá acceder nuevamente a la información.",
              userBody:" El usuario puede generar turnos para una veterinaria y si ocurre el caso de que la aplicación se cierra involuntariamente persistirá la información. El usuario tiene la opción de eliminar el turno definitivamente.",
              srcimg:veterinarian,
              urlGit:"https://github.com/francososa97/citas-react",
              url:"https://citas-reservas-1-1-0.netlify.app/"
            },
            {
              title:"Presupuestador automático",
              tecnologyBody:"Se define un valor del presupuesto total que se guarda en el state. Luego con nuevos valores, que cargados por el usuario, se restan del presupuesto total y genera una lista de los gastos. En el caso de superar el presupuesto total la aplicación web lo informará por debajo del presupuesto restante.",
              userBody:"El usuario elige un presupuesto total. Luego podrá cargar los gastos que se restarán del mismo y en el caso de que supere dicho presupuesto, se convierta en 0 avisará través de una card de error, que ha superado.",
              srcimg:budget,
              urlGit:"https://github.com/francososa97/cotizado-seguros-auto",
              url:"https://caclcular-presupuesto.netlify.app/"
            },
            {
              title:"Clima react",
              tecnologyBody:"Consulta una api de climas, guarda la información en el state y lo muestra en un componente parametrizable por la respuesta de la api.", 
              userBody:"Cargando la información al formulario, mostrará el clima de la zona elegida mostrando el resultado de una manera amigable para el usuario.",
              srcimg:weather,
              urlGit:"https://github.com/francososa97/clima-react",
              url:"https://clima-react-practica.netlify.app/"
            },
            {
              title:"Store Front-end",
              tecnologyBody:"En este proyecto se utiliza JWT (json web token) que permite validar la “sesión” del usuario para mostrar o no el contenido.",
              userBody:"El usuario podrá ver productos y acceder a su descripción, también podrá hacer búsquedas acerca de este producto de manera protegida ya que si no, el contenido de la página los productos y el buscador se ocultan y no puede ser accesibles.",
              srcimg:store,
              urlGit:"https://github.com/francososa97/Tienda-Remeras-JWT",
              url:"https://nifty-lamarr-803955.netlify.app/"
            },
            {
              title:"Fraces populares",
              tecnologyBody:"Con un api, un timer y un refresh logramos poder hacer una aplicación web en la que a los 10-15 segundos se actualiza la frase a través de una animación.",
              userBody:"Para los fanáticos de Breaking bad en esta aplicación web, se van mostrando frases de diversos personajes. Y sólo con apretar un botón, se obtiene una nueva frase.",
              srcimg:br,
              urlGit:"https://github.com/francososa97/fraces-bbad",
              url:"https://frases-brakinbad.netlify.app/"
            },
            {
              title:"Buscador de letras de canciones",
              tecnologyBody:"Utiliza dos apis una para consultar la letra y otra que es un buscador de imágenes que se le atribuyen dos valores: el de artista y el de la canción entonces otorga una imagen del artista y la letra de la canción buscada.",
              userBody:"El usuario completando el formulario podrá acceder a una sección oculta de la página con el resultado de la búsqueda que hizo.",
              srcimg:song,
              urlGit:"https://github.com/francososa97/Buscador-de-cacnciones",
              url:"https://buscar-letra-musica.netlify.app/"
            },
            {
              title:"Found Image",
              tecnologyBody:"En este buscador de imágenes se consume un api y usa hooks para poder guardar la información del formulario y así obtener las imágenes como resultado.",
              userBody:"El usuario podrá obtener imágenes en alta calidad y lo redirigirá en donde está la imagen y podrá descargarla.",
              srcimg:coin,
              urlGit:"https://github.com/francososa97/React-Buscador-imagenes",
              url:"https://buscador-imagen.netlify.app/"
            },
          ]
          saveCatalog(projects);
        }
        getCatalogue();
    }, []);
    console.log(Catalogue);
    return (
        <CatalogueContext.Provider
            value={Catalogue}
        >
            {props.children}
        </CatalogueContext.Provider>
    )
}
export default CatalogueProvider;