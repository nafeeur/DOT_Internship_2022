import React, {useRef, useEffect}  from 'react';
import { MapContainer,  TileLayer, Marker, Popup} from 'react-leaflet';
import { icon } from 'leaflet';
import apiData from '../components/api-data.json';
import L from 'leaflet'
import Pop from '../components/api.js'
import Image from '../components/img.js'
import Slide from '../components/slide.js'
import Info from './info';




function GetIcon (_iconSize){

  return L.icon({


iconUrl: require("../components/marker.png"),
iconSize: [_iconSize]

  })

}


export default function Map(){

 
  function handleSubmit(e) {
    e.preventDefault(); 
      alert("Issue Submitted to DOT");
  }
  

return (
  
  
  <MapContainer center={[40.758896, -73.985130]} zoom={12}>


    <TileLayer
      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />


    {apiData.map((api) => <Marker position={api.the_geom.coordinates.reverse()} icon={GetIcon(30)}>
      
      <Popup className="Pop_one">

        <div>

          <h4>{api.ifoaddress}</h4>
          <h5>{api.boro_name}</h5>
          <h7>Date Installed</h7>
          <h6>{api.date_inst}</h6>
          <h7>Cross Street 1</h7>
          <h6>{api.xstreet1}</h6>
          <h7>Cross Street 2</h7>
          <h6>{api.xstreet2}</h6>


        </div>


        <div>
          <button onClick={handleSubmit} class="newButton">Report Issue</button>
        </div>

        <div>
          <button onClick={handleSubmit} class="newButton2">Report Damage</button>
        </div>
        
        <div>
          <button onClick={handleSubmit}  class="newButton3">Report Missing</button>
        </div>

      </Popup>


    </Marker>

    )}


<Marker position={[40.758896, -73.985130]} draggable={true}>

<div>
      <Popup className='Pop_two' >

       <div>

         <h4>Add New BikeRack Location at</h4>
         <h6>40.758896, -73.985130 ?</h6>
         <br></br>
         <h6>Additional Comments</h6>
         <br></br>
        
       
       </div>
       
       <div>

       <form className='NewForm'>
  <label>
    <input className='NewFormIn' type="Add Comments" name="name" />
  </label>
      </form>


       </div>
        <div>
      

          <button onClick={handleSubmit} class="button_two"> Report New Location</button>
    
        </div>

      </Popup>
     
      </div>
    </Marker>


  </MapContainer>
  
  


)

}

