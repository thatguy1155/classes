import { loginQuery, registerQuery } from '../Api/Auth_Queries';

export const loginCont = (loginData) => {
  const loginSuccess = loginQuery(loginData);
  return loginSuccess;
};

export const createAccount = (registerData) => {
  const registrationSuccess = registerQuery(registerData);
  return registrationSuccess;
};
