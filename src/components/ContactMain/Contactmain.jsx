import React, { useState } from 'react';
import './Contactmain.css';
import Karta from '../../Assets/Images/Map.jpg';

const Contactmain = () => {

    const [name, setName] = useState ('');
    const [epost, setEpost] = useState ('');
    const [message, setMessage] = useState ('');
    const [nameError, setNameError] = useState ('');
    const [epostError, setEpostError] = useState ('');
    const [messageError, setMessageError] = useState ('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName (value);
        if (value.length < 2) {
            setNameError ('Name must be at least 2 characters long');
        } else {
            setNameError('');
        }

    };
    
    const handleEpostChange = (e) => {
        const value = e.target.value;
        setEpost (value);
        if (!value.includes ('@')) {
            setEpostError ('Email must contain @')
        } else {
            setEpostError ('');
        }
        

    };

    const handleMessageChange = (e) => {
        const value = e.target.value;
        setMessage (value);
        if (value.length <10) {
            setMessageError ('Message must be at least 10 characters')
        } else{
            setMessageError ('');
        }
    };

    const leaveUsMessage = async (e) => {
        e.preventDefault();
        const body = {
            name: name,
            email: epost,
            message: message
        };
    
        console.log("body: ", body);
    
          try {
            const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            });
    
            console.log("Response", response);
    
            if (response.status === 200) {
              alert("Successfully sent");
            } else {
              alert("Something went wrong");
            }
          } catch (error) {
            console.log(error);
          }
      };

    



    
  
  
  
  
    return (
    <section>

    <div class="bigbox">
        <div class="mid-box">
            <div class="button-box">
                <a href="home-html">Home</a>
                <a href="contact.html">Contact</a>
            </div>

            <div class="rubrik-box">
                <h1><strong>Let’s Connect</strong></h1>
            </div>
        </div>
    </div>
  

    <div class="contact-us-bigbox">

        <div class="box border">
            <div class="cu-symbol">
                <i class="fa-solid fa-location-dot"></i>
                
                <div class="cu-text">
                    <h6><strong>Visit Us</strong></h6>
                    <p>
                        Sveavägen 31 <br />
                        111 31 Stockholm
                    </p>
                </div>
            </div>
        </div>

        

        <div class="box border">
            <div class="cu-symbol">
                <i class="fa-solid fa-phone"></i>
                
                <div class="cu-text">
                    <h6><strong>Call Us</strong></h6>
                    <p>
                        +46 (8) 121 470 50 <br />
                        +46 (8) 121 470 51
                    </p>
                </div>
            </div>
        </div>

        <div class="box border">
            <div class="cu-symbol">
                <i class="fa-solid fa-envelope"></i>
                
                <div class="cu-text">
                    <h6><strong>Email Us</strong></h6>
                    <p>
                        info@crito.com <br />
                        support@crito.com
                    </p>
                </div>
            </div>
        </div>

    </div>

    <div class="leave-message">
        <div class="lm-text">
            <h2>
                <strong>Leave us a message <br /> 
                        for any information.</strong>
            </h2>
        </div>

        
        <form onSubmit={leaveUsMessage} class="lm-searchbox">
           
            <div class="lm-search">
                <input type="text" placeholder="Name*" value={name} onChange={handleNameChange} />
                {nameError && <div className="error"> {nameError} </div>}
            </div>

            <div class="lm-search">
                <input type="email" placeholder="Email*" value={epost} onChange={handleEpostChange}/>
                {epostError && <div className="error">{epostError}</div>}
            </div>

            <div class="lm-searchbig">
                <input type="text" placeholder="Your Message*" value={message} onChange={handleMessageChange} />
                {messageError && <div className="error">{messageError}</div>}
            </div>

        

            <nav class="lm-button">
                <button type="submit">
                    Send Message 
                </button>
            </nav>
        </form>
    </div>


    <div class="map">
        <img src={Karta} />

    </div>


</section>
  )
}

export default Contactmain