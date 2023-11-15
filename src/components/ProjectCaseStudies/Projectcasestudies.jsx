import React from 'react'
import './Projectcasestudies.css'
import Grove_your_business from '../../Assets/Images/grove-your-business.jpg'
import Responsive_website from '../../Assets/Images/responsive-website.jpg'
import Better_results from '../../Assets/Images/better-results.jpg'
import Your_business from '../../Assets/Images/your-business.jpg'

const Projectcasestudies = () => {
  return (
<>
        <div class="project-case-studies">

    <div class="pcs-bigbox">

        <div class="pcs-text">
            <p>Project & Case Studies</p>
            
            <h2><strong>Let’s Looks Our Global Projects</strong></h2>

        </div>


        <div class="pcs-topbox">
            <div class="box">
                <img src={Grove_your_business} />
                <h6><strong>Grow your business</strong></h6>
                <hr />
                <a href="#">
                Read More <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>

            <div class="box">
                <img src={Responsive_website} />
                <h6><strong>Why your client needs a responsive website</strong></h6>
                <hr />
                <a href="#">
                Read More <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>

        </div>


        <div class="pcs-bottombox">
            <div class="box">
                <img src={Better_results} />
                <h6><strong>Educate your employees to get better results</strong></h6>
                <hr />
                <a href="#">
                Read More <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>

            <div class="box">
                <img src={Your_business} />
                <h6><strong>Business Insights is a important piece of your business</strong></h6>
                <hr />
                <a href="#">
                Read More <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>




        </div>


        <nav>

            <a href="#">
            All Recent Projects <i class="fa-solid fa-arrow-right"></i>
            </a>

        </nav>
    </div>
    </div>
</>
  )
}

export default Projectcasestudies