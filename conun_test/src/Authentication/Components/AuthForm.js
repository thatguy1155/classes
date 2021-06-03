import React, { useState, useContext } from 'react';
import TextBox from '../../Components/TextBox';

export default function Form(props) {
  const { mode, submit } = props;
  const [email, setEmail] = useState('');
  const [verify, setVerify] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [verifyError, setVerifyError] = useState(false);

  const inputs = {
    email: {
      error: emailError,
      doesWhat: setEmail,
    },
    password: {
      error: passwordError,
      doesWhat: setPassword,
    },
    verify: {
      error: verifyError,
      doesWhat: setVerify,
    },
  };
  const displayedInputs = Object.keys(inputs).filter((input) => input !== 'verify' || mode === 'register');

  const isValidRegex = {
    email: /.+@.+\..+/,
    // eslint-disable-next-line no-useless-escape
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`!”?$?%^&*\(\)_–+=\{\[\}\]:;@‘~#|\\<,>.?\/])[A-Za-z\d`!”?$?%^&*\(\)_–+=\{\[\}\]:;@‘~#|\\<,>.?\/]{8,}$/,
  };

  const isValid = (entry, purpose) => entry && isValidRegex[purpose].test(entry);
  const isPasswordVerified = () => mode !== 'register' || password === verify;

  const handleSubmission = () => {
    if (isValid(email, 'email')) setEmailError(true);
    if (!isValid(password, 'password')) setPasswordError(true);
    if (!isPasswordVerified) setVerifyError(true);
    if (isValid(email, 'email') && isValid(password, 'password') && isPasswordVerified()) submit({ email, password });
  };

  return (
    <div id="form-wrapper">
      {displayedInputs.map((thisInput) => (
        <TextBox
          key={thisInput}
          purpose={thisInput}
          error={inputs[thisInput].error}
          updateInfo={inputs[thisInput].doesWhat}
        />
      ))}
      <button type="button" data-testid="button" className="submit-button" onClick={handleSubmission}>Submit</button>
    </div>
  );
}
