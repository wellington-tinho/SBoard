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
      border-bottom: 1px solid #34D761;
      margin-bottom: 1rem;

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
        border-color: #34D761;
        color: black;
        border-radius: 5px 5px 0 0;
        }
      
    }

    .TabPanel{
      
    }


  }

  @media (max-width: 1280px){
      main{

        display: none;
  
        h2{
          font-size: 1rem;
        }

        button{         
         img{ 
           height: 1.5rem;
          }
        }
      }

    div{
      ul{
        padding: 0 .25rem;

        li{
          margin: .25rem 0 ;
          
          button{
            margin: 0 .8rem 0;
            width: 4rem;

            img {
              height: 1rem;
            }
            h3{
              font-size: 0.9rem;
              padding-left: .25rem;
            }
          }

          div {
            grid-template-columns: 6rem 6rem;


            input[type=text]{
              font-size: .7rem;
              :hover{
                transition: 0.2s;
                border-bottom: 1px solid #34D761;
              }
            } 

            select{
              font-size: .7rem;
              margin: 0.25rem 0 0 0.25rem;

                  
              :hover{
                transition: 0.2s;
                border-bottom: 1px solid #34D761;
              }
            }

            input[type=submit]{
              margin-top: 0.25rem;
              margin-left: .25rem;
              background: linear-gradient(45deg,#17A38E,#27A34A);
              color: #fff;
              border-radius: .25rem;
              cursor: pointer;

            }
          }
        }

        li.request{
          height: 10.2rem;
          button{
            margin: 0;
          }
          ul{
            li{
              div{
                width: 10rem;                
                  h4{
                    font-size: .65rem;
                    margin-left: .4rem;
                  }
                  button{
                    font-size: .6rem;
                    width: 5rem;
                  }
              }
              .visible{
                width: 7rem;
                flex-direction: column; 
                width: 10rem;
                font-size: .7rem;
              }
            }
          }
        }
      }
    }
  }
`