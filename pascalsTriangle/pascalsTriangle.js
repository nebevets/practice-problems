const pascalsTriangle = (rows, result=[], resultIndex=0) => {
  const row = [1];
  const nextStart = result.length;
  let index = 0;
  
  while(index < result.length){
      if(result[resultIndex][index + 1]){
          row.push(result[resultIndex][index] + result[resultIndex][index + 1]);
      }else{
          row.push(1);
      }
      index++;
  }

  result.push(row);
  rows--;
  if(rows > 0){
    result = pascalsTriangle(rows, result, nextStart);
  }
  return result;
}