import React, {Fragment} from 'react';
import {Descriptions, Tag} from 'antd';
import './index.less';

const DescriptionsItem = Descriptions.Item;

export default class DescriptionsDemo extends React.Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <Descriptions column={2} style={{width: 800, marginRight: 20}} bordered>
          <DescriptionsItem label='工单标题' span={2}>这是一个简单的工单标题</DescriptionsItem>
          <DescriptionsItem label='工单编号'>GD2020090909000001</DescriptionsItem>
          <DescriptionsItem label='应用类型'>统一身份</DescriptionsItem>
          <DescriptionsItem label='申请人'>xxxxxxxxx</DescriptionsItem>
          <DescriptionsItem label='工单状态'><Tag color="green">已完成</Tag></DescriptionsItem>
          <DescriptionsItem label='创建时间' span={2}>2020-09-09 12:09:09</DescriptionsItem>
          <DescriptionsItem label='审批事由' span={2}>
            我是审批事由我是审批事由我是审批事由我是审批事由我是审批事由我是审批事由我是审批事由我是
            我是审批事由我是审批事由我是审批事由我是审批事由我是审批事由我是审批事由我是审批事由我是
            我是审批事由我是审批事由我是审批事由
          </DescriptionsItem>
          <DescriptionsItem label='附件' span={2}>2020-09-09 12:09:09</DescriptionsItem>
        </Descriptions>

        <Descriptions column={2} className='desc'>
          <DescriptionsItem label='工单标题' span={2}>这是一个简单的工单标题</DescriptionsItem>
          <DescriptionsItem label='工单编号'>GD2020090909000001</DescriptionsItem>
          <DescriptionsItem label='应用类型'>统一身份</DescriptionsItem>
          <DescriptionsItem label='申请人'>xxxxxxxxx</DescriptionsItem>
          <DescriptionsItem label='工单状态'><Tag color="green">已完成</Tag></DescriptionsItem>
          <DescriptionsItem label='创建时间' span={2}>2020-09-09 12:09:09</DescriptionsItem>
          <DescriptionsItem label='审批事由' span={2}>
            我是审批事由我是审批事由我是审批事由我是审批事由我是审批事由我是审批事由我是审批事由我是
            我是审批事由我是审批事由我是审批事由我是审批事由我是审批事由我是审批事由我是审批事由我是
            我是审批事由我是审批事由我是审批事由
          </DescriptionsItem>
          <DescriptionsItem label='附件' span={2}>2020-09-09 12:09:09</DescriptionsItem>
        </Descriptions>
      </div>
    )
  }
}