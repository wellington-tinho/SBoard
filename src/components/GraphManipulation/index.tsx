import Modal from 'react-modal';


import cytoscape from 'cytoscape';
import { useContext, useEffect, useRef, useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

import { NodeModal } from '../NodeModal';
import { EdgeModal } from '../EdgeModal';
import { CytoscapeContext } from '../../CytoscapeContext';
import { ElementModal } from '../ElementModal';
import { ChartOptions } from '../ChartOptions';


export interface propsGraphJson{
  grapJSON:iGraphJson,
}
export interface iGraphJson{
  edges:any,
  nodes:any,
}

Modal.setAppElement('#root')



export function GraphManipulation({grapJSON}:propsGraphJson){  
  const containerRef = useRef(null);
  const [cy,setCy] = useContext(CytoscapeContext)
  const [nodeElement,setNodeElement] = useState<any>()
  const [edgeElement,setEdgeElement] = useState<any>()

  Object.keys(grapJSON.edges).forEach(key=>{      
        (grapJSON.edges[key].data) = {
          ...grapJSON.edges[key].data,
          id:`e${key}`,
          delay:       `${grapJSON.edges[key].data.delay        ? grapJSON.edges[key].data.delay       : (Math.floor(Math.random() * 100) + 1)}`,
          reliability: `${grapJSON.edges[key].data.reliability  ? grapJSON.edges[key].data.reliability : (Math.floor(Math.random() * 100) + 1)}`,
          weight:      `${grapJSON.edges[key].data.weight       ? grapJSON.edges[key].data.weight      : (Math.floor(Math.random() * 100) + 1)}`,
          negative:    `${grapJSON.edges[key].data.negative     ? grapJSON.edges[key].data.negative    : (Math.floor(Math.random() * 100) + 1)}`,
        }
        
      })
      
      Object.keys(grapJSON.nodes).forEach(key=>{
        (
          (grapJSON.nodes[key].data) = {
            ...grapJSON.nodes[key].data, 
            // id:   `${key}`,
            // label:       `${grapJSON.nodes[key].data.label        ? grapJSON.nodes[key].data.label      : (Math.floor(Math.random() * 100) + 1)}`,
            // name:         `${grapJSON.nodes[key].data.name        ? grapJSON.nodes[key].data.name       : (Math.floor(Math.random() * 100) + 1)}`,
            // Country:      `${grapJSON.nodes[key].data.Country     ? grapJSON.nodes[key].data.Country    : (Math.floor(Math.random() * 100) + 1)}`,
            // domain:       `${grapJSON.nodes[key].data.domain      ? grapJSON.nodes[key].data.domain     : (Math.floor(Math.random() * 100) + 1)}`,
            // type:         `${grapJSON.nodes[key].data.type        ? grapJSON.nodes[key].data.type       : (['a','c','t'])[Math.floor(Math.random()*(['a','c','t']).length)]}`,
            // region:       `${grapJSON.nodes[key].data.region      ? grapJSON.nodes[key].data.region     : (Math.floor(Math.random() * 100) + 1)}`,
            // pos:          `${grapJSON.nodes[key].data.pos         ? grapJSON.nodes[key].data.pos        : (Math.floor(Math.random() * 100) + 1)}`,
            // value:        `${grapJSON.nodes[key].data.value       ? grapJSON.nodes[key].data.value      : (Math.floor(Math.random() * 100) + 1)}`,
            // weight:       `${grapJSON.nodes[key].data.weight      ? grapJSON.nodes[key].data.weight     : (Math.floor(Math.random() * 100) + 1)}`,
            
            // id:`n${key}`,
          // Weight:(Math.floor(Math.random() * 100) + 1),
          // type: (['a','c','t'])[Math.floor(Math.random()*(['a','c','t']).length)],
        }
      );
  })

  const elementos = CytoscapeComponent.normalizeElements({nodes: grapJSON.nodes, edges: grapJSON.edges});

  //configuraçoes e inicializaçao do cytoscape graph
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
              'background-color': "rgb(153,153,153)",
              "border-width": 3,
              "border-color": ( ele:any )=>{ 
                if(ele.data().type==='t'){
                  return ("#da42c5")
                }
                if(ele.data().type==='c'){
                  return ("#3bd1d1")
                }
                if(ele.data().type==='s'){
                  return ("#d1cf42")
                }else{
                  return ("rgb(153,153,153)")
                }
              
              },
            }
          },
          {
            selector: 'edge',
            style: {
              // content: 'data(label)',
              'line-style': 'solid',
              'line-color': '#b3b3b3',
              // 'control-point-step-size': 40,
              // 'control-point-weights': 0.5,
              // 'segment-weights': 0.5,
              // 'segment-distances': 20,
              // 'edge-distances': 'intersection',
              'curve-style': 'unbundled-bezier ',
            }
          },
          
          {
            selector: 'edge:selected',
            style: {
              content: ( ele:any )=>{ 
                return (
                  ' id:'+ ele.data().id +
                  ' source:'+ ele.data().source +
                  '\n target:'+ ele.data().target +
                  ' delay:'+ ele.data().delay +
                  '\n reliability:'+ ele.data().reliability +
                  ' bandwidth:'+ ele.data().weight +
                  ' negative:'+ ele.data().negative  
                  ) 
                },
                'line-color': '#4a7aff',

                'textWrap': 'wrap',
                'fontWeight':'bold',
                'text-background-color': '#ffffff',
                'text-background-opacity': 1,
                // 'text-background-margin': 2,
                'text-border-opacity': 1,
                'text-border-width': 1,
                // 'text-border-style': 'solid',
                'text-border-color': '#33396e',
                'textBackgroundShape': 'round-rectangle',
                'opacity': 1,
                'z-index': 99,

              }
            },
            
            {
              selector: 'node:selected',
              style: {
                // classes: 'background',
                content: ( ele:any )=>{ 
                return (
                 ' id:'+ ele.data().id +
                 ' label:'+ ele.data().label +
                 ' name:'+ ele.data().name +
                 '\n Country:'+ ele.data().Country +
                 ' domain:'+ ele.data().domain +
                 ' type:'+ ele.data().type +
                 '\n region:'+ ele.data().region +
                 ' pos:'+ ele.data().pos +
                 ' value:'+ ele.data().value +
                 ' bandwidth:'+ ele.data().weight
                 
                 )},
                 
        
                'fontWeight':'bold',
                'textWrap': 'wrap',
                "text-background-padding": '10px',
                "border-width": 5,
                "border-color": "#2901d9",
                'background-color':'#019cd9',
                'text-background-color': '#ffffff',
                'text-background-opacity': 1,
                // 'text-background-margin': 1,
                'text-border-opacity': 1,
                'text-border-width': 1,
                'text-border-color': '#33396e',
                'textBackgroundShape': 'round-rectangle',

                

                
                // 'text-valign': 'center',
                // 'text-halign': 'center',
    
                // 'font-size': '10',
              // "text-max-width": "5px",
              
            }
          }
        ],
        elements:elementos,
        minZoom: 0.1,
        maxZoom:3,
        zoomFactor: 0.05, // zoom factor per zoom tick
        zoomDelay: 45 // how many ms between zoom ticks
      };
      // cytoscape(config);
      setCy(cytoscape(config))    

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    // funções automaticas inicializadas junto com o grafico 
    function CytoscapeFunctions(){
      var doubleClickDelayMs = 350;
      var previousTapStamp:any;
      
      cy?.on('tap', function(e:any) {
        var currentTapStamp = e.timeStamp;
        var msFromLastTap = currentTapStamp - previousTapStamp;

        if (msFromLastTap < doubleClickDelayMs) {
          e.target.trigger('doubleTap', e);
        }
        previousTapStamp = currentTapStamp;
      });

      cy?.on('doubleTap', function(event:any, originalTapEvent:any) {
        handleOpenElementModal()
      });

      cy?.on('cxttap ', 'node', function(evt:any){
        setNodeElement(evt.target.data())
        handleOpenNodeModal()
        console.log('Node:'+JSON.stringify((evt.target).data(), null, 4))
      });

      cy?.on('cxttap ', 'edge', function(evt:any){
        setEdgeElement(evt.target.data())
        handleOpenEdgeModal()
        console.log('Edge:'+JSON.stringify((evt.target).data(), null, 4))
      });

      cy?.on('cxttap', function(evt:any){
        // target holds a reference to the originator
        // of the event (core or element)
        var evtTarget = evt.target;
        if( evtTarget === cy ){
          console.log('tap on background');
          handleOpenChartOptionsModal()
        }
      });
    } 
    CytoscapeFunctions()
  
     
    const [isNodeModal, setIsNodeModal] = useState(false);
    function handleOpenNodeModal(){
      document.addEventListener('contextmenu', event => event.preventDefault());
      setIsNodeModal(true)
    }
    function handleCloseNodeModal(){
      setIsNodeModal(false)
    }
  
    const [isEdgeModal, setIsEdgeModal] = useState(false);
    function handleOpenEdgeModal(){
      document.addEventListener('contextmenu', event => event.preventDefault());
      setIsEdgeModal(true)
    }
    function handleCloseEdgeModal(){
      setIsEdgeModal(false)
    }

    const [isElementModal, setIsElementModal] = useState(false);
    function handleOpenElementModal(){
      document.addEventListener('contextmenu', event => event.preventDefault());
      setIsElementModal(true)
    }
    function handleCloseElementModal(){
      setIsElementModal(false)
    }
    
    const [isChartOptionsModal, setIsChartOptionsModal] = useState(false);
    function handleOpenChartOptionsModal(){
      document.addEventListener('contextmenu', event => event.preventDefault());
      setIsChartOptionsModal(true)
    }
    function handleCloseChartOptionsModal(){
      setIsChartOptionsModal(false)
    }
  

  return (
    <div>
      <div id='cy' >
      <div ref={containerRef} style={{ width: '80vw', height: '86vh' }} />
      </div>

      <NodeModal 
        isOpen={isNodeModal}
        onRequestClose={handleCloseNodeModal}
        node={nodeElement}
      />

      <EdgeModal 
        isOpen={isEdgeModal}
        onRequestClose={handleCloseEdgeModal}
        edge={edgeElement}
      />

      <ElementModal 
        isOpen={isElementModal}
        onRequestClose={handleCloseElementModal}
      />

      <ChartOptions
        isOpen={isChartOptionsModal}
        onRequestClose={handleCloseChartOptionsModal}
      />
    </div>
  );
}



