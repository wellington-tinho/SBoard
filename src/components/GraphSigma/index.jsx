// import {Sigma, EdgeShapes, NodeShapes, LoadJSON, LoadGEXF, Filter, ForceAtlas2,
//   RelativeSize, NOverlap, NeoCypher, NeoGraphItemsProducers,
//   RandomizeNodePositions, SigmaEnableWebGL} from 'react-sigma'
// import ForceLink from 'react-sigma/lib/ForceLink'
// import Dagre from 'react-sigma/lib/Dagre'


// interface GraphProps {
//   graph: {
//   nodes: Array<{
//     Country: String, 
//     Internal: number,
//     Latitude: number,
//     Longitude: number,
//     id: String,
//     label: String,
//     modularitygroup: number
//   }>;
//   links: Array<{
//     LinkLabel: String,
//     key: number,
//     source: String,
//     target: String
//   }>;
//   }
// }
import React from 'react'
import * as data from './saida.json';
import { Sigma, NodeShapes } from 'react-sigma'

// class MyCustomSigma extends React.FC {
//   constructor(props) {
// 		super(props)
// 		props.sigma.graph.addNode({id:"n3", label:props.label})
// 	}
// }


export function GraphSigma() {

  return (
    <Sigma renderer="canvas" graph={{nodes:["id0", "id1"], edges:[{id:"e0",source:"id0",target:"id1"}]}}>
    <NodeShapes default="star"/>
    </Sigma>
  );
}