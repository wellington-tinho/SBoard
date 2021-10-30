
import {useContext, useEffect, useRef, useState   } from 'react';
import Modal from 'react-modal';

import { VscChromeClose } from 'react-icons/vsc'
import { Container } from './styles';
import { CytoscapeContext } from '../../CytoscapeContext';
// import { GraphManipulation } from '../Gra  phManipulation';



interface ChartOptionsProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ChartOptions({ isOpen, onRequestClose }: ChartOptionsProps) {
  const [cy] = useContext(CytoscapeContext);
  const [graphInported, setGraphInported]= useState<any>()
  const containerRef = useRef(null);


  


  // const [fileDownloadUrl,setFileDownloadUrl] = useState<any>(); // Step 4

  function ExportGraph(){
    var a = document.createElement("a");
    document.body.appendChild(a);
    
    var json = JSON.stringify(cy.json()),
    blob = new Blob([json], {type: "octet/stream"}),
    url = window.URL.createObjectURL(blob);
    // a.style = "display: none";
    a.setAttribute('style', 'display: none;');
    a.href = url;
    a.download = 'Sboard_Dataset.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  function InportGraph(file:any){ 
    const reader = new FileReader();
    reader.onload = function(e: any) {
      setGraphInported(JSON.parse(e.target.result)) 
    };
    reader.readAsText(file.target.files[0]);
  };
  

  const hiddenFileInput = useRef<any>(null);
  const handleClick = (event:any) => {
      hiddenFileInput.current.click();
  };


  useEffect(() => { 
    if (graphInported) {
      
      console.log('----->',graphInported);
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
                    ' weight:'+ ele.data().weight +
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
          elements:graphInported.elements,
          minZoom: 0.1,
          maxZoom:3,
          zoomFactor: 0.05, // zoom factor per zoom tick
          zoomDelay: 45 // how many ms between zoom ticks
        };
      cy.json(config)
      
    }
    
    
  },[cy, graphInported])
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >

      <Container >
        <VscChromeClose  onClick={onRequestClose} className='react-modal-close' />
        <h2>Chart Options</h2>
        <h3>Em contruçao</h3>

        
          
       

        <button  onClick={()=>{cy.destroy();}}>
          Clear graph
        </button >

        <button  onClick={ExportGraph}>
          Export Graph
        </button >

        <button  onClick={handleClick}>
          <input  type='file' name="UploadDataset" id="UploadDataset" ref={hiddenFileInput} onChange={InportGraph} />

          Import New Graph
        </button >

        <button  onClick={()=>{console.log('Others')}}>
          Others
        </button >

        {/* {graphInported && (
         
            <GraphManipulation grapJSON={graphInported.elements} />
        
        )} */}
      </Container>
    </Modal>
  );
}