import React from 'react';
import './index.css';

export default class FilpCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboveText: 0,
      belowText: 0,
      isFliping: false
    }
  }
  componentWillReceiveProps(nextProps) {
    this.filp(nextProps.data);
  }
  filp(count) {
    this.setState({
      belowText: count,
      isFliping: true
    }, () => {
      setTimeout(() => {
        this.setState({
          isFliping: false,
          aboveText: count,
        })
      }, 600);
    });
  }
  render() {
    const { isFliping } = this.state;
    return (
      <div className={['box', isFliping ? 'go' : ''].join(' ')}>
        <div data-content={this.state.aboveText} className='card above'></div>
        <div data-content={this.state.belowText} className='card below'></div>
      </div>
    )
  }
}
