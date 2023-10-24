import React from 'react'
import img_backgroundlines from '../../../assets/images/Rectangle 607.png'
import img_showCase from '../../../assets/images/showcase-img.svg'

import '../showcase/showcase.css'

const showcase = () => {
  return (
    <section className="showcase">

        <img id="vector5" src={img_backgroundlines} alt="vector graphic" />

            <div className="container">
                <div className="content">
                <h1>We provide The Best business solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    
                    <a className="btn-theme" href="get-consulting.html">Get consulting<i className="fa-regular fa-arrow-up-right"></i></a>
                    <a className="btn-transparent" href="services.html">Learn more<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
                <img src={img_showCase} alt="showcase image of a man with a tablet" />
            </div>
    </section>
  )
}

export default showcase