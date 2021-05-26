import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'
import { api } from '../../Services'
import { GraphSigma } from '../GraphSigma'

import { Dropzone } from "./styles"

interface GraphProps {
  graph: {
  nodes: Array<{
    Country: String, 
    Internal: number,
    Latitude: number,
    Longitude: number,
    id: String,
    label: String,
    modularitygroup: number
  }>;
  links: Array<{
    LinkLabel: String,
    key: number,
    source: String,
    target: String
  }>;
  }
}

export const Upload = () =>{
  const [graphjson, setGraphjson] = useState<GraphProps>();
  const [selectFileUrl, setSelecFileUrl] = useState('');
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]

    const fileUrl = URL.createObjectURL(file);
    setSelecFileUrl(fileUrl);
   
    const data = new FormData();
    data.append('File',file)
    api.post("/api/upload", data)
    .then(response=> {
      setGraphjson(response.data)
    })
    .catch(err=> console.log(err)
     ); 
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
     { selectFileUrl?  <div id="graph-container"> <GraphSigma graph={graphjson} />
     </div>
      :
        <p>
          <FiUpload />
            Clique ou arraste seu GRAFO.graphml para exibir na tela  
        </p>
        }
    </Dropzone>
  )

  
}