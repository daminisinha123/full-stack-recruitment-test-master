



export const readableTimeFormat=(format)=>{
    const readableFormat=  format.slice(format.indexOf("T")+1,format.length);
    return readableFormat;
}
export const calculateDuration=(duration)=>{
  let hours = Math.floor(duration / 60);          
  let minutes = duration % 60;
  let result = hours+ "h "+minutes;
  return result
}

