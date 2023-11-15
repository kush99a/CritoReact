import React from 'react'
import './Footer.css'
import Footer_Logo from '../../Assets/Images/footer-logo.svg'


const Footer = () => {
  return (
    <footer>

        <div class="footer-bigbox">

            <div class="footer-topbox">
                
                <div class="footer-logotype">
                    <img src={Footer_Logo} />

                    <p>
                        Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Placeat obcaecati voluptas <br />
                        voluptates! Voluptates laborum nam <br />
                        ratione minus necessitatibus, iure <br />
                        praesentium.
                    </p>
                </div>
            
                <div class="footer-about">
                    <div class="box">
                        <h5><strong>Company</strong></h5>

                        <div class="footer-buttons">
                            <div><a href="#">About</a></div>
                            <div><a href="#">Features</a></div>
                            <div><a href="#">Works</a></div>
                            <div><a href="#">Career</a></div>
                        </div>
                    </div>

                    <div class="box">
                        <h5><strong>Help</strong></h5>

                        <div class="footer-buttons">
                            <div><a href="#">Customer Suport</a></div>
                            <div><a href="#">Delivery Details</a></div>
                            <div><a href="#">Terms & Conditions</a></div>
                            <div><a href="#">Privacy Policy</a></div>

                        </div>

                    </div>

                    <div class="box">
                        <h5><strong>Resources</strong></h5>

                        <div class="footer-buttons">
                            <div><a href="#">Free eBooks</a></div>
                            <div><a href="#">Development Tutorial</a></div>
                            <div><a href="#">How to - Blog</a></div>
                            <div><a href="#">Youtube Playlist</a></div>
                        </div>
                    </div>

                    <div class="box">
                        <h5><strong>Link</strong></h5>
                        
                        <div class="footer-buttons">
                            <div><a href="#">Free</a></div>
                            <div><a href="#">Development Tutorial</a></div>
                            <div><a href="#">How to - Blog</a></div>
                            <div><a href="#">Youtube Playlist</a> </div>
                        </div>
                    </div>

                </div>
            
            
            
            
            </div>




            <div class="footer-line">
                <hr />

            </div>



            <div class="footer-last">
                <p>&copy 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            
                <div class="footer-socialmedia">
                    <a href="#">
                        <i class="fa-brands fa-facebook"></i>
                    </a>

                    <a href="#">
                        <i class="fa-brands fa-twitter"></i>
                    </a>

                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>


                </div>
            
            
            
            </div>

           
        
        
        
        </div>

        





    </footer>
  )
}

export default Footer