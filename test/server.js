fetch('http://localhost:3000/posts')
.then((res) => res.json())
.then((json) => console.log(json));

fetch('http://localhost:3000/comments/1')
.then((res) => res.json())
.then((json) => console.log(json));

fetch('http://localhost:3000/comments?postId=1')
.then((res) => res.json())
.then((json) => console.log(json));

fetch('http://localhost:3000/posts', {
    method: "POST",
    body: JSON.stringify({
        title: "The Greate",
        author: "Jeremy",
    }),
    headers: {
        "content-type": "application/json; charset=UTF-8",
    },
})
.then((res) => res.json())
.then((json) => console.log(json));

fetch('http://localhost:3000/posts/2', {
    method: "PUT",
    body: JSON.stringify({
        id: 2,
        title: "THe Greate Jeremy",
        author: "Jeremy",
    }),
    headers: {
        "content-type": "application/json; charset=UTF-8",
    },
})
.then((res) => res.json())
.then((json) => console.log(json));

fetch('http://localhost:3000/posts/2', { method: "DELETE" });
