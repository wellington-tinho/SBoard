import { useContext } from 'react';
import { toast } from 'react-toastify';
import { RequestContext } from '../../../context/Request/RequestContext';
import { RequestFormDate, virtualNodeDemandInterface } from '../../../types/requestFormData';
import {simple_random_Between_Range } from '../../../util/randomNumber';
import { create_id } from '../../../util/randonIDs';


export function Generate() {
  const [_, setRequest] = useContext(RequestContext);
  
  function GenerateRequest(){
    
    const requestArrayObjec:any = {}
    const virtualNodesRequesArrayObject:any= {}
    const linksAux:RequestFormDate["links"] = []
    
    const request:RequestFormDate = {
      id: create_id()
    }
    const virtualNodesRequest:virtualNodeDemandInterface = {} as virtualNodeDemandInterface
    
    
    const QUANTITY_RANDOM_REQUESTS = simple_random_Between_Range(1,10)
    const QUANTITY_RANDOM_VND     = simple_random_Between_Range(1,10)
    const QUANTITY_RANDOM_LINKS   = simple_random_Between_Range(1,10)
    
    for (var i = 0; i < (QUANTITY_RANDOM_REQUESTS); i++) {
        request.id = i
        request.type_slice = (['t','c','a'])[Math.floor(Math.random() * (['t','c','a']).length)]
        request.created = simple_random_Between_Range(1,99)
        request.duration = simple_random_Between_Range(1,99)
        request.period = simple_random_Between_Range(1,99)
        request.bandwidth = simple_random_Between_Range(1,99)
        request.delay = simple_random_Between_Range(1,99)
        request.reliability = simple_random_Between_Range(1,99)
    

      for (var j = 0; j < (QUANTITY_RANDOM_VND); j++) {
        virtualNodesRequest.id = j
        virtualNodesRequest.requested = simple_random_Between_Range(0,QUANTITY_RANDOM_VND)
        virtualNodesRequest.vnr_id = simple_random_Between_Range(0,QUANTITY_RANDOM_VND)
        virtualNodesRequest.domain = simple_random_Between_Range(0,QUANTITY_RANDOM_VND)
        virtualNodesRequest.region = simple_random_Between_Range(0,QUANTITY_RANDOM_VND)
        virtualNodesRequest.type = simple_random_Between_Range(0,QUANTITY_RANDOM_VND)
        virtualNodesRequest.period = simple_random_Between_Range(0,QUANTITY_RANDOM_VND)
        virtualNodesRequest.sink = simple_random_Between_Range(0,QUANTITY_RANDOM_VND)
    
        virtualNodesRequesArrayObject[j]={...virtualNodesRequest}
      }
    
      for (var k = 0; k < (QUANTITY_RANDOM_LINKS); k++) {
          linksAux.push([QUANTITY_RANDOM_LINKS,QUANTITY_RANDOM_LINKS])
      }
    
      requestArrayObjec[i]={...request, 'vnd':virtualNodesRequesArrayObject,'links':linksAux}
    }
    setRequest(requestArrayObjec)
    toast.success('Create request with success!');

  }


  return( 
    <button onClick={GenerateRequest}>
      Gerar requisiçoes
    </button>
  )
}
