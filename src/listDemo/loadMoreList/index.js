import React from 'react'
import { List, Button, Spin, Skeleton } from 'antd';

import reqwest from 'reqwest';
import './index.less'

const count = 2;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

export default class LoadMoreList extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    };

    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }

    getData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            },
        });
    };

    onLoadMore = () => {
        this.setState({
            loading: true,
            // list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.results);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };

    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
            // !initLoading && !loading ? (
            //     <div
            //         style={{
            //             textAlign: 'center',
            //             marginTop: 12,
            //             height: 32,
            //             lineHeight: '32px',
            //         }}
            //     >
            //         {/* <Button onClick={this.onLoadMore}>loading more</Button> */}
            //         <a onClick={this.onLoadMore}>点击加载更多</a>
            //     </div>
            // ) : null;
            (<div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                {/* <Button onClick={this.onLoadMore}>loading more</Button> */}
                {!initLoading && !loading ? (<a onClick={this.onLoadMore}>点击加载更多</a>) : null}
            </div>);

        return (
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                size='small'
                renderItem={item => (
                    // 骨架屏
                    // <List.Item style={{ height: '28px' }}>
                    //     <Skeleton title={true} paragraph={false} loading={item.loading} active>
                    //         <List.Item.Meta title={item.name.last} />
                    //     </Skeleton>
                    // </List.Item>
                    <List.Item style={{ height: '32px' }}>
                        <List.Item.Meta title={item.name.last} />
                    </List.Item>
                )}
            >
                {this.state.loading && (
                    <div className="demo-loading-container">
                        <Spin />
                    </div>
                )}
            </List>
        );
    }
}
