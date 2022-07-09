import { FormEvent, useContext, useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { CytoscapeContext } from '../../CytoscapeContext';
import { ChangeAllSelectedEdgeModal } from '../ChangeAllSelectedEdgeModal';
import { ChangeAllSelectedNodeModal } from '../ChangeAllSelectedNodeModal';
import { EdgeModal } from '../EdgeModal';
import { NodeModal } from '../NodeModal';
import { Container } from './styles';




interface ElementModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

// interface nodeSelectedProps{
//   eleGraph: Array<string>;
// }
// interface edgeSelectedProps{
//   eleGraph: Array<string>;
// }
// interface elementsSelectedProps{
//   eleSelect: {'node':nodeSelectedProps,'edge':edgeSelectedProps}
// }


// Modal.setAppElement('#root2')


export function ElementModal({ isOpen, onRequestClose }: ElementModalProps) {

  const [cy] = useContext<cytoscape.Core[]>(CytoscapeContext);
  const [arrayNodes, setArrayNodes] = useState<any>()
  const [arrayEdges, setArrayEdges] = useState<any>()
  const [nodeElement, setNodeElement] = useState<any>()
  const [edgeElement, setEdgeElement] = useState<any>()
  const [isNodeModal, setIsNodeModal] = useState(false);
  const [isEdgeModal, setIsEdgeModal] = useState(false);
  const [isSelectedEdgesModal, setIsSelectedEdgesModal] = useState(false);
  const [isSelectedNodesModal, setIsSelectedNodesModal] = useState(false);
  const [elementsSelected, setElementsSelected] = useState({ 'node': [''], 'edge': [''] }); //elementsSelectedProps
  const elementsSelectedAux = { 'node': [''], 'edge': [''] };
  const [typeIntersectionStart, setTypeIntersectionStart] = useState<string>();
  const [typeIntersectionEnd, setTypeIntersectionEnd] = useState<string>();







  //criaçao dos inputs Nodes e edges
  useEffect(function CreateInputsNodesAndEdges() {
    // console.log('displaro no cy = ',cy.$('')); 
    if (cy !== undefined) {
      const cyNodes = cy.nodes()


      var eleNodes: any = []
      for (let key = 0; key < cyNodes.length; key++) {

        eleNodes.push(
          <li key={key}>
            <input
              // onChange={e => toggleCheckBox(e, cyNodes[key])}     //{/* lembrar de refatorar cy.edges() aki */}
              type="checkbox"
              id={'nodeElementModalInput' + cyNodes[key].data("id")}
              name={'nodeElementModalInput' + cyNodes[key].data("id")}
            // checked={false}
            />
            <h4> Node {cyNodes[key].data("id")} </h4>

            <button
              onClick={() => handleOpenNodeModal(cyNodes[key].data())} >
              {/* onClick={() =>  {}} >  */}
              Change Element
            </button>
          </li>
        )
      }

      var eleEdges: any = []
      const cyEdges = cy.edges()

      for (let key = 0; key < cyEdges.length; key++) {

        ///lembrar de refatorar cyEdges aki
        eleEdges.push(
          <li key={key}>
            <input
              // onChange={e => toggleCheckBox(e, cyEdges[key])}    
              type="checkbox"
              id={'edgeElementModalInput' + cyEdges[key].data("id")}
              name={'edgeElementModalInput' + cyEdges[key].data("id")}
            />

            <h4> Edge {cyEdges[key].data("id")} </h4>

            <button
              onClick={() => handleOpenEdgeModal(cyEdges[key].data())} >
              Change Element
            </button>
          </li>
        )
      }



      setArrayNodes(<ul> {eleNodes} </ul>);
      setArrayEdges(<ul> {eleEdges} </ul>);

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cy, isOpen])

  //se os dois typeIntersection estiverem preenchidos
  useEffect(function filterEdgesForNodeType() {

    if (cy !== undefined) {

      if ((typeIntersectionStart && typeIntersectionEnd) !== undefined) {

        const Edges = cy.filter(`edge`)
        const Nodes = cy.filter(`node`)

        for (var j = 0; j < Edges.length; j++) {
          var eleInput: any = window.document.getElementsByName(`edgeElementModalInput${Edges[j].data('id')}`)
          eleInput[0].checked = false;
        }

        for (var j = 0; j < Edges.length; j++) {
          var eleInput: any = window.document.getElementsByName(`edgeElementModalInput${Edges[j].data('id')}`)

          var edgeSource = Edges.$id(`e${j}`).data('source');
          var edgeTarget = Edges.$id(`e${j}`).data('target');

          if ((typeIntersectionStart == Nodes.$id(edgeSource).data('type')) && (typeIntersectionEnd == Nodes.$id(edgeTarget).data('type'))) {
            eleInput[0].checked = true;
          }
        }
      }
      else {
        const Edges = cy.filter(`edge`)

        for (var j = 0; j < Edges.length; j++) {
          var eleInput: any = window.document.getElementsByName(`edgeElementModalInput${Edges[j].data('id')}`)
          eleInput[0].checked = false;
        }
      }
    }
  }, [typeIntersectionStart, typeIntersectionEnd])

  //Node Modal
  function handleOpenNodeModal(node: any) {
    setNodeElement(node)
    setIsNodeModal(true)
  }
  function handleCloseNodeModal() {
    setIsNodeModal(false)
  }

  //Edge Modal  
  function handleOpenEdgeModal(edge: any) {
    setEdgeElement(edge)
    setIsEdgeModal(true)
  }
  function handleCloseEdgeModal() {
    setIsEdgeModal(false)
  }


  //SelectedsEdges Modal
  function handleOpenChangeAllSelectedEdgesModal() {
    setElementsSelected(elementsSelectedAux)
    setIsSelectedEdgesModal(true)
  }
  function handleCloseChangeAllSelectedEdgesModal() {
    setIsSelectedEdgesModal(false)
  }

  //SelectedNodes Modal  
  function handleOpenChangeAllSelectedNodesModal() {
    setElementsSelected(elementsSelectedAux)
    setIsSelectedNodesModal(true)
  }
  function handleCloseChangeAllSelectedNodeModal() {
    setIsSelectedNodesModal(false)
  }



  function filterElements(value: any, type: string, element: string) {


    var elemento = cy.$(`${element}`)
    for (var j = 0; j < elemento.length; j++) {
      var eleInput: any = window.document.getElementsByName(`${element}ElementModalInput${elemento[j].data('id')}`)
      eleInput[0].checked = false;
    }


    if (value !== '') {
      /// Filter input value 
      var operation = ''
      if (value[0] == '<' || value[0] == '=' || value[0] == '>') {
        if (value[1] == ('=')) {
          operation = String(value).substring(2, operation.length);
        } else {
          operation = String(value).substring(1, operation.length);
        }
      } else {
        toast.warn(`The selector ${element}[${type} ${value}] is invalid`)
      }
      let operationForValue = value.split(operation)[1]
      operationForValue = operationForValue.replace(' ', '');
      if ((type != 'type') && (type != 'Country')) {
        operationForValue = operationForValue.replace(/[^0-9]/g, '');
        operationForValue = parseInt(operationForValue);
      }
      /// End Filter input value 


      let elements = (cy.$(`${element}[${type} ${operation} ${operationForValue}]`));
      console.log('qtd elements filtes > ', elements.length);
      for (var i = 0; i < elements.length; i++) {
        var ele: any = window.document.getElementsByName(`${element}ElementModalInput${elements[i].data('id')}`)
        ele[0].checked = true;
      }
    }
  }

  function ChangeSelectedallElements(elementType: 'node' | 'edge') {
    var elementArray = cy.$(`${elementType}`)
    for (var j = 0; j < elementArray.length; j++) {
      var eleInput: any = window.document.getElementsByName(`${elementType}ElementModalInput${elementArray[j].data('id')}`)
      //pega todos os ids dos iputs checked = true
      if ((eleInput[0].checked) === true) {
        elementsSelectedAux[elementType].push(elementArray[j].data('id'))
      }
    }
    if (elementType === 'node') {
      handleOpenChangeAllSelectedNodesModal()
    }
    else {
      handleOpenChangeAllSelectedEdgesModal()
    }
  }

  function SaveChange(event: FormEvent) {
    event.preventDefault();
  }



  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >

      <Container onSubmit={SaveChange}>
        <VscChromeClose onClick={onRequestClose} className='react-modal-close' />
        <h2>Elements</h2>

        <div className="elements">
          <div>
            <h3>Nodes</h3>
            <div className='filtro'>
              <input type="text" name="NodeCountry" id="NodeCountry" placeholder="Filtrar por Country" onChange={e => filterElements(e.target.value, 'Country', 'node')} />
              <input type="text" name="NodeDomain" id="NodeDomain" placeholder="Filtrar por Domain" onChange={e => filterElements(e.target.value, 'domain', 'node')} />
              <input type="text" name="NodeType" id="NodeType" placeholder="Filtrar por Type" onChange={e => filterElements(e.target.value, 'type', 'node')} />
              <input type="text" name="NodeValue" id="NodeValue" placeholder="Filtrar por Value" onChange={e => filterElements(e.target.value, 'value', 'node')} />
              <input type="text" name="NodeWeight" id="NodeWeight" placeholder="Filtrar por Weight" onChange={e => filterElements(e.target.value, 'weight', 'node')} />
            </div>
            <button className="changeElement"
              onClick={() => ChangeSelectedallElements('node')} >
              {/* onClick={() =>  {}} >  */}
              Change all selected nodes
            </button>
            {arrayNodes}

          </div>
          <div>
            <h3>Edges</h3>
            <div className='filtro'>


              <input type="text" name="EdgeReliability" id="EdgeReliability"
                placeholder="Filtrar por Reliability"
                onChange={e => filterElements(e.target.value, 'reliability', 'edge')}
              />
              <input type="text" name="EdgeNegative" id="EdgeNegative"
                placeholder="Filtrar por Negative"
                onChange={e => filterElements(e.target.value, 'negative', 'edge')}
              />
              <input type="text" name="EdgeDelay" id="EdgeDelay"
                placeholder="Filtrar por Delay"
                onChange={e => filterElements(e.target.value, 'delay', 'edge')}
              />
              <input type="text" name="EdgeBandwidth" id="EdgeBandwidth"
                placeholder="Filtrar por Bandwidth"
                onChange={e => filterElements(e.target.value, 'weight', 'edge')}
              />

              <div className='typeIntersection tooltip'>

                <input alt='Type of intersection of edges' type="text"
                  name="typeIntersectionStart" id="typeIntersectionStart" placeholder="Type intersection"
                  onChange={event =>
                    event.target.value === '' ? setTypeIntersectionStart(undefined) : setTypeIntersectionStart(event.target.value)
                  }
                />
                <input alt='Type of intersection of edges' type="text"
                  name="typeIntersectionEnd" id="typeIntersectionEnd" placeholder="Type intersection"
                  onChange={event =>
                    event.target.value === '' ? setTypeIntersectionEnd(undefined) : setTypeIntersectionEnd(event.target.value)
                  }
                />
                <span className="tooltiptext">
                  Enter a node type value, to filter edges that intersect them.
                </span>

              </div>


            </div>
            <button className="changeElement"
              onClick={() => ChangeSelectedallElements('edge')} >
              {/* onClick={() =>  {}} >  */}
              Change all selected edges
            </button>
            {arrayEdges}
          </div>
        </div>
      </Container>

      <NodeModal
        isOpen={isNodeModal}
        onRequestClose={handleCloseNodeModal}
        node={nodeElement}
      />

      <EdgeModal
        isOpen={isEdgeModal}
        onRequestClose={handleCloseEdgeModal}
        edge={edgeElement}
      />

      <ChangeAllSelectedEdgeModal
        isOpen={isSelectedEdgesModal}
        onRequestClose={handleCloseChangeAllSelectedEdgesModal}
        edges={elementsSelected['edge']}
      />

      <ChangeAllSelectedNodeModal
        isOpen={isSelectedNodesModal}
        onRequestClose={handleCloseChangeAllSelectedNodeModal}
        nodes={elementsSelected['node']}
      />
    </Modal>
  );
}