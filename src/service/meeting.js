/**
 * 数据服务
 * 
 */
import dataProxy from '../dataProxy';
import URL from '../contents/url';

export default {
  // 获取内部会议列表
  interMeetingList() {
    return dataProxy.get(URL.GET_INTERMEETINGLIST).then((res)=>{
      return res.data
    })
  }
}