/* eslint-disable react/prop-types */
import React from 'react';

const Select = ({ name, options, handleChange, state }) => (
      <select name={name} onChange={handleChange} value={state || ""}>
        <option value="" disabled hidden>{name}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
  );

export default Select;