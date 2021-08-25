
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { DropContainer, UploadMessage } from './style';




// export interface FileReaderEventTarget extends EventTarget {
//   result:string
// }

// export interface FileReaderEvent extends ProgressEvent {
//   target: FileReaderEventTarget;
// }



export function Upload() {
  const [graphGML, setGraphGML] = useState('')

  const onDrop = useCallback((file) => {  
    const reader = new FileReader();
    reader.onload = function(e: any) {
      setGraphGML(e.target.result)
    };

    reader.readAsText(file[0]);
  },[]);


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


  if (!graphGML){
    console.log(graphGML);
    
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
    return(
      <div id="cy">
        {graphGML}
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
