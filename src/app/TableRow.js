import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Clickable from './Clickable';
import { classNames } from './utils';
import { rate1Selector, rate2Selector } from '../redux/selectors';
import style from './TableRow.module.css';

const TableRow = ({
  rate1, rate2, theme, multiplier, onColumnClick,
}) => (
  <div className={classNames(theme.columnsContainer, style.tableRow)}>
    <Clickable
      onClick={() => onColumnClick}
      className={classNames(theme.commonColumns, theme.leftColumn)}
    >
      {rate1.rate * multiplier}
    </Clickable>
    <Clickable
      onClick={() => onColumnClick}
      className={classNames(theme.commonColumns, theme.rightColumn)}
    >
      {rate2.rate * multiplier}
    </Clickable>
  </div>
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
};

TableRow.defaultProps = {
  theme: {},
  onColumnClick: () => {},
};

const mapStateToProps = state => ({
  rate1: rate1Selector(state),
  rate2: rate2Selector(state),
});

export default connect(mapStateToProps)(TableRow);
