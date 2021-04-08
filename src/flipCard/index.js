import React from 'react';
import {Input, Button} from 'antd';
import FilpCard from './flipCard';

export default class flipCardDemo extends React.Component {
  state = {
    data: 0,
  }
  onClick() {
    this.setState({
      data: 4356
    })
  }
  render() {
    const {data} = this.state;
    let dataArray = data.toString().split('');
    return (
      <React.Fragment>
        {
          dataArray.map((item, index) => {
            return <FilpCard data={item} key={index} />
          })
        }
        <div>
          <Button onClick={this.onClick.bind(this)}>设置数据源</Button>
        </div>
      </React.Fragment>
    )
  }
}