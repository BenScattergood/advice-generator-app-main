const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()

    document.querySelector("#title").innerHTML = `Advice #${data.slip.id}`;
    document.querySelector("#quote").innerHTML = `"${data.slip.advice}"`;
}

fetchAdvice();

const dice = document.querySelector(".dice");
const diceHolder = document.querySelector(".dice-holder");

dice.addEventListener("click", GetQuote);
dice.addEventListener("mouseover", AddGrow);
dice.addEventListener("mouseleave", AddGrow)
diceHolder.addEventListener("click", GetQuote);

function GetQuote() {
    fetchAdvice();
}

function AddGrow() {
    dice.classList.toggle("grow");
    diceHolder.classList.toggle("grow");
}


document.querySelector(".dice")