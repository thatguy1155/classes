import React, { createContext, useState } from 'react';

// predefined context
export const AppContext = createContext(
  {
    formEnabled: false,
    enableForm: () => {},
    disableForm: () => {},
  },
);

// main context class that contains all data
function AppContextProvider(props) {
  const [formEnabled, setFormEnabled] = useState([]);

  const enableForm = () => setFormEnabled(true);
  const disableForm = () => setFormEnabled(false);

  return (
    <AppContext.Provider value={{
      formEnabled,
      enableForm,
      disableForm,
    }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
