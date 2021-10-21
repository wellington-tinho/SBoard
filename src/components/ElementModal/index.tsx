
import {FormEvent, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { VscChromeClose } from 'react-icons/vsc'
import { Container } from './styles';
import { CytoscapeContext } from '../../CytoscapeContext';



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



export function ElementModal({ isOpen, onRequestClose }: ElementModalProps) {
  const [cy] = useContext(CytoscapeContext);
  const [state, setState] = useState({checked: false})
  const [arrayNodes, setArrayNodes] = useState<any>()
  const [arrayEdges, setArrayEdges] = useState<any>()

  // console.log(cy.nodes()[3].data("weight")); // weight is the first ele's weight
  

  useEffect(()=>{
    // var divVisible = 'divVisible'
    // var buttonVerInfo = 'buttonVerInfo'
    if(cy !== undefined){

      
        var eleNodes:any = []
        for (let key = 0; key < cy.nodes().length; key++) {

          eleNodes.push(
            <li key={key}> 
                  <div>
                  <input 
                    onChange={e => toggleCheckBoxNodes(e, cy.nodes()[key])} 
                    defaultChecked={state.checked}
                    type="checkbox"  
                    /> 
                    <h4> Node {cy.nodes()[key].data("id")} </h4> 
                  </div> 
              </li>
          )
        }

      var eleEdges:any = []
      for (let key = 0; key < cy.nodes().length; key++) {

        
        eleEdges.push(
          <li key={key}> 
                  <div>
                  <input 
                    onChange={e => toggleCheckBoxNodes(e, cy.edges()[key])} 
                    defaultChecked={state.checked}
                    type="checkbox"
                    /> 
                    <h4> Edge {cy.edges()[key].data("id")} </h4> 
                  </div> 
              </li>
        )
      }
      
      
      
      setArrayNodes( <ul> {eleNodes} </ul> );
      setArrayEdges( <ul> {eleEdges} </ul> );
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cy])

  

 

  function EditElements(event:FormEvent) {
    event.preventDefault();

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
        <h2>Elements</h2>

        <div className="coluna">
          <div>
              <h3>Nodes</h3>
              <div className='Filtro'>
                <input type="text" name="Type" id="Type" />
                <input type="text" name="Weight" id="Weight" />
              </div>
              {arrayNodes}
              
          </div>
          <div>
              <h3>Edges</h3>
              <div className='Filtro'>
                <input type="text" name="Type" id="Type" />
                <input type="text" name="Weight" id="Weight" />
              </div>
              {arrayEdges}
          </div>
        </div>


          <button  type="submit">
            Salvar alterações
          </button >


      </Container>
    </Modal>
  );
}