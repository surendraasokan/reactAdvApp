/**
 * Created by sasokan on 7/10/2017.
 */
import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
           zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        return <div ref="map"/>;
    }
}

export default GoogleMap;