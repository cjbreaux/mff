import React, { Component } from 'react';
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';
// import 'leaflet/dist/leaflet.css'; using CDN to correctly display marker




class TestMap extends Component {
  constructor(props) {
    super(props);
    if (this.props.lat && this.props.lng) {
      this.setState({markers: [this.props.late, this.props.long]})
    }
    this.state = {
      // lat: 45.520,
      // lng: -122.677,
      markers: [],
      zoom: 13,
    }
  }

  addMarker = (e) => {
    const {markers} = this.state
    markers.push(e.latlng)
    this.setState({markers})
  }

  removeMarker = index => () => {
    this.setState({
      markers: this.state.markers.filter((loc, pos) => index !== pos)
    });
  }

  render() {
    if (this.props.lat && this.props.lng) {
      const position = [this.props.lat, this.props.lng]
      return (
        <Map
          center={position}
          style={{ width: '100%', height: '600px' }}
          onClick={this.addMarker}
          zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          {this.state.markers.map((position, index) =>
            <Marker
              key={`marker-${index}`}
              onClick={this.removeMarker(index)}
              position={position}>
            </Marker>
          )}
        </Map>
      )
    } else {
      return (
        <p>...loading map</p>
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
