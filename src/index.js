import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './containers/posts_index';
import promise from 'redux-promise';
import PostNew from './containers/posts_new';
import PostShow from './containers/posts_show';
import WeatherApp from './components/weather_app';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostNew} />
          <Route path="/weather" component={WeatherApp} />
          <Route path="/posts/:postId" component={PostShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
