
import { useContext, useRef } from 'react';
import { RequestContext } from '../../../context/Request/RequestContext';
import { Container } from './styles';

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


interface AsideOthersProps {
  appendRequestList: (file: any) => void,
}

export function AsideOthers(
  {appendRequestList}: AsideOthersProps
) {
  const [requestList, setRequestList] = useContext(RequestContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    if (null !== inputRef.current) {
      inputRef.current.click();
    }
  };

  function DownloadRequestList() {
    var a = document.createElement("a");
    document.body.appendChild(a);
    var json = JSON.stringify(requestList),
      blob = new Blob([json], { type: "octet/stream" }),
      url = window.URL.createObjectURL(blob);
    // a.style = "display: none";
    a.setAttribute('style', 'display: none;');
    a.href = url;
    a.download = 'RequestList.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return <Container>
    <button onClick={() => { setRequestList({}) }}>  Erase all requests </button>
    <button onClick={DownloadRequestList}> Download Requests</button>
    <button onClick={handleClick}> Concatenate new request </button>

    <input
      type="file"
      name="AppendJSON"
      id="AppendJSON"
      onChange={appendRequestList}
      hidden={true}
      accept=".json,.JSON"
      style={{display: 'none'}}
      ref={inputRef}
    />

  </Container>;
}
