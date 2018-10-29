import React from 'react';
import PropTypes from 'prop-types';

const Clickable = ({ onClick, children, className }) => (
  <div
    onClick={onClick}
    role="button"
    tabIndex={0}
    cursor="select"
    style={{ cursor: 'pointer' }}
    className={className}
  >
    {children}
  </div>
);

Clickable.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

Clickable.defaultProps = {
  children: null,
  className: '',
};

export default Clickable;
