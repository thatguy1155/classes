import React, { useState, useContext } from 'react';
import Form from './Components/AuthForm';
import { AuthContext } from '../Context/AuthContext';

export default function Authentication() {
  const [authMode, setAuthMode] = useState('login');
  const { login, register } = useContext(AuthContext);
  const submission = authMode === 'login' ? login : register;
  return (
    <div className="form-wrapper">
      <Form mode="login" submit={submission} />
    </div>
  );
}
