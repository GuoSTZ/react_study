import React from 'react';
import { List, Button, message } from 'antd';
import './index.css';

export default class ListMenu extends React.PureComponent {
  onClick() {

  }
  renderActions(status, style) {
    return (
      <Button style={style}>{status === 0 ? '开启' : '关闭'}</Button>
    )
  }
  render() {
    const data = [
      {
        name: '账号管理',
        children: []
      },
      {
        name: '代码管理',
        children: [
          { name: '存储过程/函数/包', status: 0 },
          { name: '触发器', status: 1 },
          { name: '视图', status: 0 }
        ]
      },
      {
        name: '对象管理',
        children: [
          { name: '敏感对象', status: 0 },
          { name: '业务用户对象', status: 1 },
          { name: '系统对象', status: 0 },
          { name: '表空间', status: 1 },
          { name: '数据库', status: 0 }
        ]
      },
      {
        name: '授权管理',
        children: [
          { name: '数据库角色权限', status: 0 },
          { name: '数据库对象权限', status: 1 },
          { name: '数据库系统权限', status: 0 }
        ]
      }
    ]
    return (
      <List
        dataSource={data}
        style={{ width: 430, margin: 100, minWidth: 430 }}
        split={false}
        renderItem={item => (
          <List.Item
            className='cccc'
          >
            <List
              className={item.children.length === 0 ? 'aaaa' : ''}
              header={<div>{item.name}</div>}
              dataSource={item.children}
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
    )
  }
}