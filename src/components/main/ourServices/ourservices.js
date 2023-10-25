import React from 'react'
import ServiceBox from './servicebox'


const ourservices = () => {
  return (
    <section className="our-services">
                        
        <img id="vector1" src="images/Vectorvector1.png" alt="vector graphic" />
        <img id="vector2" src="images/Vectorvector2.png" alt="vector graphic" />

        <div className="container">

            <div className="section-title">
                <p>Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>

            <div className="os-boxes">

                <ServiceBox />
                

            </div>

            <div className="center-content">
                <a href="#" className="browse-btn">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>  
            
        </div>
    </section>
  )
}

export default ourservices