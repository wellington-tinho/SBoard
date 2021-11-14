import { Container } from "./styles";

import { useContext, useEffect, useState } from "react";
import { CytoscapeContext } from "../../CytoscapeContext";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


// Variavel global responsavel por conter um dicinoario com o Id do request e quais nós/edges foram alterados com esse Id
// Tentei deixar essa variavel global dentro de setColorGraph() mas sempre ele ficava sendo reecriada
var changeDicChecbox: { [index: string]: any; } = {};

export function Aside({ request }: any) {
  const [cy] = useContext(CytoscapeContext);

  const [requestList, setRequestList] = useState<any>(request)
  const [ requestElementsHTML, setRequestElementsHTML ] = useState<any>([])
  const [requestMenuHTML, setRequestMenuHTML] = useState<any>('Não há requisições para exibir, considere importar ou criar algumas.')
  const [qtdRequests, setQtdRequests ] = useState(0)

  const [checboxState, setChecboxState] = useState( false )

  const colors = ['#6A5ACD', '#0000CD', '#4682B4', '#00FFFF', '#00FF7F', '#00FF7F', '#ADFF2F', '#ADFF2F', '#DAA520', '#8B4513', '#BC8F8F', '#7B68EE', '#4B0082', '#9400D3', '#800080', '#FF00FF', '#C71585', '#FF1493', '#DB7093', '#CD5C5C', '#DC143C', '#FF0000', '#FF4500', '#B22222', '#FF8C00', '#FF8C00']



  // Funcao principal para colorir o grafo
  function setColorGraph(checked: any, request: any) {
    try {
      if (checked) {
        var randNum = (Math.floor(Math.random() * 100) + 1)
        var color = (colors)[Math.floor(Math.random() * (colors).length)]
        changeDicChecbox[request.id] = randNum
        
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
      console.log('Crie ou importe um grafico para ver o resultado')
      console.log(e);
    }
  }

  // Verefificando se foi apertado checkbox dos requests e enviando para funcao de colorir
  function toggleCheckBoxRequest(e: any, request: any) {
    const { checked } = e.target
    setChecboxState(checked)
    console.log(request);
    setColorGraph(checked, request)
  }

  // função para definir a visibilidade de informacoes da lista de requests
  function visibleDiv(divVisible: string, buttonVerInfo: string){

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

  //funcao para criar lista de checkbox dos requests em html
  function createElementHTMLRequest(requestList:any){

    var divVisible = 'divVisible'
    var buttonVerInfo = 'buttonVerInfo'
    var auxRequestElementsHTML: any = []
    
     Object.keys(requestList).forEach(key => {

      auxRequestElementsHTML.push(
        <li key={key}>
          <div>
            <input
              onChange={e => toggleCheckBoxRequest(e, requestList[key])}
              defaultChecked={checboxState}
              type="checkbox" name={key} id={key}
            />
            <h4> Request {Number(key)+qtdRequests} </h4>
            <button
              id={buttonVerInfo + (Number(key)+qtdRequests)}
              onClick={() => visibleDiv((divVisible + (Number(key)+qtdRequests)), (buttonVerInfo + (Number(key)+qtdRequests)))} >
              Ver Info
            </button>
          </div>

          <div id={divVisible + (Number(key)+qtdRequests)} className='visible' style={{ display: 'none' }}>
      
            
            <p>   Id : {Number(key)+qtdRequests}              </p>
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
    setRequestElementsHTML(auxRequestElementsHTML)
  }

  function appendRequestList(file:any){ 
    const reader = new FileReader();
    reader.onload = function(e: any) {
      setQtdRequests(Object.keys(requestList).length);

      var prevsElements: any = []
      Object.keys(requestList).forEach(key => 
        prevsElements.push(requestList[key])
      )
      
      console.log('prevsElements \n',prevsElements);
      console.log('\n[...[JSON.parse(e.target.result)]][0] ]\n',[[...[JSON.parse(e.target.result)]][0]] );
      
      setRequestList( [ ...prevsElements, [[...[JSON.parse(e.target.result)]][0]] ] ); 
    };
    try {
      reader.readAsText(file.target.files[0]);
    } catch (error) {
      console.log(error,'reader');
    }
  };
  
 

  // Criacao da sessão VIRTUAL REQUESTS após o componete ser carregado com o json na variavel de requests
  useEffect(() => {
    if (Object.keys(request).length !== 0) {
      console.log(request);
      setRequestList(request)
    }
  },[request])

  //apos o carremento do JSON de resquests na variavel requestList, é criado uma lista de checkbox em html
  useEffect( () => {
    console.log('requestList:\n',requestList);
    
     createElementHTMLRequest(requestList)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestList])

  //apos criado uma lista de checkbox em html, é encapsulado tudo dentro de um <ul> </ul>
  useEffect(() => {
    if (Object.keys(requestElementsHTML).length !== 0) {
      
      setRequestMenuHTML(
        <ul className="listRequest">      
        {requestElementsHTML}
      </ul>
    )
  }
  },[requestElementsHTML])


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
            <TabPanel className='TabPanelHome'>

              {requestMenuHTML}
          
              {/* Informaçao sobre os requests, e exibir detalhado */}
            </TabPanel>

            <TabPanel className='TabPanelHome'>
            <div className='InfoRequest'>
              <h4>Informaçao geral da requiçao</h4>
              <input type="text" name="created-vnd"           id="created-creation"     placeholder="created" />
              <input type="text" name="duration-creation"     id="duration-creation"    placeholder="duration" />
              <input type="text" name="period-creation"       id="period-creation"      placeholder="period" />
              <input type="text" name="bandwidth-creation"    id="bandwidth-creation"   placeholder="bandwidth" />
              <input type="text" name="delay-creation"        id="delay-creation"       placeholder="delay" />
              <input type="text" name="type_slice-creation"   id="type_slice-creation"  placeholder="type_slice" />
              <input type="text" name="reliability-creation"  id="reliability-creation" placeholder="reliability" />
            </div>

            <div className='InfoRequest'>
                <h4>Informaçao virtual node demand</h4>
                <input type="text" name="requested-vnd" id="requested-vnd" placeholder="created" />
                <input type="text" name="vnr_id-vnd"    id="vnr_id-vnd"    placeholder="duration" />
                <input type="text" name="domain-vnd"    id="domain-vnd"    placeholder="period" />
                <input type="text" name="region-vnd"    id="region-vnd"    placeholder="bandwidth" />
                <input type="text" name="type-vnd"      id="type-vnd"      placeholder="delay" />
                <input type="text" name="period-vnd"    id="period-vnd"    placeholder="reliability" />
                <input type="text" name="sink-vnd"      id="sink-vnd"      placeholder="type_slice" />
              <button>
                Adcionar
              </button>
            </div>

          
              <h4>Link Source / Target</h4>
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
              <button>
                Adcionar Links
              </button>

              <input type="submit" value="Create Request"/>

            </TabPanel>

            <TabPanel className='TabPanel'>
              lista com request com opc para editar
            </TabPanel>

            <TabPanel className='TabPanel'>
              Salvar
              Apagar tudo
              <button >
                <input type="file" name="UploadJSON" id="UploadJSON"  onChange={appendRequestList} />
              </button>
            </TabPanel>
          </fieldset>  
  
        </Tabs> 

      </div>
    </Container>
  );
}