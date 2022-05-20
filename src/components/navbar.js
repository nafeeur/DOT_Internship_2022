import react from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from "react-bootstrap";
import Slide from './slide.js'
import React, {useRef, useEffect}  from 'react';
import { MapContainer,  TileLayer, Marker} from 'react-leaflet';
import Info from './info.js'



function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}



export default function navBar(){
return(

<div className="navBar">

<Navbar variant="dark">

<form id="form" role="search">
  <input type="search" id="query" name="q"
   placeholder="Search..."
   aria-label="Search through site content"/>
  <button class="search">Search</button>
</form>

    <Navbar.Brand>
       CITY RACKS VIEWER
    </Navbar.Brand>
<Info></Info>
      </Navbar>
   
</div>

)


}