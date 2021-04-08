import React from 'react';
import './index.css';

export default class FilpCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboveText: 0,
      belowText: 0,
      isFliping: false,
      isSame: true,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.filp(nextProps.data);
  }
  componentDidMount() {
    const {data} = this.props;
    this.filp(data);
  }
  filp(count) {
    const belowText = this.state.belowText;
    this.setState({
      belowText: count,
      isFliping: true,
      isSame: belowText === count
    }, () => {
      setTimeout(() => {
        this.setState({
          isFliping: false,
          aboveText: count,
          isSame: true
        })
      }, 600);
    });
  }
  render() {
    const { isFliping, isSame } = this.state;
    return (
      <div className={['box', (isFliping && !isSame) ? 'go' : ''].join(' ')}>
        <div data-content={this.state.aboveText} className='card above'></div>
        <div data-content={this.state.belowText} className='card below'></div>
      </div>
    )
  }
}
