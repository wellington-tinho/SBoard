import { Container } from "./styles";

import openOption from "../../assets/icons/import.png"
import menu from '../../assets/icons/menu-vertical.png'
import { useContext, useEffect, useState } from "react";
import { CytoscapeContext } from "../../CytoscapeContext";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Variavel global responsavel por conter um dicinoario com o Id do request e quais nós/edges foram alterados com esse Id
// Tentei deixar essa variavel global dentro de setColorGraph() mas sempre ele ficava sendo reecriada
var changeDicChecbox: { [index: string]: any; } = {};

export function Aside({ request }: any) {
  const [cy] = useContext(CytoscapeContext);
  const [requestMenu, setRequestMenu] = useState<any>()
  const [state, setState] = useState({ checked: false })
  var colors = ['#6A5ACD', '#0000CD', '#4682B4', '#00FFFF', '#00FF7F', '#00FF7F', '#ADFF2F', '#ADFF2F', '#DAA520', '#8B4513', '#BC8F8F', '#7B68EE', '#4B0082', '#9400D3', '#800080', '#FF00FF', '#C71585', '#FF1493', '#DB7093', '#CD5C5C', '#DC143C', '#FF0000', '#FF4500', '#B22222', '#FF8C00', '#FF8C00']




  // Funcao principal para colorir o grafo
  function setColorGraph(checked: any, request: any) {
    try {
      if (checked) {
        var randNum = (Math.floor(Math.random() * 100) + 1)
        var color = (colors)[Math.floor(Math.random() * (colors).length)]
        changeDicChecbox[request.id] = randNum

        // console.log('request',request);
        // console.log(request.vnd);

        // Object.keys(request.vnd).forEach(key=>{

        // })
        // cy.$(`#2`).neighborhood();

        console.log('node', cy.$(`node[id = "${randNum}"]`).json());
        console.log('edge', cy.$(`edge[id = "e${randNum}"]`).json());

        cy.style()
          .selector(`node[id = "${randNum}"]`)
          .style({ 'background-color': `${color}` })
          .update();

        cy.style()
          .selector(`edge[id = "e${randNum}"]`)
          .style({ 'line-color': `${color}` })
          .update();
        // .$(`edge[Delay = ${randNum}]`)

      }
      else {


        cy.style()
          .selector(`node[id = "${changeDicChecbox[request.id]}"]`)
          .style({ 'background-color': `grey` })
          .update();


        cy.style()
          .selector(`edge[id = "e${changeDicChecbox[request.id]}"]`)
          .style({ 'line-color': 'grey' })
          .update();
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  // Verefificando se foi apertado checkbox dos requests e enviando para funcao de colorir
  function toggleCheckBoxRequest(e: any, request: any) {
    const { checked } = e.target
    setState({
      checked: checked
    })
    setColorGraph(checked, request)
  }

  // função para definir a visibilidade de informacoes da lista de requests
  const VisibleDiv = (divVisible: string, buttonVerInfo: string) => {

    const dataButton = window.document.getElementById(buttonVerInfo)
    if (window.document.getElementById(divVisible)?.getAttribute('style') === 'display: none;') {
      window.document.getElementById(divVisible)?.setAttribute('style', 'display: flex;')
      if (dataButton !== null) {
        dataButton.innerText = 'Enconder Info'
      }

    } else {
      window.document.getElementById(divVisible)?.setAttribute('style', 'display: none;')
      if (dataButton !== null) {
        dataButton.innerText = 'Ver Info'
      }
    }
  }

  // Criacao da sessão VIRTUAL REQUESTS após o componete ser carregado com o json na variavel de requests
  useEffect(() => {
    if (request) {
      var divVisible = 'divVisible'
      var buttonVerInfo = 'buttonVerInfo'
      var ele: any = []
      Object.keys(request).forEach(key => {


        ele.push(
          <li key={key}>
            <div>
              <input
                onChange={e => toggleCheckBoxRequest(e, request[key])}
                defaultChecked={state.checked}
                type="checkbox" name={key} id={key}
              />
              <h4> Request {key} </h4>
              <button
                id={buttonVerInfo + key}
                onClick={() => VisibleDiv((divVisible + key), (buttonVerInfo + key))} >
                Ver Info
              </button>
            </div>

            <div id={divVisible + key} className='visible' style={{ display: 'none' }}>
              <p>   Id : {request[key].id}                  </p>
              <p>   type_slice : {request[key].type_slice}  </p>
              <p>   created : {request[key].created}        </p>
              <p>   duration : {request[key].duration}      </p>
              <p>   period : {request[key].period}          </p>
              <p>   bandwidth : {request[key].bandwidth}    </p>
              <p>   delay : {request[key].delay}            </p>
              <p>   reliability : {request[key].reliability}</p>
              {/* <br />
                  <p>   vnd: {JSON.stringify(request[key].vnd, null, 4)} </p>  */}
              <br />
              <p>links: {JSON.stringify(request[key].links, null, 2)}</p>

            </div>

          </li>
        )
      })


      if(!ele){
        
        setRequestMenu(
          <>
            <button >
              <img src={openOption} alt="Abrir opção" />
              <h3 >Virtual Requests</h3>
            </button>
            <h4>Nenhuma requisição foi criada</h4> 
          </>
        );
      }
      setRequestMenu(
        <>
          <button >
            <img src={openOption} alt="Abrir opção" />
            <h3 >Virtual Requests</h3>
          </button>
          <ul>
            {ele}
          </ul>
        </>
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request, state.checked])



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
          {/* <li>
            <button> 
              <img src={openOption} alt="Abrir opção" />  
              <h3>Creation</h3>
            </button>

            <div>
              <input type="text" name="Topology-creation"        id="Topology-creation"       placeholder="Topology" />
              <input type="text" name="Service-creation"         id="Service-creation"        placeholder="Service" />
              <input type="text" name="Duration-creation"        id="Duration-creation"       placeholder="Duration" />
              <input type="text" name="Band-creation"            id="Band-creation"           placeholder="Band" />
              <input type="text" name="Delay-creation"           id="Delay-creation"          placeholder="Delay" />
              <input type="text" name="KnotsQuantity-creation"   id="KnotsQuantity-creation"  placeholder="Knots Quantity" />
              <input type="text" name="Reliability-creation"     id="Reliability-creation"    placeholder="Reliability" />
             
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

          </li> */}

          <li className='request'>
              {requestMenu} 
          </li>


        </ul>


        {/* <Tabs>
          <TabList>
            <Tab>Mario</Tab>
            <Tab disabled>Luigi</Tab>
            <Tab>Peach</Tab>
            <Tab>Yoshi</Tab>
            <Tab>Toad</Tab>
          </TabList>

          <TabPanel>
            <p>
              <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (<i>English:
                /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional character in the Mario video
              game franchise, owned by Nintendo and created by Japanese video game designer
              Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist
              of the series, Mario has appeared in over 200 video games since his creation.
              Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
              Kingdom, his adventures generally center upon rescuing Princess Peach from the
              Koopa villain Bowser. His younger brother and sidekick is Luigi.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
              released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
              as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
              appears in many games throughout the Mario franchise, often as a sidekick to his brother.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
              is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
              Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
              attack by Bowser. She often plays the damsel in distress role within the series and
              is the lead female. She is often portrayed as Mario's love interest and has appeared
              in Super Princess Peach, where she is the main playable character.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
              romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
              video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
              Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
              in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
              and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
              Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
              game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
              characterized by their variety of colors.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a fictional character who primarily
              appears in Nintendo's Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
              he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
              attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
              who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
              takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
              Super Mario 3D World, and Captain Toad: Treasure Tracker.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
        </Tabs> */}

      </div>
    </Container>
  );
}