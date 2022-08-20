import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { CreateOne } from "./createOneRequest";
import { CreateSeveral } from "./createSeveralRequest";
import { Generate } from "./generateRequest";
import { Container } from "./styles";






export function CreateRequest(){

  return (
    <Container >

      <Tabs forceRenderTabPanel>
        <TabList className='SubTabList'>
          <Tab className="SubTab">Create a Request</Tab>
          <Tab className="SubTab">Create Requests Set</Tab>
          <Tab className="SubTab">Generate Requests</Tab>
        </TabList>

        <TabPanel>
         <CreateOne />        
        </TabPanel>

        <TabPanel>
           <CreateSeveral />
        </TabPanel>

        <TabPanel>
          <Generate  />
        </TabPanel>
      </Tabs>

    </Container>
  )
}

