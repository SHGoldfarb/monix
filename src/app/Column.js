import React from 'react';
import PropTypes from 'prop-types';
import style from './Column.module.css';

const Column = ({ children }) => <div className={style.column}>{children}</div>;

Column.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Column;
