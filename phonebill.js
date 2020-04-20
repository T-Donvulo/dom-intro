const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const billStringField = document.querySelector(".billStringField");

function totalPhoneBill(billString) {
    var billItems = billString.split(",");
    var billTotal = 0;

    for (var i = 0; i < billItems.length; i++) {
        var billItem = billItems[i].trim();

        if (billItem === "call") {
            billTotal += 2.75;
        }

        else if (billItem === "sms") {
            billTotal += 0.75;
        }

    }

    var roundedBillTotal = billTotal.toFixed(2);
    return roundBillTotal;
}

function calculateBtnClicked() {

    var billString = billStringField.value;
    const roundBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;

}

calculateBtn.addEventListener(".clicked", calculateBtnclicked);

