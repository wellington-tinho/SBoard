import { useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc'
import Modal from 'react-modal';


import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

interface virtualNodeDemandInterface{
  id: number;
  requested: number;
  vnr_id: number;
  domain: number;
  region: number;
  type: number | string; 
  period: number;
  sink: number;
}

interface requestUnicInterface {
  id: number;
  vnd: virtualNodeDemandInterface[];
  links: [[number]];
  created: number;  
  duration: number;
  period: number;
  bandwidth: number;
  delay: number;
  reliability: number;
  type_slice: string;
}

interface ChangeRequestsModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
  requestUnic: requestUnicInterface,
  setRequestUnic: React.Dispatch<React.SetStateAction<requestUnicInterface>>,
  
}

export function ChangeRequestsModal({isOpen, onRequestClose, requestUnic, setRequestUnic}: ChangeRequestsModalProps){

  const [bandwidth , setbandwidth] =    useState<requestUnicInterface["bandwidth"]>     ({} as requestUnicInterface["bandwidth"])
  const [created , setCreated] =        useState<requestUnicInterface["created"]>       ({} as requestUnicInterface["created"])
  const [delay , setDelay] =            useState<requestUnicInterface["delay"]>         ({} as requestUnicInterface["delay"])
  const [duration , setDuration] =      useState<requestUnicInterface["duration"]>      ({} as requestUnicInterface["duration"])
  const [links , setLinks] =            useState<requestUnicInterface["links"]>         ({} as requestUnicInterface["links"])
  const [period , setPeriod] =          useState<requestUnicInterface["period"]>        ({} as requestUnicInterface["period"])
  const [reliability , setReliability]= useState<requestUnicInterface["reliability"]>   ({} as requestUnicInterface["reliability"])
  const [type_slice , setType_slice] =  useState<requestUnicInterface["type_slice"]>    ({} as requestUnicInterface["type_slice"])
  const [vnd , setVnd] =                useState<requestUnicInterface["vnd"]>           ({} as requestUnicInterface["vnd"])


  useEffect(() => {
    setbandwidth(requestUnic["bandwidth"] )
    setCreated(requestUnic["created"] )
    setDelay(requestUnic["delay"] )
    setDuration(requestUnic["duration"] )
    setLinks(requestUnic["links"] )
    setPeriod(requestUnic["period"] )
    setReliability(requestUnic["reliability"] )
    setType_slice(requestUnic["type_slice"] )
    setVnd(requestUnic["vnd"] )
  },[requestUnic])
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >

      <Container onSubmit={()=>{}}>
        <VscChromeClose  onClick={onRequestClose} className='react-modal-close' />
        <h2>ChangeRequestsModalProps</h2>

      
        <div>
         
          <div>
            <p>Bandwidth</p>
            <input 
              onChange={
                event =>setbandwidth(+event.target.value)
              }
              type="number" name="Bandwidth" 
              id="Bandwidth" 
              placeholder={String(bandwidth)}
            />
          </div>
         
          {/* <div>
            <p>Delay</p>
            <input 
              onChange={
                event =>setDelay(Number(event.target.value))  
              } 
              type="number" name="Delay" id='Delay' 
              placeholder={String(delay)}
            />
          </div> */}

         
      
          <button  type="submit">
            Salvar alterações
          </button >


        </div>
        {/* 
        bandwidth: 14
        created: 0
        delay: 82
        duration: 5
        id: 3
        links: (10) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
        period: 1
        reliability: 97
        type_slice: "urllc"
        vnd: {0: {…}, 1: {…}, 2: {…}, 3: {…}, 4: {…}, 5: {…}, 6: {…}} */}

      
      </Container>
    </Modal>
  );
}