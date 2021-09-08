// import cytoscape from 'cytoscape';
// import { useEffect, useRef } from 'react';

import cytoscape from 'cytoscape';
import { useEffect, useRef, useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';


export interface propsGraphJson{
  grapJSON:iGraphJson,
}
export interface iGraphJson{
  edges:any,
  nodes:any,
}


export function GraphManipulation({grapJSON}:propsGraphJson){
//   // const cy = useRef<cytoscape.Core>();

  const elements = CytoscapeComponent.normalizeElements({nodes: grapJSON.nodes, edges: grapJSON.edges,});
  const containerRef = useRef(null);
  const [cy, setCy] = useState<cytoscape.Core>()


  useEffect(() => {
    const config = {
      container: containerRef.current,
      layout:{
        name: "breadthfirst",
        fit: true,
        // circle: true,
        directed: true,
        padding: 50,
        // spacingFactor: 1.5,
        animate: true,
        animationDuration: 1000,
        avoidOverlap: true,
        nodeDimensionsIncludeLabels: false
      },
      style: [
        {
          selector: "node",
          style: { content: "data(label)" },
        },
      ],
      elements:elements,
      minZoom: 0.1,
      maxZoom:3
    };

    cytoscape(config);
    setCy(cytoscape(config))
  }, []);
  
  cy?.on('tap', (event: any) => {
    console.log('data', event.target._private.data)
    // setNode(event.target._private.data)
  });
//  cy?.add([
//     { group: 'nodes', data: { id: 'k0' }, position: { x: 100, y: 100 } },
//     { group: 'nodes', data: { id: 'k1' }, position: { x: 200, y: 200 } },
//     { group: 'edges', data: { id: 'l0', source: 'k0', target: 'k1' } }
//   ]);
  

  return (
    <div>
      <div ref={containerRef} style={{ width: '84vw', height: '87vh' }} />
    </div>
  );
}