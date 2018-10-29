import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { rate1NameSelector, rate2NameSelector } from '../redux/selectors';

const RateHeader = ({ rate1Name, rate2Name, theme }) => (
  <div className={theme.columnsContainer}>
    <div className={`${theme.leftColumn} ${theme.commonColumns}`}>{rate1Name}</div>
    <div className={`${theme.rightColumn} ${theme.commonColumns}`}>{rate2Name}</div>
  </div>
);

RateHeader.propTypes = {
  rate1Name: PropTypes.string.isRequired,
  rate2Name: PropTypes.string.isRequired,
  theme: PropTypes.objectOf(PropTypes.string),
};

RateHeader.defaultProps = {
  theme: {},
};

const mapStateToProps = state => ({
  rate1Name: rate1NameSelector(state),
  rate2Name: rate2NameSelector(state),
});

export default connect(mapStateToProps)(RateHeader);
