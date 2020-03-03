/**
 * mobx store
*/
import MeetingStore from './meetingStore';

class RootStore {
  constructor() {
    this.meetingStore = new MeetingStore(this);
  }
}
export default new RootStore();