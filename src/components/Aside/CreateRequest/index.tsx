import { useContext, useEffect, useState, useReducer } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { CreateOne } from "./createOneRequest";
import { CreateSeveral } from "./createSeveralRequest";
import { Generate } from "./generateRequest";





// import {qtd_vnrs} from '../../data/setup.json';

// import { Container } from "./styles";
// import 'react-tabs/style/react-tabs.css';

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


export function CreateRequest (
      requestList: requestUnicInterface[] | any,
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
    )
  {

    // const arrayResponseformVND:virtualNodeDemandInterface[] = arrayResponseformVND
    
  
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

  const handleSubmitCreateLotRequests = (event:any) => {
    event.preventDefault();
    formRequest['id'] = (Object.keys(requestList).length !== 0) ? Object.keys(requestList).length + 1 :  Object.keys(requestList).length
    const requestCreatedManually = {...formRequest} 
    requestCreatedManually['vnd'] = {...arrayResponseformVND} 
    requestCreatedManually['links'] = [...createLinksRequest]

    setRequestList([requestCreatedManually])
    // createElementHTMLRequest(requestList)
    console.log([requestCreatedManually])
    console.log(requestList)
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

  return (
    
    <Tabs forceRenderTabPanel>

    
      <TabList>
        <Tab>Create a Request</Tab>
        <Tab>Create Requests Set</Tab>
        <Tab>Generate Requests</Tab>
      </TabList>

      <TabPanel>
      {console.log('aside/CreateRequet/index=',arrayResponseformVND)
        }
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
        
          />  
      </TabPanel>
      
      <TabPanel>
 

        <Generate
           
            /> 
      </TabPanel>
    </Tabs> 
  )
}

