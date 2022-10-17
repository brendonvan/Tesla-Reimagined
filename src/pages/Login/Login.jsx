import './Login.css';
import Header from './Login-Header';
import { useState } from 'react';

function Login() {
  // Initialize states
  const [emailButtonState, setEmailButtonState] = useState({ display: true });
  const [errorState, setErrorState] = useState({ display: false });
  const [passwordState, setPasswordState] = useState({ display: false });

  function handleCheckEmail(e) {
    // GET REQUEST FROM BACKEND
    // IF FOUND ADD 'hidden' CLASS TO .email-input button AND REMOVE 'hidden' FROM password-input
    e.preventDefault();
    if( true ) {
      setPasswordState({ display: true });
      setEmailButtonState({ display: false });
      setErrorState({ display: false });
    } else {
      // return did not find email
      setErrorState({ display: true });
    }
    // ELSE SEND A MESSAGE SAYING EMAIL NOT FOUND
  }

  return (
    <>
      <Header/>
      <div className='login-content-wrapper'>
        <div className="signin-form">
          <h1>Sign In</h1>
          {/* Redirect to Home */}
          <form action="/oauth2/v1/fakeauthorize" method="post">
            <div className="email-input">
              <h3>Email Address</h3>
              <input type="text" spellCheck="false" name="email"/><p className={ errorState.display ? "email-error" : "hidden" }>Email not found</p><br/>
              <button onClick={ (e) => { handleCheckEmail(e) } } className={ emailButtonState.display ? "next-button" : "hidden" }>NEXT</button>
            </div>
            <div className={ passwordState.display ? "password-input" : "password-input hidden" }>
              <h3>Password</h3>
              <input type="text" spellCheck="false" name="password"/><br/>
              <button type="submit">SIGN IN</button>
            </div>
          </form>
          
          <div className="forgot-buttons">
            <a href="#TOOBAD">Forgot email?</a>
            <p> | </p>
            <a href="#TOOBAD">Forgot password?</a>
          </div>
        </div>

        <div className="or-dividor"><h4>OR</h4></div>
        <div className="create-account">
          <a href="/oauth2/v1/fakeregister/"><button>CREATE ACCOUNT</button></a>

        </div>
      </div>
    </>
      
  )
}

export default Login;


