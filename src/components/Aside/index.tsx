import { Container } from "./styles";
import {qtd_vnrs} from '../../data/setup.json';

import { useContext, useEffect, useState, useReducer } from "react";
import { CytoscapeContext } from "../../CytoscapeContext";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import menu from '../../assets/icons/menu-vertical.png'
import { CreateRequest } from "./createRequest";

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
  const [requestElementsHTML, setRequestElementsHTML] = useState<any>([])
  const [requestMenuHTML, setRequestMenuHTML] = useState<any>()
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
    formRequest['id'] = (Object.keys(requestList).length !== 0) ? Object.keys(requestList).length + 1 :  Object.keys(requestList).length
    const requestCreatedManually = {...formRequest} 
    requestCreatedManually['vnd'] = {...arrayResponseformVND} 
    requestCreatedManually['links'] = [...createLinksRequest]

    setRequestList([requestCreatedManually])
    // createElementHTMLRequest(requestList)
    console.log("requestCreatedManually",[requestCreatedManually])
    console.log("requestList",requestList)
  }


  const handleSubmitVND = (event:any) => {
    event.preventDefault();
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
    setFormRequest({
      name: event.target.name,
      value: event.target.value,
    });
    
  }

  const handleChangeVND = (event: { target: { name: any; value: any; }; }) => {
    setFormVND({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChangeCreateLinksSourceRequest = (event: { target: { name: any; value: any; }; }) => {
    setCreateLinksSourceRequest({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChangeCreateLinksTargetRequest = (event: { target: { name: any; value: any; }; }) => {
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

  // Verificando se foi apertado checkbox dos requests e enviando para funcao de colorir
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
      
            <strong>Mudar visualização</strong>
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
            <TabPanel className='TabPanelVNR'>
              {/* Informaçao sobre os requests, e exibir detalhado */}
              {requestMenuHTML||<p>Não há requisições para exibir, considere importar ou criar algumas.</p>}
            </TabPanel>

          <CreateRequest />
            <TabPanel className='TabPanelCreate'>
              <Tabs forceRenderTabPanel>

                <TabList>
                  <Tab>Create a Request</Tab>
                  <Tab>Create set of Requests</Tab>
                  <Tab>Generate Requests</Tab>
                </TabList>

                <TabPanel>
                  <form onSubmit={handleSubmitCreateRequest}>
                    <div className='InfoGeneralRequest'>
                      <h4>Informação geral da requição</h4>
                      <div> 
                        <p> created </p> 
                        <input type="text" name="created"      id="created-creation"     placeholder="created"      onChange={handleChangeRequest} />
                      </div> 

                      <div> 
                        <p> duration </p> 
                        <input type="text" name="duration"     id="duration-creation"    placeholder="duration"     onChange={handleChangeRequest} />
                      </div> 

                      <div> 
                        <p> period </p> 
                        <input type="text" name="period"       id="period-creation"      placeholder="period"       onChange={handleChangeRequest} />
                      </div> 

                      <div> 
                        <p> bandwidth </p> 
                        <input type="text" name="bandwidth"    id="bandwidth-creation"   placeholder="bandwidth"    onChange={handleChangeRequest} />
                      </div> 

                      <div> 
                        <p> delay </p> 
                        <input type="text" name="delay"        id="delay-creation"       placeholder="delay"        onChange={handleChangeRequest} />
                      </div> 

                      <div> 
                        <p> reliability </p> 
                        <input type="text" name="reliability"  id="reliability-creation" placeholder="reliability"  onChange={handleChangeRequest} />
                      </div> 

                      <div> 
                        <p> type_slice </p> 
                        <input type="text" name="type_slice"   id="type_slice-creation"  placeholder="type_slice"   onChange={handleChangeRequest} />
                      </div> 

                    </div>

                    <div className='InfoVNDRequest'>

                      <h4>Informaçao virtual node demand</h4>
                      <div> 
                        <p> vnr_id </p> 
                        <input type="text" name="vnr_id"    id="vnr_id"        placeholder="vnr_id"       onChange={handleChangeVND} disabled/>
                      </div> 

                      <div> 
                        <p> requested </p> 
                        <input type="text" name="requested" id="requested-vnd" placeholder="requested-vnd"  onChange={handleChangeVND} />
                      </div> 


                      <div> 
                        <p> domain </p> 
                        <input type="text" name="domain"    id="domain-vnd"    placeholder="domain-vnd"     onChange={handleChangeVND} />
                      </div> 

                      <div> 
                        <p> region </p> 
                        <input type="text" name="region"    id="region-vnd"    placeholder="region-vnd"     onChange={handleChangeVND} />
                      </div> 

                      <div> 
                        <p> type </p> 
                        <input type="text" name="type"      id="type-vnd"      placeholder="type-vnd"       onChange={handleChangeVND} />
                      </div> 

                      <div> 
                        <p> period </p> 
                        <input type="text" name="period"    id="period-vnd"    placeholder="period-vnd"     onChange={handleChangeVND} />
                      </div> 

                      <div> 
                        <p> sink </p> 
                        <input type="text" name="sink"      id="sink-vnd"      placeholder="sink-vnd"       onChange={handleChangeVND} />
                      </div> 

                      <button  onClick={handleSubmitVND}>
                        Adcionar
                      </button>
                    </div>
                    
                    <h4>Link Source / Target</h4>
                    <select name="linkSource" id="linkSource" defaultValue={'DEFAULT'} onChange={handleChangeCreateLinksSourceRequest} >
                      <option value='DEFAULT' disabled hidden>Select Slice</option>
                      {
                        arrayResponseformVND.map((__, index) => {
                          // arrayResponseformVND[index]['vnr_id'] = index
                          return <option key={index} value={index}> link {index} </option>
                        })
                      }    
                    </select>

                    <select name="LinkTarget" id="LinkTarget" defaultValue={'DEFAULT'} onChange={handleChangeCreateLinksTargetRequest} >
                    <option value='DEFAULT' disabled hidden>Select Slice</option>
                      {
                        arrayResponseformVND.map((__, index) => {
                          // arrayResponseformVND[index]['vnr_id'] = index
                          return <option key={index} value={index}> link {index} </option>
                        })
                      }
                    </select>
                    <button onClick={handleSubmitCreateLinksRequest}>
                      Adcionar Links
                    </button>
                    
                    <button onClick={()=>{console.log('shit');
                    }}>
                      Limpar dados
                    </button>
                    <button type="submit">
                      Create Request
                    </button>
                  </form>
                </TabPanel>

                <TabPanel>
                   <form onSubmit={handleSubmitCreateRequest}>
                    <div className='InfoGeneralRequest'>
                      <h4>Informação geral das requições</h4>
                      <div> 
                        <p> created </p> 
                        <input type="text" name="created"      id="created-creation"     placeholder="created"      onChange={handleChangeRequest} />
                      </div> 

                      <div> 
                        <p> duration </p> 
                        <input type="text" name="duration"     id="duration-creation"    placeholder="duration"     onChange={handleChangeRequest} />
                      </div> 

                      <div> 
                        <p> period </p> 
                        <input type="text" name="period"       id="period-creation"      placeholder="period"       onChange={handleChangeRequest} />
                      </div> 

                      <div> 
                        <p> bandwidth </p> 
                        <input type="text" name="bandwidth"    id="bandwidth-creation"   placeholder="bandwidth"    onChange={handleChangeRequest} />
                      </div> 

                      <div> 
                        <p> delay </p> 
                        <input type="text" name="delay"        id="delay-creation"       placeholder="delay"        onChange={handleChangeRequest} />
                      </div> 

                      <div> 
                        <p> reliability </p> 
                        <input type="text" name="reliability"  id="reliability-creation" placeholder="reliability"  onChange={handleChangeRequest} />
                      </div> 

                      <div> 
                        <p> type_slice </p> 
                        <input type="text" name="type_slice"   id="type_slice-creation"  placeholder="type_slice"   onChange={handleChangeRequest} />
                      </div> 

                    </div>

                    <div className='InfoVNDRequest'>

                      <h4>Informaçao virtual node demand</h4>
                      <div> 
                        <p> vnr_id </p> 
                        <input type="text" name="vnr_id"    id="vnr_id"        placeholder="vnr_id"       onChange={handleChangeVND} disabled/>
                      </div> 

                      <div> 
                        <p> requested </p> 
                        <input type="text" name="requested" id="requested-vnd" placeholder="requested-vnd"  onChange={handleChangeVND} />
                      </div> 


                      <div> 
                        <p> domain </p> 
                        <input type="text" name="domain"    id="domain-vnd"    placeholder="domain-vnd"     onChange={handleChangeVND} />
                      </div> 

                      <div> 
                        <p> region </p> 
                        <input type="text" name="region"    id="region-vnd"    placeholder="region-vnd"     onChange={handleChangeVND} />
                      </div> 

                      <div> 
                        <p> type </p> 
                        <input type="text" name="type"      id="type-vnd"      placeholder="type-vnd"       onChange={handleChangeVND} />
                      </div> 

                      <div> 
                        <p> period </p> 
                        <input type="text" name="period"    id="period-vnd"    placeholder="period-vnd"     onChange={handleChangeVND} />
                      </div> 

                      <div> 
                        <p> sink </p> 
                        <input type="text" name="sink"      id="sink-vnd"      placeholder="sink-vnd"       onChange={handleChangeVND} />
                      </div> 

                      <button  onClick={handleSubmitVND}>
                        Adcionar
                      </button>
                    </div>
                    
                    <h4>Link Source / Target</h4>
                    <select name="linkSource" id="linkSource" defaultValue={'DEFAULT'} onChange={handleChangeCreateLinksSourceRequest} >
                      <option value='DEFAULT' disabled hidden>Select Slice</option>
                      {
                        arrayResponseformVND.map((__, index) => {
                          // arrayResponseformVND[index]['vnr_id'] = index
                          return <option key={index} value={index}> link {index} </option>
                        })
                      }    
                    </select>

                    <select name="LinkTarget" id="LinkTarget" defaultValue={'DEFAULT'} onChange={handleChangeCreateLinksTargetRequest} >
                    <option value='DEFAULT' disabled hidden>Select Slice</option>
                      {
                        arrayResponseformVND.map((__, index) => {
                          // arrayResponseformVND[index]['vnr_id'] = index
                          return <option key={index} value={index}> link {index} </option>
                        })
                      }
                    </select>
                    <button onClick={handleSubmitCreateLinksRequest}>
                      Adcionar Links
                    </button>
                    
                    <button onClick={()=>{console.log('shit');
                    }}>
                      Limpar dados
                    </button>
                    <input 
                      onChange={
                        event => console.log("create_qtd_vnrs",( Number(event.target.value) ))
                      } 
                      type="number" name="create_qtd_vnrs" 
                      id="create_qtd_vnrs" 
                      placeholder={String(qtd_vnrs)} 
                    />
                    <button type="submit">
                      Create Request
                    </button>
                  </form>
                </TabPanel>
                
                <TabPanel>
                <form onSubmit={handleSubmitCreateRequest}>

                    <div className='InfoGeneralRequest'>

                      <h4>Informe quantas requisições deseja Gerar</h4>
                      <div> 
                        {/* <p> created </p>  */}
                        <input type="number"   placeholder="{dado vindo do setup}"     onChange={handleChangeRequest} />
                      </div> 
                    </div>

                    <button type="button">
                      Gerar
                    </button>

                </form>
                </TabPanel>
           
    
              </Tabs>
             
            </TabPanel>

            <TabPanel className='TabPanelEdition'>
              <p>Lista com requests com opção para editar cada uma das mesmas</p> 
            </TabPanel>

            <TabPanel className='TabPanelOthers'>
              <button disabled> Baixar Requests</button>
              <button disabled> Limpar Todas Requests</button>
              
              <div className='UploadJSON'>
                <input 
                  type="file" 
                  name="UploadJSON" 
                  id="UploadJSON"  
                  onChange={appendRequestList} 
                  hidden={true}  
                  accept=".json,.JSON"
                />
                {/* <label htmlFor="UploadJSON">Append JSON</label> */}
                <label htmlFor="UploadJSON"> 
                  Concatenar nova requisiçao 
                </label>  
              </div>
            </TabPanel>
          </fieldset>  
  
        </Tabs> 

      </div>
    </Container>
  );
}