function BillRadio(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

//function setCallCost(){
  //  return theCallCost = 1.85;
//}
function getCallCost(){
    return theCallCost;
}
function callsSms(billTypeEntered){
    if (billTypeEntered === "call") {
        callCostTotal+= 2.75;
     }
     else if (billTypeEntered === "sms") {
        smsCostTotal += 0.75;
     }
}

//function setSmsCost(){
  //  theSmsCost = 0.75;
//}
function getSmsCost(){
    return theSmsCost;
}

function setWarningLevel(){
    theWarningLevel = 25;

}
function getWarningLevel(){
    return theWarningLevel;
}

function setCriticalLevel(){
    theCriticalLevel = 35;
}
function getCriticalLevel(){
    return theCriticalLevel;
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

function checkCriticalLevel(){
    return getTotalCallCost() >= getCriticalLevel();
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

function totalClassName() {

    if (getGrandTotal() >= 50) {
        return "danger";
         
        }
         else if (getGrandTotal() >= 30 && getGrandTotal() < 50) {
             
             return "warning"
         }

        }

return {
    
    getCallCost,
    
    getSmsCost,
    setWarningLevel,
    getWarningLevel,
    setCriticalLevel,
    getCriticalLevel,
    makeCall,
    sendSms,
    getGrandTotal,
    getTotalSmsCost,
    getTotalCallCost,
    totalClassName,
    getTotalCost,
    callsSms

}

};