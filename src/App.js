import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from './View'
import rates from './dummy-rates'
import { setRate1, setRate2 } from './actions.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const rate_names = Object.keys(rates);
    const rate1 = {
      name: rate_names[0],
      rate: rates[rate_names[0]]
    };
    const rate2 = {
      name: rate_names[1],
      rate: rates[rate_names[1]]
    };
    this.state = {
      rate1,
      rate2
    };

    props.onRatesChange(rate1, rate2);
  }

  render() {
    return (
      <View />
    );
  }
}

const mapDispatchtoProps = dispatch => ({
  onRatesChange: (rate1, rate2) => {
    dispatch(setRate1(rate1))
    dispatch(setRate2(rate2))
  }
});

export default connect(() => { }, mapDispatchtoProps)(App);
