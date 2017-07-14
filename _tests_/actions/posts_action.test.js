import { fetchPosts } from '../../src/actions';
import configureMockStore from 'redux-mock-store';
import promise from 'redux-promise';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockStore = configureMockStore([promise]);
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=sarbein123';

describe('AppActions Tests', () => {

  const store = mockStore();
  let mock = new MockAdapter(axios);

  afterEach(() => {
    mock.restore();
  });

  it('handles fetchPosts success', () => {
    mock.onGet(`${ROOT_URL}/posts${API_KEY}`).reply(200,
      [{"id":112320,"title":"Test post","categories":"test categories","content":"test content"}]);

    return store.dispatch(fetchPosts())
      .then(() => {
        expect(store.getActions()[0].payload.data).toEqual(
          [{"id":112320,"title":"Test post","categories":"test categories","content":"test content"}]);
      });
  });

});
