import React, { createContext, useState, useEffect } from 'react';
import { db } from "../FireBase/FirebaseConfig";

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