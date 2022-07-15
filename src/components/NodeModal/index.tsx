
import { FormEvent, useContext, useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { CytoscapeContext } from '../../context/CytoscapeGraph/CytoscapeContext';
import { generatesRandomBetweenRange } from '../../util/randomNumber';
import { Container } from './styles';

interface INodeElement {
  id: string;
  Country: string
  domain: number
  label: string;
  name: string;
  region: number;
  type: string
  value: number
  pos: number[];
  weight: number
}


interface NodeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  node: INodeElement
}

export function NodeModal({ isOpen, onRequestClose, node }: NodeModalProps) {
  const [cy] = useContext<cytoscape.Core[]>(CytoscapeContext);

  const [country, setCountry] = useState<string>()
  const [domain, setDomain] = useState<number>()
  const [id, setId] = useState<string>()
  const [label, setLabel] = useState<string>()
  const [name, setName] = useState<string>()
  const [region, setRegion] = useState<number>()
  const [type, setType] = useState<string>()
  const [value, setValue] = useState<number>()
  const [pos, setPos] = useState<number[]>()
  const [weightStart, setWeightStart] = useState(Number)
  const [weightEnd, setWeightEnd] = useState(Number)




  useEffect(() => {

    if (node) {
      console.log('node', node);

      setId(node.id)
      setCountry(node.Country)
      setDomain(node.domain)
      setLabel(node.label)
      setName(node.name)
      setRegion(node.region)
      setType(node.type)
      setValue(node.value)
      setPos(node.pos)
      setWeightStart(node.weight)
      setWeightEnd(node.weight)

    }

  }, [node])






  function EditElements(event: FormEvent) {
    event.preventDefault();


    /// Descobrir como chamar esta funçao apenas quando cada valor for alterado
    cy.$(`#${id}`)
      .data('Country', country)
      .data('domain', domain)
      .data('label', label)
      .data('name', name)
      .data('region', region)
      .data('type', type)
      .data('value', value)
      .data('pos', pos)

    if ((weightStart && weightEnd) !== node.weight) {
      cy.$(`#${id}`)
        .data('weight', generatesRandomBetweenRange(weightStart, weightEnd)) // returns a random number between the ranges
    }


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
        <VscChromeClose onClick={onRequestClose} className='react-modal-close' />
        <h2>Node Data</h2>

        <div>
          <div>
            <p>id</p>
            <input
              onChange={
                event => {
                  setId(event.target.value)
                }
              }
              type="string" name="id" id='id'
              placeholder={id}
              disabled
            />
          </div>
          <div>
            <p>country</p>
            <input
              onChange={
                event => event.target.value === '' ? setCountry(node.Country) : setCountry(event.target.value)
              }
              type="string" name="Country"
              id="Country"
              placeholder={country}
            />
          </div>
          <div>
            <p>domain</p>
            <input
              onChange={
                event => {
                  event.target.value === '' ? setDomain(node.domain) : setDomain(Number(event.target.value))
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
                event => {
                  event.target.value === '' ? setLabel(node.label) : setLabel(event.target.value)
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
                event => {
                  event.target.value === '' ? setName(node.name) : setName(event.target.value)
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
                event => {
                  event.target.value === '' ? setRegion(node.region) : setRegion(+event.target.value)
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
                event => {
                  event.target.value === '' ? setType(node.type) : setType(event.target.value)
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
                event => {
                  event.target.value === '' ? setValue(node.value) : setValue(Number(event.target.value))
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
                event => {
                  setPos((event.target.value).split(',').map(Number))
                }
              }
              type="string" name="pos" id='pos'
              placeholder={String(pos)}
            />
          </div>

          <div>
            <p>weight</p>

            <div className="tooltip" >

              <input
                onChange={
                  event => {
                    event.target.value === '' ? setWeightStart(Number(node.weight)) : setWeightStart(Number(event.target.value))
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
                    event.target.value === '' ? setWeightEnd(Number(node.weight)) : setWeightEnd(Number(event.target.value))
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


          <button type="submit">
            Save editions
          </button >




        </div>
      </Container>
    </Modal>
  );
}