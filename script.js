let prevVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
// Store whether decimal or not decimal was clicked
// (only allow one decimal per value)
let decimalClicked = false
// Hold values we want stored in memory
let valMemStored = ''

function numButPress(num) {
    //Check if a number has already been clicked
    if (resultVal) {
        //start a new number
        newVal = num
        //reset to create a new result
        resultVal = ''
    } else {
        //Used to block multi decimals
        if (num === '.') {
            if (decimalClicked != true) {
                //Take the current value of newVal and add the character pressed
                newVal += num

                decimalClicked = true
            }
        } else {
            newVal += num
        }
    }
//update the display
document.getElementById('entry').value = newVal
}

function mathButPress(operator) {
    //Check if there was a previous calculation by seeing if resultVal has a value 
    //If resultVal doesn't have a value then store the current value as a previous for the next calculation
    if (!resultVal) {
        prevVal = newVal
        
    } else {
        //IF there is a current result store that as the previous value entered
        prevVal = resultVal
    }
    //Restart creation of new number 
    newVal = ''
    //Reset decimal clicked
    decimalClicked = false
    //Store operator clicked
    mathOperator = operator
    //Prepare entry for receiving new numbers
    resultVal = ''
    document.getElementById('entry').value = ''
}

function equalButPress() {
    //Reset decimalClicked
    decimalClicked = false
    //Convert string numbers to floats
    prevVal = parseFloat(prevVal)
    newVal = parseFloat(newVal)

    switch (mathOperator) {
        case '+': 
            resultVal = prevVal + newVal
            break
        case '-': 
            resultVal = prevVal - newVal
            break
        case '*': 
            resultVal = prevVal * newVal
            break
        case '/': 
            resultVal = prevVal / newVal
            break
    default:
        resultVal = newVal
    }
    prevVal = newVal
    document.getElementById('entry').value = resultVal
}

// Clears everything except set memory
function clearButPress() {
    prevVal = ''
    newVal = ''
    resultVal = ''
    mathOperator = ''
    decimalClicked = false
    document.getElementById('entry').value = '0'
}

// Stores the current value in #entry in valMemStored
function copyButPress() {
    valMemStored = document.getElementById('entry').value
}

// If a value has been stored paste it in the #entry window and assign it as the newVal
function pasteButPress() {
    if (valMemStored) {
        document.getElementById('entry').value = valMemStored
        newVal = valMemStored
    }
}