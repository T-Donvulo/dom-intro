// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var billItemTypeElement = document.querySelector(".billTypeText");
var addToBillBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoSpanElement = document.querySelector(".totalTwo");

// callsTotalTwo = 0;
// smsTotalTwo = 0;
// totalCostTwo = 0;

const billRadio = BillRadio();

function addToBillBtnClicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
     
    if (checkedRadioBtn){
    var billTypeEntered = checkedRadioBtn.value;
    billRadio.callsSms(billTypeEntered);
    // billItemType will be 'call' or 'sms'
  
  
    // get the value entered in the billType textfield
    //var billTypeEntered = billTextElement.value.trim();

    // update the correct total
 
 
    
    }
    //update the totals that is displayed on the screen.

    callTotalTwoElement.innerHTML = billRadio.getCallCost().toFixed(2);
    smsTotalTwoElement.innerHTML = billRadio.getSmsCost().toFixed(2);
   // totalCostTwo = callsTotalTwo + smsTotalTwo;
    totalTwoSpanElement.innerHTML = billRadio.getGrandTotal().toFixed(2);

    
    //color the total based on the criteria
    totalTwoSpanElement.classList.remove("danger");
    totalTwoSpanElement.classList.remove("warning");
    //if (totalCostTwo >= 50) {
        // adding the danger class will make the text red
        totalTwoSpanElement.classList.add(billRadio.totalClassName());
    }
    //else if (totalCostTwo >= 30 && totalCost < 50) {
       // totalTwoSpanElement.classList.add("warning");
  //  }
//}

addToBillBtnElement.addEventListener("click", addToBillBtnClicked);