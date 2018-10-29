import React, { Fragment } from 'react';
import style from './View.module.css';
import RateHeader from './RateHeader';
import RateTable from './RateTable';

const View = () => (
  <Fragment>
    <RateHeader theme={style} />
    <RateTable theme={style} />
  </Fragment>
);


export default (View);
