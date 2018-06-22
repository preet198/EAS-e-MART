import React, { Component } from "react";
import {Map} from 'google-maps-react';
import ReactDOM from "react-dom";
import "./style.css";

class MapContainer extends Component {

  componentDidUpdate = () => {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: {lat: 40.6976637, lng: -74.1197636},
        zoom: 8
      });

      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    const style = {
      width: '60vw',
      height: '60vh'
    }

    return (
      <div ref="map" style={style}>
          <Map google={this.props.google.div} />
      </div>
    );
  }
}

export default MapContainer;
