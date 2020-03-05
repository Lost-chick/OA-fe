import { action, observable } from 'mobx';
import meetingService from '../service/meeting';

class MeetingStore {
  // 内部会议列表
  @observable dataList = [
    {
      key: 0,
      id: 1234,
      date: '2020/3/5 5:30-2020/3/5 6:30',
      department: '事业部',
      theme: '前端',
      content: '前端生产具体步骤',
      conclusion: '生产'
    },
    {
      key: 1,
      id: 5678,
      date: '2020/3/6 5:30-2020/3/5 6:30',
      department: '事业部',
      theme: '前端生产',
      content: '前端生产具体步骤',
      conclusion: '生产'
    },
  ];

  // 选中项的数据
  @observable dataItem = {};

  // 选中列表的idss
  @observable selectedRowKeys = [];

  @action getInterMeetingList() {
    meetingService.interMeetingList().then((data) => {
      // console.log(data)
      this.dataList = data.data
    }).catch(() => {

    })
  }

  // 添加逻辑
  @action addList(obj = {}) {
    this.dataList = this.dataList.concat(obj);
  }

  // 修改逻辑
  @action modifyItem(obj = {}) {
    this.dataList = this.dataList.map(item => {
      if (item.key === this.selectedRowKeys[0]) {
        item = { ...obj, key: item.key, id: item.id };
      }
      return item
    });
  }

  // 修改项
  @action nowItem() {
    this.dataList.forEach(item => {
      if (item.key === this.selectedRowKeys[0]) {
        this.dataItem = item;
      }
    })
  }
  // 初始化修改项
  @action initItem() {
    this.dataItem = {};
  }

  // 更改选中ids
  @action changeSelectId(idArr) {
    this.selectedRowKeys = idArr;
  }

  // 删除列表的选中数据
  @action deleteSelect() {
    this.dataList = this.dataList.filter(item => {
      return (this.selectedRowKeys.indexOf(item.id) === -1);
    })
  }
}
export default MeetingStore