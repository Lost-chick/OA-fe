/**
 * 内部会议记录页面
*/
import React, { Component } from 'react';
import { Button, Form, DatePicker, Select, Input, Table, Row, Col } from 'antd';
import './index.less'

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 10,
  },
};
const DataLayout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 14 },
};
const columns = [
  {
    title: 'NO',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 50,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];
// const data = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }

class InterMeeting extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <div className="inter-meeting">
        <div className="meeting-operate">
          <Button size="small">查询</Button>
          <Button size="small">新增</Button>
          <Button size="small">编辑</Button>
          <Button size="small">删除</Button>
        </div>
        <div className="meeting-list">
          <Row>
            <Col span={4}>
              <div className="meeting-left">
                <Form
                  {...layout}
                  size="small"
                >
                  <Form.Item name="date-picker" label="开始日期" >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item name="date-picker" label="结束日期" >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item label="部门">
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="项目">
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="模块">
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="参会人员">
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="议会主题">
                    <Input />
                  </Form.Item>
                  <Form.Item label="会议类别">
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      查询
                </Button>
                    <Button htmlType="button" onClick={this.onReset}>
                      重置
                </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
            <Col span={20}>
              <div className="meeting-right">
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} size="small" scroll={{ x: 1300 }} />
              </div>
            </Col>
          </Row>
        </div>
      </div >
    )
  }
}
export default InterMeeting