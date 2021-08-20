import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg);
  border: 1px solid var(--background);
  border-radius: 0.25rem;

  main{
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
  
    h2{
      font-size: 1.5rem;
      border-bottom: 1px solid #34D761;

    }
    button{
      border-radius: .5rem;
      border: 1px solid var(--background);
      background-color: transparent;
    }
  }

    div{
      ul{
        padding: .5rem;

        li{
          padding: .5rem;
          border-radius: .5rem;
          border: 1px solid var(--background);

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


      }
    }
  
`