// import cytoscape from 'cytoscape';
// import { useEffect, useRef } from 'react';

import { useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';


export interface propsGraphJson{
  grapJSON:iGraphJson,
}
export interface iGraphJson{
  edges:any,
  nodes:any,
}

export function GraphManipulation({grapJSON}:propsGraphJson){
  const [node, setNode] = useState({})
  // const container = useRef<HTMLDivElement>(null);
  // const cy = useRef<cytoscape.Core>();
  // const [cy, setCy] = useState({})

  // useEffect(() => {
  //   console.log('effect')
  //   // cy.layout(layout).run()
  // })

  

  function initCy(cy: any) {
    // @ts-ignore
    cy.on('tap', (event: any) => {
      console.log('data', event.target._private.data)
      setNode(event.target._private.data)
    });
  }

  // const layout = useRef<cytoscape.Layouts>();
  const elements = CytoscapeComponent.normalizeElements({
    nodes: grapJSON.nodes,
    edges: grapJSON.edges,  
  });

  const layout = {
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
  };

 
  return(
    <>
    <p>{JSON.stringify(node)}</p>
    <CytoscapeComponent 
      id='cy' 
      elements={elements} 
      style={{ width: '84vw', height: '87vh' }}  
      layout={layout} 
      minZoom= {0.1} 
      maxZoom={3} cy={initCy}/>;
     {/* <div id='cy' style={{ width: '84vw', height: '87vh' }} /> */}
    </>

  );
}