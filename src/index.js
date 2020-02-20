module.exports = function towelSort (matrix) {
  if(matrix === undefined) return [];
  if(matrix.length == 0) return [];

  let first = [];
  let second = [];

  for(let i=0; i<matrix.length; i += 1){
    first.push(matrix[i]);
  }
  
  for(let m=1; m<matrix.length; m += 2){
    second.push(matrix[m].reverse());
  }

  return first.join(',').split(',')
}
