import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  /* nav{
    flex-grow: 0;
  }
  div {
    flex-grow: 1;
  } */

`

export const NavOptions  = styled.nav`
  border: 1px solid var(--green);
  border-right: 0;
  background-color: var(--bg);

  border-left: 0;
 
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-around;
    font-size: 80%;
    li{
      display: flex;
      align-items: center;

      input{
        /* visibility: hidden; */
        /* padding: 0;
        height: 0;
        margin: 0; */
        display: none;

      }

      svg{
        margin: 0 .4rem;
       
        :hover{
          transition: 0.2s;
          border-bottom: 1px solid #34D761;
                 
        }
      }
    }
  };

`

export const GraphContainer = styled.div`
  border-radius: 0.25rem;
  background-color: var(--bg);
  height: 100%;  
  display:flex;
  justify-content: center;
  align-items: center;

  `

