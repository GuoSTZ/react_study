import React from 'react';
import {Button} from 'antd';
import FilpCard from './flipCard';

export default class NumCard extends React.Component {
  state = {
    data: 0,
  }

  onClick(count) {
    this.setState({
      data: count
    });
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
          <Button onClick={this.onClick.bind(this, 4356)}>设置数据源4356</Button>
          <Button onClick={this.onClick.bind(this, 4359)}>设置数据源4359</Button>
        </div>
      </React.Fragment>
    )
  }
}