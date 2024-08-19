/*
    Here we will create a state for sigup and login page
    1. if it state is signup then name field will be visible
    2. and if login then name field is hidden
*/

import { useState } from 'react';
import './CSS/LoginSignup.css';

function LoginSignup() {

    // state for page (Sign Up or Login)
    const [state,setState] = useState("Sign Up");

    // state for form data
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    function changeHandler(event){
        setFormData({...formData,[event.target.name]:event.target.value});
    }

    async function signup() {
        console.log("signup", formData);
        let responseData;
    
        try {
            const response = await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            responseData = await response.json();
    
            if (response.ok && responseData.success) {
                console.log("HELOOO");
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace('/'); // Redirect to home page after login
            } else {
                alert(responseData.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during the signup process. Please try again.');
        }
    }
    

    async function login() {
        console.log("login", formData);
        let responseData;
    
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json', // Corrected header value
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            responseData = await response.json();
    
            if (response.ok && responseData.success) {
                console.log("HELOOO");
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace('/'); // Redirect to home page after login
            } else {
                alert(responseData.error || "Login failed");
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during the login process. Please try again.');
        }
    }
    

return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>{state}</h1>
            <div className="loginsignup-fields">
                {state==='Sign Up'
                ? <input type="text" name="username" value={formData.username} onChange={changeHandler}   placeholder='Your Name' />
                : <></>}
                <input type="email" name="email" value={formData.email} onChange={changeHandler}   placeholder="Email Address" />
                <input type="password" name="password" value={formData.password} onChange={changeHandler}    placeholder='Password' />
            </div>
            <button onClick={()=>{state==='Login'?login():signup()}}>Continue</button>

            {/* if state is signup then login option given otherwise signup option given */}
            {state==='Sign Up'  
            ? <p className="loginsignup-login">Already have an account? <span onClick={()=>setState("Login")}>Login here</span> </p> 
            : <p className="loginsignup-login"> Create an account ? <span onClick={()=>setState("Sign Up")}>Click here</span> </p>}
            
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing, i agree to the terms of use &privacy policy.</p>
            </div>
        </div>
    </div>
)
}
export default LoginSignup;