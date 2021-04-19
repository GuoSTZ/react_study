import React from 'react';
import ListMenu from './listDemo/listMenu/index';
import './App.css';

export default class App extends React.Component {

  render() {
    const dataSource = [
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
      },
      {
        name: '权限模块',
        children: [
          { name: '权限一', status: 0 },
          { name: '权限二', status: 1 },
          { name: '权限三', status: 0 }
        ]
      },
      {
        name: '权限模块',
        children: [
          { name: '权限一', status: 0 },
          { name: '权限二', status: 1 },
          { name: '权限三', status: 0 }
        ]
      },
      {
        name: '权限模块',
        children: [
          { name: '权限一', status: 0 },
          { name: '权限二', status: 1 },
          { name: '权限三', status: 0 }
        ]
      },
      {
        name: '权限模块',
        children: [
          { name: '权限一', status: 0 },
          { name: '权限二', status: 1 },
          { name: '权限三', status: 0 }
        ]
      }
    ]
    const selectData = [
      {value: 1, label: 'aaa'},
      {value: 2, label: 'bbb'},
      {value: 3, label: 'ccc'},
      {value: 4, label: 'ddd'},
      {value: 5, label: 'eee'}
    ]
    return (
      <ListMenu
        dataSource={dataSource}
        openText="启用"
        closeText="停用"
        onClick={(status, selectValue) => console.log(status, selectValue, '----')}
        style={{width: 260, margin: 20}}
        selectProps={{
          placeholder: "请选择数据源",
          data: selectData,
          onChange: value => console.log(value)
        }}
      />
    );
  }
}