describe("The radio factory function", function(){

    it("should be able to set call cost", function(){

        let radiobill = billRadio();
        radiobill.setCallCost(); 
        assert.equal(1.85, radiobill.getCallCost());

    });

    it("should be able to set sms cost", function(){

        let radiobill = billRadio();
        
        radiobill.setSmsCost();
        assert.equal(0.75, radiobill.getSmsCost());

    });

    it("should be able to set sms and call cost", function(){
        let radiobill = billRadio();

        radiobill.setCallCost();
        radiobill.setSmsCost();

        assert.equal(1.85, radiobill.getCallCost())
        assert.equal(0.75, radiobill.getSmsCost());

    });

    it("should be able to set warning", function(){
        let radiobill= billRadio();
    
        radiobill.setWarningLevel();
        radiobill.getWarningLevel();
    
        });

    it( "should be able to set critical",function(){
        let radiobill = billRadio();

        radiobill.setCriticalLevel();
        radiobill.getCriticalLevel();

    });

    it( "should be able to set warning and critical",function(){
        let radiobill = billRadio();

        radiobill.setCriticalLevel();
        radiobill.setWarningLevel();

        radiobill.getCriticalLevel();
        radiobill.setWarningLevel();

    });

describe("Use, Values", function(){
    it("Should be able to use Call cost set", function(){
        let radiobill = billRadio();

        radiobill.setCallCost();
        radiobill.setSmsCost();
        radiobill.setCriticalLevel();
    
        radiobill.makeCall();
        radiobill.makeCall();
        radiobill.makeCall();
        radiobill.sendSms();
        radiobill.sendSms();
    
            assert.equal(5.55, radiobill.getTotalCallCost().toFixed(2));
            assert.equal(1.50, radiobill.getTotalSmsCost());
            assert.equal(7.05, radiobill.getTotalCost().toFixed(2));
    })
   
});    

    



});