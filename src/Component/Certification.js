import React, { useState } from 'react';
import googleanalytics from '../Images/googleanalytics.jpg';
import react from '../Images/React.png';
import SqlBlog from '../Images/SqlBlog.png';
import net from '../Images/.net.png';
import CSharp from '../Images/c#.jpg';
import html from '../Images/html.png';
import htmlCss from '../Images/HtmlCss.jpg';
import javaScript from '../Images/js.png';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBTooltip,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBBtn
} from 'mdbreact';

const Certification = () => {


    let certifications = [
        {'title': 'React - La Guía Completa: Hooks Context Redux MERN +15 Apps','Institute': '','urlCertification':'https://udemy-certificate.s3.amazonaws.com/image/UC-6YXEAOE0.jpg','expeditionDate': new Date('2020,09,06'),'expirationDate':null,'technologyImage': react,'id':0},
        {'title': 'Google Analytics para Principiantes','Institute': 'Google Analytics Academy','urlCertification':'https://analytics.google.com/analytics/academy/certificate/lPIEcMO2SCS3Dp1DMhVZ_w','expeditionDate': new Date("2020,08,30"),'expirationDate':new Date("2023,08,30"),'technologyImage': googleanalytics,'id':1},
        {'title': 'Reactjs (15 hs)','Institute': 'EducacionIT','urlCertification':'https://alumni.education/course/calendar/122600/diploma/36371OYOPAU7UXK86OK7LI041AZ9E296/Franco-Damian-Gonzalez-Sosa-5542072','expeditionDate': new Date("2019,06,22"),'expirationDate':null,'technologyImage': react,'id':2},
        {'title': 'Fundamentos de Programación con SQL Server 2017','Institute': 'EducacionIT','urlCertification':'https://alumni.education/course/calendar/diploma/35876J1N50S1ROQU0Y85W1CBWYYKLW6I/Franco-Damian-Gonzalez-Sosa-5542072','expeditionDate': new Date("2019,03,15"),'expirationDate':null,'technologyImage': SqlBlog,'id':3},
        {'title': 'HTML5: Fundamentos Web','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/calendar/diploma/get?format=pdf&code=35384J719A0SE739HSH1A4Q4II9H6T5P','expeditionDate': new Date("2019,03,29"),'expirationDate':null,'technologyImage': html,'id':4},
        {'title': 'Introducción a la Programación con C# .NET','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/certificate/generate?hash=ea5fe9b3-9b04-46eb-8198-3a7a91918a74&format=pdf','expeditionDate':  new Date("2019,12,23"),'expirationDate':null,'technologyImage': net,'id':5},
        {'title': 'Maquetación Web: HTML 5 y CSS','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/certificate/generate?hash=6f7f1647-1294-4305-ae33-73f9ee178f03&format=pdf&download=1','expeditionDate':  new Date("2019,12,23"),'expirationDate':null,'technologyImage': htmlCss,'id':6},
        {'title': 'Javascript Desarrollador Avanzado Front-End','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/calendar/diploma/get?format=pdf&code=358772F048LD2683MZGL0TGGQTF6YK31','expeditionDate':  new Date("2019,03,21"),'expirationDate':null,'technologyImage': javaScript,'id':7},
    ];

    let groupOne=certifications.filter(x=> x.id >=4)
    let groupeTwo=certifications.filter(x=> x.id < 4)

    console.log(groupOne)
    console.log(groupeTwo)
    

  return (
      <>
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold text-center my-5'>Mis certificaciones</h2>
      <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId='1'>
            <MDBRow>
                {groupOne.map(groupOne=>{
                    return(
                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                            <MDBCard narrow ecommerce className='mb-2'>
                                    <MDBCardImage
                                        cascade
                                        top
                                        src={groupOne.technologyImage}
                                        alt='sample photo'
                                    />
                                    <MDBCardBody cascade>
                                        <a href='#!' className='text-muted'>
                                        <h5>{groupOne.title}</h5>
                                        </a>
                                        <MDBCardTitle>
                                        <strong>
                                            <a href='#!'>{groupOne.Institute}</a>
                                        </strong>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            <label className='float-left'>
                                                Obtenida el: {groupOne.expeditionDate.toLocaleDateString()}
                                            </label>
                                            <label className='float-right'>
                                                {groupOne.expirationDate === null? 'Sin fecha de vencimiento': `vence el: ${groupOne.expirationDate.toLocaleDateString()}`}
                                            </label>
                                        </MDBCardText>
                                        <MDBCardFooter className='px-1'>
                                            <button color="info" type="button" class="btn btn-primary btn-lg btn-block" href={groupeTwo.urlCertification}>Certification</button>
                                        </MDBCardFooter>
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
                            <MDBCard narrow ecommerce className='mb-2'>
                                    <MDBCardImage
                                        cascade
                                        top
                                        src={groupeTwo.technologyImage}
                                        alt='sample photo'
                                    />
                                    <MDBCardBody cascade>
                                        <a href='#!' className='text-muted'>
                                        <h5>{groupeTwo.title}</h5>
                                        </a>
                                        <MDBCardTitle>
                                        <strong>
                                            <a href='#!'>{groupeTwo.Institute}</a>
                                        </strong>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            <label className='float-left'>
                                                Obtenida el: {groupeTwo.expeditionDate.toLocaleDateString()}
                                            </label>
                                            <label className='float-right'>
                                                {groupeTwo.expirationDate === null? 'Sin fecha de vencimiento': `vence el: ${groupeTwo.expirationDate.toLocaleDateString()}`}
                                            </label>
                                        </MDBCardText>
                                        <MDBCardFooter className='px-1'>
                                            <button color="info" type="button" class="btn btn-primary btn-lg btn-block" href={groupeTwo.urlCertification}>Certification</button>
                                        </MDBCardFooter>
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



/*






*/