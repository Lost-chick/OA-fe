import {action, observable} from 'mobx';
import meetingService from '../service/meeting';

class MeetingStore {
  @observable interMeetingList = {};

  @action getInterMeetingList() {
     meetingService.interMeetingList().then((data)=>{
      // console.log(data)
      this.interMeetingList = data.data
    }).catch(()=>{

    })
  }
}
export default MeetingStore