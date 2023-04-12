
const btnSignin = document.querySelector("#signin") as HTMLInputElement;
const btnSignup = document.querySelector("#signup") as HTMLInputElement;

var body = document.querySelector("body") as HTMLBodyElement;
var element = document.getElementById("content")

btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})