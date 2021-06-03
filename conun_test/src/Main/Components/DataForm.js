import React, { useState, useContext } from 'react';
import TextBox from '../../Components/TextBox';

export default function DataForm(props) {
  const { mode, submit, selectedData } = props;
  const [fieldOne, setFieldOne] = useState(selectedData ? selectedData.fieldOne : '');
  const [fieldTwo, setFieldTwo] = useState(selectedData ? selectedData.fieldTwo : '');
  const [fieldThree, setFieldThree] = useState(selectedData ? selectedData.fieldThree : '');
  const [fieldOneError, setFieldOneError] = useState(false);
  const [fieldTwoError, setFieldTwoError] = useState(false);
  const [fieldThreeError, setfieldThreeError] = useState(false);
  const inputs = {
    fieldOne: {
      field1: fieldOneError,
      doesWhat: setFieldOne,
    },
    fieldTwo: {
      error: fieldTwoError,
      doesWhat: setFieldTwo,
    },
    fieldThree: {
      error: fieldThreeError,
      doesWhat: setFieldThree,
    },
  };
  const handleSubmission = () => {
    if (!fieldOne) setFieldOneError(true);
    if (!fieldTwo) setFieldTwoError(true);
    if (!fieldThree) setfieldThreeError(true);
    if (fieldOne && fieldTwo && fieldThree) submit({ fieldOne, fieldTwo, fieldThree });
  };
  return (
    <div className="data-form">
      {Object.keys(inputs).map((thisInput) => (
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
