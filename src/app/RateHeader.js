import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { rate1NameSelector, rate2NameSelector } from '../redux/selectors';

const RateHeader = ({ name1, name2, theme }) => (
  <div className={theme.columnsContainer}>
    <div className={`${theme.leftColumn} ${theme.commonColumns}`}>{name1}</div>
    <div className={`${theme.rightColumn} ${theme.commonColumns}`}>{name2}</div>
  </div>
);

RateHeader.propTypes = {
  name1: PropTypes.string.isRequired,
  name2: PropTypes.string.isRequired,
  theme: PropTypes.objectOf(PropTypes.string),
};

RateHeader.defaultProps = {
  theme: {},
};

const mapStateToProps = state => ({
  name1: rate1NameSelector(state),
  name2: rate2NameSelector(state),
});

export default connect(mapStateToProps)(RateHeader);
