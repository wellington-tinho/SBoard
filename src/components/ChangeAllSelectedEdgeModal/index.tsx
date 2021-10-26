
import {FormEvent, useContext, useState} from 'react';
import Modal from 'react-modal';

import { VscChromeClose } from 'react-icons/vsc'
import { Container } from './styles';
import { CytoscapeContext } from '../../CytoscapeContext';



interface ChangeAllSelectedEdgeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  edges: any[]
}

export function ChangeAllSelectedEdgeModal({ isOpen, onRequestClose, edges }: ChangeAllSelectedEdgeModalProps) {
  const [cy] = useContext(CytoscapeContext);

  const [source, setSource ] = useState(String)
  const [target, setTarget ] = useState(String)
  const [negative, setNegative ] = useState<Number>()
  const [weight, setWeight ] = useState<Number>()
  const [bandwidth, setBandwidth ] = useState<Number>()
  const [Reliability, setReliability ] = useState<Number>()
  const [Delay, setDelay ] = useState<Number>()
  

 
    
  // useEffect(() => {
  //   if(edge){
  //     console.log('edge',edge);
      
    
  //     setId(edge.id)
  //     setSource(edge.source)
  //     setTarget(edge.target)
  //     setNegative(edge.negative)
  //     setWeight(edge.weight)
  //     setBandwidth(edge.Bandwidth)
  //     setReliability(edge.Reliability)
  //     setDelay(edge.Delay)
  //   }
  // },[edge])

  


  function EditElements(event:FormEvent) {
    event.preventDefault();


    alert(`
      source ${source} \n
      target ${target}  \n
      negative ${negative}  \n
      weight ${weight}  \n
      bandwidth ${bandwidth}  \n
      Reliability ${Reliability}  \n
      Delay ${Delay}  \n
    `)

    for(var i=1; i<edges.length; i++) {    
      cy.$(`#${edges[i]}`)
      .data('source',       source ?      source :       cy.$(`#${edges[i]}`).data('source') )
      .data('target',       target ?      target :       cy.$(`#${edges[i]}`).data('target') )
      .data('negative',     negative ?    negative :     cy.$(`#${edges[i]}`).data('negative') )
      .data('weight',       weight ?      weight :       cy.$(`#${edges[i]}`).data('weight') )
      .data('Bandwidth',    bandwidth ?   bandwidth :    cy.$(`#${edges[i]}`).data('Bandwidth') )
      .data('Reliability',  Reliability ? Reliability :  cy.$(`#${edges[i]}`).data('Reliability') )
      .data('Delay',        Delay ?       Delay :        cy.$(`#${edges[i]}`).data('Delay') )
    }
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
        <h2>Change Edges selectd</h2>

        <div>
         
          <div>
            <p>source</p>
            <input 
              onChange={
                event =>setSource(event.target.value)
              }
              type="string" name="Country" 
              id="Country" 
              placeholder={'Insira aqui um valor para alterar'}
            />
          </div>
          <div>
            <p>target</p>
            <input 
              onChange={
                event =>setTarget(event.target.value)
                } 
              type="string" name="domain" id="domain" 
              placeholder={'Insira aqui um valor para alterar'}
            />
          </div>
          <div>
            <p>negative</p>
            <input 
              onChange={
                event =>setNegative(Number(event.target.value))  
                } 
              type="number" name="label" id='label' 
              placeholder={'Insira aqui um valor para alterar.'}
            />
          </div>
          <div>
            <p>weight</p>
            <input 
              onChange={
                event =>setWeight(Number(event.target.value))  
              } 
              type="number" name="name" id='name'
              placeholder={'Insira aqui um valor para alterar.'}
            
            />
          </div>
          <div>
            <p>bandwidth</p>
            <input 
              onChange={
                event =>setBandwidth(Number(event.target.value))  
              } 
              type="number" name="region" id='region' 
              placeholder={'Insira aqui um valor para alterar.'}
            />
          </div>
          <div>
            <p>Reliability</p>
            <input 
              onChange={
                event =>setReliability(Number(event.target.value))  
              } 
              type="number" name="type" id='type' 
              placeholder={'Insira aqui um valor para alterar.'}
            />
          </div>
          <div>
            <p>Delay</p>
            <input 
              onChange={
                event =>setDelay(Number(event.target.value))  
              } 
              type="number" name="value" id='value' 
              placeholder={'Insira aqui um valor para alterar.'}
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