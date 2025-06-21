
let posts = [];

function createPost() {
    const text = document.getElementById("postText").value.trim();
    if (text !== "") {
        posts.unshift(text);
        document.getElementById("postText").value = "";
        renderPosts();
    }
}

function renderPosts() {
    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";
    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerText = post;
        postsDiv.appendChild(postDiv);
    });
}
