import styled from "styled-components";

export const Container = styled.div`
 
  p.paragraph{
    margin: 1rem;
    font: .9rem 'Roboto Slab', bold;
  }

  ul.listRequest{
    display: flex;
    flex-direction: column;
    height: 45rem;

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


        .styleInfosRequests{

          display: grid;
          grid-template-columns: 1fr;
          border: 1px solid var(--text-tile);
          
          div{
            border-bottom: 1px solid var(--green-1);
            display: grid;
            grid-template-columns: 3fr 1fr 3fr;
            font-size: .9rem; 

            
            >:nth-child(3){
              border: 2px solid var(--gray-1) ;
              width: 6rem;
              word-wrap: break-word;
              text-align: center;

              :hover{
                border: 2px solid var(--green-1);
                font-weight: 600;
              }
            }
            >:nth-child(1){
              word-wrap: break-word;
            }
            
          }
        }

      }
    }
  }
  
`