import React, {Fragment} from 'react'
import { Modal, Button, Icon, Form, Input, Select } from 'antd';

class BaseForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('transfor', {
            rules: [{ required: true, message: '请选择转交人！' }],
          })(
            <Select
              placeholder="选择转交人"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('suggestion')(
            <Input.TextArea
              placeholder="转交意见"
            />
          )}
        </Form.Item>
      </Form>
    )
  }
}

const WrappedForm = Form.create()(BaseForm);

const buttonType = {
  TRANSFER: 1,
  REFUSE: 2,
  REJECT: 3,
  PASS: 4
}

export default class ModalDemo extends React.Component {
  state = { 
    visible: false,
    info: {},
  };

  showModal = (type) => {
    this.setState({
      visible: true,
    });
    switch(type) {
      case buttonType.TRANSFER:
        this.setState({
          info: {title: '选择转交人', inputLabel: '转交人', inputPlaceholder: '选择转交人', TextAreaPlaceholder: '转交意见'}
        });
        break;
      case buttonType.REFUSE:
        this.setState({
          info: {title: '选择转交人', inputLabel: '转交人', inputPlaceholder: '选择转交人', TextAreaPlaceholder: '转交意见'}
        });
        break;
      case buttonType.REFUSE:
        this.setState({
          info: {title: '选择转交人', inputLabel: '转交人', inputPlaceholder: '选择转交人', TextAreaPlaceholder: '转交意见'}
        });
        break;
      case buttonType.REFUSE:
        this.setState({
          info: {title: '选择转交人', inputLabel: '转交人', inputPlaceholder: '选择转交人', TextAreaPlaceholder: '转交意见'}
        });
        break;
    }
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  renderModal(info) {
    return (
      <Modal
        title={info.title}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <WrappedForm />
      </Modal>
    )
  }

  render() {
    return (
      <Fragment>
        <Button type="primary" onClick={this.showModal}>
          转交
        </Button>
        <Button type="primary" onClick={this.showModal}>
          拒绝
        </Button>
        <Button type="primary" onClick={this.showModal}>
          驳回
        </Button>
        <Button type="primary" onClick={this.showModal}>
          通过
        </Button>
      </Fragment>
    );
  }
}