import React, { useState, useEffect } from 'react'
import reqwest from 'reqwest';
import { Table, List, message, Spin } from 'antd'
import InfiniteScroll from 'react-infinite-scroller';
import './index.less'

// const fakeDataUrl = 'https://guostz.github.io/Tuan/listData.json';
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';



const ChildrenList = () => {
    const [data, changeData] = useState([]);
    const [loading, changeLoading] = useState(false);
    const [hasMore, changeHasMore] = useState(true);

    const fetchData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            }
        });
    };

    useEffect(() => {
        fetchData(res => {
            changeData(res.results)
        });
    }, []);

    const handleInfiniteOnLoad = () => {
        changeLoading(true)
        if (data.length > 140) {
            message.warning('Infinite List loaded all');
            changeHasMore(false)
            changeLoading(false)
            return;
        }
        fetchData(res => {
            let newData = data.concat(res.results);
            changeData(newData)
            changeLoading(false)
        });
    };
    return (
        <div className="demo-infinite-container">
            <InfiniteScroll
                initialLoad={false}
                pageStart={0}
                loadMore={handleInfiniteOnLoad}
                hasMore={!loading && hasMore}
                useWindow={false}
            >
                <List
                    dataSource={data}
                    renderItem={item => (
                        <List.Item key={'1'}>
                            <List.Item.Meta title={'1'} description={'2'} />
                        </List.Item>
                    )}
                >
                    {loading && hasMore && (
                        <div className="demo-loading-container">
                            <Spin />
                        </div>
                    )}
                </List>
            </InfiniteScroll>
        </div>
    );
}

const NestedTable = () => {

    const columns = [
        { title: '应用名称', dataIndex: 'name', key: 'name' },
        { title: '操作', dataIndex: 'operation', key: 'operation' },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i,
            name: 'Oracle',
            operation: 'edit',
        });
    }

    return (
        <Table
            className="components-table-demo-nested"
            columns={columns}
            expandedRowRender={() => <ChildrenList ></ChildrenList>}
            dataSource={data}
        />
    );
}

// export default ChildrenList
export default NestedTable
