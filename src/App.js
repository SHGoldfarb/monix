import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import View from './app/View';
import rates from './dummy-rates';
import { setRate1, setRate2, setMultiplier } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    const rateNames = Object.keys(rates);
    const rate1 = {
      name: rateNames[1],
      rate: rates[rateNames[1]],
    };
    const rate2 = {
      name: rateNames[2],
      rate: rates[rateNames[2]],
    };

    props.onRatesChange(rate1, rate2);
    props.onMultiplierChange(10);
  }

  render() {
    return (
      <View />
    );
  }
}

App.propTypes = {
  onRatesChange: PropTypes.func.isRequired,
  onMultiplierChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onRatesChange: (rate1, rate2) => {
    dispatch(setRate1(rate1));
    dispatch(setRate2(rate2));
  },
  onMultiplierChange: multiplier => dispatch(setMultiplier(multiplier)),
});

export default connect(() => ({ }), mapDispatchToProps)(App);
