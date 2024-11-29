const myImg = document.getElementById("myImg")
const myButton = document.getElementById("myButton")

let isFirstImage = true

myButton.addEventListener("click", function() {
    if (isFirstImage) {
        myImg.src = "https://i.pinimg.com/736x/13/96/51/1396515569b6f10fe7915c86ef0e8d13.jpg";
    } else {
        myImg.src = "https://images.pexels.com/photos/27457052/pexels-photo-27457052/free-photo-of-young-boy-looking-good.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
    isFirstImage = !isFirstImage
})

/// WHO'S LOGGED PART
const storedUser = JSON.parse(localStorage.getItem("user"))

if (storedUser && storedUser.name) {
    const userNameElement = document.getElementById("username-display")
    if (userNameElement) {
        userNameElement.textContent = `${storedUser.name}`
    }
} else {
    window.location.href = "login.html"
}


/// SECOND EMAIL NEAR PHOTO
const storedUser1 = JSON.parse(localStorage.getItem("user"))

if (storedUser1 && storedUser1.name) {
    const userNameElement = document.getElementById("username-display1")
    if (userNameElement) {
        userNameElement.textContent = `${storedUser1.name}`
    }
} else {
    window.location.href = "login.html"
}





