import React from 'react';
import { Steps, Button, message, Form } from 'antd';
import First from './first';
import './index.less';

const Step = Steps.Step;
const FormItem = Form.Item;

const steps = [
  {
    title: '步骤一',
    content: <First />,
    description: '管理员ukey1验证'
  },
  {
    title: '步骤二',
    content: '请选择第 2 张加密卡管理员ukey插入加密设备，并输入保护口令。',
    description: '管理员ukey2验证'
  },
  {
    title: '步骤三',
    content: '请选择第 3 张加密卡管理员ukey插入加密设备，并输入保护口令。',
    description: '管理员ukey3验证'
  },
  {
    title: '步骤四',
    content: 'Last-content',
    description: '备份',
    okText: '备份'
  }
];

const defaultProps = {
  okText: '开始验证',
  cancelText: '返回'
}

export default class StepDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    // if(this.state.current === this.props.steps.length - 1){
    //   return;
    // }
    if(this.state.current === steps.length - 1){
      return;
    }
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    if(this.state.current === 0){
      // this.goBack();
      return;
    }
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    const currentStep = steps[this.state.current];
    const data = Object.assign({}, defaultProps, currentStep);
    return (
      <div id='wrap'>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} description={item.description} />)}
        </Steps>

        {/* 内容区域 */}
        <Form className="steps-content">
          {steps[this.state.current].content}
          <div>
            <Button onClick={this.prev.bind(this)}>
              {data.cancelText}
            </Button>
            <Button onClick={this.next.bind(this)}>
              {data.okText}
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}