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
  const containerRef = useRef(null);
  const [cy,setCy] = useContext(CytoscapeContext)

  Object.keys(grapJSON.edges)
    .forEach(key=>{
      (
        (grapJSON.edges[key].data) = {
          ...grapJSON.edges[key].data,   
          id:`e${key}`,
          Bandwidth:(Math.floor(Math.random() * 100) + 1),
          Delay:(Math.floor(Math.random() * 100) + 1),
          Reliability:(Math.floor(Math.random() * 100) + 1)
        }
      );
  })

  Object.keys(grapJSON.nodes)
    .forEach(key=>{
      (
        (grapJSON.nodes[key].data) = {
          ...grapJSON.nodes[key].data, 
          // id:`n${key}`,
          // Weight:(Math.floor(Math.random() * 100) + 1),
          // type: (['a','c','t'])[Math.floor(Math.random()*(['a','c','t']).length)],
        }
      );
  })

  const elementos = CytoscapeComponent.normalizeElements({nodes: grapJSON.nodes, edges: grapJSON.edges});
  
  
//  // funções automaticas inicializadas junto com o grafico 
// function CytoscapeFunctions(){
//       try {
//         cy.on('tap', 'node', function(evt:any){
//           var node = evt.target;
//           console.log( 'tapped ' + node.id() );
//         });   
//      } catch (error) { console.log('CytoscapeFunctions',error)}
// } 
// CytoscapeFunctions()
  
 
  


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
        
          {selector: "node",
          style: { content: "data(label)" }},
      
          // {selector: 'edge',
          // class: {content:"data(id)"}},
        ],
        elements:elementos,
        minZoom: 0.1,
        maxZoom:3
      };
      // cytoscape(config);
      setCy(cytoscape(config))
    }, []);

    // funções automaticas inicializadas junto com o grafico 
    useEffect(() => {
      function CytoscapeFunctions(){
            try {
              cy.on('tap', function(event:any){
                if( event.target === cy ){
                  console.log('tap on background');
                } 
              })
              
              cy.on('tap', 'node', function(evt:any){
                console.log( 'tapped ', (evt.target).data() )
              })

              cy.on('tap', 'edge', function(evt:any){
                console.log( 'tapped ', (evt.target).data() )
              });
          } catch (error) { console.log('CytoscapeFunctions',error)}
      } 
      CytoscapeFunctions()
  
    },[cy])
  
 

  

  return (
    <div>
      <div ref={containerRef} style={{ width: '84vw', height: '87vh' }} />
    </div>
  );
}