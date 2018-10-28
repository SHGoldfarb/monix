import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import View from './View';
import rates from './dummy-rates';
import { setRate1, setRate2 } from './redux/actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const rateNames = Object.keys(rates);
    const rate1 = {
      name: rateNames[0],
      rate: rates[rateNames[0]],
    };
    const rate2 = {
      name: rateNames[1],
      rate: rates[rateNames[1]],
    };

    props.onRatesChange(rate1, rate2);
  }

  render() {
    return (
      <View />
    );
  }
}

App.propTypes = {
  onRatesChange: PropTypes.func.isRequired,
};

const mapDispatchtoProps = dispatch => ({
  onRatesChange: (rate1, rate2) => {
    dispatch(setRate1(rate1));
    dispatch(setRate2(rate2));
  },
});

export default connect(() => ({ }), mapDispatchtoProps)(App);
