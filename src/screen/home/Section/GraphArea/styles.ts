import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const NavOptions  = styled.nav`
  border: 1px solid var(--green-3);
  background-color: var(--white-2);
  border-right: 0;
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
          border-bottom: 1px solid var(--green-3);
                 
        }
      }
      span{
        margin-left: -4rem !important;
        width: 8rem !important;
      }
    }
  };

`

export const GraphContainer = styled.div`
  border-radius: 0.25rem;
  background-color: var(--white-3);
  height: 100%;  
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;

  `

