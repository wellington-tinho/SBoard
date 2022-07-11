import styled, { css } from "styled-components";

const dragActive = css`
   border-color: #17A38E;
 `;

const dragReject = css`
   border-color: #e57878;
 `;

type IDropContainer = {
  isDragActive?: boolean;
  isDragReject?: boolean;
};

export const DropContainer = styled.form<IDropContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 6rem;

  margin: 0 auto;
  margin-left: 25%;
  width: 50%;
  color: var(--white-1);
  background-color: var(--gray-1);
  border-radius: .25rem;
  padding: .5rem;
  border: 1px dashed var(--gray-3);
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;
  transition: transform 0.2s ease;

 
   ${(props: any) => props.isDragActive && dragActive};
   ${(props: any) => props.isDragReject && dragReject};


  :hover{
     background-color: var(--white-1);
     transform: scale(1.1); 
   }
 `;



const messageColors = {
  default: "#4F4F4F",
  error: "#e57878",
  success: "#17A38E",
};

interface ITypeMessageColor {
  type?: "default" | "error" | "success";
}

export const UploadMessage = styled.p<ITypeMessageColor>`
   display: flex;
   color: ${(props) => messageColors[props.type || "default"]};
   justify-content: center;
   align-items: center;
   padding: 15px 0;
   font-weight: 500;
   font-size: 1rem;
 `;
