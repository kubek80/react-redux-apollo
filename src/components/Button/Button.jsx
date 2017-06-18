import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = props => (
  <button
    className="components__button__button"
    disabled={props.disabled}
    onClick={props.onClickHandler}
  >
    Search
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  disabled: true,
};

export default Button;
