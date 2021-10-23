import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { VscChromeClose } from 'react-icons/vsc'
import { Container } from './styles';
import { CytoscapeContext } from '../../CytoscapeContext';

import { NodeModal } from '../NodeModal';
import { EdgeModal } from '../EdgeModal';


interface ElementModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

  // Verefificando se foi apertado checkbox dos nos e enviando a
  function toggleCheckBoxNodes (e:any, nodes:any) {
    const { checked } = e.target    
    console.log("toggleCheckBoxNodes",checked);
    alert(checked)
    
  }

  // Modal.setAppElement('#root2')


export function ElementModal({ isOpen, onRequestClose }: ElementModalProps) {
  const [cy] = useContext(CytoscapeContext);
  const [arrayNodes, setArrayNodes] = useState<any>()
  const [arrayEdges, setArrayEdges] = useState<any>()
  const [nodeElement,setNodeElement] = useState<any>()
  const [edgeElement,setEdgeElement] = useState<any>()
  const [isNodeModal, setIsNodeModal] = useState(false);
  const [isEdgeModal, setIsEdgeModal] = useState(false);

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

  useEffect(()=>{
    if(cy !== undefined){

      
        var eleNodes:any = []
        for (let key = 0; key < cy.nodes().length; key++) {

          eleNodes.push(
            <li key={key}> 
                  <input 
                    onChange={e => toggleCheckBoxNodes(e, cy.nodes()[key])} 
                    type="checkbox"  
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

        
        eleEdges.push(
          <li key={key}> 
                  <input 
                    onChange={e => toggleCheckBoxNodes(e, cy.edges()[key])} 
                    type="checkbox"
                    /> 
                    <h4> Edge {cy.edges()[key].data("id")} </h4>
                    
                    <button 
                      onClick={() =>  handleOpenEdgeModal(cy.edges()[key].data())} > 
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

  
  function filterElements(value:unknown,type:string){
    console.log(`Filtro igual ${value}, ${type}`);
    console.log(cy.edges().data());
    
  }
 

  // function EditElements(event:FormEvent) {
  //   event.preventDefault();
  // }

 

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >

      <Container>
        <VscChromeClose  onClick={onRequestClose} className='react-modal-close' />
        <h2>Elements</h2>

        <div className="elements">
          <div>
              <h3>Nodes</h3>
              <div className='filtro'>
                <input type="text" name="Type" id="Type" placeholder="Filtrar por Type" onChange={e => filterElements(e, 'type')}/>
                <input type="text" name="Value" id="Value" placeholder="Filtrar por Value" onChange={e => filterElements(e, 'value')}/>
                <input type="text" name="Weight" id="Weight" placeholder="Filtrar por Weight" onChange={e => filterElements(e, 'weight')}/>
              </div>
              <button className="changeElement"
                onClick={() => {} } > 
                {/* onClick={() =>  {}} >  */}
                Change all Nodes Selecionados 
              </button>
              {arrayNodes}
              
          </div>
          <div>
              <h3>Edges</h3>
              <div className='filtro'>
                <input type="text" name="Type" id="Type" placeholder="Filtrar por Type"/>
                <input type="text" name="Weight" id="Weight" placeholder="Filtrar por Weight"/>
                <input type="text" name="Delay" id="Delay" placeholder="Filtrar por Delay"/>
              </div>
              <button className="changeElement"
                onClick={() => {} } > 
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
    </Modal>
  );
}