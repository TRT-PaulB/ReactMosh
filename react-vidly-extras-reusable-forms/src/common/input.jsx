import React from "react";

// WAS name, label, value, type, error, onChange
// BUT use rest operator to get other properties from the rest object where they are identical
const Input = ({ name, label, error, ...rest }) => {
  // always include name, label and error...
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //autoFocus  (supply this as a boolean param)
        id={name}
        name={name}
        className="form-control"
        {...rest} //  when input properties are the same as the target prop name, use ...rest
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

// because these are word for word, can use {...rest} operator
// type={type}
//         value={value}
//         onChange={onChange}
