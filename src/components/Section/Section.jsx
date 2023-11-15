import React from 'react'
import './Section.css'
import ManBlackSuit from '../../Assets/Images/man-blacksuit.svg'


const Section = () => {
  return (
    <section>
        <div class="section-bigbox">
            <div class="text-title">
                <div>
                    <h1>
                        <strong>We Provide The <br /> Best Business <br /> Solutions</strong>
                    </h1>
                </div>
                <div>
                    <p>
                        Establish your vision and value proposition and turn them into testable <br /> prototypes.
                    </p>
                </div>

                <nav class="gclmbutton">
                    <a class="getConsulting" href="#">
                        Get Consulting<i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a class="learnMore" href="#">
                        Learn More<i class="fa-solid fa-arrow-right"></i>
                    </a>
                </nav>
                
                    
                
            </div>
            
            <div class="picture">
                    <img src={ManBlackSuit} />
            </div>

        </div>
        
    </section>

  )

}
export default Section