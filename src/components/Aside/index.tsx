import { Container } from "./styles";

import { useContext, useEffect, useState, useReducer } from "react";
import { CytoscapeContext } from "../../CytoscapeContext";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import menu from '../../assets/icons/menu-vertical.png'

interface virtualNodeDemandInterface{
  id: number;
  requested: number;
  vnr_id: number;
  domain: number;
  region: number;
  type: number | string; 
  period: number;
  sink: number;
}



interface requestUnicInterface {
  id: number;
  vnd: virtualNodeDemandInterface[];
  links: [[number]];
  created: number;  
  duration: number;
  period: number;
  bandwidth: number;
  delay: number;
  reliability: number;
  type_slice: string;
}



const formCreateRequest = (state:any, event:any) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

const formCreateVND = (state:any, event:any) => {
  return {
    ...state,
    [event.name]: event.value
  }
}


// Variavel global responsavel por conter um dicinoario com o Id do request e quais nós/edges foram alterados com esse Id
// Tentei deixar essa variavel dentro de setColorGraph() mas sempre ele ficava sendo reecriada
var changeDicChecbox: { [index: string]: any; } = {};

export function Aside({ request }: any) {
  const [cy] = useContext(CytoscapeContext);

  const [requestList, setRequestList] = useState<requestUnicInterface[]>(request)
  const [ requestElementsHTML, setRequestElementsHTML ] = useState<any>([])
  const [requestMenuHTML, setRequestMenuHTML] = useState<any>('Não há requisições para exibir, considere importar ou criar algumas.')
  const qtdRequests = (0)
 
  
  const [checboxState, setChecboxState] = useState( false )
  const colors = ['#6A5ACD', '#0000CD', '#4682B4', '#00FFFF', '#00FF7F', '#00FF7F', '#ADFF2F', '#ADFF2F', '#DAA520', '#8B4513', '#BC8F8F', '#7B68EE', '#4B0082', '#9400D3', '#800080', '#FF00FF', '#C71585', '#FF1493', '#DB7093', '#CD5C5C', '#DC143C', '#FF0000', '#FF4500', '#B22222', '#FF8C00', '#FF8C00']

  const [formRequest, setFormRequest] = useReducer(formCreateRequest, {});
  const [formVND,     setFormVND]     = useReducer(formCreateVND, {});
  const [arrayResponseformVND,     setArrayResponseFormVND]     = useState<virtualNodeDemandInterface[]>([]);

  const [createLinksSourceRequest, setCreateLinksSourceRequest] = useState<any>()
  const [createLinksTargetRequest, setCreateLinksTargetRequest] = useState<any>()

  const [createLinksRequest, setCreateLinksRequest] = useState<any>([])


  
  const handleSubmitCreateRequest = (event:any) => {
    event.preventDefault();
    console.log('handleSubmitCreateRequest');
    console.log(formRequest);
    console.log(arrayResponseformVND);
    console.log(createLinksRequest);
  }

  const handleSubmitVND = (event:any) => {
    event.preventDefault();
    console.log('handleSubmitVND');
    setArrayResponseFormVND(prevState => [...prevState, formVND]);

    arrayResponseformVND.map((__, index) => 
      arrayResponseformVND[index]['id'] = index 
    )
  }

  const handleSubmitCreateLinksRequest = (event:any) => {
    event.preventDefault();
    console.log('handleSubmitCreateLinksRequest');
    var newState = [Number(createLinksSourceRequest['value']), Number(createLinksTargetRequest['value'])]
    setCreateLinksRequest([...createLinksRequest ,newState] );
  }

  const handleChangeRequest = (event: { target: { name: string; value: any; }; }) => {
    console.log('handleChangeRequest');
    setFormRequest({
      name: event.target.name,
      value: event.target.value,
    });
    console.log(formRequest);
    
  }

  const handleChangeVND = (event: { target: { name: any; value: any; }; }) => {
    console.log('handleChangeVND');
    setFormVND({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChangeCreateLinksSourceRequest = (event: { target: { name: any; value: any; }; }) => {
    console.log('handleChangeCreateLinksSourceRequest');
    console.log({
      name: event.target.name,
      value: event.target.value,
    });
    setCreateLinksSourceRequest({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChangeCreateLinksTargetRequest = (event: { target: { name: any; value: any; }; }) => {
    console.log('handleChangeCreateLinksTargetRequest');
    console.log({
      name: event.target.name,
      value: event.target.value,
    });
    setCreateLinksTargetRequest({
      name: event.target.name,
      value: event.target.value,
    });
  }
  
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

  //Adicionar novos Requests na lista de requisiçoes
  function appendRequestList(file:any){ 
    const reader = new FileReader();
    reader.onload = function(e: any) {
      // setQtdRequests(Object.keys(requestList).length);

      
      var prevsElements: any = []
      Object.keys(requestList).forEach(key => 
        prevsElements.push(requestList[Number(key)])
      )
  
      //Adicionadno novos valores á lista de valores inseridos via menu bar
      Object.keys([JSON.parse(e.target.result)][0]).forEach(key => 
        prevsElements.push(JSON.parse(e.target.result)[key])
      )
      
      setRequestList(prevsElements)
    };
    
    try {
      reader.readAsText(file.target.files[0]);
    } catch (error) {
      console.error('Erro de reader nao foi inserido um arquivo para ler');
    }
  };
  
  // Criacao da sessão VIRTUAL REQUESTS após o componete ser carregado com o json na variavel de requests
  useEffect(() => {
    if (Object.keys(request).length !== 0) {
      setRequestList(request)
    }
  },[request])

  //apos o carremento do JSON de resquests na variavel requestList, é criado uma lista de checkbox em html
  useEffect( () => {
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

              <form onSubmit={handleSubmitCreateRequest}>

                <div className='InfoRequest'>
                  <h4>Informaçao geral da requiçao</h4>
                  <input type="text" name="created"      id="created-creation"     placeholder="created"      onChange={handleChangeRequest} required/>
                  <input type="text" name="duration"     id="duration-creation"    placeholder="duration"     onChange={handleChangeRequest} required/>
                  <input type="text" name="period"       id="period-creation"      placeholder="period"       onChange={handleChangeRequest} required/>
                  <input type="text" name="bandwidth"    id="bandwidth-creation"   placeholder="bandwidth"    onChange={handleChangeRequest} required/>
                  <input type="text" name="delay"        id="delay-creation"       placeholder="delay"        onChange={handleChangeRequest} required/>
                  <input type="text" name="reliability"  id="reliability-creation" placeholder="reliability"  onChange={handleChangeRequest} required/>
                  <input type="text" name="type_slice"   id="type_slice-creation"  placeholder="type_slice"   onChange={handleChangeRequest} required/>
                </div>

                <div className='InfoRequest'>
                  <h4>Informaçao virtual node demand</h4>
                  <input type="text" name="requested" id="requested-vnd" placeholder="requested-vnd"  onChange={handleChangeVND} required/>
                  <input type="text" name="vnr_id"    id="vnr_id"        placeholder="vnr_id"         onChange={handleChangeVND} required/>
                  <input type="text" name="domain"    id="domain-vnd"    placeholder="domain-vnd"     onChange={handleChangeVND} required/>
                  <input type="text" name="region"    id="region-vnd"    placeholder="region-vnd"     onChange={handleChangeVND} required/>
                  <input type="text" name="type"      id="type-vnd"      placeholder="type-vnd"       onChange={handleChangeVND} required/>
                  <input type="text" name="period"    id="period-vnd"    placeholder="period-vnd"     onChange={handleChangeVND} required/>
                  <input type="text" name="sink"      id="sink-vnd"      placeholder="sink-vnd"       onChange={handleChangeVND} required/>
                  <button  onClick={handleSubmitVND}>
                    Adcionar
                  </button>
                </div>
              
                  <h4>Link Source / Target</h4>
                  <select name="linkSource" id="linkSource" defaultValue={'DEFAULT'} onChange={handleChangeCreateLinksSourceRequest} required>
                    <option value='DEFAULT' disabled hidden>Select Slice</option>
                    {
                      arrayResponseformVND.map((__, index) => {
                        // arrayResponseformVND[index]['vnr_id'] = index
                          return <option key={index} value={index}> link {index} </option>
                        } 
                      )
                    }    
                  </select>

                  <select name="LinkTarget" id="LinkTarget" defaultValue={'DEFAULT'} onChange={handleChangeCreateLinksTargetRequest} required>
                  <option value='DEFAULT' disabled hidden>Select Slice</option>
                    {
                      arrayResponseformVND.map((__, index) => {
                        // arrayResponseformVND[index]['vnr_id'] = index
                        return <option key={index} value={index}> link {index} </option>
                      } 
                      )
                    }
                  </select>
                  <button onClick={handleSubmitCreateLinksRequest}>
                    Adcionar Links
                  </button>
              

                <button type="submit">
                  Create Request
                </button>
              </form>
            </TabPanel>

            <TabPanel className='TabPanel'>
              lista com request com opc para editar
            </TabPanel>

            <TabPanel className='TabPanel'>
              
              Salvar
              Apagar tudo
              <div>
                <input type="file" name="UploadJSON" id="UploadJSON"  onChange={appendRequestList}  accept=".json,.JSON" />
                {/* <label className='UploadJSON' htmlFor="UploadJSON"> Concatenar nova requisiçao </label>   */}
              </div>
            </TabPanel>
          </fieldset>  
  
        </Tabs> 

      </div>
    </Container>
  );
}