function tipCalc(num1, num2) {
    // test
    let billAmount = num1
    let tipGiven = num2
    // inputs
    // const billAmount = Number(document.querySelector('bill').value)
    // const tipGiven = Number(document.querySelector('tip').value)
    // math
    const tipAmount = ((tipGiven /100) * billAmount)
    const tipRounded = tipAmount.toFixed(2)
    const totalFormula = billAmount + tipRounded
    const totalBill = totalFormula.toFixed(2);
    // print
    const printedTotal = document.querySelector(".total")
    printedTotal.innertext = mealTotal.toFixed(2);
    // history
    const writeTip = document.createElement('li');
    addTip.append(tipRounded);
}
console.log(tipCalc(10, 5)).tipAmount
// console.log(`"Your total is ${tipCalc(10,5)}"`)