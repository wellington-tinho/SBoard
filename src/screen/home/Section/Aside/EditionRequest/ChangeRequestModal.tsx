import { FormEvent, useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { generatesRandomBetweenRange } from '../../../../../util/randomNumber';



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
        border: 1px solid var(--gray-1);
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
        background: var(--white-2-1);
        border: 1px solid var(--gray-1);
        /* font-weight: 400; */
        font-size: 1rem;
      }
      div{
         width: 100%;

         input{

          width: 100%;
          padding: 0 1rem;
          height: 3rem;
          border-radius: 0.25rem;
          background: var(--white-2-1);
          border: 1px solid var(--gray-1);
          /* font-weight: 400; */
          font-size: 1rem;
        }
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

  const [created , setCreated] =        useState<requestUnicInterface["created"]>       ({} as requestUnicInterface["created"])
  const [duration , setDuration] =      useState<requestUnicInterface["duration"]>      ({} as requestUnicInterface["duration"])
  const [period , setPeriod] =          useState<requestUnicInterface["period"]>        ({} as requestUnicInterface["period"])
  const [type_slice , setType_slice] =  useState<requestUnicInterface["type_slice"]>    ({} as requestUnicInterface["type_slice"])
  
  const [links , setLinks] =            useState<requestUnicInterface["links"]>         ({} as requestUnicInterface["links"])
  const [vnd , setVnd] =                useState<requestUnicInterface["vnd"]>           ({} as requestUnicInterface["vnd"])
  
  const [delayStart, setDelayStart] =        useState<requestUnicInterface["delay"]>         ({} as requestUnicInterface["delay"])
  const [delayEnd , setDelayEnd] =           useState<requestUnicInterface["delay"]>         ({} as requestUnicInterface["delay"])
  
  const [bandwidthStart, setBandwidthStart]= useState<requestUnicInterface["bandwidth"]>     ({} as requestUnicInterface["bandwidth"])
  const [bandwidthEnd, setBandwidthEnd] =    useState<requestUnicInterface["bandwidth"]>     ({} as requestUnicInterface["bandwidth"])
  
  const [reliabilityStart, setReliabilityStart]=useState<requestUnicInterface["reliability"]>({} as requestUnicInterface["reliability"])
  const [reliabilityEnd, setReliabilityEnd ] =  useState<requestUnicInterface["reliability"]>({} as requestUnicInterface["reliability"])


  useEffect(() => {
    setBandwidthStart(requestUnic["bandwidth"] )
    setBandwidthEnd(requestUnic["bandwidth"] )
    setCreated(requestUnic["created"] )
    setDelayStart(requestUnic["delay"] )
    setDelayEnd(requestUnic["delay"] )
    setDuration(requestUnic["duration"] )
    setPeriod(requestUnic["period"] )
    setReliabilityStart(requestUnic["reliability"] )
    setReliabilityEnd(requestUnic["reliability"] )
    setType_slice(requestUnic["type_slice"] )
    setLinks(requestUnic["links"] )
    setVnd(requestUnic["vnd"] )
  },[requestUnic])
  

  // vnd.map((index)=>{console.log(index)})

  function SalveChange(event:FormEvent){
    event.preventDefault();

    const newRequestUnicModified : requestUnicInterface = {  
      id: requestUnic.id,   
      vnd: vnd,
      links: links,
      created: created,
      duration: duration,
      period: period,
      reliability: ((reliabilityStart && reliabilityEnd) !== requestUnic["reliability"]  )  ? Number(generatesRandomBetweenRange(reliabilityStart, reliabilityEnd)) : requestUnic["reliability"],
      bandwidth: ((bandwidthStart && bandwidthEnd)       !== requestUnic["bandwidth"]  )    ? Number(generatesRandomBetweenRange(bandwidthStart, bandwidthEnd))     : requestUnic["bandwidth"],
      delay:    ((delayStart && delayEnd)                !== requestUnic["delay"]  )        ? Number(generatesRandomBetweenRange(delayStart, delayEnd))             : requestUnic["delay"],
      type_slice: type_slice  
    }

    setRequestUnic(newRequestUnicModified)


    toast.success('Request modified with success!')
    
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >

      <Container onSubmit={SalveChange}>
        <VscChromeClose  onClick={onRequestClose} className='react-modal-close' />
        <h2>Change Requests ModalProps</h2>

      
        <div>
         
       
         
          <div>
            <p>ID</p>
            <input 
              onChange={
                ()=>{}
              }
              type="number" name='ID'
              id='ID'
              placeholder={String(requestUnic.id)}
              disabled
            />
          </div>
         
          <div>
            <p>created</p>
            <input 
              onChange={
                event => event.target.value === '' ?  setCreated(requestUnic['created']) : setCreated(+event.target.value)
              }
              
              type="number" name='created'
              id='created'
              placeholder={String(created)}
            />
          </div>
         
          <div>
            <p>duration</p>
            <input 
              onChange={
                event => event.target.value === '' ? setDuration(requestUnic['duration']) : setDuration(+event.target.value)
              }
              type="number" name='duration'
              id='duration'
              placeholder={String(duration)}
            />
          </div>

          <div>
            <p>period</p>
            <input 
              onChange={
                event => event.target.value === '' ? setPeriod(requestUnic['period']) : setPeriod(+event.target.value)
              }
              type="number" name='period'
              id='period'
              placeholder={String(period)}
            />
          </div>

          <div>
            <p>type_slice</p>
            <input 
              onChange={
                event => event.target.value === '' ? setType_slice(requestUnic['type_slice']) : setType_slice(event.target.value)
              }
              type="string" name='type_slice'
              id='type_slice'
              placeholder={String(type_slice)}
            />
          </div>

          <div>
            <p>delay</p>
            <div className="tooltip">
              <input
                onChange={
                  event =>{ event.target.value === '' ?  setDelayStart(requestUnic['delay']) : setDelayStart(+event.target.value) }
                }
                max={delayEnd}
                type="number" name='delayStart'
                id='delayStart'
                placeholder={String(delayStart)}
              />
             <input 
                onChange={
                  event =>{ event.target.value === '' ?  setDelayEnd(requestUnic['delay']) : setDelayEnd(+event.target.value) }
                }
                min={delayStart}
                type="number" name='delayEnd'
                id='delayEnd'
                placeholder={String(delayEnd)}
              />
              <span className="tooltiptext"> Insert a number from start to end, to generate a random number between them.</span>
            </div>
          </div>
                
        

          <div>
            <p>Reliability</p>
            <div className="tooltip">
              <input 
                onChange={
                  event =>{ event.target.value === '' ?  setReliabilityStart(requestUnic["reliability"]) : setReliabilityStart(Number(event.target.value))}
                  }
                max={reliabilityEnd} 
                type="number" name="ReliabilityStart" 
                id="RealityStart"	 
                placeholder={String(reliabilityStart)}
              />
 
              <input 
                onChange={
                  event => event.target.value === '' ? setReliabilityEnd(requestUnic["reliability"]) : setReliabilityEnd(Number(event.target.value))
                  } 
                min={reliabilityStart}
                type="number" name="ReliabilityEnd" 
                id="RealityEnd"	 
                placeholder={String(reliabilityEnd)}
              />
              <span className="tooltiptext">Insert a number from start to end, to generate a random number between them.</span>

            </div>
          </div>

          <div>
            <p>Bandwidth</p>
            <div className="tooltip">
              <input onChange={ 
                  event=> event.target.value === '' ? setBandwidthStart(requestUnic["bandwidth"]) : setBandwidthStart(Number(event.target.value))
                }
                max={bandwidthEnd}
                type="number" name="BandwidthStart"
                id="BandwidthStart"
                placeholder={String(bandwidthStart)}
              />

              <input onChange={
                  event=> event.target.value === '' ? setBandwidthEnd(requestUnic["bandwidth"]) : setBandwidthEnd(Number(event.target.value))
                }
                min={bandwidthStart}
                type="number" name="BandwidthEnd"
                id="BandwidthEnd"
                placeholder={String(bandwidthEnd)}
              />
            <span className="tooltiptext">Insert a number from start to end, to generate a random number between them.</span>
            </div>
          </div>


          {/* <div>
            <p>links</p>
            <input 
              // onChange={
              //   event =>setLinks(event.target.value)
              // }
              type="number" name='links'
              id='links'
              placeholder={String(links)}
            />
          </div> */}
         
          {/* <div className="vnd">
            <p>vnd</p>
            <input 
              // onChange={
              //   event =>setVnd(event.target.value)
              // }
              type="string" name='vnd'
              id='vnd'
              placeholder={String(vnd)}
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
        links: (10) [Array(2)
          , Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
        period: 1
        reliability: 97
        type_slice: "urllc"
        vnd: {0: {…}, 1: {…}, 2: {…}, 3: {…}, 4: {…}, 5: {…}, 6: {…}} */}

      
      </Container>
    </Modal>
  );
}