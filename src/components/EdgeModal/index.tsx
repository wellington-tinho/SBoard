
import { FormEvent, useContext, useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { CytoscapeContext } from '../../context/CytoscapeGraph/CytoscapeContext';
import { generatesRandomBetweenRange } from '../../util/randomNumber';
import { Container } from './styles';


interface IEdgeElement {
  id: string;
  source: string;
  target: string;
  weight: number;
  color: string;
  label: string;
  negative: number;
  reliability: number;
  delay: number;
}

interface EdgeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  edge: IEdgeElement;
}

export function EdgeModal({ isOpen, onRequestClose, edge }: EdgeModalProps) {
  const {cy} = useContext(CytoscapeContext);  

  const [id, setId] = useState(String)
  const [source, setSource] = useState(String)
  const [target, setTarget] = useState(String)
  const [negative, setNegative] = useState(Number)

  const [weightStart, setWeightStart] = useState<number>()
  const [weightEnd, setWeightEnd] = useState<number>()

  const [reliabilityStart, setReliabilityStart] = useState<number>()
  const [reliabilityEnd, setReliabilityEnd] = useState<number>()

  const [delayStart, setDelayStart] = useState<number>()
  const [delayEnd, setDelayEnd] = useState<number>()


  useEffect(() => {
    if (edge) {

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
  }, [edge])




  function EditElements(event: FormEvent) {
    event.preventDefault();


    /// Descobrir como chamar esta funçao apenas quando cada valor for alterado
    cy?.$(`#${id}`)
      .data('source', source)
      .data('target', target)
      .data('negative', negative)

    if ((weightStart && weightEnd) !== edge.weight) {
      cy?.$(`#${id}`)
        .data('weight', generatesRandomBetweenRange(weightStart, weightEnd)) // returns a random number between the ranges
    }

    if ((reliabilityStart && reliabilityEnd) !== edge.reliability) {
      cy?.$(`#${id}`)
        .data('reliability', generatesRandomBetweenRange(reliabilityStart, reliabilityEnd)) // returns a random number between the ranges
    }

    if ((delayStart && delayEnd) !== edge.delay) {
      cy?.$(`#${id}`)
        .data('delay', generatesRandomBetweenRange(delayStart, delayEnd)) // returns a random number between the ranges
    }

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
        <VscChromeClose onClick={onRequestClose} className='react-modal-close' />
        <h2>Edge Data</h2>

        <div>
          <div>
            <p>id</p>
            <input
              onChange={
                event => setId(event.target.value)
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
                event => setSource(event.target.value)
              }
              type="string" name="source"
              id="source"
              placeholder={source}
              disabled
            />
          </div>

          <div>
            <p>target</p>
            <input
              onChange={
                event => setTarget(event.target.value)
              }
              type="string" name="target" id="target"
              placeholder={target}
              disabled
            />
          </div>

          <div>
            <p>negative</p>
            <input
              onChange={
                event => event.target.value === '' ? setNegative(edge.negative) : setNegative(Number(event.target.value))
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
                  event => {
                    event.target.value === '' ? setWeightStart(edge.weight) : setWeightStart(Number(event.target.value))
                  }
                }
                max={weightEnd}
                type="number" name="weightStart"
                id="weightStart"
                placeholder={String(weightStart)}
              />

              <input
                onChange={
                  event => {
                    event.target.value === '' ? setWeightEnd(edge.weight) : setWeightEnd(Number(event.target.value))
                  }
                }
                min={weightStart}
                type="number" name="weightEnd"
                id="weightEnd"
                placeholder={String(weightEnd)}
              />
              <span className="tooltiptext">Insert a number from start to end, to generate a random number between them.</span>

            </div>

          </div>

          <div>
            <p>reliability</p>

            <div className="tooltip">

              <input
                onChange={
                  event => { event.target.value === '' ? setReliabilityStart(edge.reliability) : setReliabilityStart(Number(event.target.value)) }
                }
                max={reliabilityEnd}
                type="number" name="ReliabilityStart"
                id="RealityStart"
                placeholder={String(reliabilityStart)}
              />

              <input
                onChange={
                  event => event.target.value === '' ? setReliabilityEnd(edge.reliability) : setReliabilityEnd(Number(event.target.value))
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
            <p>delay</p>
            <div className="tooltip">

              <input
                onChange={
                  event => event.target.value === '' ? setDelayStart(edge.delay) : setDelayStart(Number(event.target.value))
                }
                max={delayEnd}
                type="number" name="DelayStart"
                id="RealityStart"
                placeholder={String(delayStart)}
              />

              <input
                onChange={
                  event => event.target.value === '' ? setDelayEnd(edge.delay) : setDelayEnd(Number(event.target.value))
                }
                min={delayStart}
                type="number" name="DelayEnd"
                id="RealityEnd"
                placeholder={String(delayEnd)}
              />
              <span className="tooltiptext">Insert a number from start to end, to generate a random number between them.</span>

            </div>
          </div>



          <button type="submit">
            Salvar alterações
          </button >




        </div>
      </Container>
    </Modal>
  );
}