import { useContext, useState  } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { RequestContext } from '../../../context/Request/RequestContext';
import { IlinkConvert, RequestFormDate } from '../../../types/requestFormData';
import { create_id } from '../../../util/randonIDs';

export function CreateSeveral() {
  const [_, setRequest] = useContext(RequestContext);
  const [virtualNodesRequest, setVirtualNodesRequest] = useState<any>([]);
  const [links, setLinks] = useState<number[]>([] as number[]);
  const [qtdRequests, setQtdRequests] = useState(1);
  
  const {register, handleSubmit, reset} = useForm<RequestFormDate>()
  const {register:register2, handleSubmit:handleSubmit2, reset:reset2} = useForm()
  const {register:register3, handleSubmit:handleSubmit3, reset:reset3} = useForm<IlinkConvert>()

  function clearForm() {
    setVirtualNodesRequest([])
    setLinks([])
    reset()
    reset2()
    reset3()
  }
  

  function auxCreateMultiplesRequest (date: RequestFormDate) {
      const requestList = []
      for (let i = 0; i < qtdRequests; i++) {
        requestList.push({ ...date, 'vnd': {... virtualNodesRequest}, 'links': links })
        requestList[i].id  = requestList[i].id || create_id()
    }
    console.log(requestList);
    
    return(requestList)
  }


  function handleSubmitCreateRequest (date: RequestFormDate){  
    
    const requestAux  = auxCreateMultiplesRequest(date)
    setRequest(requestAux)
    clearForm();
    toast.success('Create request with success!');
  }

  function handleSubmitCreateVND (date: any){  
    const virtualNodesRequestAux = ([ ...virtualNodesRequest, date ])
    setVirtualNodesRequest(virtualNodesRequestAux)
  }

  function handleSubmitCreateLink (date:IlinkConvert){
    const correctLinks = [parseInt(date.linkSource), parseInt(date.LinkTarget)]
    const arrayAux = ([ ...links, correctLinks])
    setLinks(arrayAux as number[])
  }


   // dict InfoGeneralRequest
  return (
 
    <form onSubmit={handleSubmit(handleSubmitCreateRequest)}>
      <div className='InfoGeneralRequest'>
        <h4>Informação geral da requição</h4>
        <div> 
          <p> qtd </p> 
          <input 
            onChange={
              event => (setQtdRequests( Number(event.target.value)))
            }
            min='1' 
            type="number" name="create_qtd_vnrs" 
            id="create_qtd_vnrs" 
            placeholder={'quantity requests: '} 
          />
        </div> 
        <div> 
          <p> id </p> 
          <input id="id-creation"   placeholder="?id"   type="number" {...register("id", {valueAsNumber: true, })}  />
        </div> 
        <div> 
          <p> created </p> 
          <input id="created-creation"   placeholder="created"   type="number" {...register("created", {valueAsNumber: true, })}  required/>
        </div> 

        <div> 
          <p> duration </p> 
          <input  id="duration-creation"    placeholder="duration" type="number"  {...register("duration", {valueAsNumber: true, })}    required/>
        </div> 

        <div> 
          <p> period </p> 
          <input  id="period-creation"      placeholder="period" type="number"  {...register("period", {valueAsNumber: true, })}      required/>
        </div> 

        <div> 
          <p> bandwidth </p> 
          <input  id="bandwidth-creation"   placeholder="bandwidth" type="number"  {...register("bandwidth", {valueAsNumber: true, })}   required/>
        </div> 

        <div> 
          <p> delay </p> 
          <input  id="delay-creation"       placeholder="delay" type="number"  {...register("delay", {valueAsNumber: true, })}       required/>
        </div> 

        <div> 
          <p> reliability </p> 
          <input  id="reliability-creation" placeholder="reliability" type="number"  {...register("reliability", {valueAsNumber: true, })} required/>
        </div> 

        <div> 
          <p> type_slice </p> 
          <input type="text" id="type_slice-creation"  placeholder="type_slice"  {...register("type_slice")}  required/>
        </div> 

      </div>

     <div className='InfoVNDRequest'>

        <h4>Informaçao virtual node demand</h4>
        <div> 
          <p> vnr_id </p> 
          <input type="number" id="vnr_id"        placeholder="vnr_id"       {...register2("vnr_id", {valueAsNumber: true, })} />
        </div> 

        <div> 
          <p> requested </p> 
          <input type="number" id="requested-vnd" placeholder="requested-vnd"  {...register2("requested", {valueAsNumber: true, })} required/>
        </div> 


        <div> 
          <p> domain </p> 
          <input type="number" id="domain-vnd"    placeholder="domain-vnd"     {...register2("domain", {valueAsNumber: true, })} required/>
        </div> 

        <div> 
          <p> region </p> 
          <input type="number" id="region-vnd"    placeholder="region-vnd"     {...register2("region", {valueAsNumber: true, })} required/>
        </div> 

        <div> 
          <p> type </p> 
          <input type="text" id="type-vnd"      placeholder="type-vnd"       {...register2("type")} required/>
        </div> 

        <div> 
          <p> period </p> 
          <input type="number" id="period-vnd"    placeholder="period-vnd"     {...register2("period", {valueAsNumber: true, })} required/>
        </div> 

        <div> 
          <p> sink </p> 
          <input type="number" id="sink-vnd"      placeholder="sink-vnd"       {...register2("sink", {valueAsNumber: true, })} required/>
        </div> 

        <button  onClick={handleSubmit2(handleSubmitCreateVND)}>
          Adcionar
        </button>
      </div>
      
      <h4>Link Source / Target</h4>
      <select id="linkSource" defaultValue={'DEFAULT'} {...register3('linkSource')} >
        <option value='DEFAULT' disabled hidden>Select Slice</option>
        {
          virtualNodesRequest.map((__: any, index:number) => {
            // arrayResponseformVND[index]['vnr_id'] = index
            return <option key={index} value={index}> link {index} </option>
          })
        }    
      </select>

      <select id="LinkTarget" defaultValue={'DEFAULT'}  {...register3('LinkTarget')} >
      <option value='DEFAULT' disabled hidden>Select Slice</option>
        {
          virtualNodesRequest.map((__:any, index:number) => {
            // arrayResponseformVND[index]['vnr_id'] = index
            return <option key={index} value={index}> link {index} </option>
          })
        }
      </select>
      <button onClick={handleSubmit3(handleSubmitCreateLink)}>
        Adcionar Links
      </button> 
      
      <button type="submit">
        Create Request
      </button>
    </form>
  )
}