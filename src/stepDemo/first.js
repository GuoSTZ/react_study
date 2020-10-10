import React from 'react';
import { Form, Button, Input } from 'antd';
const FormItem = Form.Item;

export default class First extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errorState: true,
      errorMessage: '这里有报错信息嘞'
    }
  }
  testing(){
    
  }
  render(){
    return (
      <div>
        <FormItem>请先点击按钮，确定进行步骤：<Button>检测</Button></FormItem>
        <FormItem>请选择第 1 张加密卡管理员ukey插入加密设备，并输入保护口令。</FormItem>
        <FormItem label='请输入PIN口令' labelCol={{span: 10}} wrapperCol={{span: 8}}>
          <Input />
        </FormItem>
        {
          this.state.errorState ? (
            <FormItem help={this.state.errorMessage} validateStatus='error'>
            </FormItem>
          ) : null
        }

      </div>
    )
  }
}