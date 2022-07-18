interface Ilink {
  linkSource: string;
  LinkTarget: string;
}

export const correctLinks = (link:Ilink) => {
  return [parseInt(link.linkSource), parseInt(link.LinkTarget)]; 
}