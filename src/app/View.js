import React from 'react';
import Column from './Column';
import RateHeader from './RateHeader';
import RateTable from './RateTable';
import style from './View.module.css';

const View = () => (
  <div className={style.columnsContainer}>
    <Column side="left">
      <RateHeader rateNumber={1} />
      <RateTable rateNumber={1} />
    </Column>
    <Column side="right">
      <RateHeader rateNumber={2} />
      <RateTable rateNumber={2} />
    </Column>
  </div>
);


export default (View);
