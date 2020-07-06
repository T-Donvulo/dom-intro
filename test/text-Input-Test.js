describe("The text input factory function", function(){

    it("Should be able to set call cost", function(){
        let textInput = textInputBill();
        textInput.setCallCost();
        assert.equal(2.75, textInput.getCallCost())
    });

    it("Should be able to set sms cost", function(){
        let textInput = textInputBill();
        textInput.setSmsCost();
        assert.equal(0.75, textInput.getSmsCost())
    });

    it("Should be able to set sms and call", function(){
        let textInput = textInputBill();
        
        textInput.setCallCost();
        textInput.setSmsCost();

        assert.equal(2.75, textInput.getCallCost());
        assert.equal(0.75, textInput.getSmsCost());
    });

    it("Should be able to set warning", function(){

        let textInput = textInputBill();
        textInput.setWarningLevel();
        assert.equal(30, textInput.getWarningLevel());

    });

    it("Should be able to set critical", function(){

        let textInput = textInputBill();
        textInput.setCriticalLevel();
        assert.equal(50, textInput.getCriticalLevel());

    });

});   

describe("use, values", function(){
    it("Should be able to use Call Cost set",function(){

        let textInput = textInputBill();

        textInput.setCallCost();
        textInput.setSmsCost();
        textInput.setCriticalLevel();

        textInput.makeCall();
        textInput.sendSms();

        assert.equal(2.75, textInput.getTotalCallCost());
        assert.equal(0.75, textInput.getTotalSmsCost());
        assert.equal(3.50, textInput.getTotalCost());
        
    });
});


