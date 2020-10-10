import React, {Fragment} from 'react';
import { Modal, Button, Icon } from 'antd';


export default class Test extends React.Component {
  state = {
    count: 10
  }
  onClick(){
    let p = null
    // Modal.info({
    //   title: '提示',
    //   content: '密钥恢复成功，请重新登录！',
    //   okText: `立即登录（${this.state.count}s）`
    // })
    p = setInterval(() => {
      let count = this.state.count - 1
      if(count === 0) {
        clearInterval(p)
      }
      this.setState({count})
    }, 1000)
  }
  render(){
    return (
      <Fragment>
        <Button onClick={this.onClick.bind(this)}>测试</Button>
        <p>{this.state.count}</p>
        <Modal
          width={600}
          visible={true}
          closable={false}
          bodyStyle={{ border: 'none' }}
          title={<Fragment><Icon type='info-circle' style={{color: '#1890FF'}}/> 提示</Fragment>}
          footer={[
            <Button type='primary' onClick={this.onClick.bind(this)}>
              {`立即登录（${this.state.count}s）`}
            </Button>
          ]}>
          {'密钥恢复成功，请重新登录！'}
        </Modal>
      </Fragment>
    )
  }
}