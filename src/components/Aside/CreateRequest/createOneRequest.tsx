import React from 'react';

// import { Container } from './styles';
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

interface propsCreateOne{
  arrayResponseformVND: virtualNodeDemandInterface[],
  handleSubmitCreateRequest: any,
  handleChangeRequest: any,
  handleChangeVND: any,
  handleSubmitVND: any,
  handleChangeCreateLinksSourceRequest: any,
  handleChangeCreateLinksTargetRequest: any,
  handleSubmitCreateLinksRequest: any,
}

export function CreateOne({
    arrayResponseformVND,
    handleSubmitCreateRequest,
    handleChangeRequest,
    handleChangeVND,
    handleSubmitVND,
    handleChangeCreateLinksSourceRequest,
    handleChangeCreateLinksTargetRequest,
    handleSubmitCreateLinksRequest
  }:propsCreateOne 
) {

 
  
  return (
 
    <form onSubmit={handleSubmitCreateRequest}>
      <div className='InfoGeneralRequest'>
        <h4>Informação geral da requição</h4>
        <div> 
          <p> created </p> 
          <input type="number" name="created"      id="created-creation"     placeholder="created"      onChange={handleChangeRequest} />
        </div> 

        <div> 
          <p> duration </p> 
          <input type="number" name="duration"     id="duration-creation"    placeholder="duration"     onChange={handleChangeRequest} />
        </div> 

        <div> 
          <p> period </p> 
          <input type="number" name="period"       id="period-creation"      placeholder="period"       onChange={handleChangeRequest} />
        </div> 

        <div> 
          <p> bandwidth </p> 
          <input type="number" name="bandwidth"    id="bandwidth-creation"   placeholder="bandwidth"    onChange={handleChangeRequest} />
        </div> 

        <div> 
          <p> delay </p> 
          <input type="number" name="delay"        id="delay-creation"       placeholder="delay"        onChange={handleChangeRequest} />
        </div> 

        <div> 
          <p> reliability </p> 
          <input type="number" name="reliability"  id="reliability-creation" placeholder="reliability"  onChange={handleChangeRequest} />
        </div> 

        <div> 
          <p> type_slice </p> 
          <input type="text" name="type_slice"   id="type_slice-creation"  placeholder="type_slice"   onChange={handleChangeRequest} />
        </div> 

      </div>

      <div className='InfoVNDRequest'>

        <h4>Informaçao virtual node demand</h4>
        <div> 
          <p> vnr_id </p> 
          <input type="text" name="vnr_id"    id="vnr_id"        placeholder="vnr_id"       onChange={handleChangeVND} disabled/>
        </div> 

        <div> 
          <p> requested </p> 
          <input type="text" name="requested" id="requested-vnd" placeholder="requested-vnd"  onChange={handleChangeVND} required/>
        </div> 


        <div> 
          <p> domain </p> 
          <input type="text" name="domain"    id="domain-vnd"    placeholder="domain-vnd"     onChange={handleChangeVND} required/>
        </div> 

        <div> 
          <p> region </p> 
          <input type="text" name="region"    id="region-vnd"    placeholder="region-vnd"     onChange={handleChangeVND} required/>
        </div> 

        <div> 
          <p> type </p> 
          <input type="text" name="type"      id="type-vnd"      placeholder="type-vnd"       onChange={handleChangeVND} required/>
        </div> 

        <div> 
          <p> period </p> 
          <input type="text" name="period"    id="period-vnd"    placeholder="period-vnd"     onChange={handleChangeVND} required/>
        </div> 

        <div> 
          <p> sink </p> 
          <input type="text" name="sink"      id="sink-vnd"      placeholder="sink-vnd"       onChange={handleChangeVND} required/>
        </div> 

        <button  onClick={handleSubmitVND}>
          Adcionar
        </button>
      </div>
      
      <h4>Link Source / Target</h4>
      <select name="linkSource" id="linkSource" defaultValue={'DEFAULT'} onChange={handleChangeCreateLinksSourceRequest} >
        <option value='DEFAULT' disabled hidden>Select Slice</option>
        {
          arrayResponseformVND.map((__: any, index:number) => {
            // arrayResponseformVND[index]['vnr_id'] = index
            return <option key={index} value={index}> link {index} </option>
          })
        }    
      </select>

      <select name="LinkTarget" id="LinkTarget" defaultValue={'DEFAULT'} onChange={handleChangeCreateLinksTargetRequest} >
      <option value='DEFAULT' disabled hidden>Select Slice</option>
        {
          arrayResponseformVND.map((__:any, index:number) => {
            // arrayResponseformVND[index]['vnr_id'] = index
            return <option key={index} value={index}> link {index} </option>
          })
        }
      </select>
      <button onClick={handleSubmitCreateLinksRequest}>
        Adcionar Links
      </button>
      
      <button type="submit">
        Create Request
      </button>
    </form>
  )
}

