import React from 'react';
import {Table, Switch} from 'antd';

//父子数据间，开关的联动，应该要与后端进行交互，当一条数据的开关变化时，首先检测该数据是否存在子级数据
//如果没有，则不向后端发送请求，如果有，则向后端发送请求
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: '12%',
    render: (text,record,index) => <Switch defaultChecked={!!text} disabled={!record.useable} size='small'/>
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    status: 1,
    useable: false,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        status: 1,
        useable: false,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        status: 1,
        useable: false,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            status: 1,
            useable: false,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        status: 0,
        useable: false,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            status: 0,
            useable: false,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                status: 1,
                useable: false,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                status: 1,
                useable: false,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    status: 1,
    useable: false,
    address: 'Sidney No. 1 Lake Park',
  },
];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};


export default class TableDemo extends React.PureComponent {
  render() {
    return <Table columns={columns} dataSource={data} rowSelection={rowSelection}/>;
  }
}
