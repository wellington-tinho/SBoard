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
  const [node, setNode] = useState({} as any)
  const [isSetupModal, setIsSetupModal] = useState(false);
  const layouts = ['circle','random','grid','cose','concentric','breadthfirst','cose']
  const [spacingFactorElements, setSpacingFactorElements] = useState(1)
  var count = 0


  function handleOpenSetupModal(){
    setIsSetupModal(true)
  }

  function handleCloseSetupModal(){
    setIsSetupModal(false)
  }
  
  function handleChangeSpacingFactor(spacing: number) {
    const newSpacing = spacingFactorElements +(spacing)
    setSpacingFactorElements(newSpacing)

    cy?.zoom(newSpacing);
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

  useEffect(() => {
    cy?.on('tap', (event: any) => {
      console.log('data->', event.target._private.data)
      console.log('all->', event.target._private)
      setNode(event.target._private.data)
    });
  },[cy])
  
  function DelEle(){
    try {
      var ele = cy.$('#'+node.id);
      cy.remove( ele );
    }
    catch (e) {
      console.log('error');
    }
  }


  function handleChange(file:any){ 
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

  const hiddenFileInput = useRef<any>(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  function handleChangeLayout() {
    cy?.layout(
      {
        name: layouts[count],
      }
    ).run();
    count = (count+1)%layouts.length
  }
   

  return(
    <Container>
      {/*------ uper options graph buttons --------- */}
      <NavOptions>
        <ul>
          <li className="tooltip">   
             <AiOutlineZoomIn fontSize="1.5em"  onClick={()=>handleChangeSpacingFactor(+.1)} /> 
             <AiOutlineZoomOut fontSize="1.5em" onClick={()=>handleChangeSpacingFactor(-.1)} /> 
          <span className="tooltiptext">Drag zoom in or zoom out</span> 
          </li>

          <li className="tooltip">
             <BiUndo fontSize="1.5em" onClick={()=>{}}/>   
             <BiRedo fontSize="1.5em" onClick={()=>{}}/>   
            <span className="tooltiptext">Undo and Redo in elements Graph</span> 
          </li>

          <li className="tooltip"> 
             <HiOutlineViewGridAdd fontSize="1.5em" cursor="pointer" onClick={AddEle}/>
             <RiChatDeleteLine fontSize="1.5em" cursor="pointer" onClick={DelEle} />  
            <span className="tooltiptext">Add or remove element graph</span> 
          </li>
          
          <li className="tooltip"> 
            <input type="file" name="UploadJSON" id="UploadJSON" ref={hiddenFileInput} onChange={handleChange} />
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