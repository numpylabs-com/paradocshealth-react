import React,{useState} from 'react'
import Spinner from "../Spinner"
import { GoogleMap, Marker,useJsApiLoader, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 25.2048,
  lng: 55.2708
};

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
  color: `black`
}

const Map = () => {
  const [activeMarker, setActiveMarker] = useState(-1);
  const [infoDomReady, setInfoDomReady] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY
  })
  
  const position = {
    lat: 25.2048,
    lng: 55.2708
  };

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleInfoCloseClick = () => {
    setActiveMarker(-1);
    setInfoDomReady(false);
  };

  return isLoaded ? (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
      >
        { /* Child components, such as markers, info windows, etc. */ }
      <Marker position={position} onClick={()=>handleActiveMarker(0)} key={0}>
      {activeMarker==0 ? 
        <InfoWindow
        onDomReady={() => setInfoDomReady(true)}
        onUnmount={() => setInfoDomReady(false)}
        onCloseClick={handleInfoCloseClick}
        >
          <div style={divStyle}>  
            <h4>Hospital data here</h4>
          </div> 
        </InfoWindow> : null }
      </Marker>
      </GoogleMap>
      ): <></>
}

export default Map