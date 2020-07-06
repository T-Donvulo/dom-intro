describe("The calculate bill factory function", function(){

    

    
    it("should be able to set sms cost set", function(){

        let calculateBill = billCalculate();
        
        calculateBill.setSmsCost(0.75);
        assert.equal(0.75, calculateBill.getSmsCost());

    });

   

    it("should be able to set warning", function(){
        let calculateBill= billCalculate();
    
        calculateBill.setWarningLevel();
        calculateBill.getWarningLevel();
    
        });

    it( "should be able to set critical",function(){
        let calculateBill = billCalculate();

        calculateBill.setCriticalLevel();
        calculateBill.getCriticalLevel();

    });

    it( "should be able to set warning and critical",function(){
        let calculateBill = billCalculate();

        calculateBill.setCriticalLevel();
        calculateBill.setWarningLevel();

        calculateBill.getCriticalLevel();
        calculateBill.setWarningLevel();

    });


   
});    

    



