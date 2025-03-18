var productExceptSelf = function (nums) {
  let product = 1;
  let contains0 = false;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      flag = true;
    } else {
      product = product * nums[i];
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = product;
    } else {
      product = product * nums[i];
    }
  }

  console.log(product);
};
productExceptSelf([1, 3, 5, 6]);
