describe("The radio factory function", function(){

    it("should be able to set call cost", function(){

        let radiobill = BillRadio();
        radiobill.callsSms("call"); 
        assert.equal(radiobill.getCallCost(), 2.75);

    });

    it("should be able to set sms cost", function(){

        let radiobill = BillRadio();
        
        radiobill.callsSms("sms");
        assert.equal(0.75, radiobill.getSmsCost());

    });

    it("should be able to set sms and call cost", function(){
        let radiobill = BillRadio();

        radiobill.callsSms("call");
        radiobill.callsSms("sms");

        assert.equal(2.75, radiobill.getCallCost())
        assert.equal(0.75, radiobill.getSmsCost());

    });

    it("should be able to set warning", function(){
        let radiobill= BillRadio();
    
        radiobill.setWarningLevel();
        radiobill.getWarningLevel();
    
        });

    it( "should be able to set critical",function(){
        let radiobill = BillRadio();

        radiobill.setCriticalLevel();
        radiobill.getCriticalLevel();

    });

    it( "should be able to set warning and critical",function(){
        let radiobill = BillRadio();

        radiobill.setCriticalLevel();
        radiobill.setWarningLevel();

        radiobill.getCriticalLevel();
        radiobill.setWarningLevel();

    });

describe("Use, Values", function(){
    it("Should be able to use Call cost set", function(){
        let radiobill = BillRadio();

        radiobill.callsSms("call");
        radiobill.callsSms("sms");
        radiobill.setCriticalLevel();
    
        radiobill.makeCall();
        radiobill.makeCall();
        radiobill.makeCall();
        radiobill.sendSms();
        radiobill.sendSms();
        radiobill.makeCall();
        radiobill.sendSms();
        radiobill.sendSms();
    
            assert.equal(11.0, radiobill.getTotalCallCost().toFixed(2));
            assert.equal(3.00, radiobill.getTotalSmsCost().toFixed(2));
            assert.equal(14.0, radiobill.getTotalCost().toFixed(2));
    })
   
});    

    



});