import React, { Component } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { connect } from 'react-redux';
import { getMarkers } from './../../actions/locationActions';
// import 'leaflet/dist/leaflet.css'; using CDN to correctly display marker




class TestMap extends Component {
  constructor(props) {
    super(props);
    if (this.props.lat && this.props.lng) {
      this.setState({markers: [this.props.late, this.props.long]})
    }
    this.state = {
      markers: [],
      zoom: 13,
    }
  }

  addMarker = (e) => {
    const { markers } = this.state
    markers.push(e.latlng);
    this.setState({ markers });
    this.props.getMarkers(this.state.markers);
  }

  removeMarker = index => () => {
    this.setState({
      markers: this.state.markers.filter((loc, pos) => index !== pos)
    });
    this.props.getMarkers(this.state.markers);
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
              position={ position }>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getMarkers: (arr) => dispatch(getMarkers(arr))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TestMap);
