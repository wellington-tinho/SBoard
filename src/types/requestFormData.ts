export interface virtualNodeDemandInterface {
  id?: number;
  vnr_id?: number;
  requested: number;
  domain: number;
  region: number;
  period: number;
  sink: number;
  type: number | string;
}

export interface RequestFormDate {
  id: number;
  vnd?: virtualNodeDemandInterface[];
  links?: number[][] ;
  created?: number;
  duration?: number;
  period?: number;
  bandwidth?: number;
  delay?: number;
  reliability?: number;
  type_slice?: string;
}


export interface IlinkConvert {
  linkSource: string;
  LinkTarget: string;
}
