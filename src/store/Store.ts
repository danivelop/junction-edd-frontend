import { action, flow, observable } from 'mobx';
import axios from 'axios';

interface UserFormValues {
  username: string;
  password: string;
}

type Movie = { title: string; year: string; poster: string };

interface Diary {
  id: number;
  weather: string | null;
  content: string | null;
  emotion: 'angry' | 'sad' | 'tired' | 'flustered' | 'happy' | 'love' | 'joy' | null;
  image: string | null;
  movies: Movie[];
}

interface PatchDiary {
  weather?: string;
  content?: string;
  emotion?: 'angry' | 'sad' | 'tired' | 'flustered' | 'happy' | 'love' | 'joy' | null;
  image?: string | null;
  movies?: Movie[];
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
  @observable diary: Diary | undefined = undefined;

  @action
  login = flow(function* (data: UserFormValues) {
    try {
      const response = yield axios.post('/api/auth/login', data);

      return response;
    } catch (error) {
      console.error(error);
    }
  });

  @action
  getDiaries = flow(function* () {
    try {
      const response = yield axios.get('/api/diary/diaries');

      return response;
    } catch (error) {
      console.error(error);
    }
  });

  @action
  getDiary = flow(function* (this: Store) {
    try {
      const response = yield axios.get('/api/diary');

      this.diary = response.data;

      return response;
    } catch (error) {
      console.error(error);
    }
  });

  @action
  patchDiary = flow(function* (this: Store, data: PatchDiary) {
    try {
      const response = yield axios.patch(`/api/diary/${this.diary?.id}`, data);
    } catch (error) {
      console.error(error);
    }
  });

  @action
  getGuess = flow(function* (trace: any[], canvasWidth: number, canvasHeight: number) {
    try {
      const data = JSON.stringify({
        // "options": "enable_pre_space",
        requests: [
          {
            writing_guide: {
              width: canvasWidth,
              height: canvasHeight,
            },
            ink: trace,
            language: 'quickdraw',
          },
        ],
      });

      const response = yield axios.post(
        'https://inputtools.google.com/request?ime=handwriting&app=quickdraw&dbg=1&cs=1&oe=UTF-8',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data[1][0][1][0];
    } catch (error) {
      console.error(error);
    }
  });
}
