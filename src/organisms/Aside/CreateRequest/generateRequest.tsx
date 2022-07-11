import React from 'react';

// import { Container } from './styles';
export function Generate() {

  function handleGenerateRequests() { 
    
  }


  return (
    <p className="paragraph">
      <div>
        <p>Quantity to be generated</p>
        <input type="number" name="quantity" id="quantityGenerate" placeholder='10' />
      </div>
      <button>Click here to generate</button>
    </p>
    // <form onSubmit={handleSubmitCreateRequest}>
    //   <div className='InfoGeneralRequest'>
    //     <h4>Informe quantas requisições deseja Gerar</h4>
    //     <div> 
    //       {/* <p> created </p>  */}
    //       <input type="number"   placeholder="{dado vindo do setup}"     onChange={handleChangeRequest} />
    //     </div> 
    //   </div>
    //   <button type="button">
    //     Gerar
    //   </button>
    // </form>
  )
}
