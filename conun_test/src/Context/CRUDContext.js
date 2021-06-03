import React, { createContext, useState } from 'react';
import {
  getData, postData, editData, deleteData,
} from '../Controller/CRUDController';

// predefined context
export const CrudContext = createContext(
  {
    returnedData: [],
    selectedData: {},
    selectData: (dataToSelect) => {},
    createInfo: (infoToPost) => {},
    readInfo: (infoToGet) => {},
    updateInfo: (infoToUpdate) => {},
    deleteInfo: (infoToDelete) => {},
  },
);

// main context class that contains all data
function CrudContextProvider(props) {
  const [returnedData, setReturnedData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  const selectData = (dataToSelect) => setSelectedData(dataToSelect);
  const createInfo = (infoToPost) => {
    const status = postData(infoToPost);
  };

  const readInfo = (infoToGet) => {
    const info = getData(infoToGet);
    setReturnedData(info);
  };

  const updateInfo = (infoToUpdate) => {
    const status = editData(infoToUpdate);
  };

  const deleteInfo = (infoToDelete) => {
    const deleted = deleteData(infoToDelete);
  };

  return (
    <CrudContext.Provider value={{
      returnedData,
      selectedData,
      selectData,
      createInfo,
      readInfo,
      updateInfo,
      deleteInfo,
    }}
    >
      {props.children}
    </CrudContext.Provider>
  );
}

export default CrudContextProvider;
