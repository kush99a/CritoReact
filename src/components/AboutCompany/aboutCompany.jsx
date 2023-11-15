import React from 'react';
import Woman_blueskirt from '../../Assets/Images/woman-blueskirt.jpg';
import './aboutCompany.css';

const aboutCompany = () => {
  return (
<>
    <div class="aboutcompany">

        
        
        
        <div class="AC-bigbox">
            
            <div class="AC-leftbox">
                <img src={Woman_blueskirt} />
            </div>
            
            
            <div class="text-bluebox">
                <h5><strong>Samantha Brown, <span>Founder</span></strong></h5>
                <p>"Lorem ipsum dolor sit amet consectetur <br />
                    adipisicing elit."
                </p>
            </div>

    
    
        

        <div class="AC-rightbox">
            <p id="AC">About Company</p>

            <h2><strong> We Are Business <br />
                Consulting & Credit <br />
                Repair Experts</strong>
            </h2>

            <p class="AC-paragrafup">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam <br />
                officiis quas assumenda esse obcaecati? Ex esse error voluptates iure <br />
                vel totam eos.
            </p>
        
            <p class="AC-paragrafdown">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse <br />
                quasi incidunt adipisci accusantium libero provident voluptate amet.
            </p>

            <div class="AC-Buttons">
                <a class="LearnMore" href="#">
                    Learn More<i class="fa-solid fa-arrow-right"></i>
                </a>

                <a class="play-button" href="#">
                    <i class="fa-regular fa-circle-play"></i>
                </a> Intro Video
        
                
                
                

            </div>
        
        
        
        </div>
        

        </div>
    </div>
</>










  )
}

export default aboutCompany