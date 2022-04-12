function getQuote(){
  fetch('https://animechan.vercel.app/api/random')
  .then(response => response.json())
  .then(quote => {
    animeQuote.textContent = quote.quote;
    animeCharacter.textContent = `-${quote.character} `;
    animeTitle.textContent =  quote.anime;
  });
}


const animeQuote = document.getElementById('anime-quote'),
    animeTitle = document.getElementById('anime-anime'),
    animeCharacter = document.getElementById('anime-character'),
    btn = document.getElementById('btn');


btn.addEventListener('click', () => {
  getQuote();
})