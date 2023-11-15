import React from 'react'
import './Meetourteam.css'
import Kristine_Palmer from '../../Assets/Images/Kristine-Palmer.jpg'
import Mark_Aubri from '../../Assets/Images/Mark-Aubri.jpg'
import Kimberly_Hansen from '../../Assets/Images/Kimberly-Hansen.jpg'
import Justin_Willoman from '../../Assets/Images/Justin-Willoman.jpg'
import Cassandra_Warren from '../../Assets/Images/Cassandra-Warren.jpg'
import Amanda_Tulling from '../../Assets/Images/Amanda-Tulling.jpg'
import Jack_McDogglas from '../../Assets/Images/Jack-McDogglas.jpg'

const Meetourteam = () => {
  return (
<>
            <div class="meet-our-team">

        <div class="mot-bigbox">

            <div class="mot-text">
                <p>Meet Our Team</p>
                <div class="mot-rubrik">
                    <h3><strong>Experience Team Members</strong></h3>
                    <a href="#">
                        Browse Team<i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            





            <div class="mot-team">
                <div class="box">
                    <img src={Kristine_Palmer} />
                    <h4><strong>Kristine Palmer</strong></h4>
                    <p>Chef Operation Officer</p>
                </div>
                
                <div class="box">
                    <img src={Mark_Aubri} />
                    <h4><strong>Mark Aubri</strong></h4>
                    <p>Senior Consultant</p>
                </div>

                <div class="box">
                    <img src={Kimberly_Hansen} />
                    <h4><strong>Kimberly Hansen</strong></h4>
                    <p>Senior Consultant</p>
                </div>

                <div class="box">
                    <img src={Justin_Willoman} />
                    <h4><strong>Justin Willoman</strong></h4>
                    <p>Senior Tech Consultant</p>
                </div>

            </div>

            
            
            
            <div class="mot-dotswitch">
                <a href="#">
                    <i class="fa-solid fa-ellipsis"></i>
                </a>

            </div>

        </div>


        <div class="t-bigbox">

            <div class="t-text">
                <p>Testimonial</p>
                <h2><strong>What Our Client Says</strong></h2>

            </div>


            <div class="t-review">
                <div class="box">
                   <div class="t-star">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                   <div class="t-textreview">
                        <p>
                            "Lorem ipsum dolor, sit amet consectetur <br />  
                            adipisicing elit. Laudantium libero, ad <br /> 
                            dignissimos velit qui, dolorum obcaecati <br /> 
                            cum saepe nesciunt nemo eligendi <br />
                            numquam voluptate"
                        </p>
                    </div> 
                    <div class="t-image">
                        <img src={Cassandra_Warren} />
                        
                        <div>
                            <h4><strong>Cassandra Warren</strong></h4>
                            <p>Business Manager, Dorfus</p>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <div class="t-star">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                    
                    <div class="t-textreview">
                        <p>
                            "Lorem ipsum dolor, sit amet consectetur <br /> 
                            adipisicing elit. Laudantium libero, ad <br /> 
                            dignissimos velit qui, dolorum obcaecati <br /> 
                            cum saepe nesciunt nemo eligendi <br />
                            numquam voluptate"
                        </p>
                    </div>
                    <div class="t-image">
                        <img src={Amanda_Tulling} />
                        <div>
                            <h4><strong>Amanda Tulling</strong></h4>
                            <p>Senior Developer, Square</p>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <div class="t-star">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                    <div class="t-textreview">
                        <p>
                            "Lorem ipsum dolor, sit amet consectetur <br /> 
                            adipisicing elit. Laudantium libero, ad <br /> 
                            dignissimos velit qui, dolorum obcaecati <br /> 
                            cum saepe nesciunt nemo eligendi <br />
                            numquam voluptate"
                        </p>
                    </div>
                    <div class="t-image">
                        <img src={Jack_McDogglas} />
                        <div>
                            <h4><strong>Jack McDogglas</strong></h4>
                            <p>Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>

            </div>
        
        
        
            <div class="t-button">
                <a href="#">
                    All Reviews<i class="fa-solid fa-arrow-right"></i>
                </a>

            </div>
        
        
        
        
        
        </div>
    
    
    
    
    </div>
</>

  )
}

export default Meetourteam