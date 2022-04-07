
import { FormEvent, useContext, useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { CytoscapeContext } from '../../CytoscapeContext';
import { Container } from './styles';



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
  const [reliability, setReliability ] = useState(Number)
  const [delay, setDelay ] = useState(Number)
  

 
    
  useEffect(() => {
    if(edge){
      console.log('edge',edge);
      
    
      setId(edge.id)
      setSource(edge.source)
      setTarget(edge.target)
      setNegative(edge.negative)
      setWeight(edge.weight)
      setReliability(edge.reliability)
      setDelay(edge.delay)
    }
  },[edge])

  


  function EditElements(event:FormEvent) {
    event.preventDefault();
    console.log('EditElements');



    cy.$(`#${id}`)
    .data('source', source)
    .data('target', target)
    .data('negative', negative)
    .data('weight', weight)
    .data('Reliability', reliability)
    .data('Delay', delay)

    toast.success('Edge modified with success!');
 
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
              type="string" name="source" 
              id="source" 
              placeholder={source}
            />
          </div>
          <div>
            <p>target</p>
            <input 
              onChange={
                event =>setTarget(event.target.value)
                } 
              type="string" name="target" id="target" 
              placeholder={target}
            />
          </div>
          <div>
            <p>negative</p>
            <input 
              onChange={
                event =>setNegative(Number(event.target.value))  
                } 
              type="number" name="negative" id='negative' 
              placeholder={String(negative)}
            />
          </div>
          <div>
            <p>weight</p>
            <input 
              onChange={
                event =>setWeight(Number(event.target.value))  
              } 
              type="number" name="weight" id='weight'
              placeholder={String(weight)}
            
            />
          </div>
          <div>
            <p>Reliability</p>
            <input 
              onChange={
                event =>setReliability(Number(event.target.value))  
              } 
              type="number" name="Reliability" id='Reliability' 
              placeholder={String(reliability)}
            />
          </div>
          <div>
            <p>Delay</p>
            <input 
              onChange={
                event =>setDelay(Number(event.target.value))  
              } 
              type="number" name="Delay" id='Delay' 
              placeholder={String(delay)}
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