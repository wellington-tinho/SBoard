import Modal from 'react-modal';


import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'; 
import { BiUndo, BiRedo, BiGitPullRequest } from 'react-icons/bi'; 
import { HiOutlineViewGridAdd } from 'react-icons/hi'; 
import { BsGear } from 'react-icons/bs'  
import { FiPlayCircle } from 'react-icons/fi'  
import { RiChatDeleteLine } from 'react-icons/ri'  

import { Upload } from "../Upload"

import { NavOptions, GraphContainer, Container } from "./styles"
import { useContext, useEffect, useRef, useState } from 'react';
import { SetupModal } from '../SetupModal';
import { CytoscapeContext } from '../../CytoscapeContext';

  

Modal.setAppElement('#root')

export function GraphArea({setRequest}:any){
  const [cy] = useContext(CytoscapeContext);


  const [node, setNode] = useState({} as any)
  const [isSetupModal, setIsSetupModal] = useState(false);

  function handleOpenSetupModal(){
    setIsSetupModal(true)
  }

  function handleCloseSetupModal(){
    setIsSetupModal(false)
  }
  
  function AddEle(){
    try {
      cy.add({
        // group: 'nodes',
        data: { weight: Math.floor(Math.random() * 100) + 1 },
        position: { x: Math.floor(Math.random() * 300) + 1, y: Math.floor(Math.random() * 300) + 1}
      });
   }
   catch (e) {
      console.log('error');
   }
  }

  useEffect(() => {
    cy?.on('tap', (event: any) => {
      // console.log('data->', event.target._private.data)
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
  const handleClick = (event:any) => {
    hiddenFileInput.current.click();
  };



  return(
    <Container>
      <NavOptions>
        <ul>
          <li>Zoom</li>
          <li>   
             <AiOutlineZoomIn fontSize="1.5em" cursor="not-allowed"  /> 
             <AiOutlineZoomOut fontSize="1.5em" cursor="not-allowed" /> 
          </li>

          <li>
             <BiUndo fontSize="1.5em" cursor="not-allowed"/>   
             <BiRedo fontSize="1.5em" cursor="not-allowed"/>   
          </li>

          <li> 
             <HiOutlineViewGridAdd fontSize="1.5em" cursor="pointer" onClick={AddEle}/>
             <RiChatDeleteLine fontSize="1.5em" cursor="pointer" onClick={DelEle} />  
          </li>
          
          <li> 
            <input type="file" name="UploadJSON" id="UploadJSON" ref={hiddenFileInput} onChange={handleChange} />
            <BiGitPullRequest fontSize="1.5em"  cursor="pointer"  onClick={handleClick} /> 
          </li>

          <li>  <BsGear fontSize="1.5em" cursor="pointer" onClick={handleOpenSetupModal}/> </li>
          
          <li>  <FiPlayCircle color="#228f41" fontSize="1.5em" cursor="not-allowed"/> </li>
        
        </ul>
      </NavOptions>
      

      <GraphContainer>
          <Upload />
      </GraphContainer>

      < SetupModal 
        isOpen={isSetupModal}
        onRequestClose={handleCloseSetupModal}
      />
      
    </Container>
  )
}