import { lazy, Suspense, useContext, useEffect, useRef, useState } from 'react';
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';
import { BiGitPullRequest, BiRedo, BiUndo } from 'react-icons/bi';
import { BsGear, BsLayoutWtf } from 'react-icons/bs';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { RiChatDeleteLine } from 'react-icons/ri';
import Modal from 'react-modal';
import { StartGraph } from '../../../../components/startGraph';
import { CytoscapeContext } from '../../../../CytoscapeContext';
import { Container, GraphContainer, NavOptions } from "./styles";


// import { SetupModal } from '../SetupModal';
const SetupModal = lazy((): Promise<any> =>  import('../../../../components/SetupModal'));


  

Modal.setAppElement('#root')

export function GraphArea({setRequest}:any){
  const [cy] = useContext<cytoscape.Core[]>(CytoscapeContext);
  const [element, setElement] = useState({} as any)
  const [isSetupModal, setIsSetupModal] = useState(false);
  const [spacingFactorElements, setSpacingFactorElements] = useState(3) // devido o maxZoom ser 3 é recomendado começarmos com 3
  const hiddenFileRequestInput = useRef<any>(null); 
  const layouts = [
    {
      name: "preset",
      spacingFactor: 1.5,
      fit: true
    },
    {
      name: "preset",
      spacingFactor: 0.5,
      fit: true
    },
    {
      name: "concentric",
      minNodeSpacing: 12,
      fit: true
    },
    {
      name:'circle',
      fit: true
    },
    {
      name:'random',
      fit: true
    },
    {
      name:'cose',
      fit: true
    },
    {
      name:'grid',
      fit: true
    },
    {
      name:'breadthfirst',
      fit: true
  }]
  var count = 0

  useEffect( () => {

    cy?.on('tap', (event: any) => {
      console.log('data->', event.target._private.data)
      console.log('all->', event.target._private)
      setElement(event.target._private.data)
    });

  },[cy])


  function handleOpenSetupModal(){
    setIsSetupModal(true)
  }

  function handleCloseSetupModal(){
    setIsSetupModal(false)
  }
  
  function handleChangeZoomLevel(level: number) {

    const newSpacing = cy?.zoom() +(level)
    // setSpacingFactorElements(newSpacing)

    cy?.zoom(newSpacing);
  }

  function handleChangeSpacingFactor(spacing: number){
    
    cy?.layout({
      name: "preset",
      spacingFactor: spacing,
      fit: true
    }).run()
  }

  function AddEle(){
    try {
      cy.add({
        // group: 'nodes',
        data: {
          "Country": "Hungary",
          "domain": 0,
          "label": "0",
          "name": "0",
          "pos": [
            19.03991,
            47.49801
          ],
          "region": 0,
          "type": "t",
          "value": 0,
          "weight": 0
          },
        position: { x: 400, y: 100 },
      });
   }
   catch (e) {
      console.log('error not AddEle');
   }
  }

  function DelEle(){
    try {
      var ele = cy.$('#'+element.id);
      cy.remove( ele );
    }
    catch (e) {
      console.log('error');
    }
  }

  function handleUploadRequestJSON(file:any){ 
    const reader = new FileReader();
    reader.onload = function(e: any) {
      // console.log(JSON.parse(e.target.result));
      setRequest(JSON.parse(e.target.result)); 
    };
    try {
      reader.readAsText(file.target.files[0]);
    } catch (error) {
      console.log(error,'reader');
    }
  };

  function handleClick (){
    hiddenFileRequestInput.current.click();
  };

  function handleChangeLayout() {
    cy?.layout(layouts[count]).run();
    count = (count+1)%layouts.length
  }
   

  return(
    <Container>
      {/*------ uper options graph buttons --------- */}
      <NavOptions>
        <ul>
          <li className="tooltip">   
             <AiOutlineZoomIn fontSize="1.5em"  onClick={()=>handleChangeZoomLevel(+.1)} /> 
             <AiOutlineZoomOut fontSize="1.5em" onClick={()=>handleChangeZoomLevel(-.1)} /> 
          <span className="tooltiptext">Drag zoom in or zoom out</span> 
          </li>

          <li className="tooltip">
             <BiUndo fontSize="1.5em" onClick={()=>{handleChangeSpacingFactor(1.1)}}/>   
             <BiRedo fontSize="1.5em" onClick={()=>{handleChangeSpacingFactor(0.9)}}/>   
            <span className="tooltiptext">Undo and Redo in elements Graph</span> 
          </li>

          <li className="tooltip"> 
             <HiOutlineViewGridAdd fontSize="1.5em" cursor="pointer" onClick={AddEle}/>
             <RiChatDeleteLine fontSize="1.5em" cursor="pointer" onClick={DelEle} />  
            <span className="tooltiptext">Add or remove element graph</span> 
          </li>
          
          <li className="tooltip"> 
            <input type="file" name="UploadJSON" id="UploadJSON" ref={hiddenFileRequestInput} onChange={handleUploadRequestJSON} />
            <BiGitPullRequest fontSize="1.5em"  cursor="pointer"  onClick={handleClick} />
            <span className="tooltiptext">Upload archive json from requests</span> 
          </li>

          <li className="tooltip">   
            <BsGear fontSize="1.5em" cursor="pointer" onClick={handleOpenSetupModal}  /> 
          <span className="tooltiptext">Open setup modal</span> 
          </li>
        
          <li className="tooltip">   
            <BsLayoutWtf fontSize="1.5em" cursor="pointer" onClick={handleChangeLayout}  /> 
          <span className="tooltiptext">Change layout</span> 
          </li>
          
          <li className="tooltip">  
            <FiPlayCircle color="#228f41" fontSize="1.5em" cursor="not-allowed" /> 
          <span className="tooltiptext">Run ??</span> 
          </li>
        
        </ul>
      </NavOptions>
      
      {/*------ StartGraph (GraphContainer / UploadGraph) --------- */}
      <GraphContainer>
        <StartGraph />
      </GraphContainer>
    
      {/*------ SetupModal --------- */}
      <Suspense fallback={<div>Loading...</div>}>
        < SetupModal 
          isOpen={isSetupModal}
          onRequestClose={handleCloseSetupModal}
          />
      </Suspense>
      
    </Container>
  )
}