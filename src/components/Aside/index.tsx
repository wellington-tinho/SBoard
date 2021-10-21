import { Container } from "./styles";

import openOption from "../../assets/icons/import.png"
import menu from '../../assets/icons/menu-vertical.png' 
import { useContext, useEffect, useState } from "react";
import { CytoscapeContext } from "../../CytoscapeContext";

// Variavel global responsavel por conter um dicinoario com o Id do request e quais nós/edges foram alterados com esse Id
// Tentei deixar essa variavel global dentro de setColorGraph() mas sempre ele ficava sendo reecriada
var changeDicChecbox: { [index: string]: any; } = {}; 

export function Aside({request}:any) {
  const [cy] = useContext(CytoscapeContext);
  const [requestMenu, setRequestMenu] = useState<any>()
  const [state, setState] = useState({checked: false})
  var colors = ['#6A5ACD','#0000CD','#4682B4','#00FFFF','#00FF7F','#00FF7F','#ADFF2F','#ADFF2F','#DAA520','#8B4513','#BC8F8F','#7B68EE','#4B0082','#9400D3','#800080','#FF00FF','#C71585','#FF1493','#DB7093','#CD5C5C','#DC143C','#FF0000','#FF4500','#B22222','#FF8C00','#FF8C00']
  
 


  // Funcao principal para colorir o grafo
  function setColorGraph(checked:any,request:any){
    try {
      if(checked){
        var randNum = (Math.floor(Math.random() * 100) + 1)
        var color = (colors)[Math.floor(Math.random()*(colors).length)]
        changeDicChecbox[request.id] = randNum
        
        // console.log('request',request);
        // console.log(request.vnd);
        
        // Object.keys(request.vnd).forEach(key=>{

        // })
        // cy.$(`#2`).neighborhood();
        
        console.log('node',cy.$(`node[id = "${randNum}"]`).json());
        console.log('edge',cy.$(`edge[id = "e${randNum}"]`).json());
  
          cy.style()
          .selector(`node[id = "${randNum}"]`)
          .style({'background-color': `${color}`})
          .update();
     
          cy.style()
          .selector(`edge[id = "e${randNum}"]`)
          .style({'line-color': `${color}`})
          .update();
          // .$(`edge[Delay = ${randNum}]`)
          
      }
        else{
          

          cy.style()
          .selector(`node[id = "${changeDicChecbox[request.id]}"]`)
          .style({'background-color': `grey`})
          .update();
        

          cy.style()
          .selector(`edge[id = "e${changeDicChecbox[request.id]}"]`)
          .style({'line-color': 'grey'})
          .update();   
        }
    }
    catch (e) {
      console.log(e); 
    }
  }
  
  // Verefificando se foi apertado checkbox dos requests e enviando para funcao de colorir
  function toggleCheckBoxRequest (e:any, request:any) {
    const { checked } = e.target    
    setState({
      checked: checked
    })
    setColorGraph(checked,request)
  }

  // função para definir a visibilidade de informacoes da lista de requests
  const VisibleDiv =(divVisible:string, buttonVerInfo:string) => {
  
    const dataButton = window.document.getElementById(buttonVerInfo)
    if(window.document.getElementById(divVisible)?.getAttribute('style') === 'display: none;'){
      window.document.getElementById(divVisible)?.setAttribute('style','display: flex;')  
      if (dataButton !== null){
        dataButton.innerText = 'Enconder Info'  
      }
    
    }else{
      window.document.getElementById(divVisible)?.setAttribute('style','display: none;')
      if (dataButton !== null){
        dataButton.innerText = 'Ver Info'
      } 
    }
  }
    
  // Criacao da sessão VIRTUAL REQUESTS após o componete ser carregado com o json na variavel de requests
  useEffect(() => {   
   if(request){
    var divVisible = 'divVisible'
    var buttonVerInfo = 'buttonVerInfo'
    var ele:any = []
    Object.keys(request).forEach(key=>{
      
   
      ele.push(
            <li key={key}> 
                <div>
                <input 
                  onChange={e => toggleCheckBoxRequest(e, request[key])} 
                  defaultChecked={state.checked}
                  type="checkbox" name={key} id={key} 
                  /> 
                    <h4> Request {key} </h4> 
                    <button 
                      id={buttonVerInfo+key} 
                      onClick={() => VisibleDiv((divVisible + key),(buttonVerInfo+key))} > 
                      Ver Info
                    </button>
                  </div>

                <div id={divVisible + key} className='visible' style={{display: 'none'}}>
                  <p>   Id : {request[key].id}                  </p>
                  <p>   type_slice : {request[key].type_slice}  </p>
                  <p>   created : {request[key].created}        </p>
                  <p>   duration : {request[key].duration}      </p>
                  <p>   period : {request[key].period}          </p>
                  <p>   bandwidth : {request[key].bandwidth}    </p>
                  <p>   delay : {request[key].delay}            </p>
                  <p>   reliability : {request[key].reliability}</p>
                  {/* <br />
                  <p>   vnd: {JSON.stringify(request[key].vnd, null, 4)} </p>  */}
                  <br />
                  <p>links: {JSON.stringify(request[key].links, null, 2)}</p>
                  
                </div>

            </li>
        )
    })
  
    
      setRequestMenu(
        
        <>
          <button > 
            <img src={openOption} alt="Abrir opção" />  
            <h3 >Virtual Requests</h3>
          </button> 
          <ul>
            {ele}            
          </ul>
        </>
      );
   }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[request,state.checked])
  
  

  return (
    <Container>
      <main>
        <h2> Requests</h2>
        <button> 
          <img src={menu} alt="Menu toggle Requests" />
        </button>
      </main>

      <div>

        <ul>
          <li>
            <button> 
              <img src={openOption} alt="Abrir opção" />  
              <h3>Creation</h3>
            </button>

            <div>
              <input type="text" name="Topology-creation"        id="Topology-creation"     placeholder="Topology" />
              <input type="text" name="Service-creation"         id="Service-creation"      placeholder="Service" />
              <input type="text" name="Duration-creation"        id="Duration-creation"     placeholder="Duration" />
              <input type="text" name="Band-creation"            id="Band-creation"         placeholder="Band" />
              <input type="text" name="Delay-creation"           id="Delay-creation"        placeholder="Delay" />
              <input type="text" name="KnotsQuantity-creation"  id="KnotsQuantity-creation"placeholder="Knots Quantity" />
              <input type="text" name="Reliability-creation"     id="Reliability-creation"  placeholder="Reliability" />
             
              <select name="SliceTypes" id="SliceTypes" defaultValue={'DEFAULT'}>
                <option value='DEFAULT' disabled hidden>Select Slice</option>
                <option value="SliceX"> SliceX </option>
                <option value="SliceY"> SliceY </option>
                <option value="SliceZ"> SliceZ </option>
              </select>

              <input type="submit" value="Create Request"/>

            </div>

          </li>

          <li>
            <button> 
              <img src={openOption} alt="Abrir opção" /> 
              <h3>Edition</h3>
            </button>

            <div>
              <select name="Requests" id="Requests" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled hidden>Select Request</option>
                <option value="Request1"> Request1 </option>
                <option value="Request2"> Request2 </option>
                <option value="Request3"> Request3 </option>
              </select>
              
              <select name="Topologys" id="Topologys" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled hidden>Select Topology</option>
                <option value="TopologyX"> TopologyX </option>
                <option value="TopologyY"> TopologyY </option>
                <option value="TopologyZ"> TopologyZ </option>
              </select>
              
              <input type="text" name="Service-edition"         id="Service-edition"      placeholder="Service" />
              <input type="text" name="Duration-edition"        id="Duration-edition"     placeholder="Duration" />
              <input type="text" name="Band-edition"            id="Band-edition"         placeholder="Band" />
              <input type="text" name="Delay-edition"           id="Delay-edition"        placeholder="Delay" />
              <input type="text" name="KnotsQuantity-edition"   id="KnotsQuantity-edition"placeholder="Knots Quantity" />
              <input type="text" name="Reliability-edition"     id="Reliability-edition"  placeholder="Reliability" />
              
              <select name="SliceTypes" id="SliceTypes" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled hidden>Select Slice</option>
                <option value="SliceX"> SliceX </option>
                <option value="SliceY"> SliceY </option>
                <option value="SliceZ"> SliceZ </option>
              </select>

              <input type="submit" value="Create Request"/>
   
            </div>

          </li>



          <li>
              <button> 
                <img src={openOption} alt="Abrir opção" />  
                <h3>Preview</h3>
              </button>
              
              <div>
                <select name="Created Request" id="CreatedRequest" defaultValue={'DEFAULT'}>
                  <option value="DEFAULT" disabled hidden>Created Request</option>
                  <option value="Request1"> Request1 </option>
                  <option value="Request2"> Request2 </option>
                  <option value="Request3"> Request3 </option>
                  <option value="Request4"> Request5 </option>
                  <option value="RequestX"> RequestX </option>
    
                </select>
                <select name="Mapped Requests" id="MappedRequests">
                  <option value="" disabled hidden>Mapped Request</option>
                  <option value="Request1"> Request1 </option>
                  <option value="Request2"> Request2 </option>
                  <option value="Request3"> Request3 </option>
                  <option value="Request4"> Request5 </option>
                  <option value="RequestX"> RequestX </option>
                </select>

                <select name="Change Requests" id="ChangeRequests">
                  <option value="" disabled hidden>Change Request</option>
                  <option value="Request1"> Request1 </option>
                  <option value="Request2"> Request2 </option>
                  <option value="Request3"> Request3 </option>
                  <option value="Request4"> Request5 </option>
                  <option value="RequestX"> RequestX </option>
                </select>

                <select name="Delete Requisitions" id="DeleteRequisitions">
                  <option value="" disabled hidden>Del Requisition</option>
                  <option value="Request1"> Request1 </option>
                  <option value="Request2"> Request2 </option>
                  <option value="Request3"> Request3 </option>
                  <option value="Request4"> Request5 </option>
                  <option value="RequestX"> RequestX </option>
                </select>

                <select name="Remove Mappend Requests" id="RemoveMappendRequests">
                  <option value="" disabled hidden>Del Mappend Requests</option>
                  <option value="Request1"> Request1 </option>
                  <option value="Request2"> Request2 </option>
                  <option value="Request3"> Request3 </option>
                  <option value="Request4"> Request5 </option>
                  <option value="RequestX"> RequestX </option>
                </select>
              </div>

          </li>

          <li className='request'>
              {requestMenu} 
          </li>


        </ul>
      </div>
    </Container>
  );
}