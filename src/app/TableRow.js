import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Clickable from './Clickable';
import { classNames, pretty4DecNumber } from './utils';
import { rate1Selector, rate2Selector } from '../redux/selectors';
import style from './TableRow.module.css';

const TableRow = ({
  rate1, rate2, theme, multiplier, onColumnClick, primary,
}) => (
  <Clickable
    className={classNames(
      theme.columnsContainer,
      primary ? style.primaryTableRow : style.secondaryTableRow,
    )}
    onClick={onColumnClick}
  >
    <div

      className={classNames(theme.commonColumns, theme.leftColumn)}
    >
      {pretty4DecNumber(multiplier)}
    </div>
    <div

      className={classNames(theme.commonColumns, theme.rightColumn)}
    >
      {pretty4DecNumber(rate2.rate / rate1.rate * multiplier)}
    </div>
  </Clickable>
);

TableRow.propTypes = {
  rate1: PropTypes.shape({
    rate: PropTypes.number,
  }).isRequired,
  rate2: PropTypes.shape({
    rate: PropTypes.number,
  }).isRequired,
  theme: PropTypes.objectOf(PropTypes.string),
  multiplier: PropTypes.number.isRequired,
  onColumnClick: PropTypes.func,
  primary: PropTypes.bool,
};

TableRow.defaultProps = {
  theme: {},
  onColumnClick: () => console.log('No click handler'), // eslint-disable-line no-console
  primary: false,
};

const mapStateToProps = state => ({
  rate1: rate1Selector(state),
  rate2: rate2Selector(state),
});

export default connect(mapStateToProps)(TableRow);
