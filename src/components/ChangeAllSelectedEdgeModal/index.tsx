
import { FormEvent, useContext, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { CytoscapeContext } from '../../CytoscapeContext';
import { generatesRandomBetweenRange } from '../../util/randomNumber';
import { Container } from './styles';




interface ChangeAllSelectedEdgeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  edges: any[]
}

export function ChangeAllSelectedEdgeModal({ isOpen, onRequestClose, edges }: ChangeAllSelectedEdgeModalProps) {
  
  const [cy] = useContext<cytoscape.Core[]>(CytoscapeContext);

  const [source, setSource ] = useState<number|string>()
  const [target, setTarget ] = useState<number|string>()

  const [negative, setNegative ] = useState<number>()
  
  const [weightStart, setWeightStart ] = useState<number>()
  const [weightEnd, setWeightEnd ] =  useState<number>()
  
  const [reliabilityStart, setReliabilityStart ] =  useState<number>()
  const [reliabilityEnd, setReliabilityEnd ] =  useState<number>()
  
  const [delayStart, setDelayStart ] =  useState<number>()
  const [delayEnd, setDelayEnd ] =  useState<number>()



  function EditElements(event:FormEvent) {
    event.preventDefault();

    
    for(var i=1; i<edges.length; i++) {   
      
      var weight =           generatesRandomBetweenRange(weightStart, weightEnd)
      var reliability = generatesRandomBetweenRange(reliabilityStart, reliabilityEnd)
      var delay =             generatesRandomBetweenRange(delayStart, delayEnd)

  

      cy.$(`#${edges[i]}`)
      // .data('source',       source ?      source :       cy.$(`#${edges[i]}`).data('source') )
      // .data('target',       target ?      target :       cy.$(`#${edges[i]}`).data('target') )
      .data('negative',     negative ?    negative :     cy.$(`#${edges[i]}`).data('negative') )
      .data('weight',       weight ?      weight :       cy.$(`#${edges[i]}`).data('weight') )
      .data('reliability',  reliability ? reliability :  cy.$(`#${edges[i]}`).data('reliability') )
      .data('delay',        delay ?       delay :        cy.$(`#${edges[i]}`).data('delay') )
      
    }

    toast.success('Edges modified with success!');
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
                event => event.target.value === '' ? setSource(undefined) : setSource(event.target.value)
              }
              type="string" name="Country" 
              id="Country" 
              placeholder={'Enter a value to change here'}
              disabled
            />
          </div>
          <div>
            <p>target</p>
            <input 
              onChange={
                event =>  event.target.value === '' ? setTarget(undefined) : setTarget(event.target.value)
                } 
              type="string" name="domain" id="domain" 
              placeholder={'Enter a value to change here'}
              disabled
            />
          </div>
          <div>
            <p>negative</p>
            <input 
              onChange={
                event =>  event.target.value === '' ? setNegative(undefined) : setNegative(Number(event.target.value))
                } 
              type="number" name="label" id='label' 
              placeholder={'Enter a value to change here.'}
            />
          </div>
          <div>
            <p>Bandwidth</p>

            <div className="tooltip">

              <input 
                onChange={
                  event =>{
                    event.target.value === '' ? setWeightStart(undefined) : setWeightStart(Number(event.target.value))
                  }
                }
                max={weightEnd}
                type="number" name="weightStart" 
                id="weightStart"	 
                placeholder={'Enter a value to change here.'}
              />
            
              <input 
                onChange={
                  event =>{
                    event.target.value === '' ? setWeightEnd(undefined) : setWeightEnd(Number(event.target.value))
                  }
                }
                min={weightStart}
                type="number" name="weightEnd"
                id="weightEnd"
                placeholder={'Enter a value to change here.'}
              />
              <span className="tooltiptext">Insert a number from start to end, to generate a random number between them.</span>
            </div>
          </div>
          
          <div>
            <p>Reliability</p>
                  
            <div className="tooltip">

              <input 
                onChange={
                  event =>{
                    event.target.value === '' ? setReliabilityStart(undefined) : setReliabilityStart(Number(event.target.value))
                  }
                }
                max={reliabilityEnd} 
                type="number" name="ReliabilityStart" 
                id="RealityStart"	 
                placeholder={'Enter a value to change here.'}
              />

              <input 
                onChange={
                  event =>{
                    event.target.value === '' ? setReliabilityEnd(undefined) : setReliabilityEnd(Number(event.target.value))
                  }
                } 
                min={reliabilityStart}
                type="number" name="ReliabilityEnd" 
                id="RealityEnd"	 
                placeholder={'Enter a value to change here.'}
              />
            <span className="tooltiptext">Insert a number from start to end, to generate a random number between them.</span>

            </div>
          </div>
          <div>
            <p>Delay</p>
            <div className="tooltip">

              <input 
                onChange={
                  event =>{
                    event.target.value === '' ? setDelayStart(undefined) : setDelayStart(Number(event.target.value))
                  }
                }
                max={delayEnd} 
                type="number" name="DelayStart" 
                id="DelayStart"	 
                placeholder={'Enter a value to change here.'}
              />

              <input 
                onChange={
                  event =>{
                    setDelayEnd(Number(event.target.value))
                  }
                } 
                min={delayStart}
                type="number" name="DelayEnd" 
                id="DelayEnd"	 
                placeholder={'Enter a value to change here.'}
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