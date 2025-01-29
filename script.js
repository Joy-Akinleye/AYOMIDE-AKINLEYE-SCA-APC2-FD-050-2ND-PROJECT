const quotes = [
    " 'Talk is cheap. Show me the code.' — Linus Torvalds",
    " 'The best way to predict the future is to invent it.' — Alan Kay",
    " 'First, solve the problem. Then, write the code.' — John Johnson",
    " 'Any sufficiently advanced technology is indistinguishable from magic.' — Arthur C.Clarke",
    " 'Code never lies, comments sometimes do.' — Ron Jeffries",
    " 'It's not a bug. It’s an undocumented feature!' — Unknown ",
    " 'If debugging is the process of removing bugs, then programming must be the process of putting them in.' — Edsger W.Dijkstra",
    " 'Simplicity is the soul of efficiency.' — Austin Freeman",
    " 'The computer was born to solve problems that did not exist before.' — Bill Gates",
    " 'Programs must be written for people to read, and only incidentally for machines to execute.' — Harold Abelson "
];

const techQuote = document.getElementById("motivation");
const quoteDisplay = document.getElementById("quote-display");

function showQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    techQuote.innerText = quotes[randomIndex];
  }
