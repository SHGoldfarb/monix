import React from 'react';
import PropTypes from 'prop-types';
import style from './Column.module.css';

const Column = ({ children, side }) => (
  <div className={`${style.column} ${side === 'left' && style.leftColumn}`}>{children}</div>
);

Column.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  side: PropTypes.string.isRequired,
};

export default Column;
