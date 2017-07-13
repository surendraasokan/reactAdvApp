import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import { Link } from 'react-router-dom';

export default class WeatherApp extends Component {
  render() {
    return (
            <div>
              <Link to="/">
                Back to posts!
              </Link>
              <SearchBar />
              <WeatherList />
            </div>
    );
  }
}
