import './Register.css';
import Header from './Login-Header';
import { useState } from 'react';

function Register() {
  // Initialize error state to false
  const [errorState, setErrorState] = useState({ display: false });
  
  return (
    <>
      <Header/>
      <div className='register-content-wrapper'>

          <form action="/oauth2/v1/fakeregister" method="post">
            <div className="signup-form">
              <h1>Create Account</h1>
              <div className="first-name-input">
                <h3>First Name</h3>
                <input type="text" spellCheck="false" name="fName"/><br/>
              </div>
              <div className="last-name-input">
                <h3>Last Name</h3>
                <input type="text" spellCheck="false" name="lName"/><br/>
              </div>
              <div className="email-input">
                <h3>Email Address</h3>
                <input type="text" spellCheck="false" name="email"/><br/>
              </div>
              <div className="password-input">
                <h3>Password</h3>
                <input type="text" spellCheck="false" name="password"/><br/>
              </div>
              <p className={ errorState.display ? "register-error" : "hidden" }>You must fill out the form to continue</p>
              <button type="submit">NEXT</button>
              
            </div>
          </form>

        <div className="or-dividor"><h4>OR</h4></div>
        <div className="sign-in">
          <a href="/oauth2/v1/fakeauthorize"><button>SIGN IN</button></a>

        </div>
      </div>
    </>
      
  )
}

export default Register;


