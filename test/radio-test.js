describe("The radio factory function", function(){

    it("should be able to set call cost", function(){

        let radiobill = billRadio();
        radiobill.setCallCost(1.85); 
        assert.equal(1.85, radiobill.getCallCost());

    });

    it("should be able to set sms cost", function(){

        let radiobill = billRadio();
        
        radiobill.setSmsCost(0.75);
        assert.equal(0.75, radiobill.getSmsCost());

    });

    it("should be able to set sms and call cost", function(){
        let radiobill = billRadio();

        radiobill.setCallCost(1.85);
        radiobill.setSmsCost(0.75);

        assert.equal(1.85, radiobill.getCallCost())
        assert.equal(0.75, radiobill.getSmsCost());

    });

    it("should be able to set warning", function(){
        let radiobill= billRadio();
    
        radiobill.setWarningLevel(25);
        radiobill.getWarningLevel(25);
    
        });

    it( "should be able to set critical",function(){
        let radiobill = billRadio();

        radiobill.setCriticalLevel(35);
        radiobill.getCriticalLevel(35);

    });

    it( "should be able to set warning and critical",function(){
        let radiobill = billRadio();

        radiobill.setCriticalLevel(35);
        radiobill.setWarningLevel(25);

        radiobill.getCriticalLevel(35);
        radiobill.setWarningLevel(25);

    });

    



});