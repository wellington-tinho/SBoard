interface virtualNodeDemandInterface {
  id?: number;
  requested?: number;
  vnr_id?: number;
  domain?: number;
  region?: number;
  type?: number | string;
  period?: number;
  sink?: number;
}

export interface RequestFormDate {
  id?: number;
  vnd?: virtualNodeDemandInterface[];
  links?: [[number]];
  created?: number;
  duration?: number;
  period?: number;
  bandwidth?: number;
  delay?: number;
  reliability?: number;
  type_slice?: string;
}
