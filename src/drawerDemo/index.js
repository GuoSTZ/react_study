import React from 'react'
import {Drawer,Button,Table,Tooltip} from 'antd'

export default class DrawerDemo extends React.PureComponent{

  constructor(props){
    super(props)
    this.state = { visible: false };
  }  

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  columns = [
    {
      title: 'name',
      key: 'name',
      dataIndex: 'name',
      onCell: () => {
        return {
          style: {
            wordBreak: 'break-all',
            borderCollapse: 'collapse',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }
        }
      },
      //render: (text)=><Tooltip title={text}><div text={text} >{text}</div></Tooltip>
    },
    {
      title: 'age',
      key: 'age',
      dataIndex: 'age',
      render: (text)=><Tooltip title={text}>{text}</Tooltip>
    },
    {
      title: 'sex',
      key: 'sex',
      dataIndex: 'sex',
      render: (text)=><Tooltip title={text} arrowPointAtCenter={true}>{text}</Tooltip>
    }
  ]
  source = [
    {
      key: 1,
      name: '1',
      age: 20,
      sex: 'male'
    },
    {
      key: 2,
      name: '2',
      age: 27,
      sex: 'male'
    },
    {
      key: 3,
      name: '3',
      age: 23,
      sex: 'female'
    },
  ]

  render() {
    return (
      <div>
        <div>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="left"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>
        <div>
          <Table 
            dataSource={this.source} 
            columns={this.columns}
            />
        </div>
      </div>
    );
  }
  componentDidMount(){
    console.log('组件挂载后（插入DOM树）立即调用')
  }
}
