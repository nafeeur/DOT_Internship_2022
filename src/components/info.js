import { ClassNames } from "@emotion/react"
import React from "react"
import '../components/info.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Info(){
return (
    <Popup trigger={    <div class="btt" > <span class="graphic-buttons" id="graphic-button-1" >
   
        <img src={require('../components/info.png')} width="45" height="60" alt="submit" />
        </span> </div>
        
        } position="right center">
    <div className="pup">

    <img src={require('../components/instruction.jpg')} width="590" height="690" alt="submit" />
    </div>
  </Popup>
) 


}

export default Info