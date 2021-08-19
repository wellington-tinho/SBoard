import openOption from "../../assets/icons/import.png"
import { Container } from "./styles";


export function Aside() {

  return (
    <Container>
      <main>
        ... (open)
      </main>

      <div>
        <h2> Requests</h2>

        <ul>
          <li>
            <button> 
              <img src={openOption} alt="Abrir opção" />  
              <h3> Creation</h3>
            </button>

            <div>
              <button>   Topology  </button>

              <button>   Service  </button>

              <button>   Duration  </button>

              <button>   Band  </button>
              
              <button>   Delay  </button>
              
              <button>   Knots Quantity  </button>
              
              <button>   Reliability  </button>
              
              <button>   Slice Type  </button>
            </div>

          </li>

          <li>
            <button> 
              <img src={openOption} alt="Abrir opção" /> 
              <h3> Edition</h3>
            </button>

            <div>
              <button>   Topology  </button>

              <button>   Service  </button>

              <button>   Duration  </button>

              <button>   Band  </button>
              
              <button>   Delay  </button>
              
              <button>   Knots Quantity  </button>
              
              <button>   Reliability  </button>
              
              <button>   Slice Type  </button>
            </div>

          </li>
          <li>
            <button> 
              <img src={openOption} alt="Abrir opção" />  
              <h3> Preview</h3>
            </button>
            
            <div>
              <button>   Topology  </button>

              <button>   Service  </button>

              <button>   Duration  </button>

              <button>   Band  </button>
              
              <button>   Delay  </button>
              
              <button>   Knots Quantity  </button>
              
              <button>   Reliability  </button>
              
              <button>   Slice Type  </button>
            </div>

          </li>
        </ul>
      </div>
    </Container>
  );
}