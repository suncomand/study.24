
const urlParams = new URLSearchParams(window.location.search)
const postId = urlParams.get('id')

if (postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            const postDetails = document.getElementById('post-details')

            const postCard = document.createElement('div')
            postCard.classList.add('post-card')
            postCard.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    `

            postDetails.appendChild(postCard)
        })git
        .catch(error => {
            console.error('Error fetching post:', error)
        })
} else {
    document.getElementById('post-details').innerHTML = '<p>Post not found.</p>'
}
const username = document.querySelector("strong")


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