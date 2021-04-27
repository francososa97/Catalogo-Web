import React,{useState} from 'react'
import { MDBRow, MDBCol, MDBContainer,MDBCollapse, MDBInput,MDBIcon, MDBBtn} from "mdbreact";
import Notificacion from "../Component/Notificacion";
import { db } from "../FireBase/FirebaseConfig";
const Contacto  = () => {



    const [nombre,SetNombre]=useState("");
    const [email,SetEmail]=useState("");
    const [asunto,SetAsunto]=useState("");
    const [mensaje,SetMensaje]=useState("");
    const [notificacion,SetNotificacion]=useState({"exito":false,"titulo":"","cuerpo":"","mostrar":false});

    const CraerConsulta = () =>{
        
        if(email.length != 0 && mensaje !=0)
        {

          let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
          if(emailRegex.test(email))
          {
            let nuevaConsulta={"nombre":nombre,"email":email,"asunto":asunto,"mensaje":mensaje}
            db.collection("Consultas").add(nuevaConsulta);
            const consultasReferencias =db.collection("Consultas");
            consultasReferencias.onSnapshot((snap) => {
                const dataBaseConsultas = [];
                snap.forEach((snapChild) => {
                    dataBaseConsultas.push(snapChild.data());
                });
                dataBaseConsultas.forEach(consulta =>{
                  if(nuevaConsulta.nombre === consulta.nombre && nuevaConsulta.email === consulta.email && nuevaConsulta.asunto===consulta.asunto && nuevaConsulta.mensaje === consulta.mensaje ){
                    debugger;
                    let notificacionExito ={"exito":true,"titulo":"Su consulta fue enviada exitosamente.","cuerpo":"Me estare comunicando a la brevedad.","mostrar":true}
                    SetNotificacion(notificacionExito);
                  }
                })
            });
          }
          else
          {       
            let notificacionError ={"exito":false,"titulo":"Error al validar el mail.","cuerpo":`El texto: ${email}, no corresponde a un email real.`,"mostrar":true}
            SetNotificacion(notificacionError); 
          }
            
        }
        else{
            let notificacionError ={"exito":false,"titulo":"Tiene que completar los campos requeridos.","cuerpo":"Para poder enviar su consulta, tiene que completar los campos obligatorios","mostrar":true}
            SetNotificacion(notificacionError);
        }

    }
    return(
        <>
        <p className="text-center w-responsive mx-auto pb-5">
          Deja aquí tu consulta o su feedback!
        </p>
        <MDBRow>
          <MDBCol md="9" className="md-0 mb-5">
            <form>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput 
                        type="text" 
                        id="contact-name" 
                        label="Tu nombre (opcional)" 
                        onChange={(e) => SetNombre(e.target.value)} 
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-email"
                      label="Tu mail"
                      onChange={(e) => SetEmail(e.target.value)}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput 
                        type="text" 
                        id="contact-subject" 
                        label="Asunto (opcional)" 
                        onChange={(e) => SetAsunto(e.target.value)}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="contact-message"
                      label="Tu mensaje"
                      onChange={(e) => SetMensaje(e.target.value)}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </form>
            <div className="text-center text-md-left">
              <MDBBtn 
                color="primary"
                size="md"
                onClick={() => CraerConsulta()}
                >
                Enviar
              </MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="3" className="text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
                <p>Castelar, Buenos Aires, Argentina</p>
              </li>
              <li>
                <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
                <p>011 44186438</p>
              </li>
              <li>
                <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
                <p>franco.gonzalez.sosa@gmail.com</p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        {notificacion.mostrar
            ?
            <Notificacion 
                exito={notificacion.exito}
                titulo={notificacion.titulo}
                cuerpo={notificacion.cuerpo}
            />
        :null}
        </>
    );
}
export default Contacto