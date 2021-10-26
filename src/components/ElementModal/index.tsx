import { FormEvent, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { VscChromeClose } from 'react-icons/vsc'
import { Container } from './styles';
import { CytoscapeContext } from '../../CytoscapeContext';

import { NodeModal } from '../NodeModal';
import { EdgeModal } from '../EdgeModal';
import { ChangeAllSelectedEdgeModal } from '../ChangeAllSelectedEdgeModal';


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
  const [cy] = useContext(CytoscapeContext);
  const [arrayNodes, setArrayNodes] = useState<any>()
  const [arrayEdges, setArrayEdges] = useState<any>()
  const [nodeElement,setNodeElement] = useState<any>()
  const [edgeElement,setEdgeElement] = useState<any>()
  const [isNodeModal, setIsNodeModal] = useState(false);
  const [isEdgeModal, setIsEdgeModal] = useState(false);
  const [isSelectedEdgesModal, setIsSelectedEdgesModal] = useState(false);
  const [elementsSelected, setElementsSelected] = useState({'node':[''],'edge':['']}); //elementsSelectedProps
  const elementsSelectedAux = {'node':[''],'edge':['']};

  // console.log(cy.nodes()[3].data("weight")); // weight is the first ele's weight
  function handleOpenNodeModal(node:any){
    setNodeElement(node)
    setIsNodeModal(true)
  }
  function handleCloseNodeModal(){
    setIsNodeModal(false)
  }

  function handleOpenEdgeModal(edge:any){
    setEdgeElement(edge)
    setIsEdgeModal(true)
  }
  function handleCloseEdgeModal(){
    setIsEdgeModal(false)
  }

  function handleOpenChangeAllSelectedElementsModal(){
    setElementsSelected(elementsSelectedAux)
    console.log(elementsSelected);
    console.log(elementsSelectedAux);
    
    setIsSelectedEdgesModal(true)
  }

  function handleCloseChangeAllSelectedEdgesModal(){
    setIsSelectedEdgesModal(false)
  }

  //  // Verefificando se foi apertado checkbox dos nos e
  //  function toggleCheckBox (e:any, element:any) {
  //   // const { checked } = e.target
  //   // console.log('checked:',checked);
  //   // setChecked(!checked)    

  //   // console.log('element:',element);
  //   // console.log('e.target.id:',e.target.id);  
  // }


  useEffect(()=>{
    if(cy !== undefined){

      
        var eleNodes:any = []
        for (let key = 0; key < cy.nodes().length; key++) {

          eleNodes.push(
            <li key={key}> 
                  <input 
                    // onChange={e => toggleCheckBox(e, cy.nodes()[key])}     //{/* lembrar de refatorar cy.edges() aki */}
                    type="checkbox"
                    id={'nodeElementModalInput'+cy.nodes()[key].data("id")}  
                    name={'nodeElementModalInput'+cy.nodes()[key].data("id")} 
                    // checked={false}
                    /> 
                    <h4> Node {cy.nodes()[key].data("id")} </h4> 

                    <button 
                      onClick={() =>  handleOpenNodeModal(cy.nodes()[key].data())} > 
                      {/* onClick={() =>  {}} >  */}
                      Change Element
                    </button>
              </li>
          )
        }

      var eleEdges:any = []
      for (let key = 0; key < cy.edges().length; key++) {

        ///lembrar de refatorar cy.edges() aki
        eleEdges.push(
          <li key={key}> 
                  <input 
                    // onChange={e => toggleCheckBox(e, cy.edges()[key])}     //{/* lembrar de refatorar cy.edges() aki */}
                    type="checkbox"
                    id={'edgeElementModalInput'+cy.edges()[key].data("id")}
                    name={'edgeElementModalInput'+cy.edges()[key].data("id")}
                    /> 
                    
                 <h4> Edge {cy.edges()[key].data("id")} </h4>      {/* lembrar de refatorar cy.edges() aki */}
                    
                    <button 
                      onClick={() =>  handleOpenEdgeModal(cy.edges()[key].data())} >    {/* lembrar de refatorar cy.edges() aki */}
                      {/* onClick={() =>  {}} >  */}
                      Change Element
                    </button>
              </li>
        )
      }
      
      
      
      setArrayNodes( <ul> {eleNodes} </ul> );
      setArrayEdges( <ul> {eleEdges} </ul> );
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cy])

  
  function filterElements(value:any,type:string,element:string){
    var elemento = cy.$(`${element}`)
    for(var j=0; j<elemento.length; j++){
        var eleInput:any= window.document.getElementsByName(`${element}ElementModalInput${elemento[j].data('id')}`)
        eleInput[0].checked = false;
      }
    
    
    if (value!==''){
      let elements=(cy.$(`${element}[${type} ${value}]`));
      console.log('qtd elements filtes > ',elements.length);
      
      for(var i=0; i<elements.length; i++){
        var ele:any= window.document.getElementsByName(`${element}ElementModalInput${elements[i].data('id')}`)
        ele[0].checked = true;
      }
    }
  }
 
  function ChangeSelectedallElements(elementType:'node'|'edge'){
    var elementArray = cy.$(`${elementType}`)
    for(var j=0; j<elementArray.length; j++){
        var eleInput:any= window.document.getElementsByName(`${elementType}ElementModalInput${elementArray[j].data('id')}`)
        //pega todos os ids dos imputs checked = true
        if((eleInput[0].checked)===true){
          // console.log(`${elementArray[j].data('id')}`);
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          elementsSelectedAux[elementType].push(elementArray[j].data('id')) 
        }
      }
      //envia para novo componente de mudança
      handleOpenChangeAllSelectedElementsModal()
  }

  function SaveChange(event:FormEvent) {
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
        <VscChromeClose  onClick={onRequestClose} className='re
        act-modal-close' />
        <h2>Elements</h2>

        <div className="elements">
          <div>
              <h3>Nodes</h3>
              <div className='filtro'>
                <input type="text" name="NodeType" id="NodeType" placeholder="Filtrar por Type" onChange={e => filterElements(e.target.value, 'type', 'node' )}/>
                <input type="text" name="NodeValue" id="NodeValue" placeholder="Filtrar por Value" onChange={e => filterElements(e.target.value, 'value', 'node' )}/>
                <input type="text" name="NodeWeight" id="NodeWeight" placeholder="Filtrar por Weight" onChange={e => filterElements(e.target.value, 'weight', 'node' )}/>
              </div>
              <button className="changeElement"
                onClick={()=>ChangeSelectedallElements('node')} > 
                {/* onClick={() =>  {}} >  */}
                Change all Nodes Selecionados 
              </button>
              {arrayNodes}
              
          </div>
          <div>
              <h3>Edges</h3>
              <div className='filtro'>
                <input type="text" name="EdgeType" id="EdgeType" placeholder="Filtrar por Type" onChange={e => filterElements(e.target.value, 'type', 'edge' )}/>
                <input type="text" name="EdgeDelay" id="EdgeDelay" placeholder="Filtrar por Delay" onChange={e => filterElements(e.target.value, 'delay', 'edge' )}/>
                <input type="text" name="EdgeWeight" id="EdgeWeight" placeholder="Filtrar por Weight" onChange={e => filterElements(e.target.value, 'weight', 'edge' )}/>
              </div>
              <button className="changeElement"
                onClick={() => ChangeSelectedallElements('edge')} > 
                {/* onClick={() =>  {}} >  */}
                Change all Edges Selecionados 
              </button>
              {arrayEdges}
          </div>
        </div>


          <button  type="submit">
            Salvar alterações
          </button >


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
    </Modal>
  );
}