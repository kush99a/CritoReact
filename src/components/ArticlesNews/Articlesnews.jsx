import React from 'react'
import './Articlesnews.css'
import Business_one from '../../Assets/Images/Business-one.jpg'
import Business_two from '../../Assets/Images/Business-two.jpg'
import Business_three from '../../Assets/Images/Business-three.jpg'

const Articlesnews = () => {
  return (
    <>
    <div class="article-and-news">

<div class="an-bigbox">

    <div class="an-text">
        <p>Article And News</p>

        <div class="an-rubrik-button">
            <h2><strong>Get Every Single Articles & News</strong></h2>
            <a href="#">
                Browse Article<i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>


    </div>


    <div class="an-boxes">
        <div class="box">
            <img src={Business_one} />
            <p class="an-image-rubrik">Business</p>
            <h5><strong>How To Use Digitalization <br />
                In The Classroom</strong>
            </h5>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                 Architecto sed hic libero.
            </p>
        </div>

        <div class="box">
            <img src={Business_two} />
            <p class="an-image-rubrik">Business</p>
            <h5><strong>How To Implement Chat GPT <br />
                In Your Projects</strong>
            </h5>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                 Architecto sed hic libero.
            </p>
        </div>

        <div class="box">
            <img src={Business_three} />
           <p class="an-image-rubrik">Business</p>
            <h5><strong>The Guide To Support <br />
                Modern CSS Design</strong>
            </h5>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                 Architecto sed hic libero.
            </p>
        </div>

    </div>




    <div class="an-switch">
        <a href="#">
            <i class="fa-solid fa-ellipsis"></i>
        </a>
    </div>






</div>




</div>
    </>
  )
}

export default Articlesnews