import React, { Component } from 'react';
import { List, Button, Select } from 'antd';
import './index.css';

export default class ListMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: undefined
    }
  }
  renderActions(status) {
    let open = '开启';
    let close = '关闭';
    const { openText, closeText, onClick } = this.props;
    if (openText) {
      open = openText;
    }
    if (closeText) {
      close = closeText;
    }
    return (
      <Button onClick={onClick.bind(this, status, this.state.selectValue)}>{status === 1 ? open : close}</Button>
    )
  }
  hideNoData(children) {
    if (Array.isArray(children) && children.length !== 0) {
      return '';
    } else {
      return 'hide';
    }
  }
  // 数据源容错处理
  ArrayFaultTolerant(dataSource) {
    if (Array.isArray(dataSource)) {
      return dataSource;
    } else {
      return [];
    }
  }
  onChange = value => {
    const onChange = this.props.selectProps.onChange;
    onChange(value);
    this.setState({
      selectValue: value
    });
  }
  render() {
    const { 
      dataSource, 
      openText, 
      closeText, 
      onClick, 
      selectProps,
      style,
      ...otherProps 
    } = this.props;
    const {data, onChange, ...otherSelectProps} = selectProps;
    return (
      <div className='wrap' style={style}>
        <Select 
          {...otherSelectProps}
          showSearch
          optionFilterProp="children"
          onChange={this.onChange}
        >
          {
            data.map((item, index) => (
              <Select.Option value={item.value} key={index}>{item.label}</Select.Option>
            ))
          }
        </Select>
        <List
          dataSource={this.ArrayFaultTolerant(dataSource)}
          split={false}
          {...otherProps}
          renderItem={item => (
            <List.Item
              className='two'
            >
              <List
                className={this.hideNoData(item.children)}
                header={<div>{item.name}</div>}
                dataSource={this.ArrayFaultTolerant(item.children)}
                split={false}
                renderItem={child => (
                  <List.Item
                    actions={[this.renderActions(child.status)]}
                  >
                    {child.name}
                  </List.Item>
                )}
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}