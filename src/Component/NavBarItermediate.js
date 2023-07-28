import React, {useContext} from 'react';
import Navbar from './Navbar';
import {CatalogueContext} from '../context/CatalogueContext';

const NavBarItermediate  =() => {

    const {setLanguage, translate} = useContext(CatalogueContext);
    return <Navbar setLanguage={setLanguage} translate={translate}/>
  }

export default NavBarItermediate;