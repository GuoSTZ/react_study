import React from 'react';
import NumCard from './components/numCard';
import TimeCard from './components/timeCard';
import CountdownCard from './components/countdownCard';

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