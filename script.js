function darLike(id) {
    let likes = localStorage.getItem(id);
    likes = likes ? parseInt(likes) + 1 : 1;
    localStorage.setItem(id, likes);
    document.getElementById("likes-" + id).textContent = likes;
}

function cargarLikes(id) {
    let likes = localStorage.getItem(id);
    document.getElementById("likes-" + id).textContent = likes ? likes : 0;
}

function volver() {
    window.location.href = "index.html";
}
