import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white-2);
  border-left: 2px solid var(--background);
  border-top: 1px solid var(--green);;

  main{
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
  
    h2{
      font-size: 1.3rem;
      border-bottom: 1px solid var(--background);

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
        background: var(--white-2);
        border-color: #acdcb9;
        color: black;
        border-radius: 5px 5px 0 0;
        }
      
    }
    fieldset{
      border: 1px solid #acdcb9;
      border-top: none;
      /* height: 45rem; */
      overflow-y: scroll;

      .TabPanelVNR{

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
      }
      .TabPanelCreate{
        form{
          padding: 0.5rem  1rem ;
          
          .InfoGeneralRequest h4{
            font: 2rem 'Roboto Slab' bold;
            margin-top: 1rem ;     
          }
          
          .InfoVNDRequest h4{
            font: 2rem 'Roboto Slab' bold;
            margin-top: 2rem ;   
          }

          div{
            div{
              display: flex;
              
              & + div{
                margin-top: .5rem;
              }
              
              p{
                width: 40%;
                padding: 0 0.5rem;
                height: 1.5rem;
                border-radius: 0.25rem;
                border: 1px solid #d7d7d7;
                /* font-weight: 400; */
                font-size: 1rem;
                display: flex;
                align-items: center;
              }
              input{
                width: 100%;
                padding: 0  0.5rem;
                height: 1.5rem;
                border-radius: 0.25rem;
                background: #e7e9ee;
                border: 1px solid #d7d7d7;
                /* font-weight: 400; */
                font-size: 1rem;
              }
            }
          }
        }
      } 
      .TabPanelEdition{
        p{
          margin: 1rem;
          font: .9rem 'Roboto Slab', bold;
        }
      }
      .TabPanelOthers{
        display: flex;
        flex-direction: column;
        .UploadJSON{
          border: 1px solid black;
          background-color: var(--background);
          
          justify-content: center;
          label{
            margin-left: 2rem;
            :hover{
              background-color: var(--white-2);
              cursor: pointer;
            }
          }
        }
      }
      
    }
    
    @media (max-width: 1024px){
      main{

        display: none;
  
        h2{
          font-size: 12rem;
        }
      }

   } 
  }
`