// returns a random number between the ranges
export const generatesRandomBetweenRange = (min: number| undefined, max: number| undefined ) =>{
  if(min === undefined || max === undefined){
    return ;
  }
  if(min > max){
    throw new Error('min must be less than max');
  }
  if(min === max){
    return min;
  }
  if(min === 0 && max === 1){
    return Math.random();
  }  
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 


export const simple_random_Between_Range = (min= 1, max= 999_999_999)=>  {
  return Math.round(min + Math.random() * (max - min));
}

