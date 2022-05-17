
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
      dataButton.innerText = 'Hide Info'
    }

  } else {
    window.document.getElementById(divVisible)?.setAttribute('style', 'display: none;')
    if (dataButton !== null) {
      dataButton.innerText = 'View info'
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
            View more
          </button>
        </div>

        <div id={'divVisible' + (Number(key)+qtdRequests)} className='visible' style={{ display: 'none' }}>

          <div className='styleInfosRequests'>
  
            <div>
              <p>   Id  </p>
              <p> - </p>
              <p>   {Number(key)+qtdRequests}              </p>
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
              <summary>Virtual Network Requests</summary>
             
                  {
                    Object.keys(requestList[key].vnd).map((__, index:number) => {
                   
                      return ( 
                        <div className='virtualNetworkRequests' key={index}>
                          <p className="vndIndex">VND {index} </p>
                          <div>
                            <p> id</p>
                            <p> - </p>  
                            <p> {requestList[key].vnd[index].id}</p>  
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
              {Object.keys(requestList[key].links).map((__, index:number) => { 
            
                return (
                  <div className='links virtualNetworkRequests' key={index}>
                      <p className="linkIndex">Link {index} </p>
                    <div>
                      <p> {requestList[key].links[index][0]}</p>
                      <p> - </p>
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

