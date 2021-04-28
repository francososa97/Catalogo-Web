import React, { createContext, useState, useEffect } from 'react';
import { db } from "../FireBase/FirebaseConfig";


export const CatalogueContext = createContext();

const CatalogueProvider = (props) => {

    
    const [Catalogue, saveCatalog] = useState([]);

    useEffect(() => {
        const getCatalogue = async () => {

          const consultasReferencias =db.collection("Catalogo");

          consultasReferencias.onSnapshot((snap) => {
              const dataBaseConsultas = [];
              snap.forEach((snapChild) => {
                  dataBaseConsultas.push(snapChild.data());
              });
              saveCatalog(dataBaseConsultas[0].proyectos);
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