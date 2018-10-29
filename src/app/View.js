import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';
import { upMultiplier, downMultiplier } from '../redux/actions';
import style from './View.module.css';
import RateHeader from './RateHeader';
import RateTable from './RateTable';

const View = ({ multiplierUp, multiplierDown }) => (
  <div className={style.swipeableContainer}>
    <Swipeable
      onSwipedRight={multiplierUp}
      onSwipedLeft={multiplierDown}
    >
      <RateHeader theme={style} />
      <RateTable theme={style} />
    </Swipeable>
  </div>
);

View.propTypes = {
  multiplierUp: PropTypes.func.isRequired,
  multiplierDown: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  multiplierUp: () => dispatch(upMultiplier()),
  multiplierDown: () => dispatch(downMultiplier()),
});

export default connect(() => ({}), mapDispatchToProps)(View);
