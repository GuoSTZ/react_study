import React from 'react';
import NumCard from './demo/numCard';
import TimeCard from './demo/timeCard';
import CountdownCard from './demo/countdownCard';
import RandomCard from './demo/randomCard';
import DocDemo from './doc/index';
import TestDemo from './doc/test';

export default class flipCardDemo extends React.Component {

  render() {
    return (
      <React.Fragment>
        {/* <NumCard /> */}
        {/* <TimeCard /> */}
        {/* <CountdownCard /> */}
        {/* <RandomCard /> */}
        <DocDemo />
        {/* <TestDemo /> */}
      </React.Fragment>
    )
  }
}