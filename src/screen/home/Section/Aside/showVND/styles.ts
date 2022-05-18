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
          border: 1px solid var(--gray-2);
          box-shadow: 2px 2px 1px 1px var(--gray-1);
          margin-bottom: 1rem;
          
          >div{
            border-bottom: 1px solid var(--green-1);
            display: grid;
            grid-template-columns: 3fr 1fr 3fr;
            font-size: .9rem; 

            p:first-of-type{
              word-wrap: break-word;
            }
            
            p:last-of-type{
              border: 2px solid var(--gray-1) ;
              width: 6rem;
              word-wrap: break-word;
              text-align: center;

              :hover{
                border: 2px solid var(--green-1);
                font-weight: 600;
              }
            }
          }
          div.virtualNetworkRequests{
            display: grid;
            grid-template-columns: 1fr;
            border: 1px solid var(--gray-1);
            box-shadow: 1px 1px 0px 0px var(--gray-1);
            margin: 1rem 0 2rem 0;
            div{
              border-bottom: 1px solid var(--green-1);
              display: grid;
              grid-template-columns: 3fr 1fr 3fr;
              font-size: .9rem; 

              p:first-of-type{
                word-wrap: break-word;
              }
              
              p:last-of-type{
                border: 2px solid var(--white-3) ;
                width: 5rem;
                word-wrap: break-word;
                text-align: center;

                :hover{
                  border: 2px solid var(--green-1);
                  font-weight: 600;
                }
              }
            }
            >p{
              justify-content: center;
              border-bottom: 2px solid var(--gray-1) ;
              text-align: center;
              font-weight: 600;
            }
          }

          div.links{
            
            div{
              p:first-of-type{ 
                border: 2px solid var(--white-3) ;
                width: 5rem;
                word-wrap: break-word;
                text-align: center;
                :hover{
                  border: 2px solid var(--green-1);
                  font-weight: 600;
                }
              }
            }

          }

          details{
            margin-top: 0.8rem ;
            summary{
              font-weight: 600;
              font-size: 0.9rem;  
            }
          }
        }
      }
    }
  }
  
`