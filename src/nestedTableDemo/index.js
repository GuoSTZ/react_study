import React from 'react'
import { Table } from 'antd';
// import InfiniteListExample from '../listDemo/scrollerList/index'
import LoadMoreList from '../listDemo/loadMoreList/index'

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
            expandedRowRender={() => <LoadMoreList></LoadMoreList>}
            dataSource={data}
        />
    );
}

export default NestedTable
