import Modal from 'react-modal';


import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'; 
import { BiUndo, BiRedo, BiGitPullRequest } from 'react-icons/bi'; 
import { HiOutlineViewGridAdd } from 'react-icons/hi'; 
import { BsGear } from 'react-icons/bs'  
import { FiPlayCircle } from 'react-icons/fi'  
import { RiChatDeleteLine } from 'react-icons/ri'  

import { Upload } from "../Upload"

import { NavOptions, GraphContainer, Container } from "./styles"
import { useState } from 'react';
import { SetupModal } from '../SetupModal';

  

Modal.setAppElement('#root')

export function GraphArea(){
  const [isSetupModal, setIsSetupModal] = useState(false);

  function handleOpenSetupModal(){
    setIsSetupModal(true)
  }

  function handleCloseSetupModal(){
    setIsSetupModal(false)
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
             <HiOutlineViewGridAdd fontSize="1.5em" cursor="pointer" onClick={()=>{}}/>
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