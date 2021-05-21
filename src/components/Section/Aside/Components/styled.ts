import styled from "styled-components";

export const Component = styled.div`

ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction:column;
  margin: 1rem 0;

  li {
      margin: 1rem auto;
      width: 5rem;
      
      button {
        width: 5rem;
        text-align: center;
        border:none;
        border-bottom: 1px solid black;
        padding: 0.2rem 0;
        background: none;
        :hover {
          transition: 0.2s;
          border-bottom: 1px solid  #34D761;
        }
        img{
          width:1rem;
          margin-right: 0.5rem;
        }
      }

    div{
      /* position: absolute; */
      display: block;
      margin: 0.5rem;
      border: 1px solid rgb(218, 214, 214);
      border-radius: 1rem 0 1rem 1rem;
      padding: 0.5rem;
      position: relative;
      top: -20px;
      left: -15rem;
      width: 13rem;

      button{
        width: 5.5rem;
        text-decoration: none;
        text-align: center;
        background-color: var(--background);
        border: none;
        border-bottom: 1px solid black;
        margin: 1rem auto;
        :hover {
          transition: 0.2s;
          border-bottom: 1px solid #34D761;
        }
      }

    }
  }
}

`