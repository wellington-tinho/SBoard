import { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import CytoscapeComponent from 'react-cytoscapejs';

import { DropContainer, UploadMessage } from './style';

import { api } from '../../services/api';


// interface FileReaderEvent extends ProgressEvent {
//   target: FileReaderEventTarget;
// }
// interface FileReaderEventTarget extends EventTarget {
//   result:string
// }



export interface iGraphJson{
  edges:any,
  nodes:any,
  // edges:Array<Object>,
  // nodes:Array<Object>,
}

export function Upload() {
  const [graphGML, setGraphGML] = useState()
  const [grapJSON, setGraphJSON] = useState<iGraphJson>()

  // const onDrop = useCallback((file) => {  
  //   const reader = new FileReader();
  //   reader.onload = function(e: any) {
  //     setGraphGML(e.target.result)
  //   };
  //   reader.readAsText(file[0]);
  // },[]);


  function onDrop(file:any){ 
    const reader = new FileReader();
    reader.onload = function(e: any) {
      setGraphGML(e.target.result)      
    };
    reader.readAsText(file[0]);
  };

  useEffect(() => {
    api.post('convert', {data: graphGML})
    .then(response => setGraphJSON(response.data.elements))
  },[graphGML]);


  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,

  } = useDropzone({
    accept: ["application/gml", ".gml", ".GML", "application/GML", "application/json"],
    maxFiles: 1,
    onDrop,
  });




  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      // console.log('isDragActive',isDragActive);

      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
    }

    if (isDragReject) {
      // console.log('isDragReject',isDragReject);

      return (
        <UploadMessage type="error">
          Tipo de arquivo não suportado
        </UploadMessage>
      );
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  }, [isDragActive, isDragReject]);


  if (!grapJSON){   
    return (
      <DropContainer {...getRootProps()}>
        {/* // <DropContainer> */}
        <input  {...getInputProps()} />
        {/* <input type="file" onChange={ (e) => handleChange(e)} /> */}
        {renderDragMessage()}
      </DropContainer>
    );
  }
  else{
   const elements = CytoscapeComponent.normalizeElements({
      nodes: grapJSON.nodes,
      edges: grapJSON.edges,
         
  });

  const layout = {
    name: "breadthfirst",
    fit: true,
    // circle: true,
    directed: true,
    padding: 50,
    // spacingFactor: 1.5,
    animate: true,
    animationDuration: 1000,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false
  };
    



    console.log( grapJSON)
    // console.log( elements )
    return(
      <div id="cy">
        <CytoscapeComponent elements={elements} style={{ width: '84vw', height: '87vh' }}  layout={layout} />;
      </div>
    );
    
  }
  
}



// function handleChange(selectorFiles: any){
//   console.log(selectorFiles);
//   Array.from(selectorFiles.dataTransfer.files)
//       .forEach(async (file) => {
//         const text = await file.text();
//         const result = parse(text, { header: true });
//         console.log(result);
        
//       });
// }
// <input type="file" onChange={ (e) => handleChange(e.target.files)} />
