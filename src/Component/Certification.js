import React from 'react';
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
  MDBIcon
} from 'mdbreact';

const Certification = () => {

    let certifications = [
        {'title': 'React - La Guía Completa: Hooks Context Redux MERN +15 Apps','Institute': '','urlCertification':'https://udemy-certificate.s3.amazonaws.com/image/UC-6YXEAOE0.jpg','expeditionDate': new Date('2020-09-06'),'expirationDate':null,'technologyImage': react},
        {'title': 'Google Analytics para Principiantes','Institute': 'Google Analytics Academy','urlCertification':'https://analytics.google.com/analytics/academy/certificate/lPIEcMO2SCS3Dp1DMhVZ_w','expeditionDate': new Date("2020-08-30"),'expirationDate':new Date("2023-08-30"),'technologyImage': googleanalytics},
        {'title': 'Reactjs (15 hs)','Institute': 'EducacionIT','urlCertification':'https://alumni.education/course/calendar/122600/diploma/36371OYOPAU7UXK86OK7LI041AZ9E296/Franco-Damian-Gonzalez-Sosa-5542072','expeditionDate': new Date("2019-06-22"),'expirationDate':null,'technologyImage': react},
        {'title': 'Fundamentos de Programación con SQL Server 2017','Institute': 'EducacionIT','urlCertification':'https://alumni.education/course/calendar/diploma/35876J1N50S1ROQU0Y85W1CBWYYKLW6I/Franco-Damian-Gonzalez-Sosa-5542072','expeditionDate': new Date("2019-03-15"),'expirationDate':null,'technologyImage': SqlBlog},
        {'title': 'HTML5: Fundamentos Web','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/calendar/diploma/get?format=pdf&code=35384J719A0SE739HSH1A4Q4II9H6T5P','expeditionDate': new Date("2019-03-29"),'expirationDate':null,'technologyImage': html},
        {'title': 'Introducción a la Programación con C# .NET','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/certificate/generate?hash=ea5fe9b3-9b04-46eb-8198-3a7a91918a74&format=pdf','expeditionDate':  new Date("2019-12-23"),'expirationDate':null,'technologyImage': net},
        {'title': 'Maquetación Web: HTML 5 y CSS','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/certificate/generate?hash=6f7f1647-1294-4305-ae33-73f9ee178f03&format=pdf&download=1','expeditionDate':  new Date("2019-12-23"),'expirationDate':null,'technologyImage': htmlCss},
        {'title': 'Javascript Desarrollador Avanzado Front-End','Institute': 'EducacionIT','urlCertification':'https://api.alumni.education/course/calendar/diploma/get?format=pdf&code=358772F048LD2683MZGL0TGGQTF6YK31','expeditionDate':  new Date("2019-03-21"),'expirationDate':null,'technologyImage': javaScript},
    ]

  return (
      <>
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold text-center my-5'>Certificaciones</h2>
      <p className='grey-text text-center w-responsive mx-auto mb-5'>
        Dentro de esta Seccion podras encontrar algunas de mis Certificaciones y cursos finalizados
      </p>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId='1'>
            <MDBRow>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard narrow ecommerce className='mb-2'>
                            <MDBCardImage
                                cascade
                                top
                                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                                alt='sample photo'
                            />
                            <MDBCardBody cascade>
                                <a href='#!' className='text-muted'>
                                <h5>Shoes</h5>
                                </a>
                                <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Leather boots</a>
                                </strong>
                                </MDBCardTitle>
                                <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                                <MDBCardFooter className='px-1'>
                                <span className='float-left'>69$</span>
                                <span className='float-right'>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-eye mr-3' />
                                    <span>Quick Look</span>
                                    </MDBTooltip>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-heart' />
                                    <span>Add to Whishlist</span>
                                    </MDBTooltip>
                                </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                            </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard narrow ecommerce className='mb-2'>
                            <MDBCardImage
                                cascade
                                top
                                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                                alt='sample photo'
                            />
                            <MDBCardBody cascade>
                                <a href='#!' className='text-muted'>
                                <h5>Shoes</h5>
                                </a>
                                <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Leather boots</a>
                                </strong>
                                </MDBCardTitle>
                                <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                                <MDBCardFooter className='px-1'>
                                <span className='float-left'>69$</span>
                                <span className='float-right'>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-eye mr-3' />
                                    <span>Quick Look</span>
                                    </MDBTooltip>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-heart' />
                                    <span>Add to Whishlist</span>
                                    </MDBTooltip>
                                </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                            </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard narrow ecommerce className='mb-2'>
                            <MDBCardImage
                                cascade
                                top
                                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                                alt='sample photo'
                            />
                            <MDBCardBody cascade>
                                <a href='#!' className='text-muted'>
                                <h5>Shoes</h5>
                                </a>
                                <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Leather boots</a>
                                </strong>
                                </MDBCardTitle>
                                <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                                <MDBCardFooter className='px-1'>
                                <span className='float-left'>69$</span>
                                <span className='float-right'>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-eye mr-3' />
                                    <span>Quick Look</span>
                                    </MDBTooltip>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-heart' />
                                    <span>Add to Whishlist</span>
                                    </MDBTooltip>
                                </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                            </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard narrow ecommerce className='mb-2'>
                        <MDBCardImage
                            cascade
                            top
                            src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                            alt='sample photo'
                        />
                        <MDBCardBody cascade>
                            <a href='#!' className='text-muted'>
                            <h5>Shoes</h5>
                            </a>
                            <MDBCardTitle>
                            <strong>
                                <a href='#!'>Leather boots</a>
                            </strong>
                            </MDBCardTitle>
                            <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                            <MDBCardFooter className='px-1'>
                            <span className='float-left'>69$</span>
                            <span className='float-right'>
                                <MDBTooltip domElement placement='top'>
                                <i className='grey-text fa fa-eye mr-3' />
                                <span>Quick Look</span>
                                </MDBTooltip>
                                <MDBTooltip domElement placement='top'>
                                <i className='grey-text fa fa-heart' />
                                <span>Add to Whishlist</span>
                                </MDBTooltip>
                            </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                        </MDBCard>
            </MDBCol>
            </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
            <MDBRow>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard narrow ecommerce className='mb-2'>
                            <MDBCardImage
                                cascade
                                top
                                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                                alt='sample photo'
                            />
                            <MDBCardBody cascade>
                                <a href='#!' className='text-muted'>
                                <h5>Shoes</h5>
                                </a>
                                <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Leather boots</a>
                                </strong>
                                </MDBCardTitle>
                                <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                                <MDBCardFooter className='px-1'>
                                <span className='float-left'>69$</span>
                                <span className='float-right'>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-eye mr-3' />
                                    <span>Quick Look</span>
                                    </MDBTooltip>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-heart' />
                                    <span>Add to Whishlist</span>
                                    </MDBTooltip>
                                </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                            </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard narrow ecommerce className='mb-2'>
                            <MDBCardImage
                                cascade
                                top
                                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                                alt='sample photo'
                            />
                            <MDBCardBody cascade>
                                <a href='#!' className='text-muted'>
                                <h5>Shoes</h5>
                                </a>
                                <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Leather boots</a>
                                </strong>
                                </MDBCardTitle>
                                <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                                <MDBCardFooter className='px-1'>
                                <span className='float-left'>69$</span>
                                <span className='float-right'>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-eye mr-3' />
                                    <span>Quick Look</span>
                                    </MDBTooltip>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-heart' />
                                    <span>Add to Whishlist</span>
                                    </MDBTooltip>
                                </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                            </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard narrow ecommerce className='mb-2'>
                            <MDBCardImage
                                cascade
                                top
                                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                                alt='sample photo'
                            />
                            <MDBCardBody cascade>
                                <a href='#!' className='text-muted'>
                                <h5>Shoes</h5>
                                </a>
                                <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Leather boots</a>
                                </strong>
                                </MDBCardTitle>
                                <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                                <MDBCardFooter className='px-1'>
                                <span className='float-left'>69$</span>
                                <span className='float-right'>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-eye mr-3' />
                                    <span>Quick Look</span>
                                    </MDBTooltip>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-heart' />
                                    <span>Add to Whishlist</span>
                                    </MDBTooltip>
                                </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                            </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard narrow ecommerce className='mb-2'>
                        <MDBCardImage
                            cascade
                            top
                            src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                            alt='sample photo'
                        />
                        <MDBCardBody cascade>
                            <a href='#!' className='text-muted'>
                            <h5>Shoes</h5>
                            </a>
                            <MDBCardTitle>
                            <strong>
                                <a href='#!'>Leather boots</a>
                            </strong>
                            </MDBCardTitle>
                            <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                            <MDBCardFooter className='px-1'>
                            <span className='float-left'>69$</span>
                            <span className='float-right'>
                                <MDBTooltip domElement placement='top'>
                                <i className='grey-text fa fa-eye mr-3' />
                                <span>Quick Look</span>
                                </MDBTooltip>
                                <MDBTooltip domElement placement='top'>
                                <i className='grey-text fa fa-heart' />
                                <span>Add to Whishlist</span>
                                </MDBTooltip>
                            </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                        </MDBCard>
            </MDBCol>
            </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
            <MDBRow>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard narrow ecommerce className='mb-2'>
                            <MDBCardImage
                                cascade
                                top
                                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                                alt='sample photo'
                            />
                            <MDBCardBody cascade>
                                <a href='#!' className='text-muted'>
                                <h5>Shoes</h5>
                                </a>
                                <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Leather boots</a>
                                </strong>
                                </MDBCardTitle>
                                <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                                <MDBCardFooter className='px-1'>
                                <span className='float-left'>69$</span>
                                <span className='float-right'>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-eye mr-3' />
                                    <span>Quick Look</span>
                                    </MDBTooltip>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-heart' />
                                    <span>Add to Whishlist</span>
                                    </MDBTooltip>
                                </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                            </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard narrow ecommerce className='mb-2'>
                            <MDBCardImage
                                cascade
                                top
                                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                                alt='sample photo'
                            />
                            <MDBCardBody cascade>
                                <a href='#!' className='text-muted'>
                                <h5>Shoes</h5>
                                </a>
                                <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Leather boots</a>
                                </strong>
                                </MDBCardTitle>
                                <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                                <MDBCardFooter className='px-1'>
                                <span className='float-left'>69$</span>
                                <span className='float-right'>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-eye mr-3' />
                                    <span>Quick Look</span>
                                    </MDBTooltip>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-heart' />
                                    <span>Add to Whishlist</span>
                                    </MDBTooltip>
                                </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                            </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard narrow ecommerce className='mb-2'>
                            <MDBCardImage
                                cascade
                                top
                                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                                alt='sample photo'
                            />
                            <MDBCardBody cascade>
                                <a href='#!' className='text-muted'>
                                <h5>Shoes</h5>
                                </a>
                                <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Leather boots</a>
                                </strong>
                                </MDBCardTitle>
                                <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                                <MDBCardFooter className='px-1'>
                                <span className='float-left'>69$</span>
                                <span className='float-right'>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-eye mr-3' />
                                    <span>Quick Look</span>
                                    </MDBTooltip>
                                    <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-heart' />
                                    <span>Add to Whishlist</span>
                                    </MDBTooltip>
                                </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                            </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard narrow ecommerce className='mb-2'>
                        <MDBCardImage
                            cascade
                            top
                            src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                            alt='sample photo'
                        />
                        <MDBCardBody cascade>
                            <a href='#!' className='text-muted'>
                            <h5>Shoes</h5>
                            </a>
                            <MDBCardTitle>
                            <strong>
                                <a href='#!'>Leather boots</a>
                            </strong>
                            </MDBCardTitle>
                            <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                            <MDBCardFooter className='px-1'>
                            <span className='float-left'>69$</span>
                            <span className='float-right'>
                                <MDBTooltip domElement placement='top'>
                                <i className='grey-text fa fa-eye mr-3' />
                                <span>Quick Look</span>
                                </MDBTooltip>
                                <MDBTooltip domElement placement='top'>
                                <i className='grey-text fa fa-heart' />
                                <span>Add to Whishlist</span>
                                </MDBTooltip>
                            </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                        </MDBCard>
            </MDBCol>
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