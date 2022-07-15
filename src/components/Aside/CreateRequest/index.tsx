import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { CreateOne } from "./createOneRequest";
import { CreateSeveral } from "./createSeveralRequest";
import { Generate } from "./generateRequest";
import { Container } from "./styles";



// import { Container } from "./styles";
// import 'react-tabs/style/react-tabs.css';

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


interface CreateRequestProps {
  requestList: requestUnicInterface[] | any, //Lembrar de testar sem o ``any``
  setRequestList: React.Dispatch<React.SetStateAction<requestUnicInterface[]>>,
  formRequest: any,
  setFormRequest: React.Dispatch<React.SetStateAction<any>>,
  formVND: any,
  setFormVND: React.Dispatch<React.SetStateAction<any>>,
  arrayResponseformVND: virtualNodeDemandInterface[],
  setArrayResponseFormVND: React.Dispatch<React.SetStateAction<virtualNodeDemandInterface[]>>,
  createLinksRequest: any,
  setCreateLinksRequest: React.Dispatch<React.SetStateAction<any>>,
  createLinksSourceRequest: any,
  setCreateLinksSourceRequest: React.Dispatch<React.SetStateAction<any>>,
  createLinksTargetRequest: any,
  setCreateLinksTargetRequest: React.Dispatch<React.SetStateAction<any>>
}

export function CreateRequest(
  {
    requestList,
    setRequestList,
    formRequest,
    setFormRequest,
    formVND,
    setFormVND,
    arrayResponseformVND,
    setArrayResponseFormVND,
    createLinksRequest,
    setCreateLinksRequest,
    createLinksSourceRequest,
    setCreateLinksSourceRequest,
    createLinksTargetRequest,
    setCreateLinksTargetRequest
  }: CreateRequestProps
) {

  const [numberOfRequest, setNumberOfRequest] = useState(1)

  // criado um dict de InfoGeneralRequest com name do input e value informado
  const handleChangeRequest = (event: { target: { name: string; value: any; }; }) => {
    setFormRequest({
      name: event.target.name,
      value: event.target.value,
    });

  }

  // criado um dict de InfoVNDRequest com name do input e value informado
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

  // dict InfoGeneralRequest
  const handleSubmitCreateRequest = (event: any) => {
    event.preventDefault();
    formRequest['id'] = (Object.keys(requestList).length !== 0) ? Object.keys(requestList).length + 1 : Object.keys(requestList).length
    let requestCreatedManually = { ...formRequest }
    requestCreatedManually['vnd'] = { ...arrayResponseformVND }
    requestCreatedManually['links'] = [...createLinksRequest]

    setRequestList([{ ...requestCreatedManually }]) // Para sobrescrever
    // setRequestList(  [{ ...requestCreatedManually}].concat(requestList))  // Para concatenar em pilha
    // setRequestList(  ([{ ...requestCreatedManually}].concat(requestList)).reverse())  // Para concatenar em pilha


    // createElementHTMLRequest(requestList)
    ClearDataRequet()
  }

  const ClearDataRequet = () => {
    setArrayResponseFormVND([])
    setCreateLinksRequest([])
    // setFormRequest({})
    // setFormVND({})
    // handleChangeVND
    // handleChangeRequest
  }

  const handleSubmitCreateSeveralRequest = (event: any) => {
    event.preventDefault();
    formRequest['id'] = (Object.keys(requestList).length !== 0) ? Object.keys(requestList).length + 1 : Object.keys(requestList).length
    const requestCreatedManually = { ...formRequest }
    requestCreatedManually['vnd'] = { ...arrayResponseformVND }
    requestCreatedManually['links'] = [...createLinksRequest]

    let ReqAUX = []
    for (let i = 0; i < numberOfRequest; i++) {
      requestCreatedManually['id'] = i
      ReqAUX.push({ ...requestCreatedManually })
    }
    setRequestList(ReqAUX)
    // createElementHTMLRequest(requestList)
    ClearDataRequet()
  }

  //concatena 
  const handleSubmitVND = (event: any) => {
    event.preventDefault();
    setArrayResponseFormVND(prevState => [...prevState, formVND]);

    arrayResponseformVND.map((__, index) =>
      arrayResponseformVND[index]['id'] = index
    )
  }

  const handleSubmitCreateLinksRequest = (event: any) => {
    event.preventDefault();
    var newState = [Number(createLinksSourceRequest['value']), Number(createLinksTargetRequest['value'])]
    setCreateLinksRequest([...createLinksRequest, newState]);
  }



  return (
    <Container >

      <Tabs forceRenderTabPanel>

        <TabList className='SubTabList'>
          <Tab className="SubTab">Create a Request</Tab>
          <Tab className="SubTab">Create Requests Set</Tab>
          <Tab className="SubTab">Generate Requests</Tab>
        </TabList>

        <TabPanel>

          <CreateOne
            arrayResponseformVND={arrayResponseformVND}
            handleSubmitCreateRequest={handleSubmitCreateRequest}
            handleChangeRequest={handleChangeRequest}
            handleChangeVND={handleChangeVND}
            handleSubmitVND={handleSubmitVND}
            handleChangeCreateLinksSourceRequest={handleChangeCreateLinksSourceRequest}
            handleChangeCreateLinksTargetRequest={handleChangeCreateLinksTargetRequest}
            handleSubmitCreateLinksRequest={handleSubmitCreateLinksRequest}
          />
        </TabPanel>

        <TabPanel>


          <CreateSeveral
            setNumberOfRequest={setNumberOfRequest}
            arrayResponseformVND={arrayResponseformVND}
            handleSubmitCreateSeveralRequest={handleSubmitCreateSeveralRequest}
            handleChangeRequest={handleChangeRequest}
            handleChangeVND={handleChangeVND}
            handleSubmitVND={handleSubmitVND}
            handleChangeCreateLinksSourceRequest={handleChangeCreateLinksSourceRequest}
            handleChangeCreateLinksTargetRequest={handleChangeCreateLinksTargetRequest}
            handleSubmitCreateLinksRequest={handleSubmitCreateLinksRequest}
          />

        </TabPanel>

        <TabPanel>


          <Generate

          />
        </TabPanel>
      </Tabs>

    </Container>
  )
}

