const body = document.querySelector(".body")

let posts = []

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {

        let myData = data.reverse()

        myData.forEach((post) => {
            posts.push(post)

            body.innerHTML += `
                <div class="card" id="post-${post.id}">
                    <div class="card-content d-flex flex-wrap">
                        <h2 class="card-title">${post.title}</h2>
                        <p class="card-meta">
                            Posted by <strong>user${post}</strong> on 
                            <span class="card-timestamp">${new Date().toDateString()}</span>
                        </p>
                        <p class="card-body">${post.body}</p>
                        <a href="singlePost.html?id=${post.id}">Read more</a>
                    </div>
                </div>
            `
        })

        const titles = document.querySelectorAll(".card-title")
        titles.forEach((item, index) => {
            item.onclick = () => {
                localStorage.setItem("post_id", posts[index].id)
                localStorage.setItem("username", posts[index].username)
                window.location.href = "singlePost.html"
            }
        })

        const usernames = document.querySelectorAll("strong")
        usernames.forEach((item, index) => {
            item.onclick = () => {
                localStorage.setItem("username", posts[index].username)
                window.location.href = "singlePost.html"
            }
        });
    })
    .catch(error => console.error("Error:", error))

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
