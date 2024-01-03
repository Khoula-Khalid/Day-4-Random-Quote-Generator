const quotes = [
  "Hard times always lead to something great - Eisha",
  "If you want to be rich, sell your talent - Khoula",
  "My school friends are the best chapter of my life - Waleed",
]

const img = [
  "https://i.pravatar.cc/400?img=56.jpg",
  "image.jpg",
  "https://i.pravatar.cc/400?img=12",
]

function setQuote() {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const image = document.getElementById('image');
  image.style.display = 'none';
  
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  const randomImage = img[randomIndex]
  const quoteParts = randomQuote.split(' - ');
  
  console.log(quoteParts)
  quote.innerHTML = quoteParts[0];
  author.innerHTML = `-${quoteParts[1]}`;
  document.getElementById('image').src = randomImage;
  image.style.display = 'block';
}
