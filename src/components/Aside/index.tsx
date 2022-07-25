import { useContext, useEffect, useReducer, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CytoscapeContext } from "../../context/CytoscapeGraph/CytoscapeContext"; 
import { RequestContext } from "../../context/Request/RequestContext";
import { CreateRequest } from "./CreateRequest";
import { EditionRequest } from "./EditionRequest/index";
import { AsideOthers } from "./outhers/others";
import { ShowVND } from "./showVND/showVND";
import { Container } from "./styles";




interface virtualNodeDemandInterface {
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


const formCreateRequest = (state: any, event: any) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

const formCreateVND = (state: any, event: any) => {
  return {
    ...state,
    [event.name]: event.value
  }
}


// Variavel global responsavel por conter um dicinoario com o Id do request e quais nós/edges foram alterados com esse Id
// Tentei deixar essa variavel dentro de setColorGraph() mas sempre ele ficava sendo reecriada
var changeDicChecbox: { [index: string]: any; } = {};

export function Aside() {
  const cy = useContext(CytoscapeContext)[0];
  const request = useContext(RequestContext)[0];


  const [requestList, setRequestList] = useState<requestUnicInterface[]>(request)
  const qtdRequests = (0)

  const [checboxState, setChecboxState] = useState(false)
  
  const colors = ['#6A5ACD', '#0000CD', '#4682B4', '#00FFFF', '#00FF7F', '#00FF7F', '#ADFF2F', 
                  '#ADFF2F', '#DAA520', '#8B4513', '#BC8F8F', '#7B68EE', '#4B0082', '#9400D3', 
                  '#800080', '#FF00FF', '#C71585', '#FF1493', '#DB7093', '#CD5C5C', '#DC143C', 
                  '#FF0000', '#FF4500', '#B22222', '#FF8C00', '#FF8C00'
                ]

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


  //Adicionar novos Requests na lista de requisiçoes
  function appendRequestList(file: any) {

    const reader = new FileReader();
    reader.onload = function (e: any) {
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
  // useEffect(() => {
  //   if (Object.keys(request).length !== 0) {
  //     setRequestList(request)
  //   }
  // }, [request])

  return (
    <Container>
      <main>
        <h2> Requests</h2>
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
              <ShowVND
                checboxState={checboxState}
                toggleCheckBoxRequest={toggleCheckBoxRequest}
                qtdRequests={qtdRequests}
              />
            </TabPanel>


            <TabPanel className='TabPanelCreate'>
              <CreateRequest/>
            </TabPanel>

            <TabPanel className='TabPanelEdition'>
              <EditionRequest
                qtdRequests={qtdRequests} 
              />
            </TabPanel>

            <TabPanel className='TabPanelOthers'>
              <AsideOthers
                appendRequestList={appendRequestList}
              />
            </TabPanel>
          </fieldset>

        </Tabs>

      </div>
    </Container>
  );
}