import React from 'react';
import googleanalytics from '../Images/googleanalytics.jpg';
import react from '../Images/React.png';
import SqlBlog from '../Images/SqlBlog.png';
import net from '../Images/.net.png';
import CSharp from '../Images/c#.jpg';
import html from '../Images/html.png';
import htmlCss from '../Images/HtmlCss.jpg';
import javaScript from '../Images/js.png';
import sjt1 from '../Images/sjt1.jpeg';
import sjt2 from '../Images/sjt2.jpeg';
import utn from '../Images/Utn.jpeg';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from 'mdbreact';

const Certification = () => {


    let certifications = [
        {'title': 'React - La Guía Completa: Hooks Context Redux MERN +15 Apps','Institute': '','urlCertification':'https://udemy-certificate.s3.amazonaws.com/image/UC-6YXEAOE0.jpg','expeditionDate': new Date('2020,09,06'),'expirationDate':null,'technologyImage': react,'id':1},
        {'title': 'Google Analytics para Principiantes','Institute': 'Google Analytics Academy','urlCertification':'https://analytics.google.com/analytics/academy/certificate/lPIEcMO2SCS3Dp1DMhVZ_w','expeditionDate': new Date("2020,08,30"),'expirationDate':new Date("2023,08,30"),'technologyImage': googleanalytics,'id':2},
        {'title': 'Reactjs (15 hs)','Institute': 'EducacionIT','urlCertification':'https://alumni.education/course/calendar/122600/diploma/36371OYOPAU7UXK86OK7LI041AZ9E296/Franco-Damian-Gonzalez-Sosa-5542072','expeditionDate': new Date("2019,06,22"),'expirationDate':null,'technologyImage': react,'id':3},
        {'title': 'Fundamentos de Programación con SQL Server 2017','Institute': 'EducacionIT','urlCertification':'https://alumni.education/course/calendar/diploma/35876J1N50S1ROQU0Y85W1CBWYYKLW6I/Franco-Damian-Gonzalez-Sosa-5542072','expeditionDate': new Date("2019,03,15"),'expirationDate':null,'technologyImage': SqlBlog,'id':4},
        {'title': 'HTML5: Fundamentos Web','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/calendar/diploma/get?format=pdf&code=35384J719A0SE739HSH1A4Q4II9H6T5P','expeditionDate': new Date("2019,03,29"),'expirationDate':null,'technologyImage': html,'id':5},
        {'title': 'Introducción a la Programación con C# .NET','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/certificate/generate?hash=ea5fe9b3-9b04-46eb-8198-3a7a91918a74&format=pdf','expeditionDate':  new Date("2019,12,23"),'expirationDate':null,'technologyImage': net,'id':6},
        {'title': 'Maquetación Web: HTML 5 y CSS','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/certificate/generate?hash=6f7f1647-1294-4305-ae33-73f9ee178f03&format=pdf&download=1','expeditionDate':  new Date("2019,12,23"),'expirationDate':null,'technologyImage': htmlCss,'id':7},
        {'title': 'Javascript Desarrollador Avanzado Front-End','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/calendar/diploma/get?format=pdf&code=358772F048LD2683MZGL0TGGQTF6YK31','expeditionDate':  new Date("2019,03,21"),'expirationDate':null,'technologyImage': javaScript,'id':8},
        {'title': 'Introducción al Paradigma de Objetos','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/certificate/generate?hash=41c02664-ab8d-4b11-8284-85c3f5ce2cf3&format=pdf','expeditionDate':  new Date("2019,12,23"),'expirationDate':null,'technologyImage': CSharp,'id':9},
        {'title': 'Holograma','Institute': 'Instituto Tecnico Industrial "San Judas Tadeo','urlCertification':null,'expeditionDate': new Date("2016,12,07"),'expirationDate':null,'technologyImage': sjt1,'id':10},
        {'title': 'Bachiller en bienes y servicios','Institute': 'Instituto Tecnico Industrial "San Judas Tadeo','urlCertification':null,'expeditionDate':  new Date("2016,12,07"),'expirationDate':null,'technologyImage': sjt2,'id':11},
        {'title': 'Diseño web','Institute': 'Universidad Tecnológica Nacional','urlCertification':null,'expeditionDate':  new Date("2017,08,01"),'expirationDate':null,'technologyImage': utn,'id':12},
    ];

    let groupOne=certifications.filter(x=> x.id <=4)
    let groupeTwo=certifications.filter(x=> x.id > 4 && x.id <=8)
    let groupeThree=certifications.filter(x=> x.id > 8 && x.id <=12)

    console.log(groupOne)
    console.log(groupeTwo)
    console.log(groupeThree)
    

  return (
      <>
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold text-center my-5'>Mis certificaciones</h2>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem className='pb-5'>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId='1'>
            <MDBRow>
                {groupOne.map(groupOne=>{
                    return(
                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                        <MDBCard>
                        <MDBCardImage
                                    cascade
                                    top
                                    src={groupOne.technologyImage}
                                    alt='sample photo'
                                    height="200"
                                />
                            <MDBCardBody>
                            <MDBCardTitle>
                            <h5>{groupOne.title}</h5>
                            <strong>
                                <a href='#!'>{groupOne.Institute}</a>
                            </strong>
                            </MDBCardTitle>
                            <MDBCardText> 
                                <label className='float-left p-1'>
                                    Obtenida el: {groupOne.expeditionDate.toLocaleDateString()}
                                </label>
                                <label className='float-right p-1'>
                                    {groupOne.expirationDate === null? 'Sin fecha de vencimiento': `vence el: ${groupOne.expirationDate.toLocaleDateString()}`}
                                </label>
                            </MDBCardText>
                            <a href={groupOne.urlCertification}>
                            <button color="info" type="button" class="btn btn-primary btn-lg btn-block">Certification</button>
                            </a>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    )
                })}

            </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBRow>
              {groupeTwo.map(groupeTwo=>{
                    return(
                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                        <MDBCard>
                        <MDBCardImage
                                    cascade
                                    top
                                    src={groupeTwo.technologyImage}
                                    alt='sample photo'
                                    height="200"
                                />
                            <MDBCardBody>
                            <MDBCardTitle>
                            <h5>{groupeTwo.title}</h5>
                            <strong>
                                <a href='#!'>{groupeTwo.Institute}</a>
                            </strong>
                            </MDBCardTitle>
                            <MDBCardText> 
                                <label className='float-left p-1'>
                                    Obtenida el: {groupeTwo.expeditionDate.toLocaleDateString()}
                                </label>
                                <label className='float-right  p-1'>
                                    {groupeTwo.expirationDate === null? 'Sin fecha de vencimiento': `vence el: ${groupeTwo.expirationDate.toLocaleDateString()}`}
                                </label>
                            </MDBCardText>
                            <a href={groupeTwo.urlCertification}>
                            <button color="info" type="button" class="btn btn-primary btn-lg btn-block">Certification</button>
                            </a>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                        )
                })}
              </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
            <MDBRow>
                {groupeThree.map((groupeThree,i=0)=>{
                    return(
                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                        <MDBCard>
                        <MDBCardImage
                                    cascade
                                    top
                                    src={groupeThree.technologyImage}
                                    alt='sample photo'
                                    height="200"
                                />
                            <MDBCardBody>
                            <MDBCardTitle>
                            <h5>{groupeThree.title}</h5>
                            <strong>
                                <a href='#!'>{groupeThree.Institute}</a>
                            </strong>
                            </MDBCardTitle>
                            <MDBCardText> 
                                <label className='float-left p-1'>
                                    Obtenida el: {groupeThree.expeditionDate.toLocaleDateString()}
                                </label>
                                <label className='float-right p-1'>
                                    {groupeThree.expirationDate === null? 'Sin fecha de vencimiento': `vence el: ${groupeThree.expirationDate.toLocaleDateString()}`}
                                </label>
                            </MDBCardText>
                            {groupeThree.urlCertification === null ? null :  <a href={groupeThree.urlCertification}><button color="info" type="button" class="btn btn-primary btn-lg btn-block">Certification</button></a> }
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    )
                })}

            </MDBRow>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </section>
  </>
  );
};

export default Certification;