const form = document.querySelector("form");

const validateNumbers = (number) => {
  myRegex = /[^0-9]+$/;
  return myRegex.test(number);
};

form.addEventListener("submit", (event) => {         
       event.preventDefault();
       const billInput = document.querySelector("#bill");
       const tipInput = document.querySelector("#tip");
       if (
         validateNumbers(billInput.value) ||
         validateNumbers(tipInput.value)
       ) {

        alert("This ain't a dictionary, fool. Numbers only.");
       
       } else {
         tipCalc();
       }
} );


function tipCalc() {

const billAmount = Number(document.querySelector('#bill').value)
const tipGiven = Number(document.querySelector('#tip').value)

const tipAmount = ((tipGiven /100) * billAmount).toFixed(2)
const totalFormula = billAmount + Number(tipAmount)

const printedTotal = document.querySelector(".total")
printedTotal.innerText = totalFormula;

const addTip = document.querySelector('#addTip')          
const writeTip = document.createElement('li')
writeTip.innerText = tipAmount
addTip.append(writeTip)
console.log(tipAmount)
    
}


const submitBtn = document.querySelector('[type="submit"]');
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const totalEl = document.querySelector(".total")

const isNumber = (value) => /[^0-9]+$/.test(value);
const getTip = ({ bill, tip }) => {
  const tipAmount = ((tip /100) * bill).toFixed(2)
  totalEl.innerText = `${bill + tipAmount}$`
}

submitBtn.onclick = () => {
  const { value: billValue } = billInput
  const { value: tipValue } = tipInput

  if(isNumber(billInput) && isNumber(tipValue)) {
    getTip({ bill: +billValue, tip: +tipValue})
    return true;
  }

  alert("This ain't a dictionary, fool. Numbers only.")
  return false;
}