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
              <input type="text" name="Topology-creation"        id="Topology-creation"     placeholder="Topology" />
              <input type="text" name="Service-creation"         id="Service-creation"      placeholder="Service" />
              <input type="text" name="Duration-creation"        id="Duration-creation"     placeholder="Duration" />
              <input type="text" name="Band-creation"            id="Band-creation"         placeholder="Band" />
              <input type="text" name="Delay-creation"           id="Delay-creation"        placeholder="Delay" />
              <input type="text" name="KnotsQuantity-creation"  id="KnotsQuantity-creation"placeholder="Knots Quantity" />
              <input type="text" name="Reliability-creation"     id="Reliability-creation"  placeholder="Reliability" />
             
              <select name="SliceTypes" id="SliceTypes" defaultValue={'DEFAULT'}>
                <option value='DEFAULT' disabled hidden>Select Slice</option>
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
              <select name="Requests" id="Requests" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled hidden>Select Request</option>
                <option value="Request1"> Request1 </option>
                <option value="Request2"> Request2 </option>
                <option value="Request3"> Request3 </option>
              </select>
              
              <select name="Topologys" id="Topologys" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled hidden>Select Topology</option>
                <option value="TopologyX"> TopologyX </option>
                <option value="TopologyY"> TopologyY </option>
                <option value="TopologyZ"> TopologyZ </option>
              </select>
              
              <input type="text" name="Service-edition"         id="Service-edition"      placeholder="Service" />
              <input type="text" name="Duration-edition"        id="Duration-edition"     placeholder="Duration" />
              <input type="text" name="Band-edition"            id="Band-edition"         placeholder="Band" />
              <input type="text" name="Delay-edition"           id="Delay-edition"        placeholder="Delay" />
              <input type="text" name="KnotsQuantity-edition"   id="KnotsQuantity-edition"placeholder="Knots Quantity" />
              <input type="text" name="Reliability-edition"     id="Reliability-edition"  placeholder="Reliability" />
              
              <select name="SliceTypes" id="SliceTypes" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled hidden>Select Slice</option>
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
              <select name="Created Request" id="CreatedRequest" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled hidden>Created Request</option>
                <option value="Request1"> Request1 </option>
                <option value="Request2"> Request2 </option>
                <option value="Request3"> Request3 </option>
                <option value="Request4"> Request5 </option>
                <option value="RequestX"> RequestX </option>
  
              </select>
              <select name="Mapped Requests" id="MappedRequests">
                <option value="" disabled hidden>Mapped Request</option>
                <option value="Request1"> Request1 </option>
                <option value="Request2"> Request2 </option>
                <option value="Request3"> Request3 </option>
                <option value="Request4"> Request5 </option>
                <option value="RequestX"> RequestX </option>
              </select>

              <select name="Change Requests" id="ChangeRequests">
                <option value="" disabled hidden>Change Request</option>
                <option value="Request1"> Request1 </option>
                <option value="Request2"> Request2 </option>
                <option value="Request3"> Request3 </option>
                <option value="Request4"> Request5 </option>
                <option value="RequestX"> RequestX </option>
              </select>

              <select name="Delete Requisitions" id="DeleteRequisitions">
                <option value="" disabled hidden>Del Requisition</option>
                <option value="Request1"> Request1 </option>
                <option value="Request2"> Request2 </option>
                <option value="Request3"> Request3 </option>
                <option value="Request4"> Request5 </option>
                <option value="RequestX"> RequestX </option>
              </select>

              <select name="Remove Mappend Requests" id="RemoveMappendRequests">
                <option value="" disabled hidden>Del Mappend Requests</option>
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