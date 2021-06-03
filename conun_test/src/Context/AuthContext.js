import React, { createContext, useState } from 'react';
import { loginCont, createAccount } from '../Controller/AuthController';

// predefined context
export const AuthContext = createContext(
  {
    isLoggedIn: false,
    email: '',
    password: '',
    verify: '',
    login: (loginInfo) => {},
    create: (registerInfo) => {},
  },
);

// main context class that contains all data
function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (loginInfo) => {
    const loginSuccess = loginCont(loginInfo);
    loginSuccess && setIsLoggedIn(true);
  };

  const register = (selection) => {
    createAccount(selection);
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      login,
      register,
    }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
