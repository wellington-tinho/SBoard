
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

interface EditionRequestProps{
  requestList: requestUnicInterface[] | any,
  setRequestList: React.Dispatch<React.SetStateAction<requestUnicInterface[]>>,
  qtdRequests: number
}
export function EditionRequest ({
  requestList,
  setRequestList,
  qtdRequests
}:EditionRequestProps) {

  var auxRequestElementsHTML:any = [] 

  // console.log(requestVisualization);


  
  Object.keys(requestList).forEach(key => {
    
    auxRequestElementsHTML.push(
      <li key={key}>
        <div>
          <input
            onChange={e => {}}
            defaultChecked={false}
            type="checkbox" name={'changeRequestElement'+key} id={'changeRequestElement'+key}
          />
          <h4> Request {Number(key)+qtdRequests} </h4>
          <button
            id={'buttonVerInfo' + (Number(key)+qtdRequests)}
            onClick={() => {}} >
            Change Element
          </button>
        </div>
      </li>
    )
  })

  return <Container >
    {requestList[0] ? (
        <div className="elements">
          <div>
            <h3>Elementes Request List</h3>
            <div className='filtro'>
              <input type="number" name="created"     id="created"      placeholder="Filtrar por created"     onChange={e => {}}/>
              <input type="number" name="duration"    id="duration"     placeholder="Filtrar por duration"    onChange={e => {}}/>
              <input type="number" name="period"      id="period"       placeholder="Filtrar por period"      onChange={e => {}}/>
              <input type="number" name="bandwidth"   id="bandwidth"    placeholder="Filtrar por bandwidth"   onChange={e => {}}/>
              <input type="number" name="delay"       id="delay"        placeholder="Filtrar por delay"       onChange={e => {}}/>
              <input type="number" name="reliability" id="reliability"  placeholder="Filtrar por reliability" onChange={e => {}}/>
              <input type="text"   name="type_slice"  id="type_slice"   placeholder="Filtrar por type_slice " onChange={e => {}}/>
              
              <input type="number" name="VND_requested" id="VND_requested"  placeholder="Filtrar por VND_requested" onChange={e => {}}/>
              <input type="number" name="VND_domain"    id="VND_domain"     placeholder="Filtrar por VND_domain"    onChange={e => {}}/>
              <input type="number" name="VND_region"    id="VND_region"     placeholder="Filtrar por VND_region"    onChange={e => {}}/>
              <input type="text"   name="VND_type"      id="VND_type"       placeholder="Filtrar por VND_type"      onChange={e => {}}/>
              <input type="number" name="VND_period"    id="VND_period"     placeholder="Filtrar por VND_period"   onChange={e => {}}/>
              <input type="number" name="VND_sink"      id="VND_sink"       placeholder="Filtrar por VND_sink"      onChange={e => {}}/>
            </div>
            <button className="changeElementList"
              onClick={()=>{}} > 
              {/* onClick={() =>  {}} >  */}
              Change all Elementes Selecionados 
            </button> 
          </div>
          <ul className="listRequest">  
            {auxRequestElementsHTML}
          </ul>
        </div>
      ) : (
        <p className="paragraph">
          Não há requisições para Editar, considere importar ou criar algumas
        </p>
      )} 

  </Container>;
}

