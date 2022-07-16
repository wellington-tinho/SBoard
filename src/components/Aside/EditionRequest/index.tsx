import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { RequestContext } from '../../../context/Request/RequestContext';
import { ChangeAllRequestsModal } from './ChangeAllRequestsModal';
import { ChangeRequestsModal } from './ChangeRequestModal';
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
  [x: string]: any;  // (....) .filter(request => request.eventInput.target.name === inputValue);
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

interface EditionRequestProps {
  qtdRequests: number
}

Modal.setAppElement('#root')


export function EditionRequest(
  {
    qtdRequests
  }: EditionRequestProps) {
  const [requestUnic, setRequestUnic] = useState<requestUnicInterface>({} as requestUnicInterface)
  const [indexRequest, setIndexRequest] = useState<number>(-1)

  const [isChangeAllRequestModal, setIsChangeAllRequestModal] = useState(false);
  const [isChangeRequestModal, setIsChangeRequestModal] = useState(false);

  const [changedRequests, setChangedRequests] = useState<requestUnicInterface[]>([{} as requestUnicInterface]);

  const [requestList, setRequestList] = useContext(RequestContext);



  //Criação dos inputs para alteração de todos os requests
  var auxRequestElementsHTML: any = []
  Object.keys(requestList).forEach(key => {

    auxRequestElementsHTML.push(
      <li key={key}>
        <div>
          <input
            // onChange={e => {}}
            defaultChecked={false}
            type="checkbox" name={'changeRequestElement' + key} id={'changeRequestElement' + key}
          />
          <h4> Request {Number(key) + qtdRequests} </h4>
          <button
            id={'ChangeElement' + (Number(key) + qtdRequests)}
            onClick={() => handleOpenChangeRequestModal((Number(key) + qtdRequests))} >
            Change Element
          </button>
        </div>
      </li>
    )
  })

  //Modal Unic Request
  function handleOpenChangeRequestModal(idRequest: number) {
    setIndexRequest(idRequest)
    setRequestUnic(requestList[idRequest])
    document.addEventListener('contextmenu', event => event.preventDefault());
    setIsChangeRequestModal(true)
  }
  function handleCloseChangeRequestModal() {
    setIsChangeRequestModal(false)
  }

  //Modal All Requests
  function handleOpenChangeAllRequestModal() {
    var requestsSelected = []

    for (var j in requestList) {
      var eleInput: any = window.document.getElementsByName(`changeRequestElement${j}`)
      //pega todos os ids dos iputs checked = true
      if ((eleInput[0].checked) === true) {
        requestsSelected.push(requestList[j]);
      }
    }
    setChangedRequests(requestsSelected); // array de elementos selecionados para alteração


    // document.addEventListener('contextmenu', event => event.preventDefault());

    setIsChangeAllRequestModal(true)
  }
  function handleCloseChangeAllRequestModal() {
    setIsChangeAllRequestModal(false)
  }

  //Se o requestUnic for alterado, perpetuar essas alteraçoes em RequestList
  useEffect(() => {
    if ((!(requestUnic['id'] == undefined)) && (requestList[indexRequest] !== requestUnic)) {
      var updatedRequestList = { ...requestList }

      updatedRequestList[indexRequest] = requestUnic
      console.log('updatedRequestList -> ', updatedRequestList)
      setRequestList(updatedRequestList);
    }
  }, [requestUnic])

  function filterRequests(eventInput: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = eventInput.target.value;
    const inputName = eventInput.target.name;
    const auxRequestsList: requestUnicInterface[] = { ...requestList }

    Object.values(auxRequestsList).forEach(element => {
      console.log('element -> ', element);
      var inputElementList: any = (window.document.getElementsByName(`changeRequestElement${element.id}`))
      inputElementList[0].checked = false
    });

    if (inputValue === '') {
      return;
    }
    var filteredRequests: requestUnicInterface[] = []

    if (inputValue.includes('>=')) {

      let operationForValue = inputValue.split('>=')[1]
      operationForValue = operationForValue.replace(' ', '');
      operationForValue = operationForValue.replace(/[^0-9]/g, '');

      filteredRequests = Object.values(auxRequestsList).filter(request => {
        return request[`${inputName}`] >= parseInt(operationForValue);
      })
    }

    if (inputValue.includes('<=')) {
      let operationForValue = inputValue.split('<=')[1]
      operationForValue = operationForValue.replace(' ', '');
      operationForValue = operationForValue.replace(/[^0-9]/g, '');

      filteredRequests = Object.values(auxRequestsList).filter(request => {
        return request[`${inputName}`] <= parseInt(operationForValue);
      })
    }

    else if (inputValue.includes('>')) {
      let operationForValue = inputValue.split('>')[1]
      operationForValue = operationForValue.replace(' ', '');
      operationForValue = operationForValue.replace(/[^0-9]/g, '');

      filteredRequests = Object.values(auxRequestsList).filter(request => {
        return request[`${inputName}`] > parseInt(operationForValue);
      })
    }

    else if (inputValue.includes('<')) {
      let operationForValue = inputValue.split('<')[1]
      operationForValue = operationForValue.replace(' ', '');
      operationForValue = operationForValue.replace(/[^0-9]/g, '');

      filteredRequests = Object.values(auxRequestsList).filter(request => {
        return request[`${inputName}`] < parseInt(operationForValue);
      })
    }

    else if (inputValue.includes('!=')) {
      let operationForValue = inputValue.split('!=')[1]
      operationForValue = operationForValue.replace(' ', '');
      operationForValue = operationForValue.replace(/[^0-9]/g, '');

      filteredRequests = Object.values(auxRequestsList).filter(request => {
        return request[`${inputName}`] !== parseInt(operationForValue);
      })
    }

    else if (inputValue.includes('=')) {
      let operationForValue = inputValue.split('=')[1]
      operationForValue = operationForValue.replace(' ', '');
      operationForValue = operationForValue.replace(/[^0-9]/g, '');

      filteredRequests = Object.values(auxRequestsList).filter(request => {
        return request[`${inputName}`] === parseInt(operationForValue);
      })
    }

    else {
      if (typeof (inputValue) === 'string') {
        filteredRequests = Object.values(auxRequestsList).filter(request => {
          return request[`${inputName}`] === inputValue
        })
      }
      toast.warn(`The selector inputValue[${inputName} ${inputValue}] is invalid`)
    }

    console.log('filteredRequests -> ', filteredRequests)
    filteredRequests.forEach(element => {
      var inputElementList: any = (window.document.getElementsByName(`changeRequestElement${element.id}`))
      inputElementList[0].checked = true
    });

    // for(var i=0; i<filteredRequests.length; i++){
    //   var ele:any= window.document.getElementsByName(`changeRequestElement${}}`)
    //   ele[0].checked = true;
    // }

  }
  return (
    <>
      <ChangeRequestsModal
        isOpen={isChangeRequestModal}
        onRequestClose={handleCloseChangeRequestModal}
        requestUnic={requestUnic}
        setRequestUnic={setRequestUnic}
      />

      <ChangeAllRequestsModal
        isOpen={isChangeAllRequestModal}
        onRequestClose={handleCloseChangeAllRequestModal}
        changedRequests={changedRequests}
        requestList={requestList}
        setRequestList={setRequestList}
      />
      <Container >
        {requestList[0] ? (
          <div className="elements">
            <div>
              <h3>Elementes Request List</h3>
              <div className='filtro'>
                <input type="text" name="created" id="created" placeholder="Filtrar por created" onChange={e => filterRequests(e)} />
                <input type="text" name="duration" id="duration" placeholder="Filtrar por duration" onChange={e => filterRequests(e)} />
                <input type="text" name="period" id="period" placeholder="Filtrar por period" onChange={e => filterRequests(e)} />
                <input type="text" name="bandwidth" id="bandwidth" placeholder="Filtrar por bandwidth" onChange={e => filterRequests(e)} />
                <input type="text" name="delay" id="delay" placeholder="Filtrar por delay" onChange={e => filterRequests(e)} />
                <input type="text" name="reliability" id="reliability" placeholder="Filtrar por reliability" onChange={e => filterRequests(e)} />
                <input type="text" name="type_slice" id="type_slice" placeholder="Filtrar por type_slice " onChange={e => filterRequests(e)} />

                {/* <input type="text" name="VND_requested" id="VND_requested"  placeholder="Filtrar por VND_requested" onChange={e => filterRequests(e)}/>
                  <input type="text" name="VND_domain"    id="VND_domain"     placeholder="Filtrar por VND_domain"    onChange={e => filterRequests(e)}/>
                  <input type="text" name="VND_region"    id="VND_region"     placeholder="Filtrar por VND_region"    onChange={e => filterRequests(e)}/>
                  <input type="text" name="VND_type"      id="VND_type"       placeholder="Filtrar por VND_type"      onChange={e => filterRequests(e)}/>
                  <input type="text" name="VND_period"    id="VND_period"     placeholder="Filtrar por VND_period"    onChange={e => filterRequests(e)}/>
                  <input type="text" name="VND_sink"      id="VND_sink"       placeholder="Filtrar por VND_sink"      onChange={e => filterRequests(e)}/> */}
              </div>
              <button className="changeElementList"
                onClick={() => handleOpenChangeAllRequestModal()} >
                {/* onClick={() =>  {}} >  */}
                Change all selected elements
              </button>
            </div>
            <ul className="listRequest">
              {auxRequestElementsHTML}
            </ul>
          </div>
        ) : (
          <p className="paragraph">
            There are no Edit requests, consider importing or creating some.
          </p>
        )}

      </Container>
    </>
  );
}

