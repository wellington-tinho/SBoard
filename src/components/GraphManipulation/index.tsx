import cytoscape, { ElementsDefinition } from 'cytoscape';
import edgehandles from 'cytoscape-edgehandles';
import { useContext, useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { CytoscapeContext } from '../../CytoscapeContext';
import { ChartOptions } from '../ChartOptions';
import { EdgeModal } from '../EdgeModal';
import { ElementModal } from '../ElementModal';
import { NodeModal } from '../NodeModal';




export interface propsGraphJson{
  grapJSON:ElementsDefinition,
}


Modal.setAppElement('#root')



export function GraphManipulation({grapJSON}:propsGraphJson){  

  const containerRef = useRef(null);
  const [cy,setCy] = useContext(CytoscapeContext)
  const [nodeElement,setNodeElement] = useState<any>()
  const [edgeElement,setEdgeElement] = useState<any>()

  console.log(grapJSON);
  

  Object.keys(grapJSON.edges).forEach(key=>{      
    (grapJSON.edges[Number(key)].data) = {
      ...grapJSON.edges[Number(key)].data,

      id:`e${Number(key)}`,
      delay:       `${grapJSON.edges[Number(key)].data.delay        ? grapJSON.edges[Number(key)].data.delay       : (Math.floor(Math.random() * 100) + 1)}`,
      reliability: `${grapJSON.edges[Number(key)].data.reliability  ? grapJSON.edges[Number(key)].data.reliability : (Math.floor(Math.random() * 100) + 1)}`,
      weight:      `${grapJSON.edges[Number(key)].data.weight       ? grapJSON.edges[Number(key)].data.weight      : (Math.floor(Math.random() * 100) + 1)}`,
      negative:    `${grapJSON.edges[Number(key)].data.negative     ? grapJSON.edges[Number(key)].data.negative    : (Math.floor(Math.random() * 100) + 1)}`,
    }
  })
  //se o primeiro node não tem position entao os outros tambem nao terá, (diferença de envio via GML e JSON)
  var notHasPositionInGraph = !grapJSON.nodes[0].position

  // encontrei um erro de um graph que tinha longitude e latitude em um node, mas não tinha position
  var nothasPosInGraph = !grapJSON.nodes[0].data.pos

  //caso nao tiver latitude e longitude, então não tem posição no graph, (gero no random)
  var nothasLongLatInGraph = !grapJSON.nodes[0].data.Longitude && !grapJSON.nodes[0].data.Latitude



  if (notHasPositionInGraph){

    if(!nothasPosInGraph){
      Object.keys(grapJSON.nodes).forEach((key)=>{
        (
          grapJSON.nodes[Number(key)].data = {
            ...grapJSON.nodes[Number(key)].data,
          },
          grapJSON.nodes[Number(key)].position  = {
            x: Number(`${grapJSON.nodes[Number(key)].data.pos[0]}`),
            y: Number(`${grapJSON.nodes[Number(key)].data.pos[1]}`),
          }
        )
      })
    }
    else if(!nothasLongLatInGraph){
      Object.keys(grapJSON.nodes).forEach((key)=>{
        (
          grapJSON.nodes[Number(key)].data = {
            ...grapJSON.nodes[Number(key)].data,
          },
          grapJSON.nodes[Number(key)].position  = {
            x: Number(`${grapJSON.nodes[Number(key)].data.Longitude}`),
            y: Number(`${grapJSON.nodes[Number(key)].data.Latitude}`),
          }
        )
      })
    }
  }else{
    Object.keys(grapJSON.nodes).forEach(key=>{
      (grapJSON.nodes[Number(key)].data = { ...grapJSON.nodes[Number(key)].data })
    })
  }
     
  // const elementos = CytoscapeComponent.normalizeElements({nodes: grapJSON.nodes, edges: grapJSON.edges});
  const elementos =({nodes: grapJSON.nodes, edges: grapJSON.edges} as ElementsDefinition);




  
  //configuraçoes e inicializaçao do cytoscape graph
  useEffect(() => {
    const config = {
      container: containerRef.current,
        layout:{ 
          name: 'preset',
          fit: true, //centraliza
          animate: true,
          animationDuration: 1000,
          // directed: true,
          // avoidOverlap: true,
          // avoidOverlapPadding: 10,
          // nodeDimensionsIncludeLabels: false,
          // padding: 50,
          // circle: true,
          spacingFactor: 10, //undefined
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
              'line-style': 'solid',
              'line-color': '#b3b3b3',
              'curve-style': 'unbundled-bezier ',
              // content: 'data(label)',
              // 'control-point-step-size': 40,
              // 'control-point-weights': 0.5,
              // 'segment-weights': 0.5,
              // 'segment-distances': 20,
              // 'edge-distances': 'intersection',
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
                  )
                },
                 
                'fontWeight':'bold',
                'textWrap': 'wrap',
                "text-background-padding": '10px',
                "border-width": 5,
                "border-color": "#2901d9",
                'background-color':'#019cd9',
                'text-background-color': '#ffffff',
                'text-background-opacity': 1,
                'text-border-opacity': 1,
                'text-border-width': 1,
                'text-border-color': '#33396e',
                'textBackgroundShape': 'round-rectangle',
                // 'text-background-margin': 1,
                // 'text-valign': 'center',
                // 'text-halign': 'center',
                // 'font-size': '10',
                // "text-max-width": "5px",
               
              }
            }
        ],
        elements:elementos,
        minZoom: 0.1,
        maxZoom:6,
        zoomFactor: 0.05, // zoom factor per zoom tick
        zoomDelay: 45, // how many ms between zoom ticks
        zoom: 3
      };
      // cytoscape(config);

      setCy(cytoscape(config))    

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
        // console.log('Node:'+JSON.stringify((evt.target).data(), null, 4))
      });

      cy?.on('cxttap ', 'edge', function(evt:any){
        setEdgeElement(evt.target.data())
        handleOpenEdgeModal()
        // console.log('Edge:'+JSON.stringify((evt.target).data(), null, 4))
      });

      cy?.on('cxttap', function(evt:any){
        // target holds a reference to the originator
        // of the event (core or element)
        var evtTarget = evt.target;
        if( evtTarget === cy ){
          handleOpenChartOptionsModal()
          // console.log('tap on background');
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
      <div ref={containerRef} style={{ width: 'calc(100vw - 18rem)', height: '86vh' }} />
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



