import { useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import styled from 'styled-components';



export const Container = styled.form`
  h2 {
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  div{
    /* border: 1px solid var(--background); */

    div{
      display: flex;

      & + div{
        margin-top: 1rem;
      }

      p{
        width: 62%;
        padding: 0 1rem;
        height: 3rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        /* font-weight: 400; */
        font-size: 1rem;
        display: flex;
        align-items: center;
      }
      input{
        width: 100%;
        padding: 0 1rem;
        height: 3rem;
        border-radius: 0.25rem;
        background: #e7e9ee;
        border: 1px solid #d7d7d7;
        /* font-weight: 400; */
        font-size: 1rem;
      }
    }

    button[type='submit']{
      width: 100%;
      padding: 0 1.5rem;
      height: 3.5rem;
      background: var(--green-3);
      color: var(--white-2);
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      transition: filter 0.2s;
      font-weight:600;
      
      :hover{
        filter: brightness(0.9);
      }
    }
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

  const [bandwidth , setBandwidth] =    useState<requestUnicInterface["bandwidth"]>     ({} as requestUnicInterface["bandwidth"])
  const [created , setCreated] =        useState<requestUnicInterface["created"]>       ({} as requestUnicInterface["created"])
  const [delay , setDelay] =            useState<requestUnicInterface["delay"]>         ({} as requestUnicInterface["delay"])
  const [duration , setDuration] =      useState<requestUnicInterface["duration"]>      ({} as requestUnicInterface["duration"])
  const [links , setLinks] =            useState<requestUnicInterface["links"]>         ({} as requestUnicInterface["links"])
  const [period , setPeriod] =          useState<requestUnicInterface["period"]>        ({} as requestUnicInterface["period"])
  const [reliability , setReliability]= useState<requestUnicInterface["reliability"]>   ({} as requestUnicInterface["reliability"])
  const [type_slice , setType_slice] =  useState<requestUnicInterface["type_slice"]>    ({} as requestUnicInterface["type_slice"])
  const [vnd , setVnd] =                useState<requestUnicInterface["vnd"]>           ({} as requestUnicInterface["vnd"])


  useEffect(() => {
    setBandwidth(requestUnic["bandwidth"] )
    setCreated(requestUnic["created"] )
    setDelay(requestUnic["delay"] )
    setDuration(requestUnic["duration"] )
    setLinks(requestUnic["links"] )
    setPeriod(requestUnic["period"] )
    setReliability(requestUnic["reliability"] )
    setType_slice(requestUnic["type_slice"] )
    setVnd(requestUnic["vnd"] )
  },[requestUnic])
  

  // vnd.map((index)=>{console.log(index)})


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
            <p>bandwidth</p>
            <input 
              onChange={
                event =>setBandwidth(+event.target.value)
              }
              type="number" name="Bandwidth" 
              id="Bandwidth" 
              placeholder={String(bandwidth)}
            />
          </div>
         
          <div>
            <p>created</p>
            <input 
              onChange={
                event =>setBandwidth(+event.target.value)
              }
              type="number" name="Bandwidth" 
              id="Bandwidth" 
              placeholder={String(created)}
            />
          </div>
         
          <div>
            <p>delay</p>
            <input 
              onChange={
                event =>setBandwidth(+event.target.value)
              }
              type="number" name="Bandwidth" 
              id="Bandwidth" 
              placeholder={String(delay)}
            />
          </div>
         
          <div>
            <p>duration</p>
            <input 
              onChange={
                event =>setBandwidth(+event.target.value)
              }
              type="number" name="Bandwidth" 
              id="Bandwidth" 
              placeholder={String(duration)}
            />
          </div>
         
          <div>
            <p>links</p>
            <input 
              onChange={
                event =>setBandwidth(+event.target.value)
              }
              type="number" name="Bandwidth" 
              id="Bandwidth" 
              placeholder={String(links)}
            />
          </div>
         
          <div>
            <p>period</p>
            <input 
              onChange={
                event =>setBandwidth(+event.target.value)
              }
              type="number" name="Bandwidth" 
              id="Bandwidth" 
              placeholder={String(period)}
            />
          </div>
         
          <div>
            <p>reliability</p>
            <input 
              onChange={
                event =>setBandwidth(+event.target.value)
              }
              type="number" name="Bandwidth" 
              id="Bandwidth" 
              placeholder={String(reliability)}
            />
          </div>
         
          <div>
            <p>type_slice</p>
            <input 
              onChange={
                event =>setBandwidth(+event.target.value)
              }
              type="number" name="Bandwidth" 
              id="Bandwidth" 
              placeholder={String(type_slice)}
            />
          </div>
         
          <div className="vnd">
            <p>vnd</p>
            <input 
              onChange={
                event =>setBandwidth(+event.target.value)
              }
              type="number" name="Bandwidth" 
              id="Bandwidth" 
              placeholder={String(vnd)}
            />
          </div>
        
             
         
      
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