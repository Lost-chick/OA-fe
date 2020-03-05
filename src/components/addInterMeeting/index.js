/**
 * 创建内部会议表单组件
*/

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Form, DatePicker, Select, Input, Upload, Modal } from 'antd';
import moment from 'moment';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

// 上传
const normFile = e => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

@inject('meetingStore')
@observer
class CollectionCreateForm extends Component {
  formRef = React.createRef();

  componentDidMount() {
    const { isAdd, meetingStore } = this.props;
    if (isAdd) {
      meetingStore.initItem();
    } else {
      meetingStore.nowItem();
    }
  }
  componentWillUnmount() {
    const { meetingStore } = this.props;
    meetingStore.initItem();
  }

  render() {
    const { visible, onCreate, onCancel, isAdd, meetingStore } = this.props;
    console.log(meetingStore.dataItem)

    return (
      <Modal
        visible={visible}
        title="公司内部会议信息"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          this.formRef.current
            .validateFields()
            .then(values => {
              // 修改或者添加
              if (isAdd) {
                const addValues = {
                  ...values,
                  date: `${values.date[0].format('YYYY-MM-DD')}-${values.date[1].format('YYYY-MM-DD')}`,
                  id: new Date().getTime(),
                  key: new Date().getTime(),
                }
                this.props.meetingStore.addList(addValues);
              } else {
                const addValues = {
                  ...values,
                  date: `${values.date[0].format('YYYY-MM-DD')}-${values.date[1].format('YYYY-MM-DD')}`,
                }
                this.props.meetingStore.modifyItem(addValues);
              }
              // 调用接口
              this.formRef.current.resetFields();
              onCreate(values);
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          ref={this.formRef}
          name="form_in_modal"
          {...layout}
          initialValues={meetingStore.dataItem}
        >
          <Form.Item
            name="date"
            label="时间段"
            rules={[
              {
                required: true,
                message: '请输入时间段'
              },
            ]}
          >
            <RangePicker
              showTime={{ format: 'HH:mm' }}
              format="YYYY-MM-DD HH:mm"
              size="small"
              style={{ width: 300 }}
              placeholder={['开始时间', '结束时间']}
            />
          </Form.Item>
          <Form.Item
            name="department"
            label="部门"
            rules={[
              {
                required: true,
                message: '请选择部门',
              },
            ]}
          >
            <Select
              size="small"
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
            name="theme"
            label="议会议题"
            rules={[
              {
                required: true,
                message: '请填写会议议题',
              },
            ]}
          >
            <Input
              style={{ width: 300 }}
              size="small"
            />
          </Form.Item>
          <Form.Item
            name="content"
            label="议会内容"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea
              style={{ width: 300 }}
              placeholder="Controlled autosize"
              rows={4}
            />
          </Form.Item>
          <Form.Item
            name="conclusion"
            label="议会结论"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea
              style={{ width: 300 }}
              placeholder="Controlled autosize"
              rows={2}
            />
          </Form.Item>
          <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button size="small">
                上传
          </Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
};

export default CollectionCreateForm;