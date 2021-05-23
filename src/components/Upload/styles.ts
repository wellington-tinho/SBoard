import styled from "styled-components";

export const Dropzone = styled.div`
  margin: auto;
  height:100%;
  width:100%;
  background: var(--shape);
  border-radius:1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  border: 1px solid var(--background);
  
 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

 p {
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  border-radius: 10px;
  border: 1px dashed #79ab7f;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;

}

p svg {
  color: #79ab7f;
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
}
`