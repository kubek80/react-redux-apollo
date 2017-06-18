import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

const Select = ({ onChange, id, name, options }) => (
  <div className="components_select__wrapper">
    <label className="components_select__wrapper__label" htmlFor={id}>
      {name}
    </label>
    <select id={id} disabled={!options.length} onChange={e => onChange(e.target.value, id)}>
      <option>...{name}</option>
      { options.length && options.map(
        el => <option value={el.id} key={el.id}>{el.name}</option>,
      ) }
    </select>
  </div>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

Select.defaultProps = { options: [] };

export default Select;
