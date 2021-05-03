import React, { createContext, useState, useEffect } from 'react';
import { db } from "../FireBase/FirebaseConfig";


export const CatalogueContext = createContext();

const CatalogueProvider = (props) => {

    
    const [Catalogue, saveCatalog] = useState([]);

    useEffect(() => {
        const getCatalogue = async () => {

           
            /*
            const triviador = {
                srcimg:Triviador,
                tecnologyBody:"en esta aplicación web que utiliza firebase pude gestionar registros de usuarios con información dada de alta en la aplicación. Los usuarios pueden ingresar con su nombre y obtener trivias y géneros aleatorios de un banco de datos. Esta aplicación está construida con EcmaScript almacena el puntaje y la duración  que el usuario tuvo al finalizar la trivia del género que eligió.",
                title:"Triviador",
                url:"https://triviador.netlify.app/",
                urlGit:"https://github.com/francososa97/Find-Customer",
                userBody:"en esta aplicación web el usuario puede registrar su nombre y elegir un género de trivias para responder diez preguntas de multiple choice. Obtendrá su puntaje y cuando tiempo demoro en hacer la trivia. Al finalizar la podrá acceder a una tabla con el top 10 de mejores puntajes.",
            }
            */
          const consultasReferencias =db.collection("catalogo");

          consultasReferencias.onSnapshot((snap) => {
              let dataBaseConsultas = [];
              snap.forEach((snapChild) => {
                  dataBaseConsultas.push(snapChild.data());
              });
              saveCatalog(dataBaseConsultas);
          });
        }
        getCatalogue();
    }, []);
    return (
        <CatalogueContext.Provider
            value={Catalogue}
        >
            {props.children}
        </CatalogueContext.Provider>
    )
}
export default CatalogueProvider;