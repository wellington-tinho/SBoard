
import {FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import { VscChromeClose } from 'react-icons/vsc'
import { Container } from './styles';
import { CytoscapeContext } from '../../CytoscapeContext';



interface NodeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  node: any
}

export function NodeModal({ isOpen, onRequestClose, node }: NodeModalProps) {
  // const [cy] = useContext(CytoscapeContext);
  // const [weight, setWeight] =  useState(node?.weight);
  const [country, setCountry ] = useState(String)
  const [domain, setDomain ] = useState(Number)
  const [id, setId ] = useState(String)
  const [label, setLabel ] = useState(String)
  const [name, setName ] = useState(String)
  const [region, setRegion ] = useState(Number)
  const [type, setType ] = useState(String)
  const [value, setValue ] = useState(Number)
  const [pos, setPos ] = useState<number[]>()
  const [weight, setWeight ] = useState(Number)
    
  

  


  function EditElements(event:FormEvent) {
  event.preventDefault();
   alert(`country ${String(country)} \n
         domain ${domain}  \n
         id ${id}  \n
         label ${label}  \n
         name ${name}  \n
         region ${region}  \n
         type ${type}  \n
         value ${value}  \n
         pos ${pos}  \n
         weight ${weight} 
        `)
   console.log(node);
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
        <h2>Node Data</h2>

        <div>
          <div>
            <p>Country</p>
            <input 
              onChange={
                event =>{
                    if (event.target.value === ''){
                      setCountry(node?.Country)
                    }
                    setCountry(event.target.value)
                  }
                } 
              type="string" name="Country" 
              id="Country" 
              placeholder={node?.Country}
            />
          </div>
          <div>
            <p>domain</p>
            <input 
              onChange={
                event =>{
                    if (event.target.value === ''){
                      setDomain(node?.domain)
                    }
                    console.log(event.target.value);
                    setDomain(Number(event.target.value))
                  }
                } 
              type="number" name="domain" id="domain" 
              placeholder={node?.domain}
            />
          </div>
          <div>
            <p>id</p>
            <input 
              onChange={
                event =>{
                    if (event.target.value === ''){
                      setId(node?.id)
                    }
                    console.log(event.target.value);
                    setId(event.target.value)
                  }
                } 
              type="string" name="id" id='id' 
              placeholder={node?.id}
            />
          </div>
          <div>
            <p>label</p>
            <input 
              onChange={
                event =>{
                    if (event.target.value === ''){
                      setLabel(node?.label)
                    }
                    console.log(event.target.value);
                    setLabel(event.target.value)
                  }
                } 
              type="string" name="label" id='label' 
              placeholder={node?.label}
            />
          </div>
          <div>
            <p>name</p>
            <input 
              onChange={
                event =>{
                    if (event.target.value === ''){
                      setName(node?.name)
                    }
                    console.log(event.target.value);
                    setName(event.target.value)
                  }
                } 
              type="string" name="name" id='name'
              placeholder={node?.name}
            
            />
          </div>
          <div>
            <p>region</p>
            <input 
              onChange={
                event =>{
                    if (event.target.value === ''){
                      setRegion(node?.region)
                    }
                    console.log(event.target.value);
                    setRegion(Number(event.target.value))
                  }
                } 
              type="number" name="region" id='region' 
              placeholder={node?.region}
            />
          </div>
          <div>
            <p>type</p>
            <input 
              onChange={
                event =>{
                    if (event.target.value === ''){
                      setType(node?.type)
                    }
                    console.log(event.target.value);
                    setType(event.target.value)
                  }
                } 
              type="string" name="type" id='type' 
              placeholder={node?.type}
            />
          </div>
          <div>
            <p>value</p>
            <input 
              onChange={
                event =>{
                    if (event.target.value === ''){
                      setValue(node?.value)
                    }
                    console.log(event.target.value);
                    setValue(Number(event.target.value))
                  }
                } 
              type="number" name="value" id='value' 
              placeholder={node?.value}
            />
          </div>

          <div>
            <p>pos</p>
            <input 
              onChange={
                event =>{
                    if (event.target.value === ''){
                      setPos(node?.pos)
                    }
                    console.log(event.target.value);
                    setPos((event.target.value).split(',').map(Number))
                  }
                } 
              type="string" name="pos" id='pos' 
              placeholder={node?.pos}
            />
          </div>

          <div>
            <p>Weight</p>
            <input 
              onChange={
                event =>{
                    if (event.target.value === ''){
                      setWeight(node?.weight)
                    }
                    console.log(event.target.value);
                    setWeight(Number(event.target.value))
                  }
                } 
              type="number" name="weight" 
              id="weight" 
              placeholder={node?.weight}
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