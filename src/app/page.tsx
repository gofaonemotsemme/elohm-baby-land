import React from 'react';

export const metadata = {
  title: "Elohim Baby Land",
  description: "Welcome to BOS.PAY. Discover seamless digital payment processing, cryptocurrency services, and CBDC payment solutions.",
  keywords: [
    "secure digital payments",
    "contactless payment solutions",
    "user-friendly payment system",
    "CBDC payment solutions",
    "increase sales with crypto"
  ],
  icons: {
    icon: "/favicon.ico",
  }, 
};


const serviceIcons = [
    { icon: "/images/service-1.png", alt: "Facebook", href:"/" },
    { icon: "/images/service-2.png", alt: "Instagram", href:"/"  },
    { icon: "/images/service-3.png", alt: "Twitter", href:"/"  },
    { icon: "/images/service-4.png", alt: "Whatsapp", href:"/"  },
  ];

export default function Home() {
  return (
      <div className="container-fluid">
        <section className="row hero-container">
            <div className="col">
              <div className="hero-content">
                <h1 className='hero-title'>Your Partner in Raising Happy, <br /> Healthy, and Brilliant Children</h1>
                <p className='hero-subtitle'>From daycare to digital learning, we're here to support your family's journey.</p>
                <div className="hero-buttons-container">
                <button className='hero-button'>
                  <a href="/admissions" className='hero-button-link'>Enroll Now</a>
                </button>
                <button className='hero-button'>
                  <a href="/about" className='hero-button-link'>Learn More</a>
                </button>
                </div>
              </div>
            </div>
        </section>

        <section className="row about-container">
          <div className="col">
            <div className="row about-content">
            <div className="col col-8 about-text-column text-start">
              <div className="about-title">
                <p className="about-title-a">Welcome to</p>
                <h1 className="about-title-b">Elohim Baby Land</h1>
              </div>
              <p className='about-subtitle'>Empowering Parents, Enriching Children's Lives</p>
              <p className='about-intro-paragraph'>Elohim Baby Land was founded in 2018 with a passion for providing exceptional childcare and 
                family support in Mahikeng.  We believe in creating a nurturing environment where children can grow, learn, and develop a lifelong love 
                of learning.  Beyond daycare, we offer a wide range of services and products designed to make parenting easier 
                and more enjoyable.</p>
              <button className='about-button'>
                  <a href="/about" className='about-button-link'>Read More</a>
              </button>
            </div> 
            <div className="col col-4 text-end">
              <img src="/images/toy-stack.png" alt="Elohim Baby Land" className="img-fluid" />
            </div> 
            </div>
          </div> 
        </section>

        <section className="row services-container">
          <div className="col">
            <div className="row">
              <div className="col services-titles">
                <h1 className="services-title">Our Comprehensive Services</h1>
                <p className='services-subtitle'>Explore our diverse services designed to meet the needs of modern families.</p>
              </div>
            </div>
            <div className="row">
              {serviceIcons.map((service, index) => (
                <div className="col col-3 service-icon-container" key={index}>
                  <div className="">
                    <a href={service.href}>

                    <img src={service.icon} alt={service.alt} className="img-fluid service-icon"/>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>

    
  );
}
