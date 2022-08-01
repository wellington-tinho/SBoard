
import { FormEvent, useContext, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { CytoscapeContext } from '../../context/CytoscapeGraph/CytoscapeContext';
import { generatesRandomBetweenRange } from '../../util/randomNumber';
import { Container } from './styles';




interface ChangeAllSelectedNodeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  nodes: any[]
}

export function ChangeAllSelectedNodeModal({ isOpen, onRequestClose, nodes }: ChangeAllSelectedNodeModalProps) {
  const {cy} = useContext(CytoscapeContext);

  const [country, setCountry] = useState(String)
  const [label, setLabel] = useState(String)
  const [name, setName] = useState(String)
  const [type, setType] = useState(String)
  const [region, setRegion] = useState<Number>()
  const [domain, setDomain] = useState<Number>()
  const [value, setValue] = useState<Number>()
  const [pos, setPos] = useState<Number[]>()

  const [weightStart, setWeightStart] = useState<number>()
  const [weightEnd, setWeightEnd] = useState<number>()





  function EditElements(event: FormEvent) {
    event.preventDefault();

    for (var i = 1; i < nodes.length; i++) {

      var weight = generatesRandomBetweenRange(weightStart, weightEnd)

      /// Descobrir como chamar esta funçao apenas quando cada valor for alterado {refatorar}
      cy?.$(`#${nodes[i]}`)
        .data('Country', country ? country : cy?.$(`#${nodes[i]}`).data('Country'))
        .data('domain', domain ? domain : cy?.$(`#${nodes[i]}`).data('domain'))
        .data('label', label ? label : cy?.$(`#${nodes[i]}`).data('label'))
        .data('name', name ? name : cy?.$(`#${nodes[i]}`).data('name'))
        .data('region', region ? region : cy?.$(`#${nodes[i]}`).data('region'))
        .data('type', type ? type : cy?.$(`#${nodes[i]}`).data('type'))
        .data('value', value ? value : cy?.$(`#${nodes[i]}`).data('value'))
        .data('pos', pos ? pos : cy?.$(`#${nodes[i]}`).data('pos'))
        .data('weight', weight ? weight : cy?.$(`#${nodes[i]}`).data('weight'))
    }
    toast.success('Nodes modified with success!');
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
        <h2>Change Nodes selected</h2>

        <div>

          <div>
            <p>Country</p>
            <input
              onChange={
                event => setCountry(event.target.value)
              }
              type="string" name="country"
              id="country"
              placeholder={'Enter a value to change here'}
            />
          </div>
          <div>
            <p>domain</p>
            <input
              onChange={
                event => setDomain(Number(event.target.value))
              }
              type="string" name="domain"
              id="domain"
              placeholder={'Enter a value to change here'}
            />
          </div>
          <div>
            <p>label</p>
            <input
              onChange={
                event => setLabel(event.target.value)
              }
              type="string" name="label"
              id="label"
              placeholder={'Enter a value to change here'}
            />
          </div>
          <div>
            <p>name</p>
            <input
              onChange={
                event => setName(event.target.value)
              }
              type="string" name="name" id="name"
              placeholder={'Enter a value to change here'}
            />
          </div>
          <div>
            <p>region</p>
            <input
              onChange={
                event => setRegion(Number(event.target.value))
              }
              type="number" name="region" id='region'
              placeholder={'Enter a value to change here.'}
            />
          </div>
          <div>
            <p>type</p>
            <input
              onChange={
                event => setType(event.target.value)
              }
              type="string" name="type" id='type'
              placeholder={'Enter a value to change here.'}

            />
          </div>
          <div>
            <p>value</p>
            <input
              onChange={
                event => setValue(Number(event.target.value))
              }
              type="number" name="value" id='value'
              placeholder={'Enter a value to change here.'}
            />
          </div>
          <div>
            <p>pos</p>
            <input
              onChange={
                event => {
                  setPos((event.target.value)
                    .split(',')
                    .map(Number)
                  )
                }
              }
              type="string" name="pos" id='pos'
              placeholder={'Enter a value to change here.'}
            />
          </div>
          <div>
            <p>Weight</p>

            <div className="tooltip">

              <input
                onChange={
                  event => {
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
                  event => {
                    event.target.value === '' ? setWeightEnd(undefined) : setWeightEnd(Number(event.target.value))
                  }
                }
                min={weightStart}
                type="number" name="weightEnd"
                id="weightEnd"
                placeholder={'Enter a value to change here.'}
              />
              <span className="tooltiptext">
                Insert a number from start to end, to generate a random number between them.
              </span>
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