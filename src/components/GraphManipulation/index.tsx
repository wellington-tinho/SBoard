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
          bandwidth:   `${grapJSON.edges[key].data.bandwidth    ? grapJSON.edges[key].data.bandwidth   : (Math.floor(Math.random() * 100) + 1)}`,
          reliability: `${grapJSON.edges[key].data.reliability  ? grapJSON.edges[key].data.reliability : (Math.floor(Math.random() * 100) + 1)}`,
          weight:      `${grapJSON.edges[key].data.weight       ? grapJSON.edges[key].data.weight      : (Math.floor(Math.random() * 100) + 1)}`,
          negative:    `${grapJSON.edges[key].data.negative     ? grapJSON.edges[key].data.negative    : (Math.floor(Math.random() * 100) + 1)}`,
        }
      
  })

  Object.keys(grapJSON.nodes).forEach(key=>{
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
              'background-color': "rgb(153,153,153)"
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
                  ' bandwidth:'+ ele.data().bandwidth +
                  '\n reliability:'+ ele.data().reliability +
                  ' weight:'+ ele.data().weight +
                  ' negative:'+ ele.data().negative  
                  ) 
                },
                'textWrap': 'wrap',
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
                 ' weight:'+ ele.data().weight
              
                 )},
                 
                // 'padding-top': '10px',
                // 'padding-bottom': '30px',
                'textWrap': 'wrap',
                "text-background-padding": '10px',

                // 'text-valign': 'center',
                // 'text-halign': 'center',
    
                // 'font-size': '10',
              // "text-max-width": "5px",
            
              "border-width": 5,
              "border-color": "#2901d9",
              'background-color':'#019cd9',
              
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
      <div ref={containerRef} style={{ width: '80vw', height: '86vh' }} />

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



