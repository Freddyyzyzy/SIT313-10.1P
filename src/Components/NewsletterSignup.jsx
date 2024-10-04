import React from 'react';
import "../index.css";

function WelcomeEmail() {
    const handleSubmit = async (event) => {
        event.preventDefault(); 

        const email = event.target.email.value; 

        try {
            const response = await fetch('http://localhost:3000/subscribe', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }), 
            });

            if (response.ok) {
                alert('Welcome email sent!'); 
            } else {
                alert('Failed to send welcome email.'); 
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the welcome email.'); 
        }
    };

    return (
        <div id="welcomeEmailSection">
            <form onSubmit={handleSubmit}> 
                <div id="welcomeLabelDiv">
                    <label id="welcomeLabel" htmlFor="email">SIGN UP FOR OUR DAILY INSIDER</label>
                </div>
                <div id="emailInputDiv"> 
                    <input type="email" id="email" name="email" placeholder="Please enter your email" required autoComplete="email" />
                </div>
                <div id="welcomeButtonDiv">
                    <button type="submit" id="subscribeButton">Subscribe</button>
                </div>
            </form>
        </div>
    );
}

export default WelcomeEmail;
