import React, { Fragment } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;
class FormTest extends React.Component {
  state = {
    isMailError: true
  }
  mailCheck(str) {
    var myReg=/^(\w|(\.\w+))+@([a-zA-Z0-9_-]+\.)+(com|org|cn|net)+$/;  
    return myReg.test(str)
  }
  mailRule = (rule, value, callback) => {
    if(value && !this.mailCheck(value)){
      callback('error');
    } else {
      callback();
    }
  }
  onChange(e) {
    const form = this.props.form
    form.validateFields().then(() => {
      this.setState({
        isMailError: false,
      })
    }).catch(() => {
      this.setState({
        isMailError: true,
      })
    })
  }
  mailChange(e) {
    const form = this.props.form;
    form.setFieldsValue(e.target.value, () => {
      this.setState({
        isMailError: form.getFieldError('mail') !== undefined
      })
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <FormItem label='邮箱地址' labelCol={{ span: 3 }} wrapperCol={{ span: 9 }}>
          {getFieldDecorator('mail', {
            rules: [
              { required: true, message: 'Please input your mail!' },
              { validator: this.mailRule }
            ],
          })(
            <Input onChange={this.mailChange.bind(this)}/>
          )}
        </FormItem>
        <FormItem wrapperCol={{offset: 3}}>
          {getFieldDecorator('btn')(
            <Button disabled={this.state.isMailError}>测试</Button>
          )}
        </FormItem>
      </Form>
    )
  }
}

const FormDemo = Form.create({})(FormTest);
export default FormDemo