
import { Container } from './styles';


interface AsideOthersProps{
  appendRequestList: (file: any)=> void
}

export function AsideOthers(
  {appendRequestList}:AsideOthersProps
  ) {
  return <Container>
    <button disabled> Baixar Requests</button>
    <button disabled> Limpar Todas Requests</button>

    <div className='UploadJSON'>
      <input 
        type="file" 
        name="AppendJSON" 
        id="AppendJSON"  
        onChange={appendRequestList} 
        hidden={true}  
        accept=".json,.JSON"
      />
      {/* <label htmlFor="UploadJSON">Append JSON</label> */}
      <label htmlFor="AppendJSON"> 
        Concatenar nova requisiçao 
      </label>  
    </div>
  </Container>;
}
