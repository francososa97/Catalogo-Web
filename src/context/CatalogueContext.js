import React, { createContext, useState, useEffect } from 'react';
import { db } from "../FireBase/FirebaseConfig";
import translateFile from "../Translate/Transalte.json";

export const CatalogueContext = createContext();

const CatalogueProvider = (props) => {

    
    const [catalogue, saveCatalog] = useState([]);
    const [language, setLanguage] = useState('español');
    const [translate, settranslate] = useState(translateFile[language]);

    useEffect(() => {

        const getCatalogue = async () => {
          const consultasReferencias =db.collection("catalogo");
          settranslate(translate[language]);
          consultasReferencias.onSnapshot((snap) => {
              let dataBaseConsultas = [];
              snap.forEach((snapChild) => {
                  dataBaseConsultas.push(snapChild.data());
              });
              saveCatalog(dataBaseConsultas);
          });
        }
        getCatalogue();
    }, [language,translate]);

    useEffect(() => {
        const changeLenguage = async () => {
            settranslate(translateFile[language]);
        }
        changeLenguage();
    }, [language,setLanguage]);

    return (
        <CatalogueContext.Provider
            value={{catalogue,translate,setLanguage}}
        >
            {props.children}
        </CatalogueContext.Provider>
    )
}
export default CatalogueProvider;