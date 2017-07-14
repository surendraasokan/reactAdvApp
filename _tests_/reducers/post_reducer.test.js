import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../../src/actions';
import posts from '../../src/reducers/reducer_posts';
describe("Posts Reducer Tests", () => {

  it("FETCH_POSTS Success");

  it("DELETE_POST Success", () => {
    const state = {
      "112320" : {
        id: 112320,
        title: "Test post",
        categories: "test categories",
        content: "test content"
      },
      "112321" : {
        id: 112321,
        title: "Test1 post",
        categories: "test categories",
        content: "test content"
      }
    };
    const action = {
      type: DELETE_POST,
      payload: "112321" 
    }

    const results = posts(state, action);
    expect(results).toEqual({
      "112320" : {
        id: 112320,
        title: "Test post",
        categories: "test categories",
        content: "test content"
      }});
  });

  it("FETCH_POST Success", () => {
    const state = {};
    const action = {
      type: FETCH_POST,
      payload: {
                data: {
                  id: 112320,
                  title: "Test post",
                  categories: "test categories",
                  content: "test content"
                }}
    }

    const results = posts(state, action);
    expect(results).toEqual({
      "112320" : {
        id: 112320,
        title: "Test post",
        categories: "test categories",
        content: "test content"
      }});
  });
});
