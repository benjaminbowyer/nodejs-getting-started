const basicRateMaxIncome = 12570;
const higherRateMaxIncome = 50270; 
const additionalRateMaxIncome = 150000;

const calculate = function (income) {
  if (income < basicRateMaxIncome) {
    return 0
  }

  if (income < higherRateMaxIncome) {
      var taxBasic = (income - basicRateMaxIncome) * 0.2
      console.log(`taxbasicinitial: ${taxBasic}`)

      var tax = taxBasic
      return (tax)
    }

  if (income < additionalRateMaxIncome) {
      var taxBasic = (37700) * 0.2
      console.log(`taxbasicinitial: ${taxBasic}`)
      var taxHigher = (income - higherRateMaxIncome) * 0.4
      console.log(`taxhigherinitial: ${taxHigher}`)
    
      tax = taxBasic + taxHigher
      return (tax)
  }

  if (income > additionalRateMaxIncome) {
      var taxBasic = (37700) * 0.2
      console.log(`taxbasic: ${taxBasic}`)
      var taxHigher = (99730) * 0.4
      console.log(`taxhigher: ${taxHigher}`)
      var taxAdditional = (income - additionalRateMaxIncome) * 0.45
      console.log(`taxadditional: ${taxAdditional}`)

      tax = taxBasic + taxHigher + taxAdditional
      return (tax)
      }
} 

module.exports.calculate = calculate;