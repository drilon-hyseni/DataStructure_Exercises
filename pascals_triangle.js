var generate = function (numRows) {
  const res = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    const temp = [0, ...res[res.length - 1], 0];
    const newRow = [];

    for (let j = 0; j < temp.length - 1; j++) {
      newRow.push(temp[j] + temp[j + 1]);
    }

    res.push(newRow);
  }

  return res;
};
