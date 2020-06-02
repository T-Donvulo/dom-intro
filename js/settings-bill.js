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
var callTotalTwoElement = document.querySelector(".callTotalSettings");
var smsTotalTwoElement = document.querySelector(".smsTotalSettings");
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

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

var callCost = 0;
var smsCost = 0;
var critical = 0;
var warning = 0;


function addToBillBtnClicked() {
    //alert("call")
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    //console.log(checkedRadioBtn)
    if (checkedRadioBtn) {
    if (totalCost < critical) {
        
            var billTypeEntered = checkedRadioBtn.value;

            if (billTypeEntered === "call") {

                callsTotal += callCost;
            }
            else if (billTypeEntered === "sms") {
                smsTotal += smsCost;
            }
        }
        callTotalTwoElement.innerHTML = callsTotal.toFixed(2);
        smsTotalTwoElement.innerHTML = smsTotal.toFixed(2);
        totalCost = callsTotal + smsTotal;
        totalSettings.innerHTML = totalCost.toFixed(2);
        colour()

    }

}
function colour() {

    //color the total based on the criteria
    totalSettings.classList.remove("danger");
    totalSettings.classList.remove("warning");
    if (totalCost >= warning && totalCost < critical) {
        // adding the danger class will make the text red
        totalSettings.classList.remove("danger");
        totalSettings.classList.add("warning");
    }
    else if (totalCost >= critical) {
        totalSettings.classList.remove("warning");
        totalSettings.classList.add("danger");
    }
}

//update the totals that is displayed on the screen.

function updateSettingsClicked() {

    callCost = Number(callCostSettings.value);
    smsCost = Number(smsCostSettings.value);
    critical = Number(criticalLevelSetting.value);
    warning = Number(warningLevelSetting.value);

    colour()

}

addToBillBtnElement.addEventListener("click", addToBillBtnClicked);
updateSettings.addEventListener("click", updateSettingsClicked);