const basicRateMaxIncome = 12570;
const higherRateMaxIncome = 50270; 
const additionalRateMaxIncome = 150000;

const calculate = function (income) {
  if (income < basicRateMaxIncome) {
    return 0
  } else {
    if (income < higherRateMaxIncome) {
      return (income - basicRateMaxIncome) * 0.2
    } else {
      if (income < additionalRateMaxIncome) {
        var tax1 = (37700) * 0.2
        console.log(`tax 1: ${tax1}`)
        var tax2 = (income - higherRateMaxIncome) * 0.4
        console.log(`tax 2: ${tax2}`)
        tax = tax1 + tax2
        return tax
      } else {
      var tax1 = (37700) * 0.2
      var tax2 = (99730) * 0.4
      var tax3 = (income - additionalRateMaxIncome) * 0.45
      tax = tax1 + tax2 + tax3
      return tax
    }
 
  }
}
}
  


module.exports.calculate = calculate;
