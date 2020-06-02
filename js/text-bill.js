// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var billTextElement = document.querySelector(".billTypeText");
var addToBillBtnElement = document.querySelector(".addToBillBtn");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneSpanElement = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

function textBillTotal() {
    //var billItems = billString.split(",");
    //var billTotal = 0;
    // get the value entered in the billType textfield
    var billTypeEntered = billTextElement.value.trim();

    // update the correct total
    if (billTypeEntered === "call") {
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms") {
        smsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.

    callTotalOneElement.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
    totalCost = callsTotal + smsTotal;
    totalOneSpanElement.innerHTML = totalCost.toFixed(2);

    //callsTotalElement.innerHTML = callsTotal.toFixed(2);
    //smsTotalElement.innerHTML = smsTotal.toFixed(2);
    //totalCost = callsTotal + smsTotal;
    //totalCostElement.innerHTML = totalCost.toFixed(2);

    //color the total based on the criteria
    totalOneSpanElement.classList.remove("danger");
    totalOneSpanElement.classList.remove("warning");
    if (totalCost >= 50) {
        // adding the danger class will make the text red
        totalOneSpanElement.classList.add("danger");
    }
    else if (totalCost >= 30 && totalCost < 50) {
        totalOneSpanElement.classList.add("warning");
    }
}


addToBillBtnElement.addEventListener('click', textBillTotal);
