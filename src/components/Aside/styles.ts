import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg);
  border: 1px solid var(--background);
  border-radius: 0.25rem;

  main{
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
  
    h2{
      font-size: 1.3rem;
      border-bottom: 1px solid #34D761;

    }
    button{
      border-radius: .5rem;
      border: 1px solid var(--background);
      background-color: transparent;
      img{
        height:1.5rem;
      }
    }
  }

  .Tabs {
    margin: 1rem;
    width: 15rem;
    .TabList{
      border-bottom: 1px solid #acdcb9;
      /* padding-bottom: 1rem; */

      .Tab{
        font: 0.9rem 'Roboto Slab';
        font-weight: 600;
        display: inline-block;
        position: relative;
        padding: 1rem 0.3rem;
        cursor: pointer;
        border: 1px solid transparent;
        border-bottom: none;
        bottom: -1px;

      }

      li.Tab[aria-selected="true"]{
        background: #fff;
        border-color: #acdcb9;
        color: black;
        border-radius: 5px 5px 0 0;
        }
      
    }
    fieldset{
      border: 1px solid #acdcb9;
      border-top: none;
      height: 45rem;
      overflow-y: scroll;
      .TabPanel{
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
      }
   } 

  }

  @media (max-width: 1280px){
      main{

        display: none;
  
        h2{
          font-size: 1rem;
        }
      }

      Fieldset{
      border: 1px solid #acdcb9;
      border-top: none;
      height: 32rem;
      overflow-y: scroll;
    
      .TabPanel{
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
              padding: 0.25rem;
                            
                h4{
                  font-size: .6rem; 
                  
                }
                button{
                    border-radius:0.25rem; 
                    font-size: .6rem; 
                    width: 6rem;
                  }
            }
            .visible{
              flex-direction: column;
            }
          }
        }
      }
   } 
  }
`