import React, { Component } from 'react';
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { connect } from 'react-redux';
import { getMarkers } from './../../actions/locationActions';

// Bug map markers displayed for previously set markers if there arent any recorded

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

  render() {
    const {lat, lng, mapMarkers} = this.props;
    if (lat, lng) {
      console.log()
      const position = [lat, lng]
      return (
        <Map
          center={position}
          style={{ width: '100%', height: '600px' }}
          zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          {mapMarkers.map((position, index) =>
            <Marker
              key={`marker-${index}`}
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
    entries: state.firestore.ordered.entries,
    auth: state.firebase.auth
  };
}



export default connect(mapStateToProps)(TestMap);
