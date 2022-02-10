
import { Container } from './styles';

export function AsideOthers({appendRequestList}:any) {
  return <Container>
    <button disabled> Baixar Requests</button>
    <button disabled> Limpar Todas Requests</button>

    <div className='UploadJSON'>
      <input 
        type="file" 
        name="UploadJSON" 
        id="UploadJSON"  
        onChange={appendRequestList} 
        hidden={true}  
        accept=".json,.JSON"
      />
      {/* <label htmlFor="UploadJSON">Append JSON</label> */}
      <label htmlFor="UploadJSON"> 
        Concatenar nova requisiçao 
      </label>  
    </div>
  </Container>;
}
