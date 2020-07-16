function BillWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;
    var sum = 0;

    function setCallCost(callCost) {
        theCallCost = callCost;
    }
    function getCallCost() {
        return theCallCost;
        
    }
    function setSmsCost1(smsCost) {
        theSmsCost = smsCost;
    }

    // function grandTotal(){
    //     if (billTypeEntered === "call") {

    //         callsTotalOne += callCost;
    //     }
    //     else if (billTypeEntered === "sms") {
    //         smsTotalOne += smsCost;
    //     }

    // }


    function getSmsCost() {
        return theSmsCost;
    }

    function makeCall() {
        if (!checkCriticalLevel()) {
            callCostTotal += theCallCost;
        }
    }

    function sendSms() {
        if (!checkCriticalLevel()) {
            smsCostTotal += theSmsCost;
        }
    }

    function getGrandTotal() {
        return callCostTotal + smsCostTotal;

    }

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel;
    }

    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }

    function checkCriticalLevel() {
        return getTotalCallCost() >= getCriticalLevel();
    }
    function getCriticalLevel() {
        return theCriticalLevel;

    }

    function getTotalCost() {
      sum = callCostTotal + smsCostTotal;
        return sum;
    }

    function getTotalCallCost() {
        return callCostTotal;
    }
    function getTotalSmsCost() {
        return smsCostTotal;
    }

    function totalClassName() {

       if (getGrandTotal() >= getCriticalLevel()) {
           return "danger";
        }

        if (getGrandTotal() >= getWarningLevel()) {
            return "warning";
        }


    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost1,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        makeCall,
        sendSms,
        checkCriticalLevel,
        getCriticalLevel,
        getGrandTotal,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        totalClassName

    }

}