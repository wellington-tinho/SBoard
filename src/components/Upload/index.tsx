import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { GraphManipulation } from '../GraphManipulation';
import { DropContainer, UploadMessage } from './style';





export interface iGraphJson{
  edges:any,
  nodes:any,
}

export function Upload() {
  const [graphGML, setGraphGML] = useState()
  const [grapJSON, setGraphJSON] = useState<iGraphJson>()
  
  function onDrop(file:any){ 
    const reader = new FileReader();
    reader.onload = function(e: any) {

      
      if(file[0].type === 'application/json'){
        if((JSON.parse(e.target.result).elements)==undefined){
          toast.error('Invalid JSON file!')
        } 
        setGraphJSON(JSON.parse(e.target.result).elements);   
      }else{
        setGraphGML(e.target.result)      
      }
    };
    reader.readAsText(file[0]);
  };
  
  useEffect(() => {

    if(graphGML){
      api.post('convert', {data: graphGML})
      .then(response => {

        if(response.data.elements === undefined){
          toast.error('Invalid GML file!')
          setGraphGML(undefined)
        }else{
          setGraphJSON(response.data.elements)
        }
      })  
    }
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

      return <UploadMessage> Clique ou arraste arquivos aqui...</UploadMessage>;
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
    return(
        <GraphManipulation grapJSON={grapJSON} />
    ); 
  }
}
