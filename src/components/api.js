import React, {useEffect}  from 'react';
import { MapContainer,  TileLayer, Marker, Popup} from 'react-leaflet';


const position = [51.505, -0.09]

export default function PopupExample() {
  return (

      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
  
  )
}