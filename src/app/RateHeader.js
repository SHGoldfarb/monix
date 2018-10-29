import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { rate1NameSelector, rate2NameSelector, rateNamesSelector } from '../redux/selectors';
import { setRate1ByName, setRate2ByName } from '../redux/actions';
import Selector from './Selector';
import { classNames } from './utils';

const RateHeader = ({
  name1, name2, theme, rateNames, setRate1, setRate2,
}) => (
  <div className={theme.columnsContainer}>
    <div className={classNames(theme.leftColumn, theme.commonColumns)}>
      <Selector
        onChange={event => setRate1(event.target.value)}
        options={rateNames}
        value={name1}
      />
    </div>
    <div className={classNames(theme.rightColumn, theme.commonColumns)}>
      <Selector
        onChange={event => setRate2(event.target.value)}
        options={rateNames}
        value={name2}
      />
    </div>
  </div>
);


RateHeader.propTypes = {
  name1: PropTypes.string.isRequired,
  name2: PropTypes.string.isRequired,
  theme: PropTypes.objectOf(PropTypes.string),
  rateNames: PropTypes.arrayOf(PropTypes.string),
  setRate1: PropTypes.func.isRequired,
  setRate2: PropTypes.func.isRequired,
};

RateHeader.defaultProps = {
  theme: {},
  rateNames: [],
};

const mapStateToProps = state => ({
  name1: rate1NameSelector(state),
  name2: rate2NameSelector(state),
  rateNames: rateNamesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setRate1: name => dispatch(setRate1ByName(name)),
  setRate2: name => dispatch(setRate2ByName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RateHeader);
