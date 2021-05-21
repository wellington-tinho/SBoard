import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F3F8FC;
    --green: #0AFA40;
    --red: #e52e40;
    --blue:#5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  } 

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html{
    @media(max-width:1080px){
      font-size:93.75%; //15px
    }
    @media(max-width: 720px){
      font-size: 87.5%; //14px
    }
  }
  body{
    background-color: var(--background);
    -webkit-font-smoothing:antialiased;;
  }
 
  body, input, textarea, button{
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed; //não fume
  }
`