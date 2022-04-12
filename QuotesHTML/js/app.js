var quotesDahl = [
  "We are the music makers, and we are the dreamers of dreams.",
  "Those who don't believe in magic will never find it.",
  "It doesn't matter who you are or what you look like, so long as somebody loves you.",
  "Grown ups are complicated creatures, full of quirks and secrets.",
  "Somewhere inside all of us is the power to change the world."
]

var quotesCoelho = [
  "It's the possibility of having a dream come true that makes life interesting.",
  "The secret of life, though, is to fall seven times and to get up eight times.",
  "And, when you want something, all the universe conspires in helping you to achieve it.",
  "The simple things are also the most extraordinary things, and only the wise can see them.",
  "Remember that wherever your heart is, there you will find your treasure."
]

var quotesSaint = [
  "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
  "The most beautiful things in the world cannot be seen or touched, they are felt with the heart.",
  "Love does not consist of gazing at each other, but in looking outward together in the same direction.",
  "True happiness comes from the joy of deeds well done, the zest of creating things new.",
  "The meaning of things lies not in the things themselves, but in our attitude towards them."
]

var quotesDisney = [
  "Laughter is timeless, imagination has no age, dreams are forever.",
  "Everyone falls down. Getting back up is how you learn how to walk.",
  "All our dreams can come true, if we have the courage to pursue them.",
  "First, think. Second, believe. Third, dream. And finally, dare.",
  "The difference between winning and losing is most often not quitting."
]

var quotesShackleton = [
  "Difficulties are just things to overcome, after all.",
  "Through endurance we conquer.",
  "Need to put footstep of courage into stirrup of patience.",
  "A man must shape himself to a new mark directly the old one goes to ground.",
  "Men are not made from easy victories but based on great defeats."
]

function DahlButton(){
  var randomNumber = Math.floor(Math.random() * (quotesDahl.length));
  document.getElementById('quoteDisplay').innerHTML = quotesDahl[randomNumber];
}

function CoelhoButton(){
  var randomNumber = Math.floor(Math.random() * (quotesCoelho.length));
  document.getElementById('quoteDisplay').innerHTML = quotesCoelho[randomNumber];
}

function SaintButton(){
  var randomNumber = Math.floor(Math.random() * (quotesSaint.length));
  document.getElementById('quoteDisplay').innerHTML = quotesSaint[randomNumber];
}

function DisneyButton(){
  var randomNumber = Math.floor(Math.random() * (quotesDisney.length));
  document.getElementById('quoteDisplay').innerHTML = quotesDisney[randomNumber];
}

function ShackletonButton(){
  var randomNumber = Math.floor(Math.random() * (quotesShackleton.length));
  document.getElementById('quoteDisplay').innerHTML = quotesShackleton[randomNumber];
}
