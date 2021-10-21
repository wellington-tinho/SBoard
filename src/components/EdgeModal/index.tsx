
import {FormEvent, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { VscChromeClose } from 'react-icons/vsc'
import { Container } from './styles';
import { CytoscapeContext } from '../../CytoscapeContext';



interface EdgeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  edge: any
}

export function EdgeModal({ isOpen, onRequestClose, edge }: EdgeModalProps) {
  const [cy] = useContext(CytoscapeContext);

  const [id, setId ] = useState(String)
  const [source, setSource ] = useState(String)
  const [target, setTarget ] = useState(String)
  const [negative, setNegative ] = useState(Number)
  const [weight, setWeight ] = useState(Number)
  const [bandwidth, setBandwidth ] = useState(Number)
  const [Reliability, setReliability ] = useState(Number)
  const [Delay, setDelay ] = useState(Number)
  

 
    
  useEffect(() => {
    if(edge){
      console.log('edge',edge);
      
    
      setId(edge.id)
      setSource(edge.source)
      setTarget(edge.target)
      setNegative(edge.negative)
      setWeight(edge.weight)
      setBandwidth(edge.Bandwidth)
      setReliability(edge.Reliability)
      setDelay(edge.Delay)
    }
  },[edge])

  


  function EditElements(event:FormEvent) {
    event.preventDefault();
    console.log('EditElements');


    alert(`
      id ${id}  \n
      source ${source} \n
      target ${target}  \n
      negative ${negative}  \n
      weight ${weight}  \n
      bandwidth ${bandwidth}  \n
      Reliability ${Reliability}  \n
      Delay ${Delay}  \n
    `)

    cy.$(`#${id}`)
    .data('source', source)
    .data('target', target)
    .data('negative', negative)
    .data('weight', weight)
    .data('Bandwidth', bandwidth)
    .data('Reliability', Reliability)
    .data('Delay', Delay)
 
  }

 

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >

      <Container onSubmit={EditElements}>
        <VscChromeClose  onClick={onRequestClose} className='react-modal-close' />
        <h2>Edge Data</h2>

        <div>
          <div>
            <p>id</p>
            <input 
              onChange={
                event =>setId(event.target.value)
              
                } 
              type="string" name="id" id='id' 
              placeholder={id}
              disabled 
            />
          </div>
          <div>
            <p>source</p>
            <input 
              onChange={
                event =>setSource(event.target.value)
              }
              type="string" name="Country" 
              id="Country" 
              placeholder={source}
            />
          </div>
          <div>
            <p>target</p>
            <input 
              onChange={
                event =>setTarget(event.target.value)
                } 
              type="string" name="domain" id="domain" 
              placeholder={target}
            />
          </div>
          <div>
            <p>negative</p>
            <input 
              onChange={
                event =>setNegative(Number(event.target.value))  
                } 
              type="number" name="label" id='label' 
              placeholder={String(negative)}
            />
          </div>
          <div>
            <p>weight</p>
            <input 
              onChange={
                event =>setWeight(Number(event.target.value))  
              } 
              type="number" name="name" id='name'
              placeholder={String(weight)}
            
            />
          </div>
          <div>
            <p>bandwidth</p>
            <input 
              onChange={
                event =>setBandwidth(Number(event.target.value))  
              } 
              type="number" name="region" id='region' 
              placeholder={String(bandwidth)}
            />
          </div>
          <div>
            <p>Reliability</p>
            <input 
              onChange={
                event =>setReliability(Number(event.target.value))  
              } 
              type="number" name="type" id='type' 
              placeholder={String(Reliability)}
            />
          </div>
          <div>
            <p>Delay</p>
            <input 
              onChange={
                event =>setDelay(Number(event.target.value))  
              } 
              type="number" name="value" id='value' 
              placeholder={String(Delay)}
            />
          </div>

         
      
          <button  type="submit">
            Salvar alterações
          </button >




        </div>
      </Container>
    </Modal>
  );
}