
// import { useState } from 'react';
import { Container } from './styles';

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


interface showVNDProps{
  requestList: requestUnicInterface[] | any;
  checboxState: boolean;
  toggleCheckBoxRequest: (e: any, request:any)=> void;
  qtdRequests: number;
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



export function ShowVND({
  requestList,
  checboxState, 
  toggleCheckBoxRequest,
  qtdRequests,
  
  }:showVNDProps){

  // const [requestVisualization, setRequestVisualization] =  useState<JSX.Element>({} as JSX.Element)
  var auxRequestElementsHTML:any = [] 

  // console.log(requestVisualization);


  
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
            id={'buttonVerInfo' + (Number(key)+qtdRequests)}
            onClick={() => visibleDiv(('divVisible' + (Number(key)+qtdRequests)), ('buttonVerInfo' + (Number(key)+qtdRequests)))} >
            Ver Info
          </button>
        </div>

        <div id={'divVisible' + (Number(key)+qtdRequests)} className='visible' style={{ display: 'none' }}>
    
          <strong>Mudar visualização</strong>
          <p>   Id : {Number(key)+qtdRequests}              </p>
          <p>   type_slice : {requestList[key].type_slice}  </p>
          <p>   created : {requestList[key].created}        </p>
          <p>   duration : {requestList[key].duration}      </p>
          <p>   period : {requestList[key].period}          </p>
          <p>   bandwidth : {requestList[key].bandwidth}    </p>
          <p>   delay : {requestList[key].delay}            </p>
          <p>   reliability : {requestList[key].reliability}</p>
          <br />
              <p>   vnd: {JSON.stringify(requestList[key].vnd, null, 4)} </p> 
          <br />
          <p>links: {JSON.stringify(requestList[key].links, null, 2)}</p>
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
            Não há requisições para exibir, considere importar ou criar algumas
          </p>
        )}  
    </Container>
  );
}

