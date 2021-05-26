import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'
import { api } from '../../Services'

import { Dropzone } from "./styles"

// export interface propsGraph {
//   directed: false;
//   multigraph: false;
//   graph: Object;
//   nodes: Array<42>;
//   links: Array<66>;
// }
export const Upload = () =>{
  const [graph, setGraph] = useState('');
  const [selectFileUrl, setSelecFileUrl] = useState('');
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]

    const fileUrl = URL.createObjectURL(file);
    setSelecFileUrl(fileUrl);
   
    const data = new FormData();
    data.append('File',file)
    api.post("/api/upload", data)
    .then(response=>
      setGraph(response.data)
        
    ); 
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
     { selectFileUrl?  <div id="graph-container">Grafo exibido {graph}</div>
      :
        <p>
          <FiUpload />
            Clique ou arraste seu GRAFO.graphml para exibir na tela  
        </p>
        }
    </Dropzone>
  )

  
}