
// import { useState } from 'react';
import { useContext, useState } from 'react';
import { CytoscapeContext } from '../../../context/CytoscapeGraph/CytoscapeContext';
import { RequestContext } from '../../../context/Request/RequestContext';
import { RequestFormDate } from '../../../types/requestFormData';
import { Container } from './styles';

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


interface showVNDProps {
  checboxState: boolean;
  toggleCheckBoxRequest: (e: any, request: any) => void;
}


// função para definir a visibilidade de informacoes da lista de requests
function visibleDiv(divVisible: string, buttonVerInfo: string) {

  const dataButton = window.document.getElementById(buttonVerInfo)
  if (window.document.getElementById(divVisible)?.getAttribute('style') === 'display: none;') {
    window.document.getElementById(divVisible)?.setAttribute('style', 'display: flex;')
    if (dataButton !== null) {
      dataButton.innerText = 'Hide Info'
    }

  } else {
    window.document.getElementById(divVisible)?.setAttribute('style', 'display: none;')
    if (dataButton !== null) {
      dataButton.innerText = 'View info'
    }
  }
}



// Variavel global responsavel por conter um dicinoario com o Id do request e quais nós/edges foram alterados com esse Id
// Tentei deixar essa variavel dentro de setColorGraph() mas sempre ele ficava sendo reecriada
var changeDicChecbox: { [index: string]: any; } = {};


export function ShowVND() {
  const {cy} = useContext(CytoscapeContext);
  const [checboxState, setChecboxState] = useState(false)
  const requestList = useContext(RequestContext)[0];
  const colors = ['#6A5ACD', '#0000CD', '#4682B4', '#00FFFF', '#00FF7F', '#00FF7F', '#ADFF2F', 
  '#ADFF2F', '#DAA520', '#8B4513', '#BC8F8F', '#7B68EE', '#4B0082', '#9400D3', 
  '#800080', '#FF00FF', '#C71585', '#FF1493', '#DB7093', '#CD5C5C', '#DC143C', 
  '#FF0000', '#FF4500', '#B22222', '#FF8C00', '#FF8C00'
]


    // Funcao principal para colorir o grafo
    function setColorGraph(checked: Boolean, request: RequestFormDate) {
      try {
        if (checked) {
          var randNum = (Math.floor(Math.random() * 100) + 1)
          var color = (colors)[Math.floor(Math.random() * (colors).length)]
          changeDicChecbox[request.id] = randNum
  
          console.log('node', cy?.$(`node[id = "${randNum}"]`).json());
          console.log('edge', cy?.$(`edge[id = "e${randNum}"]`).json());
  
          cy?.$(`node[id = "${randNum}"]`)
            .style({ 'background-color': `${color}` })
  
          cy?.$(`edge[id = "e${randNum}"]`)
            .style({ 'line-color': `${color}` })
          // .$(`edge[Delay = ${randNum}]`)
  
        }
        else {
  
          cy?.$(`node[id = "${changeDicChecbox[request.id]}"]`)
            .style({ 'background-color': `grey` })
  
  
          cy?.$(`edge[id = "e${changeDicChecbox[request.id]}"]`)
            .style({ 'line-color': 'grey' })
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
          <h4> Request {Number(key)} </h4>
          <button
            id={'buttonVerInfo' + (Number(key))}
            onClick={() => visibleDiv(('divVisible' + (Number(key))), ('buttonVerInfo' + (Number(key))))} >
            View more
          </button>
        </div>

        <div id={'divVisible' + (Number(key))} className='visible' style={{ display: 'none' }}>

          <div className='styleInfosRequests'>

            <div>
              <p>   Id  </p>
              <p> - </p>
              <p>   {requestList[key].id}     </p>
            </div>

            <div>
              <p>   type_slice  </p>
              <p> - </p>
              <p>   {requestList[key].type_slice}  </p>
            </div>

            <div>
              <p>   created   </p>
              <p> - </p>
              <p>   {requestList[key].created}        </p>
            </div>

            <div>
              <p>   duration  </p>
              <p> - </p>
              <p>   {requestList[key].duration}      </p>
            </div>

            <div>
              <p>   period  </p>
              <p> - </p>
              <p>   {requestList[key].period}          </p>
            </div>

            <div>
              <p>   bandwidth   </p>
              <p> - </p>
              <p>   {requestList[key].bandwidth}    </p>
            </div>

            <div>
              <p>   delay</p>
              <p> - </p>
              <p>   {requestList[key].delay}            </p>
            </div>

            <div>
              <p>   reliability </p>
              <p> - </p>
              <p>   {requestList[key].reliability}</p>
            </div>

            <details >
              <summary>Virtual Nodes Request</summary>

              {
                Object.keys(requestList[key].vnd).map((__, index: number) => {

                  return (
                    <div className='virtualNodesRequest' key={index}>
                      <p className="vndIndex">VND {index} </p>
                      <div>
                        <p> id</p>
                        <p> - </p>
                        <p> {requestList[key].vnd[index]?.id}</p>
                      </div>
                      <div>
                        <p> requested</p>
                        <p> - </p>
                        <p> {requestList[key].vnd[index].requested}</p>
                      </div>
                      <div>
                        <p> vnr_id</p>
                        <p> - </p>
                        <p> {requestList[key].vnd[index].vnr_id}</p>
                      </div>
                      <div>
                        <p> domain</p>
                        <p> - </p>
                        <p> {requestList[key].vnd[index].domain}</p>
                      </div>
                      <div>
                        <p> region</p>
                        <p> - </p>
                        <p> {requestList[key].vnd[index].region}</p>
                      </div>
                      <div>
                        <p> type</p>
                        <p> - </p>
                        <p> {requestList[key].vnd[index].type}</p>
                      </div>
                      <div>
                        <p> period</p>
                        <p> - </p>
                        <p> {requestList[key].vnd[index].period}</p>
                      </div>
                      <div>
                        <p> sink</p>
                        <p> - </p>
                        <p> {requestList[key].vnd[index].sink}</p>
                      </div>
                    </div>
                  )
                })
              }

            </details>

            <details>
              <summary>Links</summary>
              {Object.keys(requestList[key].links).map((__, index: number) => {

                return (
                  <div className='links virtualNodesRequest' key={index}>
                    <p className="linkIndex">Link {index} </p>
                    <div>
                      <p> {requestList[key].links[index][0]}</p>
                      <p> {requestList[key].links[index][1]}</p>
                    </div>
                  </div>
                )
              })}
            </details>
          </div>
        </div>
      </li>
    )
  })






  return (
    <Container>

      {requestList[0] ? (
        <ul className="listRequest">
          {auxRequestElementsHTML}
        </ul>
      ) : (
        <p className="paragraph">
          There are no request to view, consider importing or creating some requests.
        </p>
      )}
    </Container>
  );
}

