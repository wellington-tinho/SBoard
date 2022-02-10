import styled from "styled-components";

export const Container = styled.div`
 
  p{
    margin: 1rem;
    font: .9rem 'Roboto Slab', bold;
  }

  ul.listRequest{
    display: flex;
    flex-direction: column;
    li{
      
      border-bottom: 1px solid #acdcb9;
      
      div{
        /* width: 10rem;   */
        display: flex;
        justify-content:space-around;
        border-radius: 0.25rem;
        padding: 0.5rem;
                      
          h4{
            font-size: .8rem; 
            
          }
          button{
              border: 1px solid #34D761; 
              background-color: var(--background);
              border-radius:0.25rem; 
              font-size: .8rem; 
              width: 7rem;

              transition: filter 0.2s;

              :hover{
                filter: brightness(110%);
              }
            }
      }
      .visible{
        flex-direction: column;
      }
    }
  }
  
`