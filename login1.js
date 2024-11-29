const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")
const alert = document.querySelector(".alert")

alert.style.display = "none"

button.onclick = () => {

    const myUser = {
        name: inputs[0].value,
        password: inputs[1].value
    }

    const storedUser = JSON.parse(localStorage.getItem("user"))

    if (storedUser && storedUser.name === myUser.name && storedUser.passwordOne === myUser.password) {

        alert.innerHTML = "Login successful!"
        alert.style.display = "block"

        setTimeout(() => {
            window.location.href = "index.html"
        }, 1500)

    } else {
        alert.innerHTML = "Invalid username or password."
        alert.style.display = "block"
    }
};
