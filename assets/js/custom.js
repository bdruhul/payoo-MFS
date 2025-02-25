document.getElementById("error").style.display = "none";

/*login part js*/
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const numberInput = document.getElementById("account-number").value;
    const passInput = document.getElementById("password").value;
    const errorDiv = document.getElementById("error");
    if (numberInput.length === 11) {
      if (parseInt(passInput) === 1234) {
        window.location.href = "./main.html";
      } else {
        errorDiv.style.display = "flex";
      }
    } else {
      errorDiv.style.display = "flex";
      errorDiv.innerHTML = ` <div class=" bg-black text-white p-4 w-3/4 mx-auto rounded-3xl  text-center">
        <p>Incorrect Account Number</p>
        <button class="bg-white text-red-800 px-4 py-2 rounded mt-2 hover:bg-gray-200"><a href="index.html">OK</a></button>
    </div>`;
    }
  });
/*login part js*/
