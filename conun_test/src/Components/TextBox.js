import React from 'react';

export default function TextBox(props) {
  const {
    purpose, updateInfo,
  } = props;
  const inputType = purpose === 'email' ? 'text' : 'password';

  const handleChange = (event) => {
    updateInfo(event.target.value);
  };

  return (
    <label htmlFor={purpose}>
      <input type={inputType} id={purpose} data-testid={purpose} className="search-bar" onChange={handleChange} />
    </label>
  );
}
