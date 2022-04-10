
import { FormEvent, useContext, useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { CytoscapeContext } from '../../CytoscapeContext';
import { generatesRandomBetweenRange } from '../../util/randomNumber';
import { Container } from './styles';



interface EdgeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  edge: any
}

export function EdgeModal({ isOpen, onRequestClose, edge }: EdgeModalProps) {
  const [cy] = useContext<cytoscape.Core[]>(CytoscapeContext); //////////////////////////////////////////////// testeeeeeee

  const [id, setId ] = useState(String)
  const [source, setSource ] = useState(String)
  const [target, setTarget ] = useState(String)
  const [negative, setNegative ] = useState(Number)

  const [weightStart, setWeightStart] = useState(Number)
  const [weightEnd, setWeightEnd ] = useState(Number)

  const [reliabilityStart, setReliabilityStart] = useState(Number)
  const [reliabilityEnd, setReliabilityEnd ] = useState(Number)

  const [delayStart, setDelayStart] = useState(Number)
  const [delayEnd, setDelayEnd] = useState(Number)
  

 
    
  useEffect(() => {
    if(edge){ 
    
      setId(edge.id)
      setSource(edge.source)
      setTarget(edge.target)
      setNegative(edge.negative)
      setWeightStart(edge.weight)
      setWeightEnd(edge.weight)
      setReliabilityStart(edge.reliability)
      setReliabilityEnd(edge.reliability)
      setDelayStart(edge.delay)
      setDelayEnd(edge.delay)

    }
  },[edge])

  


  function EditElements(event:FormEvent) {
    event.preventDefault();
    console.log('EditElements');


  
    cy.$(`#${id}`)
    .data('source', source)
    .data('target', target)
    .data('negative', negative)
    .data('weight', generatesRandomBetweenRange(weightStart, weightEnd)) // returns a random number between the ranges
    .data('reliability', generatesRandomBetweenRange(reliabilityStart, reliabilityEnd)) // returns a random number between the ranges
    .data('delay', generatesRandomBetweenRange(delayStart, delayEnd)) // returns a random number between the ranges

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

            <div className="tooltip">

              <input 
                onChange={
                  event =>{setWeightStart(Number(event.target.value))
                    }
                  } 
                type="number" name="weightStart" 
                id="weightStart"	 
                placeholder={String(weightStart)}
              />
            
              <input 
                onChange={
                  event =>{setWeightEnd(Number(event.target.value))
                    }
                  } 
                type="number" name="weightEnd"
                id="weightEnd"
                placeholder={String(weightEnd)}
              />
            <span className="tooltiptext">Insert a number from start to end, to generate a random number between them.</span>

            </div>

          </div>
          
          <div>
            <p>Reliability</p>
                  
            <div className="tooltip">

              <input 
                onChange={
                  event =>{setReliabilityStart(Number(event.target.value))
                    }
                  } 
                type="number" name="ReliabilityStart" 
                id="RealityStart"	 
                placeholder={String(reliabilityStart)}
              />

              <input 
                onChange={
                  event =>{setReliabilityEnd(Number(event.target.value))
                    }
                  } 
                type="number" name="ReliabilityEnd" 
                id="RealityEnd"	 
                placeholder={String(reliabilityEnd)}
              />
            <span className="tooltiptext">Insert a number from start to end, to generate a random number between them.</span>

            </div>
          </div>

          <div>
            <p>Delay</p>
            <div className="tooltip">

              <input 
                onChange={
                  event =>{setDelayStart(Number(event.target.value))
                    }
                  } 
                type="number" name="DelayStart" 
                id="RealityStart"	 
                placeholder={String(delayStart)}
              />

              <input 
                onChange={
                  event =>{setDelayEnd(Number(event.target.value))
                    }
                  } 
                type="number" name="DelayEnd" 
                id="RealityEnd"	 
                placeholder={String(delayEnd)}
              />
              <span className="tooltiptext">Insert a number from start to end, to generate a random number between them.</span>

            </div>
          </div>

         
      
          <button  type="submit">
            Salvar alterações
          </button >




        </div>
      </Container>
    </Modal>
  );
}