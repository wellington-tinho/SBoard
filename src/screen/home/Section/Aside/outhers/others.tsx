
import { Container } from './styles';

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


interface AsideOthersProps{
  requestList: requestUnicInterface[] ,
  appendRequestList: (file: any)=> void,
  setRequestList:React.Dispatch<React.SetStateAction<any>>, 

}

export function AsideOthers(
  {appendRequestList,requestList,setRequestList}:AsideOthersProps
  ) {

  function DownloadRequestList(){
    var a = document.createElement("a");
    document.body.appendChild(a);  
    var json = JSON.stringify(requestList),
    blob = new Blob([json], {type: "octet/stream"}),
    url = window.URL.createObjectURL(blob);
    // a.style = "display: none";
    a.setAttribute('style', 'display: none;');
    a.href = url;
    a.download = 'RequestList.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return <Container>
    <button onClick={()=>{setRequestList({})}}> Limpar Todas Requests</button>
    <button onClick={DownloadRequestList}> Baixar Requests</button>

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
