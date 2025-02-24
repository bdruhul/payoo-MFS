

/*login part js*/
document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault();
        const numberInput = document.getElementById("account-number").value;
        const passInput = document.getElementById("password").value;

            if(numberInput.length === 11){
                    if(parseInt(passInput)===1234){
                            window.location.href="./main.html";
                    }else{
                        alert("Incorrect pin Number");
                    }

            }else{
                    alert("Incorrect Account Number");
            }

});
/*login part js*/
