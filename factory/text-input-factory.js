function textInputBill(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(){
        theCallCost +=2.75;
    }
    function getCallCost(){
        return theCallCost;
    }

    function setSmsCost(){
        theSmsCost = 0.75;
    }
    function getSmsCost(){
        return theSmsCost;
    }

    function setWarningLevel(){
        theWarningLevel = 30;
    }
    
    function getWarningLevel(){
        return theWarningLevel;
    }

    function setCriticalLevel(){
        theCriticalLevel = 50;
    }

    function getTotalCallCost(){
        return callCostTotal; 

    }

    function getTotalSmsCost(){
        return smsCostTotal;
    }
    
    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }


    function checkCriticalLevel(){
        return getTotalCallCost() >= getCriticalLevel();
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

    function totalClassName(){

        if (getTotalCost() >= getCriticalLevel()){
            return "critical"
        }
    
       
    
        if (getTotalCost() >= getWarningLevel()){
            return "warning"
        }
        

    

    }



    return{
        setCallCost,
        getCallCost,
        setSmsCost,
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
        getTotalCost
        
        

        
        

    }
}