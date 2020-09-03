import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import './site.css'

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaW5hbmRhbmsiLCJhIjoiY2tlbTAydHh2MDA1bTJ4b2ltN3RrczRmeSJ9.tdfI7G8qTlgkG2iClQy3Lg';

class Application extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  lng: 5,
  lat: 34,
  zoom: 2
  };
  }
   
  componentDidMount() {
  const map = new mapboxgl.Map({
  container: this.mapContainer,
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [this.state.lng, this.state.lat],
  zoom: this.state.zoom
  });
   

  map.on('move', () => {
  this.setState({
  lng: map.getCenter().lng.toFixed(4),
  lat: map.getCenter().lat.toFixed(4),
  zoom: map.getZoom().toFixed(2),
  positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
  });
  });
  }
   
  render() {
  return (
  <div>
  <div className='sidebarStyle'>
  <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
  </div>
  <div ref={el => this.mapContainer = el} className='mapContainer' />
  </div>
  )
  }
  }
// class Application extends React.Component {
//   constructor() {
//       super();
//       this.state = {
//         lng: 5,
//         lat: 34,
//         zoom: 2,
//         map: mapboxgl.Map
//       };
//     }
//     componentDidMount() {
//         const mapp = new mapboxgl.Map({
//         container: 'map', // container id
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [-96, 37.8], // starting position
//         zoom: 3 // starting zoom
//         });
         
//         // Add geolocate control to the map.
//         mapp.addControl(
//           new mapboxgl.GeolocateControl({
//              positionOptions: {
//               enableHighAccuracy: true
//             },
//               trackUserLocation: true
//           })
//         );
//         this.setState({map: mapp})
      
//     }
//     render() {
//       return (
//       <div>
//           <div ref={el => this.mapContainer = el} className="mapContainer" />
          
//       </div>
//       )
//     }
//};
export default Application;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
  
