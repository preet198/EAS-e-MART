import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./style.css";

class MapContainer extends Component {

  componentDidUpdate = () => {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      console.log(this.props);



    }
  }

  render() {
    const style = {
      width: '20vw',
      height: '20vh'
    }
    return (
      <Map google={this.props.google} zoom={14} style={style} >

      </Map>
    );
  }
}

export default MapContainer;
