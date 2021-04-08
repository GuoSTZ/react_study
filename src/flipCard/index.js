import React from 'react';
import NumCard from './numCard';
import TimeCard from './timeCard';
import CountdownCard from './countdownCard';

export default class flipCardDemo extends React.Component {

  render() {
    return (
      <React.Fragment>
        <NumCard />
        <TimeCard />
        <CountdownCard />
      </React.Fragment>
    )
  }
}