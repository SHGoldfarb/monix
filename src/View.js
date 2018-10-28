import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { rate1Selector, rate2Selector } from './redux/selectors';

const View = (props) => {
  const { rate1, rate2 } = props;
  return (
    <div>
      {rate1 && (
      <div>
        {rate1.name}
:
        {' '}
        {rate1.rate}
      </div>
      )}
      {rate2 && (
      <div>
        {rate2.name}
:
        {' '}
        {rate2.rate}
      </div>
      )}
    </div>
  );
};

View.propTypes = {
  rate1: PropTypes.shape({
    name: PropTypes.string,
    rate: PropTypes.number,
  }).isRequired,
  rate2: PropTypes.PropTypes.shape({
    name: PropTypes.string,
    rate: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  rate1: rate1Selector(state),
  rate2: rate2Selector(state),
});


export default connect(mapStateToProps)(View);
