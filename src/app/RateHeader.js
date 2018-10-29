import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRateNameSelector } from '../redux/selectors';

const RateHeader = ({ rateName }) => <div>{rateName}</div>;

RateHeader.propTypes = {
  rateName: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  rateName: createRateNameSelector(ownProps.rateNumber)(state),
});

export default connect(mapStateToProps)(RateHeader);
