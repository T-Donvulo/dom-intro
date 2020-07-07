var billTextElement = document.querySelector(".billTypeText");
var addToBillBtnElement = document.querySelector(".addToBillBtn");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneSpanElement = document.querySelector(".totalOne");

//var callsTotal = 0;
//var smsTotal = 0;
//var totalCost = 0;

const textInputBill = TextInputBill(); /*inviting factory function in dom, after you commented out the global viriables*/

function textBillTotal() {

    var billType = billTextElement.value.trim();
    //textInputBill.billTypeEntered(billTypeEntered);
    
    textInputBill.billTypeEntered(billType);

// update the correct total
/* if (billTypeEntered === "call") {
    callsTotal += 2.75
}
else if (billTypeEntered === "sms") {
    smsTotal += 0.75;
} */


console.log(textInputBill.totalClassName())
//update the totals that is displayed on the screen.
totalOneSpanElement.classList.add(textInputBill.totalClassName());

callTotalOneElement.innerHTML = textInputBill.getTotalCallCost().toFixed(2);
smsTotalOneElement.innerHTML = textInputBill.getTotalSmsCost().toFixed(2);
totalOneSpanElement.innerHTML = textInputBill.getTotalCost().toFixed(2);


//color the total based on the criteria
//totalOneSpanElement.classList.remove("danger");
//totalOneSpanElement.classList.remove("warning");
// if (totalCost >= 50) {
//     // adding the danger class will make the text red
// }
// else if (totalCost >= 30 && totalCost < 50) {
//     totalOneSpanElement.classList.add("warning");
// }

}

addToBillBtnElement.addEventListener('click', textBillTotal);
