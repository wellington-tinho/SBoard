
import {FormEvent, useContext, useState} from 'react';
import Modal from 'react-modal';

import { VscChromeClose } from 'react-icons/vsc'
import { Container } from './styles';
import { CytoscapeContext } from '../../CytoscapeContext';



interface ChangeAllSelectedNodeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  nodes: any[]
}

export function ChangeAllSelectedNodeModal({ isOpen, onRequestClose, nodes }: ChangeAllSelectedNodeModalProps) {
  const [cy] = useContext(CytoscapeContext);


  const [country, setCountry]  = useState(String)
  const [label,   setLabel  ]  = useState(String)
  const [name,    setName   ]  = useState(String)
  const [type,    setType   ]  = useState(String)
  const [region,  setRegion ]  = useState<Number>()
  const [domain,  setDomain ]  = useState<Number>()
  const [value,   setValue  ]  = useState<Number>()
  const [pos,     setPos    ]  = useState<Number[]>()
  const [weight,  setWeight ]  = useState<Number>()
  

 
    
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
      country ${country} \n
      domain ${domain}  \n
      label ${label}  \n
      name ${name}  \n
      region ${region}  \n
      type ${type}  \n
      value ${value}  \n
      pos ${pos}  \n
      weight ${weight}  \n
    `)

    for(var i=1; i<nodes.length; i++) {    
      cy.$(`#${nodes[i]}`)
      .data('Country',   country  ?   country :     cy.$(`#${nodes[i]}`).data('Country') )
      .data('domain',    domain   ?   domain  :     cy.$(`#${nodes[i]}`).data('domain') )
      .data('label',     label    ?   label   :     cy.$(`#${nodes[i]}`).data('label') )
      .data('name',      name     ?   name    :     cy.$(`#${nodes[i]}`).data('name') )
      .data('region',    region   ?   region  :     cy.$(`#${nodes[i]}`).data('region') )
      .data('type',      type     ?   type    :     cy.$(`#${nodes[i]}`).data('type') )
      .data('value',     value    ?   value   :     cy.$(`#${nodes[i]}`).data('value') )
      .data('pos',       pos      ?   pos     :     cy.$(`#${nodes[i]}`).data('pos') )
      .data('weight',    weight   ?   weight  :     cy.$(`#${nodes[i]}`).data('weight') )
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
        <h2>Change Nodes selectd</h2>

        <div>
         
          <div>
            <p>Country</p>
            <input 
              onChange={
                event =>setCountry(event.target.value)
              }
              type="string" name="country" 
              id="country" 
              placeholder={'Insira aqui um valor para alterar'}
            />
          </div>
          <div>
            <p>domain</p>
            <input 
              onChange={
                event =>setDomain(Number(event.target.value))
              }
              type="string" name="domain" 
              id="domain" 
              placeholder={'Insira aqui um valor para alterar'}
            />
          </div>
          <div>
            <p>label</p>
            <input 
              onChange={
                event =>setLabel(event.target.value)
              }
              type="string" name="label" 
              id="label" 
              placeholder={'Insira aqui um valor para alterar'}
            />
          </div>
          <div>
            <p>name</p>
            <input 
              onChange={
                event =>setName(event.target.value)
                } 
              type="string" name="name" id="name" 
              placeholder={'Insira aqui um valor para alterar'}
            />
          </div>
          <div>
            <p>region</p>
            <input 
              onChange={
                event =>setRegion(Number(event.target.value))  
                } 
              type="number" name="region" id='region' 
              placeholder={'Insira aqui um valor para alterar.'}
            />
          </div>
          <div>
            <p>type</p>
            <input 
              onChange={
                event =>setType(event.target.value)
              } 
              type="string" name="type" id='type'
              placeholder={'Insira aqui um valor para alterar.'}
            
            />
          </div>
          <div>
            <p>value</p>
            <input 
              onChange={
                event =>setValue(Number(event.target.value))  
              } 
              type="number" name="value" id='value' 
              placeholder={'Insira aqui um valor para alterar.'}
            />
          </div>
          <div>
            <p>pos</p>
            <input 
              onChange={
                  event =>{
                    setPos((event.target.value)
                      .split(',')
                      .map(Number)
                    )
                  }
              } 
              type="string" name="pos" id='pos' 
              placeholder={'Insira aqui um valor para alterar.'}
            />
          </div>
          <div>
            <p>weight</p>
            <input 
              onChange={
                event =>setWeight(Number(event.target.value))  
              } 
              type="number" name="weight" id='weight' 
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