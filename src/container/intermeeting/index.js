/**
 * 内部会议记录页面
*/
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Form, DatePicker, Select, Input, Table, Row, Col } from 'antd';

import CollectionCreateForm from '../../components/addInterMeeting';

import './index.less'

// form表单样式配置
const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 14,
  },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 14 },
};

// 时间表单配置
const config = {
  rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};

// 会议列表数据
const columns = [
  { title: 'NO', width: 50, dataIndex: 'id', key: 'id', fixed: 'left', },
  { title: '日期', width: 200, dataIndex: 'date', key: 'date', fixed: 'left', },
  { title: '部门', dataIndex: 'department', key: '1' },
  { title: '议会议题', dataIndex: 'theme', key: '2' },
  { title: '议会内容', dataIndex: 'content', key: '3' },
  { title: '议会结论', dataIndex: 'conclusion', key: '4' },
];

@inject('meetingStore')
@observer
class InterMeeting extends Component {
  formRef = React.createRef();

  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    visible: false,
    isAdd: 0// 判断是新增还是编辑编辑
  };

  // 表单逻辑
  onFinish = fieldsValue => {
    // 查询逻辑
    console.log(fieldsValue);
    const values = {
      ...fieldsValue,
      'start-time': fieldsValue['start-time'].format('YYYY-MM-DD'),
      'end-time': fieldsValue['end-time'].format('YYYY-MM-DD'),
    };
    console.log(values);

  };
  onReset = () => {
    this.formRef.current.resetFields();
  };

  // 列表选中逻辑
  onSelectChange = selectedRowKeys => {
    const { meetingStore } = this.props;
    console.log(selectedRowKeys)
    meetingStore.changeSelectId(selectedRowKeys);
  };

  render() {
    const { loading, visible } = this.state;
    const { meetingStore } = this.props;
    const { dataList, selectedRowKeys } = meetingStore;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <div className="inter-meeting">
        <div className="meeting-operate">
          <Button size="small">查询</Button>
          <Button
            size="small"
            onClick={() => {
              this.setState({ visible: true, isAdd: 1 })
            }}
          >新增</Button>
          <Button
            size="small"
            onClick={() => {
              if (selectedRowKeys.length !== 1) {
                return;
              };
              meetingStore.nowItem();
              this.setState({ visible: true, isAdd: 0 })
            }}
          >编辑</Button>
          <Button size="small"
            onClick={() => {
              meetingStore.deleteSelect();
            }}
          >删除</Button>
        </div>
        <div className="meeting-list">
          <Row>
            <Col span={4}>
              <div className="meeting-left">
                <Form
                  {...layout}
                  size="small"
                  ref={this.formRef}
                  name="search-ref"
                  onFinish={this.onFinish}
                >
                  <Form.Item
                    name="start-time"
                    label="开始日期"
                    {...config}
                  >
                    <DatePicker
                      placeholder="请选择"
                      style={{ width: 120 }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="end-time"
                    label="结束日期"
                    {...config}
                  >
                    <DatePicker
                      placeholder="请选择"
                      style={{ width: 120 }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="department"
                    label="部门"
                  >
                    <Select
                      style={{ width: 120 }}
                      showSearch
                      placeholder="请选择部门"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Select.Option value="demo1">事业部</Select.Option>
                      <Select.Option value="demo2">技术部</Select.Option>
                      <Select.Option value="demo3">销售部</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="project"
                    label="项目"
                  >
                    <Select
                      style={{ width: 120 }}
                      showSearch
                      placeholder="请选择项目"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Select.Option value="demo1">森林</Select.Option>
                      <Select.Option value="demo2">国土</Select.Option>
                      <Select.Option value="demo3">园林</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="module"
                    label="模块"
                  >
                    <Select
                      style={{ width: 120 }}
                      showSearch
                      placeholder="请选择模块"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Select.Option value="demo1">1</Select.Option>
                      <Select.Option value="demo2">2</Select.Option>
                      <Select.Option value="demo3">3</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="number"
                    label="参会人员"
                  >
                    <Select
                      mode="multiple"
                      showSearch
                      style={{ width: 120 }}
                      placeholder="请选择"
                      defaultValue={[]}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Select.Option value="demo1">刘备</Select.Option>
                      <Select.Option value="demo2">关羽</Select.Option>
                      <Select.Option value="demo3">张飞</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="theme"
                    label="议会主题"
                  >
                    <Input
                      style={{ width: 120 }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="category"
                    label="会议类别"
                  >
                    <Select
                      style={{ width: 120 }}
                      showSearch
                      placeholder="请选择"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Select.Option value="demo1">小组</Select.Option>
                      <Select.Option value="demo2">部门</Select.Option>
                      <Select.Option value="demo3">公司</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      查询
                    </Button>
                    <Button
                      htmlType="button"
                      onClick={this.onReset}
                      style={{ marginLeft: 25 }}
                    >
                      重置
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
            <Col span={20}>
              <div className="meeting-right">
                <Table rowSelection={rowSelection} columns={columns} dataSource={dataList} size="small" scroll={{ x: 1300 }} />
              </div>
            </Col>
          </Row>
        </div>
        <CollectionCreateForm
          visible={visible}
          onCreate={() => {
            this.setState({ visible: false });
          }}
          onCancel={() => {
            this.setState({ visible: false });
          }}
          isAdd={this.state.isAdd}
        />
      </div >
    )
  }
};

export default InterMeeting

