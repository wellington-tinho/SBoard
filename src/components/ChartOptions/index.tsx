
import {useContext   } from 'react';
import Modal from 'react-modal';

import { VscChromeClose } from 'react-icons/vsc'
import { Container } from './styles';
import { CytoscapeContext } from '../../CytoscapeContext';



interface ChartOptionsProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ChartOptions({ isOpen, onRequestClose }: ChartOptionsProps) {
  const [cy] = useContext(CytoscapeContext);
  // const [fileDownloadUrl,setFileDownloadUrl] = useState<any>(); // Step 4

  function ExportGraph(){
    // var json = JSON.stringify(cy.json())
    // setFileDownloadUrl(URL.createObjectURL(new Blob([json], {type: "octet/stream"})))
    
      var a = document.createElement("a");
      document.body.appendChild(a);
      
      
      var json = JSON.stringify(cy.json()),
      blob = new Blob([json], {type: "octet/stream"}),
      url = window.URL.createObjectURL(blob);
      // a.style = "display: none";
      a.setAttribute('style', 'display: none;');
      a.href = url;
      a.download = 'dataset.json';
      a.click();
      window.URL.revokeObjectURL(url);
      

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >

      <Container >
        <VscChromeClose  onClick={onRequestClose} className='react-modal-close' />
        <h2>Chart Options</h2>
        <h3>Em contruçao</h3>

        
          
       

        <button  onClick={()=>{console.log('Clear Graph')}}>
          Clear graph
        </button >

        <button  onClick={ExportGraph}>
          Export Graph
        </button >

        <button  onClick={()=>{console.log('Import New Graph')}}>
          Import New Graph
        </button >

        <button  onClick={()=>{console.log('Others')}}>
          Others
        </button >

      </Container>
    </Modal>
  );
}