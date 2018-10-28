import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRateNameSelector } from '../redux/selectors';

const Column = ({ rateName }) => <div>{rateName}</div>;

Column.propTypes = {
  rateName: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  rateName: createRateNameSelector(ownProps.rateNumber)(state),
});

export default connect(mapStateToProps)(Column);
