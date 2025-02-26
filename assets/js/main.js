// main page js

document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// main blance
const currentAmountElement = document.getElementById("money");
let currentAmount = parseFloat(currentAmountElement.innerText);
// main blance

// all section element
const addMoneyInput = document.getElementById("addMoneyInput");
addMoneyInput.style.display = "none";
const cashout = document.getElementById("cash-out");
cashout.style.display = "none";
const TransferMoney = document.getElementById("Transefer");
TransferMoney.style.display = "none";
const bonus = document.getElementById("bonus");
bonus.style.display = "none";
const pay = document.getElementById("Paybill");
  pay.style.display = "none";

// all section element

// section click to link

document.getElementById("addMoney").addEventListener("click", function () {
  addMoneyInput.style.display = "block";
  cashout.style.display = "none";
  TransferMoney.style.display = "none";
  bonus.style.display = "none";
  pay.style.display = "none";
});
document.getElementById("CashOut").addEventListener("click", function () {
  addMoneyInput.style.display = "none";
  cashout.style.display = "block";
  TransferMoney.style.display = "none";
  bonus.style.display = "none";
  pay.style.display = "none";
});

document.getElementById("TransferMoney").addEventListener("click", function () {
  addMoneyInput.style.display = "none";
  cashout.style.display = "none";
  TransferMoney.style.display = "block";
  bonus.style.display = "none";
  pay.style.display = "none";
});
document.getElementById("GetBonus").addEventListener("click", function () {
  addMoneyInput.style.display = "none";
  cashout.style.display = "none";
  TransferMoney.style.display = "none";
  bonus.style.display = "block";
  pay.style.display = "none";
});

document.getElementById("Pay-money").addEventListener("click", function(){
  addMoneyInput.style.display = "none";
  cashout.style.display = "none";
  TransferMoney.style.display = "none";
  bonus.style.display = "none";
  pay.style.display = "block";


})
// section click to link

// error message
const error = document.getElementById("error");
error.style.display = "none";
let message = document.getElementById("messageText");
message.innerText = "";

const ok = document.getElementById("ok");
ok.addEventListener("click", function () {
  const error = document.getElementById("error");
  error.style.display = "none";
});

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
        message.innerText = "Successfully Cash Out";
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

// Transfer js
document.getElementById("send").addEventListener("click", function (event) {
  event.preventDefault();
  const userNumber = document.getElementById("user-number").value;
  const amountTransfer = document.getElementById("amount-transfer").value;
  const passwordTransfer = document.getElementById("password-transfer").value;
  if (userNumber.length === 11) {
    if (parseInt(amountTransfer) > 0) {
      if (parseInt(passwordTransfer) === 1234) {
        const remvoeBlance = currentAmount - parseInt(amountTransfer);
        currentAmountElement.innerText = remvoeBlance;
        document.getElementById("user-number").value = "";
        document.getElementById("amount-transfer").value = "";
        document.getElementById("password-transfer").value = "";
        error.style.display = "flex";
        message.innerText = "Successfully Transfer Money";
      } else {
        error.style.display = "flex";
        message.innerText = "Incorrect Password";
      }
    } else {
      error.style.display = "flex";
      message.innerText = "Please Added Transfer Amount";
    }
  } else {
    error.style.display = "flex";
    message.innerText = "Please Added Valid User Account Number";
  }
});
// Transfer js

// bonus section js
document
  .getElementById("send-bonus")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bonusCode = document.getElementById("bonus-number").value;
    if (bonusCode.length === 8) {
      error.style.display = "flex";
      message.innerText = "Successfully added your coupon code";
      document.getElementById("bonus-number").value = "";
    } else {
      error.style.display = "flex";
      message.innerText = "Please Added Valid Coupon Code";
    }
  });

// bonus section js
// Pay js code
document
  .getElementById("pay-Money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const BankName = document.getElementById("Bank").value;
    const account = document.getElementById("Biller-number").value;
    const ammount = document.getElementById("amountPay").value;
    const passWord = document.getElementById("passwordPay").value;

    if (BankName === "Bkash" || BankName === "Nagad" || BankName === "Rocket") {
      if (account.length === 11) {
        if (parseInt(ammount) > 0) {
          if (parseInt(passWord) === 1234) {
            const remvoeBlance = currentAmount - parseFloat(ammount);
            currentAmountElement.innerText = remvoeBlance;

            document.getElementById("Biller-number").value = "";
            document.getElementById("amountPay").value = "";
            document.getElementById("passwordPay").value = "";
            document.getElementById("Bank").value = "Select";
            error.style.display = "flex";
            message.innerText = "Successfully Payment";
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
// Pay money js code
