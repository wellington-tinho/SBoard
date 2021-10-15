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
          {
            selector: 'node',
            style: {
              content: 'data(label)',
              'background-color': "rgb(153,153,153)"
            }
          },

          {
            selector: 'edge:selected',
            style: {
              content: function( ele:any ){ return  ele.data('id')},
            }
          },

          {
            selector: 'node:selected',
           
            style: {
              content: ( ele:any )=>{ 
                return (
                 '\n id:'+ ele.data().id +
                 ' label:'+ ele.data().label +
                 '\n name:'+ ele.data().name +
                 ' Country:'+ ele.data().Country +
                 ' domain:'+ ele.data().domain +
                 '/n pos:'+ ele.data().pos +
                 ' region:'+ ele.data().region +
                 '\t type:'+ ele.data().type +
                 ' value:'+ ele.data().value +
                 ' weight:'+ ele.data().weight
              )},
              // "text-max-width": "10px",
              // "text-wrap": "wrap",
              // "text-max-width": 100,
              // "source-label": "",
              // "target-label": "",
              "border-width": 5,
              "border-color": "#2901d9",
              'background-color':'#019cd9'
            }
          }
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
           
              var doubleClickDelayMs = 350;
              var previousTapStamp:any;
              cy.on('tap', function(e:any) {
                var currentTapStamp = e.timeStamp;
                var msFromLastTap = currentTapStamp - previousTapStamp;

                if (msFromLastTap < doubleClickDelayMs) {
                  e.target.trigger('doubleTap', e);
                }
                previousTapStamp = currentTapStamp;
              });
  
              cy.on('doubleTap', function(event:any, originalTapEvent:any) {
                alert('doubleTap');
                console.log(originalTapEvent);
              });
              
              cy.on('cxttap ', 'node', function(evt:any){
                alert('Node:'+JSON.stringify((evt.target).data(), null, 4))
                console.log('Node:'+JSON.stringify((evt.target).data(), null, 4))
                console.log((evt.target));
              })
              
              cy.on('tap', 'edge', function(evt:any){
                alert('Edgle:'+JSON.stringify((evt.target).data(), null, 4))
                console.log((evt.target));
              });
          } catch (error) { console.log('CytoscapeFunctions',error)}
      } 
      CytoscapeFunctions()
  
    },[cy])
  
 

  

  return (
    <div>
      <div ref={containerRef} style={{ width: '80vw', height: '86vh' }} />
    </div>
  );
}