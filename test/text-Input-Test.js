describe("The text input factory function", function(){

    it("Should be able to set call cost", function(){
        let textInput = TextInputBill();
        textInput.billTypeEntered("call");
        assert.equal(textInput.getCallCost(), 2.75)
    });

    it("Should be able to set sms cost", function(){
        let textInput = TextInputBill();
        textInput.billTypeEntered("sms");
        assert.equal(textInput.getSmsCost(), 0.75)
    });

    it("Should be able to set sms and call", function(){
        let textInput = TextInputBill();
        
        textInput.billTypeEntered("call");
        textInput.billTypeEntered("sms");

        assert.equal(2.75, textInput.getCallCost());
        assert.equal(0.75, textInput.getSmsCost());
    });

    it("Should be able to set warning", function(){

        let textInput = TextInputBill();
        textInput.setWarningLevel();
        assert.equal(30, textInput.getWarningLevel());

    });

    it("Should be able to set critical", function(){

        let textInput = TextInputBill();
        textInput.setCriticalLevel();
        assert.equal(50, textInput.getCriticalLevel());

    });

});   

describe("use, values", function(){
    it("Should be able to use Call Cost set",function(){

        let textInput = TextInputBill();

        textInput.billTypeEntered("call");
        textInput.billTypeEntered("sms");
        textInput.setCriticalLevel();

        textInput.makeCall();
        textInput.sendSms();

        assert.equal(2.75, textInput.getTotalCallCost());
        assert.equal(0.75, textInput.getTotalSmsCost());
        assert.equal(3.50, textInput.getTotalCost());
        
    });
});


