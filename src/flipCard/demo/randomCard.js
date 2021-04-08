import React from 'react';
import FilpCard from '../flipCard';

export default class RandomCard extends React.Component {
  state = {
    data: 15540994,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        data: this.state.data + Math.floor(Math.random() * 10)
      })
    }, 1000);
  }
 
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {data} = this.state;
    let dataArray = data.toLocaleString().split('');
    return (
      <React.Fragment>
        {
          dataArray.map((item, index) => {
            return <FilpCard data={item} key={index} />
          })
        }
      </React.Fragment>
    )
  }
}