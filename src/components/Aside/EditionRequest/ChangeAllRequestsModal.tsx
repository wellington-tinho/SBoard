import { FormEvent, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { generatesRandomBetweenRange } from '../../../util/randomNumber';



export const Container = styled.form`
  background-color: var(--white-2);
  
  h2 {
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
interface ChangeAllRequestsModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
  changedRequests: requestUnicInterface[];
  requestList: requestUnicInterface[] | any,
  setRequestList: React.Dispatch<React.SetStateAction<requestUnicInterface[]>>,
}

export function ChangeAllRequestsModal({isOpen, onRequestClose, changedRequests,requestList,setRequestList}: ChangeAllRequestsModalProps){
  
  const [created , setCreated] =        useState<requestUnicInterface["created"]>       ()
  const [duration , setDuration] =      useState<requestUnicInterface["duration"]>      ()
  const [period , setPeriod] =          useState<requestUnicInterface["period"]>        ()
  const [type_slice , setType_slice] =  useState<requestUnicInterface["type_slice"]>    ()
  
  const [links , setLinks] =            useState<requestUnicInterface["links"]>         ()
  const [vnd , setVnd] =                useState<requestUnicInterface["vnd"]>           ()
  
  const [delayStart, setDelayStart] =        useState<requestUnicInterface["delay"]>         ()
  const [delayEnd , setDelayEnd] =           useState<requestUnicInterface["delay"]>         ()
  
  const [bandwidthStart, setBandwidthStart]= useState<requestUnicInterface["bandwidth"]>     ()
  const [bandwidthEnd, setBandwidthEnd] =    useState<requestUnicInterface["bandwidth"]>     ()
  
  const [reliabilityStart, setReliabilityStart]=useState<requestUnicInterface["reliability"]>()
  const [reliabilityEnd, setReliabilityEnd ] =  useState<requestUnicInterface["reliability"]>()
 

  function SalveChange(event:FormEvent){
    event.preventDefault();


    var updatedRequestList = {...requestList}
    
  
      
    for  (var i in changedRequests){
      var request = changedRequests[i]
    
       created ?  updatedRequestList[request.id].created = created: console.log(); //tirar console/log e colocar alguma condiçao igual ao "pass" em python
       duration ?  updatedRequestList[request.id].duration = duration: console.log(); //tirar console/log e colocar alguma condiçao igual ao "pass" em python
       period ?  updatedRequestList[request.id].period = period: console.log(); //tirar console/log e colocar alguma condiçao igual ao "pass" em python
       type_slice ?  updatedRequestList[request.id].type_slice = type_slice: console.log(); //tirar console/log e colocar alguma condiçao igual ao "pass" em python
       links ?  updatedRequestList[request.id].links = links: console.log(); //tirar console/log e colocar alguma condiçao igual ao "pass" em python
       vnd ?  updatedRequestList[request.id].vnd = vnd: console.log(); //tirar console/log e colocar alguma condiçao igual ao "pass" em python
       (reliabilityStart && reliabilityEnd) ?  updatedRequestList[request.id].delay = Number(generatesRandomBetweenRange(reliabilityStart, reliabilityEnd)) : console.log(); //tirar console/log e colocar alguma condiçao igual ao "pass" em python
       (bandwidthStart && bandwidthEnd) ?  updatedRequestList[request.id].bandwidth = Number(generatesRandomBetweenRange(bandwidthStart, bandwidthEnd)) : console.log(); //tirar console/log e colocar alguma condiçao igual ao "pass" em python
       (delayStart && delayEnd) ?  updatedRequestList[request.id].reliability = Number(generatesRandomBetweenRange(delayStart, delayEnd)) : console.log(); //tirar console/log e colocar alguma condiçao igual ao "pass" em python
    }
    
    
    setRequestList(updatedRequestList)


    toast.success('Request modified with success!')
    
  }
;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >

      <Container onSubmit={SalveChange}>
        <VscChromeClose  onClick={onRequestClose} className='react-modal-close' />
        <h2>Change All Requests Modal </h2>

        <h3>Altered elements {Object.keys(changedRequests).length}</h3>

        <div>
         
          <div>
            <p>ID</p>
            <input 
              onChange={
                ()=>{}
              }
              type="number" name='ID'
              id='ID'
              placeholder={"Insira aqui um valor para todos requests"}
              disabled
            />
          </div>
         
          <div>
            <p>created</p>
            <input 
              onChange={
                event => event.target.value === '' ? setCreated(undefined) : setCreated(Number(event.target.value))
              }
              type="number" name='created'
              id='created'
              placeholder={"Insira aqui um valor para todos requests"}
            />
          </div>
         
          <div>
            <p>duration</p>
            <input 
              onChange={
                event => event.target.value === '' ? setDuration(undefined) : setDuration(+event.target.value)
              }
              type="number" name='duration'
              id='duration'
              placeholder={"Insira aqui um valor para todos requests"}
            />
          </div>

          <div>
            <p>period</p>
            <input 
              onChange={
                event => event.target.value === '' ? setPeriod(undefined) : setPeriod(+event.target.value)
              }
              type="number" name='period'
              id='period'
              placeholder={"Insira aqui um valor para todos requests"}
            />
          </div>

          <div>
            <p>type_slice</p>
            <input 
              onChange={
                event => event.target.value === '' ? setType_slice(undefined) : setType_slice(event.target.value)
              }
              type="string" name='type_slice'
              id='type_slice'
              placeholder={"Insira aqui um valor para todos requests"}
            />
          </div>

          <div>
            <p>delay</p>
            <div className="tooltip">
              <input
                onChange={
                  event =>{ event.target.value === '' ?  setDelayStart(undefined) : setDelayStart(+event.target.value) }
                }
                max={delayEnd}
                type="number" name='delayStart'
                id='delayStart'
                placeholder={"Insira aqui um valor para todos requests"}
              />
             <input 
                onChange={
                  event =>{ event.target.value === '' ?  setDelayEnd(undefined) : setDelayEnd(+event.target.value) }
                }
                min={delayStart}
                type="number" name='delayEnd'
                id='delayEnd'
                placeholder={"Insira aqui um valor para todos requests"}
              />
              <span className="tooltiptext"> Insert a number from start to end, to generate a random number between them.</span>
            </div>
          </div>
                
        

          <div>
            <p>Reliability</p>
            <div className="tooltip">
              <input 
                onChange={
                  event =>{ event.target.value === '' ?  setReliabilityStart(undefined) : setReliabilityStart(Number(event.target.value))}
                  }
                max={reliabilityEnd} 
                type="number" name="ReliabilityStart" 
                id="RealityStart"	 
                placeholder={"Insira aqui um valor para todos requests"}
              />
 
              <input 
                onChange={
                  event => event.target.value === '' ? setReliabilityEnd(undefined) : setReliabilityEnd(Number(event.target.value))
                  } 
                min={reliabilityStart}
                type="number" name="ReliabilityEnd" 
                id="RealityEnd"	 
                placeholder={"Insira aqui um valor para todos requests"}
              />
              <span className="tooltiptext">Insert a number from start to end, to generate a random number between them.</span>

            </div>
          </div>

          <div>
            <p>Bandwidth</p>
            <div className="tooltip">
              <input onChange={ 
                  event=> event.target.value === '' ? setBandwidthStart(undefined) : setBandwidthStart(Number(event.target.value))
                }
                max={bandwidthEnd}
                type="number" name="BandwidthStart"
                id="BandwidthStart"
                placeholder={"Insira aqui um valor para todos requests"}
              />

              <input onChange={
                  event=> event.target.value === '' ? setBandwidthEnd(undefined) : setBandwidthEnd(Number(event.target.value))
                }
                min={bandwidthStart}
                type="number" name="BandwidthEnd"
                id="BandwidthEnd"
                placeholder={"Insira aqui um valor para todos requests"}
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
      </Container>
    </Modal>
  );
}