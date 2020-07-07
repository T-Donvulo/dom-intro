describe("The Calculate bill", function(){
    it("It should return a string total, when a string is entered", function(){

        assert.equal(5.50, totalPhoneBill("call, call"));
    });
});