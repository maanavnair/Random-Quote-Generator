let quote = document.getElementById('quote');
let btn = document.getElementById('btn');
let author = document.getElementById('author');

function getRandomQuote(){
    btn.textContent = "Generating...";
    fetch("https://api.quotable.io/random")
    .then( (response) => {
        return response.json();
    })
    .then( (data) => {
        btn.textContent = "Generate Quote";
        quote.textContent = `"${data.content}"`;
        author.textContent = `~${data.author}`;
    })
}

btn.addEventListener("click", getRandomQuote);
document.addEventListener("DOMContentLoaded", getRandomQuote)