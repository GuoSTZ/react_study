import React, { Component } from 'react';
//import logo from './logo.svg';
import { Button, Icon, Menu, Dropdown } from 'antd';

class ButtonDemo extends Component{
    render(){
        return (
            <div className="App">
                <Button type="primary" size="large" ghost>标准</Button>
                <Button type="primary" size="large" disabled>标准</Button><br/>
                <Button type="dashed" size="small">虚线</Button><br/>
                <Button type="default" size="small">默认</Button><br/>
                <Button type="danger">危险</Button><br/>
                <Button type="danger" shape="circle">1</Button><br/>
                <Button type="danger" shape="round">2</Button><br/>
                <Button type="link" href="http://www.baidu.com" traget="http://www.baidu.com">链接</Button><br/>
            </div>
        );
    }
}
class ButtonDemo2 extends Component{
    /**一个名为state的对象 */
    state = {
        loading: false
    }
    /**创建匿名函数并赋值给enterLoading */
    enterLoading = () =>{
        this.setState({ loading: true });
    }
    render(){
        return (
            <div className="App">
                {/* 处于载入状态的按钮不可点击，也可以认为是不可逆转的状态 */}
                <Button type="primary" loading>点击</Button>
                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>click</Button>
            </div>
        );
    }
}

class ButtonDemo3 extends Component{
    handleClick = (e) =>{
        console.log(e);
    };

    render(){
        const MenuItem = Menu.Item;
        const menu = (
            <Menu onClick={this.handleClick}>
                <MenuItem key="1">第一项</MenuItem>
                <MenuItem key="2">第二项</MenuItem>
                <MenuItem key="3">第三项</MenuItem>
            </Menu>
        );

        
        return(
            <div className="App">
                <Button.Group>
                    <Button type="primary"><Icon type="left"/>Go Back</Button>
                    <Button type="primary">Go Forward<Icon type="right"/></Button>
                </Button.Group>
                <br/>
                <Button.Group>
                    <Button type="primary" icon="cloud"></Button>
                    <Button type="primary" icon="cloud-download">下载</Button>
                </Button.Group>
                <br/>
                <Dropdown overlay={menu}>
                    <Button>selection<Icon type="down"/></Button>
                </Dropdown>

            </div>
        );
    }
}

class ButtonDemo4 extends Component{
    constructor(props){
        super(props);
        this.state = {
            number:0
        }
    }
    render(){
        return(
            <div className="App">
                <Button onClick={()=>{console.log(this.state.number);}}>第一个</Button>
                <Button onClick={(e)=>{console.log(e);}}>第二个</Button>
            </div>
        );
    }
}

export { ButtonDemo2, ButtonDemo3, ButtonDemo4 }
export default ButtonDemo
