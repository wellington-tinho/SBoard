import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { DropContainer, UploadMessage } from './style';





export function Upload() {

  const onDrop = useCallback(
    (file) => {
      console.log(file); 
    },
    []
  );
  

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

  return (
    <DropContainer {...getRootProps()}>
      <input  {...getInputProps()} />
      {renderDragMessage()}
    </DropContainer>
  );
}

