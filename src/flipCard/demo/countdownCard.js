import React from 'react';
import {Button} from 'antd';
import FilpCard from '../flipCard';

export default class CountdownCard extends React.Component {
  state = {
    countdown: 60
  }
 
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onCountdownClick() {
    this.interval = setInterval(() => {
      const countdown = this.state.countdown;
      if(countdown === 0) {
        clearInterval(this.interval);
        return;
      }
      this.setState({
        countdown: countdown - 1
      })
    }, 1000);
  }

  reset() {
    clearInterval(this.interval);
    this.setState({
      countdown: 60
    })
  }

  render() {
    const {countdown} = this.state;
    let countdownArray = countdown.toString().split('');
    // 补0
    if(countdownArray.length === 1) {
      countdownArray.unshift('0');
    }
    return (
      <React.Fragment>
        {
          countdownArray.map((item, index) => {
            return <FilpCard data={item} key={index} />
          })
        }
        <div>
          <Button onClick={this.onCountdownClick.bind(this)}>倒计时开始</Button>
          <Button onClick={this.reset.bind(this)}>重置</Button>
        </div>
      </React.Fragment>
    )
  }
}