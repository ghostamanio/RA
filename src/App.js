import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+@katalystpartners\.com$/;

  const togglePasswordVisibility = (e) => {
    const passwordInput = e.target.previousElementSibling;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      e.target.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      e.target.textContent = 'Show';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
      alert('Form submitted successfully!');
      // Add further logic (e.g., API call) here
    }
  };

  return (
    <div className="App">
      <div className="page-title">Outlook</div>
      <div className="login-form">
        <div className="microsoft-header">Microsoft</div>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label className="input-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    placeholder="Email, phone, or Skype"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError && (
                    <div className="error-message" id="emailError">
                      Please enter the correct email id and password
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label className="input-label">
                    Password <span className="required">*</span>
                  </label>
                  <div className="password-container">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      className="show-password"
                      type="button"
                      onClick={togglePasswordVisibility}
                    >
                      Show
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="checkbox-row">
                  <label className="checkbox-container">
                    <input name="keep_signed_in" type="checkbox" />
                    Keep me signed in on this device
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="signin-button" type="submit">
                    Sign In
                  </button>
                </td>
              </tr>
              <tr>
                <td className="forgot-password">
                  Need to find <a href="#">your password</a>?
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;
