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
        center: {lat: 40.757944, lng: -73.985556},
        zoom: 15
      });

      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    const style = {
      width: '40rem',
      height: '30rem',
    }

    return (
      <div ref="map" style={style} class="map" className="test">
          <Map google={this.props.google.div} />
      </div>
    );
  }
}

export default MapContainer;
