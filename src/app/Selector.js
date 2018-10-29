import React from 'react';
import PropTypes from 'prop-types';
import style from './Selector.module.css';
import { classNames } from './utils';

const Selector = ({
  options, value, onChange, className,
}) => (
  <select value={value} onChange={onChange} className={classNames(className, style.selector)}>
    {options.map(option => <option value={option} key={option}>{option}</option>)}
  </select>
);

Selector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};


Selector.defaultProps = {
  className: '',
};

export default Selector;
