
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { DropContainer, UploadMessage } from './style';






export function Upload() {


  // function handleChange(e: any){

  //   const reader = new FileReader();
  //   reader.onload = function(e:any) {
  //     // The file's text will be printed here
  //     console.log(e.target.result)
  //   };
  // reader.readAsText(e.target.files[0]);
  // }


  const onDrop = useCallback((file) => {
    
    const reader = new FileReader();
    reader.onload = function(e:any) {
      // The file's text will be printed here
      console.log(e.target.result)
    };
    reader.readAsText(file[0]);
 
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
    {/* // <DropContainer> */}
      <input  {...getInputProps()} />
      {/* <input type="file" onChange={ (e) => handleChange(e)} /> */}

      {renderDragMessage()}
    </DropContainer>
  );
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
