import React, { Component } from 'react'
import { Button } from 'antd'

export default class ControlNumber extends Component{
    addNum = () =>{
        this.props.calNumCreater(parseInt(this.NowNumber.innerHTML)+1);
    }
    subNum = () =>{
        this.props.calNumCreater(parseInt(this.NowNumber.innerHTML)-1);
    }

    render(){
        const { lastnum } = this.props;   /**初始化页面中number的值 */
        return(
            <div>
                <label ref={(NowNumber) => {this.NowNumber = NowNumber}}>{lastnum}</label><br />
                <Button type='primary' onClick={this.subNum}>减1</Button>
                <Button type='primary' onClick={this.addNum}>加1</Button>
            </div>
        );
    }
}