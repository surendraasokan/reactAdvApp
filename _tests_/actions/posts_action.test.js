import { fetchPosts } from '../../src/actions';
import configureMockStore from 'redux-mock-store';
import promise from 'redux-promise';
import axios from 'axios';
import * as AxiosMock from 'axios-mock-adapter';

const mockStore = configureMockStore([promise]);
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=sarbein123';

describe('AppActions Tests', () => {
  beforeEach(() => {
    const store = mockStore();
    const mock = new AxiosMock(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('handles fetchPosts success', () => {


    // Mock any GET request to /users
    // arguments for reply are (status, data, headers)
    mock.onGet(`${ROOT_URL}/posts${API_KEY}`).reply(304,
      [{"id":112320,"title":"Test post","categories":"test categories","content":"test content"}]);

    return store.dispatch(fetchPosts())
      .then(() => {
        expect(store.getActions()).toEqual(
          {
            type: 'fetchPosts',
            payload: {
              data: [{"id":112320,"title":"Test post","categories":"test categories","content":"test content"}]
            }
          }
        );
      });
  });

})
