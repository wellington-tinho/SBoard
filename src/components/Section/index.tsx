// import grafo from "../../assets/img/grafo.jpg";
import expand from "../../assets/img/expand.png";
import React from "react";
import { SectionContent } from "./style";
import { Aside } from "./Aside";
import { Upload } from "../Upload";

export function Section() {
  return (
    <SectionContent >
      <div className="graph">
        {/* <img src={grafo} alt="Grafo" /> */}
        <Upload />
        <img className='expand' src={expand} alt="Expand" />
      </div>
      <Aside />
    </SectionContent>
  )
}