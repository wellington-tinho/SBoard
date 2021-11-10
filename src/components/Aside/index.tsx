import { Container } from "./styles";

// import openOption from "../../assets/icons/import.png"
import menu from '../../assets/icons/menu-vertical.png'
import { useContext, useEffect, useState } from "react";
import { CytoscapeContext } from "../../CytoscapeContext";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


// Variavel global responsavel por conter um dicinoario com o Id do request e quais nós/edges foram alterados com esse Id
// Tentei deixar essa variavel global dentro de setColorGraph() mas sempre ele ficava sendo reecriada
var changeDicChecbox: { [index: string]: any; } = {};

export function Aside({ request }: any) {
  const [requestList, setRequestList] = useState<any>(request)
  const [cy] = useContext(CytoscapeContext);
  const [requestMenu, setRequestMenu] = useState<any>('Não há requisições para exibir, considere inportar ou criar algumas.')
  const [state, setState] = useState({ checked: false })
  var colors = ['#6A5ACD', '#0000CD', '#4682B4', '#00FFFF', '#00FF7F', '#00FF7F', '#ADFF2F', '#ADFF2F', '#DAA520', '#8B4513', '#BC8F8F', '#7B68EE', '#4B0082', '#9400D3', '#800080', '#FF00FF', '#C71585', '#FF1493', '#DB7093', '#CD5C5C', '#DC143C', '#FF0000', '#FF4500', '#B22222', '#FF8C00', '#FF8C00']

  // console.log(requestList);
  // console.log(request);

  // console.log((requestList) === (request));
  
  // console.log(Object.keys({request}.request).length)
  // console.log(Object.keys(requestList).length)


  
  
  


  // Funcao principal para colorir o grafo
  function setColorGraph(checked: any, request: any) {
    try {
      if (checked) {
        var randNum = (Math.floor(Math.random() * 100) + 1)
        var color = (colors)[Math.floor(Math.random() * (colors).length)]
        changeDicChecbox[request.id] = randNum

        // console.log('request',request);
        // console.log(request.vnd);

        // Object.keys(request.vnd).forEach(key=>{

        // })
        // cy.$(`#2`).neighborhood();

        console.log('node', cy.$(`node[id = "${randNum}"]`).json());
        console.log('edge', cy.$(`edge[id = "e${randNum}"]`).json());

        cy.style()
          .selector(`node[id = "${randNum}"]`)
          .style({ 'background-color': `${color}` })
          .update();

        cy.style()
          .selector(`edge[id = "e${randNum}"]`)
          .style({ 'line-color': `${color}` })
          .update();
        // .$(`edge[Delay = ${randNum}]`)

      }
      else {


        cy.style()
          .selector(`node[id = "${changeDicChecbox[request.id]}"]`)
          .style({ 'background-color': `grey` })
          .update();


        cy.style()
          .selector(`edge[id = "e${changeDicChecbox[request.id]}"]`)
          .style({ 'line-color': 'grey' })
          .update();
      }
    }
    catch (e) {
      alert('Crie ou importe um grafico para ver o resultado')
      console.log(e);
    }
  }

  // Verefificando se foi apertado checkbox dos requests e enviando para funcao de colorir
  function toggleCheckBoxRequest(e: any, request: any) {
    const { checked } = e.target
    setState({
      checked: checked
    })
    console.log(request);
    
    setColorGraph(checked, request)
  }

  // função para definir a visibilidade de informacoes da lista de requests
  const VisibleDiv = (divVisible: string, buttonVerInfo: string) => {

    const dataButton = window.document.getElementById(buttonVerInfo)
    if (window.document.getElementById(divVisible)?.getAttribute('style') === 'display: none;') {
      window.document.getElementById(divVisible)?.setAttribute('style', 'display: flex;')
      if (dataButton !== null) {
        dataButton.innerText = 'Enconder Info'
      }

    } else {
      window.document.getElementById(divVisible)?.setAttribute('style', 'display: none;')
      if (dataButton !== null) {
        dataButton.innerText = 'Ver Info'
      }
    }
  }

  // Criacao da sessão VIRTUAL REQUESTS após o componete ser carregado com o json na variavel de requests
  useEffect(() => {
    setRequestList(request)
  },[request])


  useEffect(() => {
  
    if (Object.keys(requestList).length !== 0) {
     

      var divVisible = 'divVisible'
      var buttonVerInfo = 'buttonVerInfo'
      var ele: any = []
      Object.keys(requestList).forEach(key => {
  

        ele.push(
          <li key={key}>
            <div>
              <input
                onChange={e => toggleCheckBoxRequest(e, requestList[key])}
                defaultChecked={state.checked}
                type="checkbox" name={key} id={key}
              />
              <h4> Request {key} </h4>
              <button
                id={buttonVerInfo + key}
                onClick={() => VisibleDiv((divVisible + key), (buttonVerInfo + key))} >
                Ver Info
              </button>
            </div>

            <div id={divVisible + key} className='visible' style={{ display: 'none' }}>
              <p>   Id : {requestList[key].id}                  </p>
              <p>   type_slice : {requestList[key].type_slice}  </p>
              <p>   created : {requestList[key].created}        </p>
              <p>   duration : {requestList[key].duration}      </p>
              <p>   period : {requestList[key].period}          </p>
              <p>   bandwidth : {requestList[key].bandwidth}    </p>
              <p>   delay : {requestList[key].delay}            </p>
              <p>   reliability : {requestList[key].reliability}</p>
              {/* <br />
                  <p>   vnd: {JSON.stringify(request[key].vnd, null, 4)} </p>  */}
              <br />
              <p>links: {JSON.stringify(requestList[key].links, null, 2)}</p>

            </div>

          </li>
        )
      })
          

      setRequestMenu(
        <>
          <ul className="listRequest">
            {ele}
          </ul>
        </>
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestList, state.checked])



  return (
    <Container>
      <main>
        <h2> Requests</h2>
        <button>
          <img src={menu} alt="Menu toggle Requests" />
        </button>
      </main>

      <div>
        <Tabs className='Tabs'>
      
            <TabList className='TabList'>
            
                <Tab className='Tab'> VNR </Tab>
                <Tab className='Tab'> Create </Tab>
                <Tab className='Tab'> Edition </Tab>
                <Tab className='Tab'> Others </Tab>
                {/* <Tab>Toad</Tab> */}
            </TabList>

          <fieldset>
            <TabPanel className='TabPanel'>

              {requestMenu}
          
              {/* Informaçao sobre os requests, e exibir detalhado */}
            </TabPanel>

            <TabPanel className='TabPanel'>
            <div>
              <h3>Informaçao geral da requiçao</h3>
              <input type="text" name="created-vnd"        id="created-creation"       placeholder="created" />
              <input type="text" name="duration-creation"         id="duration-creation"        placeholder="duration" />
              <input type="text" name="period-creation"        id="period-creation"       placeholder="period" />
              <input type="text" name="bandwidth-creation"            id="bandwidth-creation"           placeholder="bandwidth" />
              <input type="text" name="delay-creation"           id="delay-creation"          placeholder="delay" />
              <input type="text" name="reliability-creation"   id="reliability-creation"  placeholder="reliability" />
              <input type="text" name="type_slice-creation"     id="type_slice-creation"    placeholder="type_slice" />
             
            
              <button>
                Adcionar virtual node demand
              </button>
                  <input type="text" name="requested-vnd" id="requested-vnd" placeholder="created" />
                  <input type="text" name="vnr_id-vnd"    id="vnr_id-vnd"    placeholder="duration" />
                  <input type="text" name="domain-vnd"    id="domain-vnd"    placeholder="period" />
                  <input type="text" name="region-vnd"    id="region-vnd"    placeholder="bandwidth" />
                  <input type="text" name="type-vnd"      id="type-vnd"      placeholder="delay" />
                  <input type="text" name="period-vnd"    id="period-vnd"    placeholder="reliability" />
                  <input type="text" name="sink-vnd"      id="sink-vnd"      placeholder="type_slice" />

          
              <button>
                Adcionar Links
              </button>
              <select name="linkSource" id="linkSource" defaultValue={'DEFAULT'}>
                <option value='DEFAULT' disabled hidden>Select Slice</option>
                <option value="Link_id_1"> Link_id_1 </option>
                <option value="Link_id_2"> Link_id_2 </option>
              </select>

              <select name="LinkTarget" id="LinkTarget" defaultValue={'DEFAULT'}>
                <option value='DEFAULT' disabled hidden>Select Slice</option>
                <option value="Link_id_1"> Link_id_1 </option>
                <option value="Link_id_2"> Link_id_2 </option>
              </select>

              <input type="submit" value="Create Request"/>

            </div>
            </TabPanel>

            <TabPanel className='TabPanel'>
              lista com request com opc para editar
            </TabPanel>

            <TabPanel className='TabPanel'>
              Salvar
              Apagar tudo
              Concatenar com um novo
            </TabPanel>
          </fieldset>  
  
        </Tabs> 

      </div>
    </Container>
  );
}