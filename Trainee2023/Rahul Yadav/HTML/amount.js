var income =parseInt(document.getElementById("income").value);
var loan= parseInt(document.getElementById("loan").value);
var investment=parseInt(document.getElementById("investment").value);


var percent_income = 20;
var income_result;
function percentCalculation(income, percent_income){
  var c = (parseFloat(income)*parseFloat(percent_income))/100;
  return parseFloat(c);
}
income_result = percentCalculation(income, percent_income); 


var percent_loan = 80;
var loan_result;
function percentCalculation(loan, percent_loan){
  var d = (parseFloat(loan)*parseFloat(percent_loan))/100;
  return parseFloat(d);
}
loan_result = percentCalculation(loan, percent_loan); 

var taxable_amount;
if (income_result > loan_result) {
  taxable_amount= income-(loan_result+investment)
} else {
  taxable_amount=income-(income_result+investment)
}


