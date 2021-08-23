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

export const DropContainer = styled.div<IDropContainer>`
  width: 100%;
  max-width: 25rem;
  margin: 1rem auto;
  background-color: var(--background);
  border-radius: .25rem;
  padding: .5rem;
  border: 1px dashed #818C7E;
  border-radius: 4px;
  cursor: pointer;
  
 
   transition: height 0.2s ease;
 
   ${(props: any) => props.isDragActive && dragActive};
   ${(props: any) => props.isDragReject && dragReject};
 `;

const messageColors = {
  default: "#7A7A8C",
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
 `;
