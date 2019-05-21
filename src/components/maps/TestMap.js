import React, { Component } from 'react';
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';
// import 'leaflet/dist/leaflet.css'; using CDN to correctly display marker




class TestMap extends Component {
  state = {
    // lat: 45.520,
    // lng: -122.677,
    zoom: 13,
  }

  render() {
    console.log(typeof this.props.lat)
    // const position = [this.state.lat, this.state.lng]
    if (this.props.lat && this.props.lng) {
      const position = [this.props.lat, this.props.lng]
      return (
        <Map
          center={position}
          style={{ width: '100%', height: '600px' }}
          zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      )
    } else {
      return (
        <p>...loading</p>
      )
    }
  }
}


const mapStateToProps = state => {
  return {
    lat: state.location.latitude,
    lng: state.location.longitude
  };
}


export default connect(mapStateToProps)(TestMap);
