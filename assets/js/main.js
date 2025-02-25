// main page js

document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});
// main page js

// all section element
const addMoneyInput = document.getElementById("addMoneyInput");
addMoneyInput.style.display = "none";
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

    const ok = document.getElementById("ok");
    ok.removeAttribute("href");

    ok.addEventListener("click", function () {
      const error = document.getElementById("error");
      error.style.display = "none";
    });

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
            error.style.display = "flex";
            message.innerText = "Successfully added balance to your account";
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

// cashOut js
document.getElementById("Withdraw").addEventListener("click", function (event) {
  event.preventDefault();

  const ok = document.getElementById("ok");
  ok.removeAttribute("href");

  ok.addEventListener("click", function () {
    const error = document.getElementById("error");
    error.style.display = "none";
  });

  const currentAmountElement = document.getElementById("money");
  let currentAmount = parseFloat(currentAmountElement.innerText);
  const AgentNumber = document.getElementById("Agent-number").value;
  const amountWithdrawal = document.getElementById("amount-withdrawal").value;
  const passwordWithdrawal = document.getElementById(
    "password-withdrawal"
  ).value;
  if (AgentNumber.length === 11) {
    if (parseInt(amountWithdrawal) > 0) {
      if (parseInt(passwordWithdrawal) === 1234) {
        const remvoeBlance = currentAmount - parseInt(amountWithdrawal);
        currentAmountElement.innerText = remvoeBlance;
        document.getElementById("Agent-number").value = "";
        document.getElementById("amount-withdrawal").value = "";
        document.getElementById("password-withdrawal").value = "";

        error.style.display = "flex";
        message.innerText = "Successfully added balance to your account";
      } else {
        error.style.display = "flex";
        message.innerText = "Incorrect Password";
      }
    } else {
      error.style.display = "flex";
      message.innerText = "Please Added Withdrawal Amount";
    }
  } else {
    error.style.display = "flex";
    message.innerText = "Please Added Valid Agent Number";
  }
});

// cashOut js
