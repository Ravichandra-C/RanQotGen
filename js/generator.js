import {quotes} from "../js/quotes.js"
window.generateNextQuote = function generateNextQuote(event){
    let rand=Math.random()*quotes.length;
    // console.log(rand)
    let randomQuote=quotes[Math.ceil(rand)];
    // console.log(randomQuote)
    document.querySelector("#quote").textContent=randomQuote.text;
    document.querySelector("#author").textContent=randomQuote.author;
}