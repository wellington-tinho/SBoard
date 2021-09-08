// import cytoscape from 'cytoscape';
// import { useEffect, useRef } from 'react';

import cytoscape from 'cytoscape';
import { useContext, useEffect, useRef } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { CytoscapeContext } from '../../CytoscapeContext';


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
  // const [cy, setCy] = useState<cytoscape.Core>()
  const [cy, setCy] = useContext(CytoscapeContext);


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
  
 

  

  return (
    <div>
      <div ref={containerRef} style={{ width: '84vw', height: '87vh' }} />
    </div>
  );
}