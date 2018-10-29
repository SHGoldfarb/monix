import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Clickable from './Clickable';
import { createMultiplierSelector } from '../redux/selectors';


const roundTo2Dec = number => Math.round(number * 100) / 100;

const RateTable = ({ multiplier }) => (
  <div>
    {[...Array(10).keys()].map(key => (
      <Clickable
        key={key}
        onClick={() => console.log('click', key)}
      >
        {roundTo2Dec((key + 1) * multiplier)}
      </Clickable>
    ))}
  </div>
);


RateTable.propTypes = {
  multiplier: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  multiplier: createMultiplierSelector(ownProps.rateNumber)(state),
});

export default connect(mapStateToProps)(RateTable);
