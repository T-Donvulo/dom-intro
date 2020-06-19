describe("The bill with setting factory function", function() {

    it("should be able to set the call cost", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost());
    });
        it("should be able to set a sms cost", function(){
            let settingsBill = BillWithSettings();
            settingsBill.setSmsCost(0.85);
            assert.equal(0.85, settingsBill.getSmsCost());
    
            let settingsBill2 = BillWithSettings();
            settingsBill2.setSmsCost(0.75);
            assert.equal(0.75, settingsBill2.getSmsCost());   
        });    

        it("should be able to set a call and sms cost", function(){
            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(2.75);
            settingsBill.setSmsCost(0.85);

            assert.equal(0.85, settingsBill.getSmsCost());
            assert.equal(2.75, settingsBill.getCallCost());

            let settingsBill2 = BillWithSettings();

            settingsBill2.setCallCost(1.75);
            settingsBill2.setSmsCost(0.65);

            assert.equal(0.65, settingsBill2.getSmsCost());
            assert.equal(1.75, settingsBill2.getCallCost());
            
        });    

        it("should be able to set a Warning level", function(){
            let settingsBill = BillWithSettings();

            settingsBill.setWarningLevel(20);

            assert.equal(20, settingsBill.getWarningLevel());
        
            
        });    

        it("should be able to set a Critical level cost", function(){
            let settingsBill = BillWithSettings();

            settingsBill.setCriticalLevel(40);

            assert.equal(40, settingsBill.getCriticalLevel());
        
            
        });    

        it("should be able to set the warning and critical level cost", function(){
            let settingsBill = BillWithSettings();

            settingsBill.setWarningLevel(15);
            settingsBill.setCriticalLevel(25);

            assert.equal(15, settingsBill.getWarningLevel());
            assert.equal(25, settingsBill.getCriticalLevel());
        
            
        });    
});