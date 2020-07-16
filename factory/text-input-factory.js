function TextInputBill() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

    //function setCallCost() {
      //  theCallCost += 2.75;
    //}
    function billTypeEntered(billType) {
        if (billType === "call") {
            theCallCost += 2.75
        }
        else if (billType === "sms") {
            theSmsCost += 0.75;
        }
    }
    
    function getCallCost() {
        return theCallCost;
    }

    /*function setSmsCost() {
        theSmsCost = 0.75;
    }*/
    function getSmsCost() {
        return theSmsCost;
    }

    function setWarningLevel() {
        theWarningLevel = 30;
    }

    function getWarningLevel() {
        return theWarningLevel;
    }

    function setCriticalLevel() {
        theCriticalLevel = 50;
    }

    function getTotalCallCost() {
        return callCostTotal;

    }

    function getTotalSmsCost() {
        return smsCostTotal;
    }

    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }

    function checkCriticalLevel() {
        return getTotalCallCost() >= theCriticalLevel;
    }
    function getCriticalLevel() {
        return theCriticalLevel;
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
        return getCallCost() + getSmsCost();

    }

    function totalClassName() {

        if (getTotalCost() >= 50) {
            return "danger";
             //adding the danger class will make the text red
            }
             else if (getTotalCost() >= 30 && getTotalCost() < 50) {
                 //totalOneSpanElement.classList.add("warning");
                 return "warning";
             }

        /*if (getTotalCost() > 50) {
            return "critical";
        }

        if (getTotalCost() > 30) {
            return "warning";
        }
        return "";*/

    }

    
   

    return {
        
        getCallCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        checkCriticalLevel,
        sendSms,
        makeCall,
        getGrandTotal,
        totalClassName,
        getTotalCallCost,
        getTotalSmsCost,
        getTotalCost,
        billTypeEntered
    }
}