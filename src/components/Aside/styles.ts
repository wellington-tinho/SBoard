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

    div{
      ul{
        padding: .5rem;

        li{
          margin: .5rem 0 ;

          padding: .5rem;
          border-radius: .5rem;
          border: 1px solid #d3d3d3;


          button{
            display: flex;
            align-items: center;
            justify-content: center;
            padding:  0 .5rem 0 .5rem;
            margin: 1rem 1rem 0.5rem;
            width: 6rem;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid var(--green);

            img {
              height: 1rem;
            }
            h3{
              padding-left: .5rem;
            }
          }

          div {
            display: grid;
            grid-template-columns: 8rem 8rem;

            input[type=text]{
              margin: 0.5rem 0 0 0.5rem;
              text-align: center;
            	border: none;
            	border-bottom: 1px solid black;
            	cursor: pointer;
              background-color: var(--background);
                  
              :hover{
                transition: 0.2s;
                border-bottom: 1px solid #34D761;
              }
            } 

            select{
              margin: 0.5rem 0 0 0.5rem;
              text-align: center;
            	border: none;
            	border-bottom: 1px solid black;
            	cursor: pointer;
              background-color: var(--background);

                  
              :hover{
                transition: 0.2s;
                border-bottom: 1px solid #34D761;
              }
            }

            input[type=submit]{
              margin-top: 0.5rem;
              margin-left: .5rem;
              background: linear-gradient(45deg,#17A38E,#27A34A);
              color: #fff;
              border-radius: .25rem;
              cursor: pointer;

            }
          }
        }
        li.request{
          height: 15rem;
          background: #fff;
          

          button{
            margin: 1rem 1rem 0rem;
            width:11rem;
          }
          ul{
            height: 12rem;
            overflow-y: scroll;
            background-color: #fff;
            li{
              div{
                  display: flex; 
                  align-items: center; 
                  justify-content: space-around; 
                  width: 14rem;
                  input{
                  }
                  h4{
                    font-size: .8rem;
                    margin-left: 1rem;

                  }
                  button{
                    border: 1px solid #34D761; 
                    border-radius:0.25rem; 
                    font-size: .8rem;
                    width: 7rem;
                    margin: 0 auto;
                  }
              
                }
              
                .visible{
                  flex-direction: column; 
                  font-size: .8rem;
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