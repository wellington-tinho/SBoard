import { useContext } from "react";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RequestContext } from "../../context/Request/RequestContext";
import { CreateRequest } from "./CreateRequest";
import { EditionRequest } from "./EditionRequest/index";
import { AsideOthers } from "./outhers/others";
import { ShowVND } from "./showVND/showVND";
import { Container } from "./styles";




export function Aside() {
  const [requestList, setRequestList] = useContext(RequestContext)
  const qtdRequests = (0)


  //Adicionar novos Requests na lista de requisiçoes
  function appendRequestList(file: any) {

    const reader = new FileReader();
    reader.onload = function (e: any) {
      // setQtdRequests(Object.keys(requestList).length);

      var prevsElements: any = []
      Object.keys(requestList).forEach(key =>
        prevsElements.push(requestList[Number(key)])
      )

      //Adicionadno novos valores á lista de valores inseridos via menu bar
      Object.keys([JSON.parse(e.target.result)][0]).forEach(key =>
        prevsElements.push(JSON.parse(e.target.result)[key])
      )

      console.log(prevsElements)
      setRequestList(prevsElements)
    };

    try {
      reader.readAsText(file.target.files[0]);
    } catch (error) {
      console.error('Erro de reader nao foi inserido um arquivo para ler');
    }
  };
  
  return (
    <Container>
      <main>
        <h2> Requests</h2>
      </main>

      <div>
        <Tabs className='Tabs'>

          <TabList className='TabList'>
            <Tab className='Tab'> VNR </Tab>
            <Tab className='Tab'> Create </Tab>
            <Tab className='Tab'> Edition </Tab>
            <Tab className='Tab'> Others </Tab>
            {/* <Tab>Toad</Tab> */}
          </TabList>

          <fieldset>
            <TabPanel className='TabPanelVNR'>
              {/* Informaçao sobre os requests, e exibir detalhado */}
              <ShowVND/>
            </TabPanel>


            <TabPanel className='TabPanelCreate'>
              <CreateRequest/>
            </TabPanel>

            <TabPanel className='TabPanelEdition'>
              <EditionRequest
                qtdRequests={qtdRequests} 
              />
            </TabPanel>

            <TabPanel className='TabPanelOthers'>
              <AsideOthers
                appendRequestList={appendRequestList}
              />
            </TabPanel>
          </fieldset>

        </Tabs>

      </div>
    </Container>
  );
}