const transpose = function(matrix) {
    // Put your solution here
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === 0) {
          result.push([]);
        }
        result[j].push(matrix[i][j]); 
      }
    }
    return result;
  };
  
const wordSearch = (letters, word) => { 
    if(typeof word !== 'string') {
        console.log("not string");
        return false;
    }
    let trasposedArr = transpose(letters);
    return wordSearchHelper(letters, word) || wordSearchHelper(trasposedArr, word);


}

const wordSearchHelper = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) 
        return true
    }
    return false;
}
module.exports = wordSearch