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
    this.handleColumnClick = this.handleColumnClick.bind(this);
  }

  handleColumnClick(multiplier) {
    return () => {
      const { open } = this.state;
      if (open === null) {
        this.setState({
          open: multiplier,
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
    const { open } = this.state;
    const rootMultiplier = 10;
    if (open === null) {
      const multipliers = [...Array(10).keys()].map(key => (key + 1) * rootMultiplier);
      return (
        <div className={style.tablesContainer}>
          {multipliers.map(multiplier => (
            <TableRow
              multiplier={multiplier}
              theme={theme}
              key={multiplier}
              onColumnClick={this.handleColumnClick(multiplier)}
              primary
            />
          ))}
        </div>
      );
    }
    const multipliers = [...Array(9).keys()].map(key => (key + 1) / 10 * rootMultiplier + open);
    return (
      <div className={style.tablesContainer}>
        <TableRow
          multiplier={open}
          theme={theme}
          onColumnClick={this.handleColumnClick(null)}
          primary
        />
        {multipliers.map(multiplier => (
          <TableRow
            multiplier={multiplier}
            theme={theme}
            key={multiplier}
            onColumnClick={this.handleColumnClick(multiplier)}
          />
        ))}
        <TableRow
          multiplier={open + rootMultiplier}
          theme={theme}
          onColumnClick={this.handleColumnClick(null)}
          primary
        />
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
