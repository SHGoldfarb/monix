import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './RateTable.module.css';
import { multiplierSelector } from '../redux/selectors';
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
    const { theme, rootMultiplier } = this.props;
    const { open } = this.state;
    const getPrimaryMultiplier = index => (index + 1) * rootMultiplier;
    const getSecondaryMultiplier = index => ((index + 1) / 10 + open + 1) * rootMultiplier;
    return (
      <div className={style.tablesContainer}>
        {open === null ? [...Array(10).keys()].map(index => (
          <TableRow
            multiplier={getPrimaryMultiplier(index)}
            theme={theme}
            key={index}
            onColumnClick={this.handleColumnClick(index)}
            primary
          />
        )) : (
          <Fragment>
            <TableRow
              multiplier={getPrimaryMultiplier(open)}
              theme={theme}
              onColumnClick={this.handleColumnClick(null)}
              primary
            />
            {[...Array(9).keys()].map(index => (
              <TableRow
                multiplier={getSecondaryMultiplier(index)}
                theme={theme}
                key={index}
                onColumnClick={this.handleColumnClick(index)}
              />
            ))}
            <TableRow
              multiplier={getPrimaryMultiplier(open + 1)}
              theme={theme}
              onColumnClick={this.handleColumnClick(null)}
              primary
            />
          </Fragment>
        )}
      </div>
    );
  }
}


RateTable.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
  rootMultiplier: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  rootMultiplier: multiplierSelector(state),
});

export default connect(mapStateToProps)(RateTable);
