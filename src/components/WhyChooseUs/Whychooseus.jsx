import React from 'react'
import WomanTalk from '../../Assets/Images/womans-talk.png'
import './Whychooseus.css'

const Whychooseus = () => {
  return (
<>
        <div class="why-choose-us">

    <div class="wcu-bigbox">

        <div class="wcu-leftbox">
            <div class="wcu-text">
                <p>Why Choose Us</p>

                <h2><strong>Why We Are The <br />
                    Best Business <br />
                    Consulting Agency</strong></h2>
            </div>


        <div class="wcu-leftboxdown">

            <div class="wcu-symbol">
                <i class="fa-regular fa-thumbs-up"></i>

                <div class="wcu-symbol-text">
                    <h6><strong>Process Excellence</strong></h6>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>

            <div class="wcu-symbol">
                <i class="fa-solid fa-bullseye"></i>

                <div class="wcu-symbol-text">
                    <h6><strong>Strategic Planning</strong></h6>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>

            <div class="wcu-symbol">
                <i class="fa-solid fa-pen-nib"></i>

                <div class="wcu-symbol-text">
                    <h6><strong>Experience Design</strong></h6>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>

            <div class="wcu-symbol">
                <i class="fa-solid fa-gear"></i>

                <div class="wcu-symbol-text">
                    <h6><strong>Artificial Inteligence</strong></h6>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>

            

        </div>


        </div>



        <div class="wcu-rightbox">

            <div class="wcu-image">
                <img src={WomanTalk} />

            </div>
            
            
            <div class="wcu-background">

            </div>
        </div>


    </div>


    </div>
</>
  )
}

export default Whychooseus