import { lazy, Suspense, useContext, useEffect, useRef, useState } from 'react';
import { StartGraph } from '../startGraph';
import { CytoscapeContext } from '../../context/CytoscapeGraph/CytoscapeContext';
import { RequestContext } from '../../context/Request/RequestContext';

const SetupModal = lazy((): Promise<any> => import('../SetupModal'));

import { AiOutlineZoomIn, AiOutlineZoomOut, AiOutlineExpandAlt, AiOutlineShrink } from 'react-icons/ai';
import { BiGitPullRequest } from 'react-icons/bi';
import { BsGear, BsLayoutWtf } from 'react-icons/bs';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { RiChatDeleteLine } from 'react-icons/ri';
import { TbFocusCentered } from 'react-icons/tb';

import Modal from 'react-modal';

import { Container, GraphContainer, NavOptions } from "./styles";
import useInitCytoscapeExtensions from '../../hooks/useInitCytoscapeExtensions';


Modal.setAppElement('#root')

export function GraphArea() {
  const {cy} = useContext(CytoscapeContext);
  const setRequest = useContext(RequestContext)[1];
  const [element, setElement] = useState({} as any)
  const [isSetupModal, setIsSetupModal] = useState(false);
  const hiddenFileRequestInput = useRef<any>(null);
  const [drawMode, setDrawMode] = useState(false);
  const layouts = [
    {
      name: "preset",
      spacingFactor: 1.5,
      fit: true
    },
    {
      name: "preset",
      spacingFactor: 0.5,
      fit: true
    },
    {
      name: "concentric",
      minNodeSpacing: 12,
      fit: true
    },
    {
      name: 'circle',
      fit: true
    },
    {
      name: 'random',
      fit: true
    },
    {
      name: 'cose',
      fit: true
    },
    {
      name: 'grid',
      fit: true
    },
    {
      name: 'breadthfirst',
      fit: true
    }]
  const { edgeHandles } = useInitCytoscapeExtensions(cy);
  var count = 0


  useEffect(() => {
    if (cy) {
      cy?.on('tap', (event: any) => {
        setElement(event.target._private.data)
      });
    }
  }, [cy])

  // Update edgehandles draw mode
  useEffect(() => {
    if (edgeHandles === undefined) return;
    drawMode ? edgeHandles.enableDrawMode() : edgeHandles.disableDrawMode();
  }, [drawMode, edgeHandles]);

  function handleOpenSetupModal() {
    setIsSetupModal(true)
  }

  function handleCloseSetupModal() {
    setIsSetupModal(false)
  }

  function handleChangeZoomLevel(level: number) {
    if (cy == undefined) return;
    const newSpacing = cy.zoom() + (level)
    cy.zoom(newSpacing);
  }

  function handleChangeSpacingFactor(spacing: number) {

    cy?.layout({
      name: "preset",
      spacingFactor: spacing,
      fit: true
    }).run()
  }

  function AddEle() {
    try {
      cy?.center(
        cy?.add({
          // group: 'nodes',
          data: {
            "Country": "",
            "domain": 0,
            "label": "",
            "name": "",
            "pos": [
              0,
              0
            ],
            "region": 0,
            "type": "t",
            "value": 0,
            "weight": 0
          },
          position: { x: 1, y: 1 },
        })
      )

    }
    catch (e) {
      console.log('error not AddEle');
    }
  }

  function DelEle() {
    if (cy == undefined) return;
    try {
      var ele = cy.$('#' + element.id);
      cy?.remove(ele);
    }
    catch (e) {
      console.log('error');
    }
  }

  function handleUploadRequestJSON(file: any) {
    const reader = new FileReader();
    reader.onload = function (e: any) {
      // console.log(JSON.parse(e.target.result));
      setRequest(JSON.parse(e.target.result));
    };
    try {
      reader.readAsText(file.target.files[0]);
    } catch (error) {
      console.log(error, 'reader');
    }
  };

  function handleClick() {
    hiddenFileRequestInput.current.click();
  };

  function handleChangeLayout() {
    cy?.layout(layouts[count]).run();
    count = (count + 1) % layouts.length
  }

  function handleEdgehandles() {
    setDrawMode(!drawMode)
  }

  function newColor() {
    if (!cy) return;
  

    var aStar = cy.elements().aStar({ root: "#1", goal: "#10" });
    aStar.path.select();
    console.log(aStar.path);
    console.log(aStar);
    
  }


  return (
    <Container>
      {/*------ uper options graph buttons --------- */}
      <NavOptions>
        <ul>
          <li className="tooltip">
            <AiOutlineZoomIn fontSize="1.5em" onClick={() => handleChangeZoomLevel(+.1)} />
            <AiOutlineZoomOut fontSize="1.5em" onClick={() => handleChangeZoomLevel(-.1)} />
            <span className="tooltiptext">Drag zoom in or zoom out</span>
          </li>

          <li className="tooltip">
            <AiOutlineExpandAlt fontSize="1.5em" onClick={() => { handleChangeSpacingFactor(1.1) }} />
            <AiOutlineShrink fontSize="1.5em" onClick={() => { handleChangeSpacingFactor(0.9) }} />
            <span className="tooltiptext">Controll spacing between elements Graph</span>
          </li>

          <li className="tooltip">
            <HiOutlineViewGridAdd fontSize="1.5em" cursor="pointer" onClick={AddEle} />
            <RiChatDeleteLine fontSize="1.5em" cursor="pointer" onClick={DelEle} />
            <span className="tooltiptext">Add or remove element graph</span>
          </li>

          <li className="tooltip">
            <input type="file" name="UploadJSON" id="UploadJSON" ref={hiddenFileRequestInput} onChange={handleUploadRequestJSON} />
            <BiGitPullRequest fontSize="1.5em" cursor="pointer" onClick={handleClick} />
            <span className="tooltiptext">Upload archive json from requests</span>
          </li>

          <li className="tooltip">
            <BsGear fontSize="1.5em" cursor="pointer" onClick={handleOpenSetupModal} />
            <span className="tooltiptext">Open setup modal</span>
          </li>

          <li className="tooltip">
            <BsLayoutWtf fontSize="1.5em" cursor="pointer" onClick={handleChangeLayout} />
            <span className="tooltiptext">Change layout</span>
          </li>

          <li className="tooltip">
            <TbFocusCentered fontSize="1.5em" cursor="pointer" onClick={() => cy?.center()} />
            <span className="tooltiptext">Center</span>
          </li>

          <li className="tooltip">
            <FiPlayCircle fontSize="1.5em" onClick={handleEdgehandles} />
            <span className="tooltiptext">{drawMode ? 'Draw On' : 'Draw Off'}</span>
          </li>

          <li className="tooltip">
            <button onClick={newColor}>Run</button>
          </li>

        </ul>
      </NavOptions>

      {/*------ StartGraph (GraphContainer / UploadGraph) --------- */}
      <GraphContainer>
        <StartGraph />
      </GraphContainer>

      {/*------ SetupModal --------- */}
      <Suspense fallback={<div>Loading...</div>}>
        < SetupModal
          isOpen={isSetupModal}
          onRequestClose={handleCloseSetupModal}
        />
      </Suspense>

    </Container>
  )
}