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

