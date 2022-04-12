import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`






/*==== GLOBAL ==== */
:root {
  --white-1: #FFFAFA;
  --white-2: #eee; //e7e9ee
  --white-2-1: #e7e9ee;
  --white-3: #E6E6e2; 
  
  --gray-1: #D3D3D3; //d7d7d7
  --gray-2: #A9A9A9;
  --gray-3: #63696E;
  
  --green-1: #82EAC3;
  --green-2: #00FA9A;
  --green-3: #34D761;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html { 
  @media (max-width: 1080px){
    font-size: 93.75%;
  }

  @media (max-width: 720px){
    font-size: 87.5%;
  }
}

body {
  font-size: 93.75%;
  background: var(--white-2);
  -webkit-font-smooth: antialiased;
  
  display: flex;
  flex-flow: column;
  height: 100%;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 700;
  font-family: 'Roboto Slab', serif; 
}

ul li{
  list-style-type: none;
}


.react-modal-overlay{
  background: rgba(0,0,0,0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;

}
.react-modal-content{
  width: 100%;
  max-width: 50rem;
  background: var(--white-2);
  padding: 3rem;
  position: relative;
  border-radius:  0.25rem;
  width: 42rem;
  height: 42rem;
  overflow:auto; 
}
.react-modal-close{
  color: var(--gray-3);
  position: absolute;
  font-size: 1rem;
  right: 1.5rem;
  top:1.5rem;
  border: 0;
  background: transparent;
  cursor: pointer;

  &:hover{
    filter: brightness(0.7);
  }
}

.tooltip {
  position: relative;
  display: inline-block;
  /* border-bottom: 1px dotted black; */
  :hover .tooltiptext {
    visibility: visible;
    animation: cssAnimation 7s forwards;
    }
    @keyframes cssAnimation {
      0%   {opacity: 1;}
      90%  {opacity: 0.8;}
      100% {opacity: 0;}
    }
    @-webkit-keyframes cssAnimation {
      0%   {opacity: 1;}
      90%  {opacity: 0.8;}
      100% {opacity: 0;}
    }
  .tooltiptext {
    visibility: hidden;
    width: auto;
    background-color: var(--gray-3);
    color: var(--white-1);
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -50%;
    opacity: 0;
    transition: opacity 0.3s;
  
    ::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: var(--gray-3) transparent transparent transparent;
    }
  }

}
`
