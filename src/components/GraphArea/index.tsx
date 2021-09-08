import Modal from 'react-modal';


import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'; 
import { BiUndo, BiRedo, BiGitPullRequest } from 'react-icons/bi'; 
import { HiOutlineViewGridAdd } from 'react-icons/hi'; 
import { BsGear } from 'react-icons/bs'  
import { FiPlayCircle } from 'react-icons/fi'  
import { RiChatDeleteLine } from 'react-icons/ri'  

import { Upload } from "../Upload"

import { NavOptions, GraphContainer, Container } from "./styles"
import { useContext, useState } from 'react';
import { SetupModal } from '../SetupModal';
import { CytoscapeContext } from '../../CytoscapeContext';

  

Modal.setAppElement('#root')

export function GraphArea(){
  const [cy] = useContext(CytoscapeContext);
  
  
  const [isSetupModal, setIsSetupModal] = useState(false);

  function handleOpenSetupModal(){
    setIsSetupModal(true)
  }

  function handleCloseSetupModal(){
    setIsSetupModal(false)
  }

  function AddEle(){
    cy.add([
          { group: 'nodes', data: { id: 'k0' }, position: { x: 100, y: 100 } },
          { group: 'nodes', data: { id: 'k1' }, position: { x: 200, y: 200 } },
          { group: 'edges', data: { id: 'l0', source: 'k0', target: 'k1' } }
        ]);
  }


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
             <RiChatDeleteLine fontSize="1.5em" cursor="not-allowed" />  
          </li>
          
          <li>  <BiGitPullRequest fontSize="1.5em" cursor="not-allowed"/> </li>

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