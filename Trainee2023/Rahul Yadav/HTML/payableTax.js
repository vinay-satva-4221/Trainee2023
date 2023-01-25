
if (years>60) {
    if (income<300000) {
        

        
      } else if (300000<=income<=700000) {
        var percent_10 = 10;
        var payable_tax;
        function percentCalculation(loan, percent_income){
        var c = (parseFloat(income)*parseFloat(percent_10))/100;
        return parseFloat(c);
        }
        payable_tax = percentCalculation(income, percent_10); 
        
      } else {
        var percent_20 = 20;
        var payable_tax;
        function percentCalculation(loan, percent_20){
        var c = (parseFloat(income)*parseFloat(percent_20))/100;
        return parseFloat(c);
        }
        payable_tax = percentCalculation(income, percent_20); 
        
      }
    
} else {


    
}