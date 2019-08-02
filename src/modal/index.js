import React from 'react'
import { Modal, Button, Icon } from 'antd';

export default class ModalTest extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
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

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Icon type="question-circle" theme="twoTone" twoToneColor="#F8AA2D"/>系统提示？
        </Modal>
      </div>
    );
  }
}