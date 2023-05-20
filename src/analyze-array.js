const analyzeArray = (array) => {
  const average = array.reduce((previous, current) => previous + current) / array.length;
  const min = array.reduce((previous, current) => {
    if (previous < current) return previous;
    return current;
  });
  const max = array.reduce((previous, current) => {
    if (previous > current) return previous;
    return current;
  });
  const { length } = array;

  return {
    average, min, max, length,
  };
};

module.exports = analyzeArray;
