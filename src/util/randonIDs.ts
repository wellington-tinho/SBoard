
//import uuid v4
// import { v4 as uuid } from 'uuid';
// export const create_id = ()=>  +uuid().replace(/\D+/g, ""); //remove all non-numeric characters

export const create_id = ()=>  {
  const min = 1 
  const max = 999_999_999
  return (min + Math.random() * (max - min));
}