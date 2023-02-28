const basicRateMaxIncome = 12570;
const higherRateMaxIncome = 50270; 
const additionalRateMaxIncome = 150000;

const calculate = function (income) {
  var taxBasic = (income - basicRateMaxIncome) * 0.2
  console.log(`taxbasicinitial: ${taxBasic}`)
  var taxHigher = (income - higherRateMaxIncome) * 0.4
  console.log(`taxhigherinitial: ${taxHigher}`)
  var taxAdditional = (income - additionalRateMaxIncome) * 0.45
  console.log(`taxadditionalinitial: ${taxAdditional}`)

  if (taxBasic < 0) {
    (taxBasic = 0)
    console.log(`taxbasicfinal: ${taxBasic}`)
  }
  if (taxHigher < 0) {
    (taxHigher = 0)
    console.log(`taxhigherfinal: ${taxHigher}`)
  }
  if (taxAdditional < 0) {
    (taxAdditional = 0)
    console.log(`taxadditionalfinal: ${taxAdditional}`)
}
  
  var tax = taxBasic + taxHigher + taxAdditional
  return (tax)
}

module.exports.calculate = calculate;
