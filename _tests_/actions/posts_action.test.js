import { fetchPosts, fetchPost, deletePost } from '../../src/actions';
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
      [{"id":121,"title":"Test post","categories":"test categories","content":"test content"}]);

    return store.dispatch(fetchPosts())
      .then(() => {
        expect(store.getActions()[0].payload.data).toEqual(
          [{"id":121,"title":"Test post","categories":"test categories","content":"test content"}]);
      });
  });

  it('handles fetchPost success', () => {
    const id = "111758";
    mock.onGet(`${ROOT_URL}/posts/${id}${API_KEY}`).reply(200,
      {"id":111758,"title":"Java","categories":"IT","content":"Software language"});

    return store.dispatch(fetchPost(id))
      .then(() => {
        expect(store.getActions()[1].payload.data).toEqual(
          {"id":111758,"title":"Java","categories":"IT","content":"Software language"});
      });
  });



});
