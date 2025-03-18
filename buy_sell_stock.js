var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
    }
  }
  return profit;
};

console.log(maxProfit([2, 4, 1, 5, 2, 0]));
