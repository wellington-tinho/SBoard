import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { DropContainer, UploadMessage } from './style';






export interface iGraphJson{
  edges:any,
  nodes:any,
}

interface UploadGraphProps{
  setGraph:React.Dispatch<React.SetStateAction<any>>,
  setIsGraph: React.Dispatch<React.SetStateAction<boolean>>,
}

export function UploadGraph({setGraph,setIsGraph}:UploadGraphProps){
  const [graphGML, setGraphGML] = useState()
  // const [grapJSON, setGraphJSON] = useState<iGraphJson>()
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

      return <UploadMessage> 
        <FiUpload color="#228f41" fontSize="2em" style={{marginRight: '1rem'}} />   
         Click or drag files here, for starts in file done... 
        </UploadMessage>;
      
    }

    if (isDragReject) {
      // console.log('isDragReject',isDragReject);

      return (
        <UploadMessage type="error">
          Not suport file. 
        </UploadMessage>
      );
    }

    return <UploadMessage type="success">Release the files here</UploadMessage>;
  }, [isDragActive, isDragReject]);
  
  function onDrop(file:any){ 
    const reader = new FileReader();
    reader.onload = function(e: any) {

      
      if(file[0].type === 'application/json'){
        if((JSON.parse(e.target.result).elements)==undefined){
          toast.error('Invalid JSON file!')
        }else{
          setGraph(JSON.parse(e.target.result).elements); 
          setIsGraph(true); 
        }
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
          setGraph(response.data.elements)
          setIsGraph(true); 

        }
      })  
    }
  },[graphGML]);




    return (
      <DropContainer {...getRootProps()}>
        {/* // <DropContainer> */}
        <input  {...getInputProps()} />
        {/* <input type="file" onChange={ (e) => handleChange(e)} /> */}
        {renderDragMessage()}
      </DropContainer>
    );


}
