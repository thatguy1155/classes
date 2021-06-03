import React, { useContext } from 'react';
import { CrudContext } from '../Context/CRUDContext';
import { AppContext } from '../Context/AppContext';
import AppBar from './Components/AppBar';
import DataForm from './Components/DataForm';
import Thumbnails from './Components/Thumbnails';

export default function Main() {
  const { selectedData, createInfo, updateInfo } = useContext(CrudContext);
  const { formEnabled } = useContext(AppContext);

  const handleSubmission = () => {
    selectedData ? createInfo : updateInfo;
  };
  return (
    <div>
      {formEnabled
        ? <DataForm submit={handleSubmission} selectedData={selectedData} />
        : <Thumbnails />}
    </div>
  );
}
