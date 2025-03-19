var getRow = function (rowIndex) {
  const res = [1];

  for (let i = 0; i < rowIndex; i++) {
    const temp = [0, ...res, 0];
    res.length = 0;
    for (let j = 0; j < temp.length - 1; j++) {
      res.push(temp[j] + temp[j + 1]);
    }
  }

  return res;
};

console.log(getRow(3));
