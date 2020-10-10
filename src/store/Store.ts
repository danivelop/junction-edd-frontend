import { action, computed, flow, observable } from 'mobx';
import axios from 'axios';

interface UserFormValues {
  username: string;
  password: string;
}

export default class Store {
  static instance: Store | null = null;

  static getInstance() {
    if (Store.instance === null) {
      Store.instance = new Store();
    }

    return Store.instance;
  }

  @observable diaries = [];

  @action
  login = flow(function* (data: UserFormValues) {
    try {
      const response = yield axios.post(
        'http://ec2-13-124-151-196.ap-northeast-2.compute.amazonaws.com/api/auth/login',
        data,
      );

      return response;
    } catch (error) {
      console.error(error);
    }
  });

  @action
  getDiaries = flow(function* () {
    try {
      const response = yield axios.get(
        'http://ec2-13-124-151-196.ap-northeast-2.compute.amazonaws.com/api/diary/diaries',
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  });
}
