const initialPrice = document.querySelector('#initial-price');
const numberOfStocks = document.querySelector('#number-of-stocks');
const currentPrice = document.querySelector('#current-price');
const submitButton = document.querySelector('#show-me-btn');
const outputMessage = document.querySelector('#output-message');

function isprofitorloss () {
    let initial = Number(initialPrice.value);
    let current = Number(currentPrice.value);
    let qty = Number(numberOfStocks.value);
    
    if (currentPrice.value !== "" && initialPrice.value !== "" && numberOfStocks.value !== "" ){

    if (initial > 0 && current >= 0 && qty > 0 && Number.isInteger(initial) && Number.isInteger(initial) && Number.isInteger(qty)) {
        if (initial > current) {
            let loss = (initial - current) * qty;
            let lossPercentage = (((initial - current) * 100) / initial).toFixed(2);
            outputMessage.style.color =  "#d00000";
            outputMessage.innerText = ` Be AWARE: 🤯 Your loss is ${loss} and loss percentage is ${lossPercentage}% 🤯`;
        }
        else if (current > initial) {
            let profit = (current - initial) * qty;
            let profitPercentage = (((current - initial) * 100) / initial).toFixed(2);
            outputMessage.style.color = "#1DB954";
            outputMessage.innerText = `😎 Your profit is ${profit} and profit percentage is ${profitPercentage}% 😎`;
        }
        else {
            outputMessage.style.color = "#fffcf2";
            outputMessage.innerText = `Move on! There is no profit and no loss 😴`;
        }
    }
    else {
        outputMessage.style.color = "#d00000";
        outputMessage.innerText = "ERROR! ❌: You have either entered a negative value or stock quantity or initial Price is entered zero";
    }
    }
    else {
        outputMessage.style.color = "#d00000";
        outputMessage.innerText = "ERROR! ❌: Fill all the Fields! "
    }
}

submitButton.addEventListener('click', isprofitorloss);