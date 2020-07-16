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
  //  alert(billType)
    textInputBill.billTypeEntered(billType);
//alert(textInputBill.getCallCost())
// update the correct total
/* if (billTypeEntered === "call") {
    callsTotal += 2.75
}
else if (billTypeEntered === "sms") {
    smsTotal += 0.75;
} */


//console.log(textInputBill.totalClassName())
//update the totals that is displayed on the screen.


callTotalOneElement.innerHTML = textInputBill.getCallCost().toFixed(2);
smsTotalOneElement.innerHTML = textInputBill.getSmsCost().toFixed(2);
totalOneSpanElement.innerHTML = textInputBill.getGrandTotal().toFixed(2);

totalOneSpanElement.classList.add(textInputBill.totalClassName());
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
