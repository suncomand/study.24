const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")
const alert = document.querySelector(".alert")

alert.style.display = "none"

button.onclick = () => {
    const myUser = {
        name: inputs[0].value,
        passwordOne: inputs[1].value,
        passwordTwo: inputs[2].value
    }

    if (myUser.passwordOne !== myUser.passwordTwo) {
        alert.innerHTML = "Do not match!"
        alert.style.display = "block"
        return;
    }

    localStorage.setItem("user", JSON.stringify(myUser))
    const successMessage = {
        message: "Account created! You now can login"
    }

    alert.innerHTML = successMessage.message
    alert.style.display = "block"
};

