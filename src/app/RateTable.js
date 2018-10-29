import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './RateTable.module.css';
import { createMultiplierSelector } from '../redux/selectors';
import TableRow from './TableRow';

class RateTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: null,
    };
  }

  columnClickHandler(columnNumber) {
    return () => {
      const { open } = this.state;
      if (open === null) {
        this.setState({
          open: columnNumber,
        });
      } else {
        this.setState({
          open: null,
        });
      }
    };
  }

  render() {
    const { theme } = this.props;
    const multipliers = [...Array(10).keys()].map(key => (key + 1) * 10);
    return (
      <div className={style.tablesContainer}>
        {multipliers.map(multiplier => (
          <TableRow multiplier={multiplier} theme={theme} key={multiplier} />
        ))}
      </div>
    );
  }
}


RateTable.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  multiplier: createMultiplierSelector(ownProps.rateNumber)(state),
});

export default connect(mapStateToProps)(RateTable);
