import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RequestFormDate } from '../../../types/requestFormData';

export function Generate() {

  function handleSubmitCreateRequest (date: RequestFormDate){
    console.log('handleSubmitCreateRequest');
    console.log(date);
  }

  const {register, handleSubmit} = useForm()
   // dict InfoGeneralRequest
  return (
 
    <form onSubmit={handleSubmit(handleSubmitCreateRequest)}>
      <div className='InfoGeneralRequest'>
        <h4>Informação geral da requição</h4>
        <div> 
          <p> created </p> 
          <input type="number" id="created-creation"     placeholder="created"  {...register("created")}     />
        </div> 

        <div> 
          <p> duration </p> 
          <input type="number" id="duration-creation"    placeholder="duration"  {...register("duration")}    />
        </div> 

        <div> 
          <p> period </p> 
          <input type="number" id="period-creation"      placeholder="period"  {...register("period")}      />
        </div> 

        <div> 
          <p> bandwidth </p> 
          <input type="number" id="bandwidth-creation"   placeholder="bandwidth"  {...register("bandwidth")}   />
        </div> 

        <div> 
          <p> delay </p> 
          <input type="number" id="delay-creation"       placeholder="delay"  {...register("delay")}       />
        </div> 

        <div> 
          <p> reliability </p> 
          <input type="number" id="reliability-creation" placeholder="reliability"  {...register("reliability")} />
        </div> 

        <div> 
          <p> type_slice </p> 
          <input type="text" id="type_slice-creation"  placeholder="type_slice"  {...register("type_slice")}  />
        </div> 

      </div>

      {/* <div className='InfoVNDRequest'>

        <h4>Informaçao virtual node demand</h4>
        <div> 
          <p> vnr_id </p> 
          <input type="text" name="vnr_id"    id="vnr_id"        placeholder="vnr_id"       onChange={handleChangeVND} />
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
      </button> */}
      
      <button type="submit">
        Create Request
      </button>
    </form>
  )
}
