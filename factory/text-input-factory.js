function TextInputBill() {

    var callCostTotal = 0;
    var smsCostTotal = 0;

    function billTypeEntered(billType) {
        if (billType === "call") {
            callCostTotal += 2.75
        }
        else if (billType === "sms") {
            smsCostTotal += 0.75;
        }
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

    function totalClassName() {

        if (getTotalCost() >= 50) {
            return "danger";
            //adding the danger class will make the text red
        }
        else if (getTotalCost() >= 30 && getTotalCost() < 50) {
            return "warning";
        }

    }

    return {
        totalClassName,
        getTotalCallCost,
        getTotalSmsCost,
        getTotalCost,
        billTypeEntered
    }
}