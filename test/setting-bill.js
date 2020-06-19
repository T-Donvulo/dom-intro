function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

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

function setWarningLevel(warningLevel){
    theWarningLevel = warningLevel;
}

function getWarningLevel(){
    return warningLevel;
}

function setCriticalLevel(criticalLevel){
    theCriticalLevel = criticalLevel;
}

function getCriticalLevel(){
    return criticalLevel;
}

return {
    setCallCost,
    getCallCost,
    setSmsCost,
    getSmsCost,
    setWarningLevel,
    getWarningLevel,
    setCriticalLevel,
    getWarningLevel

}

}