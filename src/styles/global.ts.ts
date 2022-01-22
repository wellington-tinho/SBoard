import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`






/*==== GLOBAL ==== */
:root {
  --background: #eee;
  --green: #34D761;
  --white-2: #E6E6e2;
  --text-tile: #63696E;
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
  background: var(--background);
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
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius:  0.25rem;
  width: 42rem;
  height: 42rem;
  overflow:auto; 
}

.react-modal-close{
  color: var(--text-tile);
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
`
