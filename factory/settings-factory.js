function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

function setCallCost(callCost) {
        theCallCost = callCost;
    }
function getCallCost(){
    return theCallCost;
}    
function setSmsCost(smsCost) {
    theSmsCost = smsCost;
}
function getSmsCost() {
    return theSmsCost;
}

function makeCall(){
    if(!checkCriticalLevel()){
        callCostTotal += theCallCost;
    }
}

function sendSms(){
    if(!checkCriticalLevel()){
        
        smsCostTotal += theSmsCost;
        

    }
}

function getGrandTotal(){
 return callCostTotal + smsCostTotal

}

function setWarningLevel(warningLevel){
    theWarningLevel = warningLevel;
}

function getWarningLevel(){
    return theWarningLevel;
}

function setCriticalLevel(criticalLevel){
    theCriticalLevel = criticalLevel;
}

function checkCriticalLevel(){
    return getTotalCallCost() >= getCriticalLevel();
}
function getCriticalLevel(){
    return theCriticalLevel;

}

function getTotalCost(){
    return callCostTotal + smsCostTotal;
}

function getTotalCallCost(){
    return callCostTotal;
}
function getTotalSmsCost(){
    return smsCostTotal;
}

function totalClassName(){

    if (getTotalCost() >= getCriticalLevel()){
        return "critical"
    }

   

    if (getTotalCost() >= getWarningLevel()){
        return "warning"
    }
    

}

return {
    setCallCost,
    getCallCost,
    setSmsCost,
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