import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'
import { api } from '../../Services'

import { Dropzone } from "./styles"


export const Upload = () =>{

  const [selectFileUrl, setSelecFileUrl] = useState('');
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]

    const fileUrl = URL.createObjectURL(file);
    setSelecFileUrl(fileUrl);
    console.log(file);
    
    const data = new FormData();
    data.append('File',file)
    api.post("/api/upload", data).then(response=> console.log(response.data)); 

  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
     { selectFileUrl?  <div id="graph">Grafo exibido</div>
      :
        <p>
          <FiUpload />
            Clique ou arraste seu GRAFO.graphml para exibir na tela  
        </p>
        }
    </Dropzone>
  )
}