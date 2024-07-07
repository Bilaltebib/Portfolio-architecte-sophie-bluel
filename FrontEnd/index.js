let works


function displayWorks() {
    const gallery = document.querySelector(".gallery")
    for (let work of works) {
        gallery.append(work.title)
    }
}

async function init() {
    works = await fetch("http://localhost:5678/api/works")
    .then(result => result.json())
    console.log(works)
    displayWorks()
}
init()