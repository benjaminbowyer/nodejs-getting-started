const basicRateMaxIncome = 12570;

const calculate = function (income) {
  if (income < basicRateMaxIncome) {
    return 0
  } else {
    return (income - basicRateMaxIncome) * 0.2;
  }
};

module.exports.calculate = calculate;
