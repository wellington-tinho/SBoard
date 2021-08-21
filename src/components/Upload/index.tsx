import Dropzone from 'react-dropzone';
import { DropContainer } from './style';

export function Upload(){
  return(
    <Dropzone accept='.gml' onDropAccepted={()=>{}}>
      {({getRootProps, getInputProps, isDragActive, isDragReject})=>(
          <DropContainer 
            { ... getRootProps()} 
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            
          </DropContainer>
      )}
    </Dropzone>
  );
}