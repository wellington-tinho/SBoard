import { Container } from "./styles";

import openOption from "../../assets/icons/import.png"
import menu from '../../assets/icons/menu-vertical.png' 


export function Aside() {

  return (
    <Container>
      <main>
        <h2> Requests</h2>
        <button> 
          <img src={menu} alt="Menu toggle Requests" />
        </button>
      </main>

      <div>

        <ul>
          <li>
            <button> 
              <img src={openOption} alt="Abrir opção" />  
              <h3>Creation</h3>
            </button>

            <div>
              <input type="text" name="Topology"        id="Topology"     placeholder="Topology" />
              <input type="text" name="Service"         id="Service"      placeholder="Service" />
              <input type="text" name="Duration"        id="Duration"     placeholder="Duration" />
              <input type="text" name="Band"            id="Band"         placeholder="Band" />
              <input type="text" name="Delay"           id="Delay"        placeholder="Delay" />
              <input type="text" name="Knots Quantity" id="Knots Quantity"placeholder="Knots Quantity" />
              <input type="text" name="Reliability"     id="Reliability"  placeholder="Reliability" />
             
              <select name="SliceTypes" id="SliceTypes">
                <option value="" selected disabled hidden>Select Slice</option>
                <option value="SliceX"> SliceX </option>
                <option value="SliceY"> SliceY </option>
                <option value="SliceZ"> SliceZ </option>
              </select>

              <input type="submit" value="Create Request"/>

            </div>

          </li>

          <li>
            <button> 
              <img src={openOption} alt="Abrir opção" /> 
              <h3>Edition</h3>
            </button>

            <div>
              <select name="Requests" id="Requests">
                <option value="" selected disabled hidden>Select Request</option>
                <option value="Request1"> Request1 </option>
                <option value="Request2"> Request2 </option>
                <option value="Request3"> Request3 </option>
              </select>
              
              <select name="Topologys" id="Topologys">
              <option value="" selected disabled hidden>Select Topology</option>
                <option value="TopologyX"> TopologyX </option>
                <option value="TopologyY"> TopologyY </option>
                <option value="TopologyZ"> TopologyZ </option>
              </select>
              
              <input type="text" name="Service"         id="Service"      placeholder="Service" />
              <input type="text" name="Duration"        id="Duration"     placeholder="Duration" />
              <input type="text" name="Band"            id="Band"         placeholder="Band" />
              <input type="text" name="Delay"           id="Delay"        placeholder="Delay" />
              <input type="text" name="Knots Quantity" id="Knots Quantity"placeholder="Knots Quantity" />
              <input type="text" name="Reliability"     id="Reliability"  placeholder="Reliability" />
              
              <select name="SliceTypes" id="SliceTypes">
                <option value="" selected disabled hidden>Select Slice</option>
                <option value="SliceX"> SliceX </option>
                <option value="SliceY"> SliceY </option>
                <option value="SliceZ"> SliceZ </option>
              </select>

              <input type="submit" value="Create Request"/>
   
            </div>

          </li>
          <li>
            <button> 
              <img src={openOption} alt="Abrir opção" />  
              <h3>Preview</h3>
            </button>
            
            <div>
              <select name="Created Request" id="Created Request">
                <option value="" selected disabled hidden>Created Request</option>
                <option value="Request1"> Request1 </option>
                <option value="Request2"> Request2 </option>
                <option value="Request3"> Request3 </option>
                <option value="Request4"> Request5 </option>
                <option value="RequestX"> RequestX </option>
  
              </select>
              <select name="Mapped Requests" id="Mapped Requests">
                <option value="" selected disabled hidden>Mapped Request</option>
                <option value="Request1"> Request1 </option>
                <option value="Request2"> Request2 </option>
                <option value="Request3"> Request3 </option>
                <option value="Request4"> Request5 </option>
                <option value="RequestX"> RequestX </option>
              </select>

              <select name="Change Requests" id="Change Requests">
                <option value="" selected disabled hidden>Change Request</option>
                <option value="Request1"> Request1 </option>
                <option value="Request2"> Request2 </option>
                <option value="Request3"> Request3 </option>
                <option value="Request4"> Request5 </option>
                <option value="RequestX"> RequestX </option>
              </select>

              <select name="Delete Requisitions" id="Delete Requisitions">
                <option value="" selected disabled hidden>Del Requisition</option>
                <option value="Request1"> Request1 </option>
                <option value="Request2"> Request2 </option>
                <option value="Request3"> Request3 </option>
                <option value="Request4"> Request5 </option>
                <option value="RequestX"> RequestX </option>
              </select>

              <select name="Remove Mappend Requests" id="Remove Mappend Requests">
                <option value="" selected disabled hidden>Del Mappend Requests</option>
                <option value="Request1"> Request1 </option>
                <option value="Request2"> Request2 </option>
                <option value="Request3"> Request3 </option>
                <option value="Request4"> Request5 </option>
                <option value="RequestX"> RequestX </option>
              </select>

            </div>

          </li>
        </ul>
      </div>
    </Container>
  );
}