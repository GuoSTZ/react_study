import React, { Fragment } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;
class FormTest extends React.Component {

  mailCheck(str) {
    var myReg = /^(\w|(\.\w+))+@([a-zA-Z0-9_-]+\.)+(com|org|cn|net)+$/;
    return myReg.test(str)
  }
  mailRule = (rule, value, callback) => {
    if (value && !this.mailCheck(value)) {
      callback('error');
    } else {
      callback();
    }
  }
  mailChange(e) {
    const form = this.props.form;
    form.setFieldsValue(e.target.value, () => {
      this.setState({
        isMailError: form.getFieldError('mail') !== undefined
      })
    })
  }
  handleSubmit(e) {
    this.props.form
      .validateFields()
      // .then(values => {
      //   console.log(values, '**');
      // })
      // .then(values => {
      //   setTimeout(() => {
      //     console.log(values, '=====');
      //   }, 2000)
      // })
      // .catch(err => {
      //   console.log('err: ', err);
      // });
      
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <FormItem label='邮箱地址' labelCol={{ span: 3 }} wrapperCol={{ span: 9 }}>
          {getFieldDecorator('mail', {
            rules: [
              { required: true, message: '必填' }
            ]
          })(
            <Input />
          )}
        </FormItem>
        <FormItem wrapperCol={{ offset: 3 }}>
          {getFieldDecorator('btn')(
            <Button onClick={this.handleSubmit.bind(this)}>测试</Button>
          )}
        </FormItem>
      </Form>
    )
  }
}

const FormDemo = Form.create({})(FormTest);
export default FormDemo