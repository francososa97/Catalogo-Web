import React,{useState} from 'react';
import iconExito from '../Images/Icons/check.png';
import iconCancelar from '../Images/Icons/cancelar.png';

const Notificacion = (props) => {

    const {cuerpo,exito,titulo} = props;
    const esExtio = exito? "bd-callout bd-callout-succes": "bd-callout bd-callout-error";
    const iconoActual =  exito? iconExito: iconCancelar;
    return(
        <>
            <div className={esExtio}>
              <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img
                                tag="img"
                                className="rounded-circle z-depth-1 img-fluid icon-notificacion"
                                alt="Sample avatar"
                                src={iconoActual}
                            />
                        </div>
                        <div className="col-md-10">
                            <h4 className="display-6" id="conveying-meaning-to-assistive-technologies" >{titulo}</h4>
                            <p className="text-muted">{cuerpo}</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </>

    );
}
export default Notificacion;