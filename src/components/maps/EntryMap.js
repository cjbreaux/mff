import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';


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
    const {lat, lng, mapMarkers, entry} = this.props;
    if (lat && lng) {
      console.log(mapMarkers)
      const position = [mapMarkers[0].lat, mapMarkers[0].lng]
      return (
        <Map
          center={position}
          style={{ width: '100%', height: '400px' }}
          zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          {mapMarkers.map((position, index) =>
            <Marker
              key={`marker-${index}`}
              position={ position }>
              <Popup>
               {`${entry.specimens[index].name} - ${entry.specimens[index].qty} `}
              </Popup>
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
