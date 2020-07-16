// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
//reference for call and sms radio button
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

//reference for settings fields
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");

//add button reference
var addToBillBtnElement = document.querySelector(".billAddBtn");

//update button reference
var updateSettings = document.querySelector(".updateSettings");

//settings reference
var callCostSettings = document.querySelector(".callCostSetting");
var smsCostSettings = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//var totalSettings = document.querySelector(".totalSettings");

// var callsTotalOne = 0;
// var smsTotalOne = 0;
// var totalCost = 0;

// var callCost = 0;
// var smsCost = 0;
// var critical = 0;
// var warning = 0; commenting out the global variables first, then invite factory function with it's function name using instance

const billWithSetting = BillWithSettings();


function updateSettingsClicked() {

    billWithSetting.setCallCost(Number(callCostSettings.value));
    billWithSetting.setSmsCost1(Number(smsCostSettings.value));
    billWithSetting.setWarningLevel(Number(warningLevelSetting.value));
    billWithSetting.setCriticalLevel(Number(criticalLevelSetting.value));

colour()

}


function addToBillBtnClicked() {
  
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    
     if (checkedRadioBtn) {
    // if (totalCost < critical) {
    //     billWithSetting.grandTotal(billItemTypeElement);
        
            var billTypeEntered = checkedRadioBtn.value;
       
            if(billTypeEntered === "call"){
                billWithSetting.makeCall();

            }
            if (billTypeEntered === "sms"){
                billWithSetting.sendSms();
            }
            callTotalSettingsElem.innerHTML = billWithSetting.getTotalCallCost().toFixed(2);
            smsTotalSettingsElem.innerHTML = billWithSetting.getTotalSmsCost().toFixed(2);
           // totalCost = callsTotalOne + smsTotalOne;
            totalSettings.innerHTML = billWithSetting.getGrandTotal().toFixed(2);
            colour()
    
            // if (billTypeEntered === "call") {

            //     callsTotalOne += callCost;
            // }
            // else if (billTypeEntered === "sms") {
            //     smsTotalOne += smsCost;
            // }
        }

     }

// }
function colour() {

    
    totalSettings.classList.remove("danger");
    totalSettings.classList.remove("warning");
    totalSettings.classList.add(billWithSetting.totalClassName())
}

//update the totals that is displayed on the screen.





addToBillBtnElement.addEventListener("click", addToBillBtnClicked);
updateSettings.addEventListener("click", updateSettingsClicked);