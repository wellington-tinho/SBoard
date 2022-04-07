
import { FormEvent, useContext, useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { CytoscapeContext } from '../../CytoscapeContext';
import { Container } from './styles';




interface NodeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  node: any
}

export function NodeModal({ isOpen, onRequestClose, node }: NodeModalProps) {
  const [cy] = useContext(CytoscapeContext);

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
    
  useEffect(() => {

    if (node){
      console.log('node',node);

      setId(node.id)
      setCountry(node.Country)
      setDomain(node.domain)
      setLabel(node.label)
      setName(node.name)
      setRegion(node.region)
      setType(node.type)
      setValue(node.value)
      setPos(node.pos)
      setWeight(node.weight)
      
    }

  },[node])

  


  function EditElements(event:FormEvent) {
    event.preventDefault();

    cy.$(`#${id}`)
    .data('Country', country)
    .data('domain', domain)
    .data('label', label)
    .data('name', name)
    .data('region', region)
    .data('type', type)
    .data('value', value)
    .data('pos', pos)
    .data('weight', weight)

    toast.success('Node modified with success!');
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
            <p>id</p>
            <input 
              onChange={
                event =>{setId(event.target.value)
                  }
                } 
              type="string" name="id" id='id' 
              placeholder={id}
              disabled 
            />
          </div>
          <div>
            <p>Country</p>
            <input 
              onChange={
                event => setCountry(event.target.value)}      
              type="string" name="Country" 
              id="Country" 
              placeholder={country}
            />
          </div>
          <div>
            <p>domain</p>
            <input 
              onChange={
                event =>{setDomain(Number(event.target.value))
                  }
                } 
              type="number" name="domain" id="domain" 
              placeholder={String(domain)}
            />
          </div>
          <div>
            <p>label</p>
            <input 
              onChange={
                event =>{setLabel(event.target.value)
                  }
                } 
              type="string" name="label" id='label' 
              placeholder={label}
            />
          </div>
          <div>
            <p>name</p>
            <input 
              onChange={
                event =>{setName(event.target.value)
                  }
                } 
              type="string" name="name" id='name'
              placeholder={name}
            
            />
          </div>
          <div>
            <p>region</p>
            <input 
              onChange={
                event =>{setRegion(Number(event.target.value))
                  }
                } 
              type="number" name="region" id='region' 
              placeholder={String(region)}
            />
          </div>
          <div>
            <p>type</p>
            <input 
              onChange={
                event =>{setType(event.target.value)
                  }
                } 
              type="string" name="type" id='type' 
              placeholder={type}
            />
          </div>
          <div>
            <p>value</p>
            <input 
              onChange={
                event =>{setValue(Number(event.target.value))
                  }
                } 
              type="number" name="value" id='value' 
              placeholder={String(value)}
            />
          </div>

          <div>
            <p>pos</p>
            <input 
              onChange={
                event =>{setPos((event.target.value).split(',').map(Number))
                  }
                } 
              type="string" name="pos" id='pos' 
              placeholder={String(pos)}
            />
          </div>

          <div>
            <p>Weight</p>
            <input 
              onChange={
                event =>{setWeight(Number(event.target.value))
                  }
                } 
              type="number" name="weight" 
              id="weight" 
              placeholder={String(weight)}
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