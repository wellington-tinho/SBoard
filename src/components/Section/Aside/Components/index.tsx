import expand from "../../../../assets/img/import.png";
import { changeContent } from "./script";
import { Component } from "./styled";


export function Components(){

  return(

    <Component>
      <ul>
        <li>
          <button onClick={()=>changeContent('Creation-info')}>  
            <img src={expand} alt="Expand"/>
            Creation
            </button>
          <div id="Creation-info">
            <button>Topology</button>
            <button>Service</button>
            <button>Duration</button>
            <button>Band</button>
            <button>Delay</button>
            <button>Knots Quantity</button>
            <button>Reliability</button>
            <button>Slice Type</button>
          </div>
        </li>


        <li>
          <button onClick={()=>changeContent('Edition-info')}>
            <img src={expand} alt="Expand"/>
            Edition
            </button>
          <div id="Edition-info">
            <button>Requests</button>
            <button>Topology</button>
            <button>Service</button>
            <button>Duration</button>
            <button>Band</button>
            <button>Delay</button>
            <button>Reliability</button>
            <button>Slices type</button> 
            <button>Knots Quantity</button>
          </div>
        </li>
        <li>
          <button onClick={()=>changeContent('Preview-info')}>
            <img src={expand} alt="Expand"/>
              Preview
            </button>
          <div id="Preview-info">
            <button>Create Requests</button>
            <button>Mapped Requests</button>
            <button>Change Requests</button>
            <button>Delete Requisitions</button>
            <button>Remove Mapping Requisitions</button>
          </div>
        </li>
      </ul>
    
    </Component>
  )
}

