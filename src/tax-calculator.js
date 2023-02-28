const basicRateMaxIncome = 12570;
const higherRateMaxIncome = 50270; 
const additionalRateMaxIncome = 150000;

const calculate = function (income) {
  if (income < basicRateMaxIncome) {
    return 0
  }

  if (income < higherRateMaxIncome) {
      var taxBasic = (income - basicRateMaxIncome) * 0.2
      console.log(`Basic rate tax: £${taxBasic}`)

      var tax = taxBasic
      return (tax)
    }

  if (income < additionalRateMaxIncome) {
      var taxBasic = (37700) * 0.2
      console.log(`Basic rate tax: £${taxBasic}`)
      var taxHigher = (income - higherRateMaxIncome) * 0.4
      console.log(`Higher rate tax: £${taxHigher}`)
    
      tax = taxBasic + taxHigher
      return (tax)
  }

  if (income > additionalRateMaxIncome) {
      var taxBasic = (37700) * 0.2
      console.log(`Basic rate tax: £${taxBasic}`)
      var taxHigher = (99730) * 0.4
      console.log(`Higher rate tax: £${taxHigher}`)
      var taxAdditional = (income - additionalRateMaxIncome) * 0.45
      console.log(`Additional rate tax: £${taxAdditional}`)

      tax = taxBasic + taxHigher + taxAdditional
      return (tax)
      }
} 
module.exports.calculate = calculate;