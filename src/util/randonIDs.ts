
//import uuid v4
import { v4 as uuid } from 'uuid';

export const create_id = ()=>  +uuid().replace(/\D+/g, ""); //remove all non-numeric characters