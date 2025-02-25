// main page js

document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});
// main page js

// all section element
const addMoneyInput = document.getElementById("addMoneyInput");
addMoneyInput.style.display= "none";
// all section element



// error message
const error = document.getElementById("error");
error.style.display = "none";
let message = document.getElementById("messageText");
message.innerText = "";
// error message

  // add money js code
  document
  .getElementById("Add-Money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const BankName = document.getElementById("options").value;
    const account = document.getElementById("account-number").value;
    const ammount = document.getElementById("amount").value;
    const passWord = document.getElementById("password").value;
    const currentAmountElement = document.getElementById("money");
    let currentAmount = parseFloat(currentAmountElement.innerText);

    if (BankName === "Bkash" || BankName === "Nagad" || BankName === "Rocket") {
      if (account.length === 11) {
        if (parseInt(ammount) > 0) {
          if (parseInt(passWord) === 1234) {
            const addedBalance = currentAmount + parseFloat(ammount);
            currentAmountElement.innerText = addedBalance;

            document.getElementById("account-number").value = "";
            document.getElementById("amount").value = "";
            document.getElementById("password").value = "";
            document.getElementById("options").value = "Select";
          } else {
            error.style.display = "flex";
            message.innerText = "Incorrect Password";
          }
        } else {
          error.style.display = "flex";
          message.innerText = "Please Add a Valid Amount";
        }
      } else {
        error.style.display = "flex";
        message.innerText = "Bank Account Number Wrong";
      }
    } else {
      error.style.display = "flex";
      message.innerText = "Please Select Bank Name";
    }
  });
  // add money js code
