import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'
import { useEffect } from "react";
import { api } from "../../Services";


import { Dropzone } from "./styles"
// import { Convert } from './convert';

export const Upload = () =>{

  const [selectFileUrl, setSelecFileUrl] = useState('');
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    // const fileUrl = URL.createObjectURL(file);
    // setSelecFileUrl(fileUrl);
    // <Convert onFileUpload ={file}/>
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
     { selectFileUrl?  <img src={selectFileUrl} alt='grafo' />
      :
        <p>
          <FiUpload />
            Clique ou arraste seu GRAFO.graphml para exibir na tela  
        </p>
        }
    </Dropzone>
  )
}