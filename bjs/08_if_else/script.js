let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
if (minValue < -999) {
        minValue = -1000;
    }
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
if (maxValue > 999){
        maxValue = 1000;
    }
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');


orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${getTextOfNumber(answerNumber)}?`;

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 2);
            answerField.innerText = (phraseRandom === 1) ?
            `Вы загадали число ${getTextOfNumber(answerNumber)}?`: (phraseRandom === 2) ?
            `Ваше число ${getTextOfNumber(answerNumber)}?`:
            `Наверное, это число ${getTextOfNumber(answerNumber)}?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 0;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 2);
            answerField.innerText = (phraseRandom === 1) ?
            `Вы загадали число ${getTextOfNumber(answerNumber)}?`: (phraseRandom === 2) ?
            `Ваше число ${getTextOfNumber(answerNumber)}?`:
            `Наверное, это число ${getTextOfNumber(answerNumber)}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 2);
        answerField.innerText = (phraseRandom === 1) ?
        `Я всегда угадываю\n\u{1F60E}`:  (phraseRandom === 2) ?
        `Это было легко\n\u{1F60E}`:
        `Проще простого\n\u{1F60E}`;

        gameRun = false;
    }
})


document.getElementById('btnRetry').addEventListener('click', function () {
    let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
    if (minValue < -999) {
            minValue = -1000;
        }
    let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
    if (maxValue > 999){
            maxValue = 1000;
        }
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    let answerNumber  = Math.floor((minValue + maxValue) / 2);
    let orderNumber = 1;
    let gameRun = true;
    
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');


    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${getTextOfNumber(answerNumber)}?`;
    
    document.getElementById('btnOver').addEventListener('click', function () {
        if (gameRun){
            if (minValue === maxValue){
                const phraseRandom = Math.round( Math.random());
                const answerPhrase = (phraseRandom === 1) ?
                    `Вы загадали неправильное число!\n\u{1F914}` :
                    `Я сдаюсь..\n\u{1F92F}`;
    
                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                minValue = answerNumber  + 1;
                answerNumber  = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                const phraseRandom = Math.round( Math.random() * 2);
                answerField.innerText = (phraseRandom === 1) ?
                `Вы загадали число ${getTextOfNumber(answerNumber)}?`: (phraseRandom === 2) ?
                `Ваше число ${getTextOfNumber(answerNumber)}?`:
                `Наверное, это число ${getTextOfNumber(answerNumber)}?`;
            }
        }
    })
    
    document.getElementById('btnLess').addEventListener('click', function () {
        if (gameRun){
            if (maxValue === minValue){
                const phraseRandom = Math.round( Math.random());
                const answerPhrase = (phraseRandom === 1) ?
                    `Вы загадали неправильное число!\n\u{1F914}` :
                    `Я сдаюсь..\n\u{1F92F}`;
    
                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {
                maxValue = answerNumber  + 0;
                answerNumber  = Math.floor((maxValue + minValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                const phraseRandom = Math.round( Math.random() * 2);
                answerField.innerText = (phraseRandom === 1) ?
                `Вы загадали число ${getTextOfNumber(answerNumber)}?`: (phraseRandom === 2) ?
                `Ваше число ${getTextOfNumber(answerNumber)}?`:
                `Наверное, это число ${getTextOfNumber(answerNumber)}?`;
            }
        }
    })
    
    document.getElementById('btnEqual').addEventListener('click', function () {
        if (gameRun){
            const phraseRandom = Math.round( Math.random() * 2);
            answerField.innerText = (phraseRandom === 1) ?
            `Я всегда угадываю\n\u{1F60E}`:  (phraseRandom === 2) ?
            `Это было легко\n\u{1F60E}`:
            `Проще простого\n\u{1F60E}`;
    
            gameRun = false;
        }
    })

})
function getTextOfNumber(num) {
    let initialNum = num;
    let textAnswer = '';

    if (num === 0) {
        return ' ' + 0;
    }

    if (String(num)[0] === '-') {
        textAnswer = textAnswer + ' минус';
        num = num * (-1);
    }

    if (String(num).length > 2) {
        switch (Math.floor(num / 100)) {
            case 1:
                textAnswer = textAnswer + ' сто';
                break;
            case 2:
                textAnswer = textAnswer + ' двести';
                break;
            case 3:
                textAnswer = textAnswer + ' триста';
                break;
            case 4:
                textAnswer = textAnswer + ' четыреста';
                break;
            case 5:
                textAnswer = textAnswer + ' пятьсот';
                break;
            case 6:
                textAnswer = textAnswer + ' шестьсот';
                break;
            case 7:
                textAnswer = textAnswer + ' семьсот';
                break;
            case 8:
                textAnswer = textAnswer + ' восемьсот';
                break;
            case 9:
                textAnswer = textAnswer + ' девятьсот';
                break;
    }

        num = num % 100;
    }


    if (String(num).length > 1 && num >= 20) {
        switch (Math.floor(num / 10)) {
            case 2:
                textAnswer = textAnswer + ' двадцать';
                break;
            case 3:
                textAnswer = textAnswer + ' тридцать';
                break;
            case 4:
                textAnswer = textAnswer + ' сорок';
                break;
            case 5:
                textAnswer = textAnswer + ' пятьдесят';
                break;
            case 6:
                textAnswer = textAnswer + ' шестьдесят';
                break;
            case 7:
                textAnswer = textAnswer + ' семьдесят';
                break;
            case 8:
                textAnswer = textAnswer + ' восемьдесят';
                break;
            case 9:
                textAnswer = textAnswer + ' девяносто';
                break;
        }

    num = num  % 10;
    } else {
        switch (num) {
            case 10:
                textAnswer = textAnswer + ' десять';
                break;
            case 11:
                textAnswer = textAnswer + ' одиннадцать';
                break;
            case 12:
                textAnswer = textAnswer + ' двенадцать';
                break;
            case 13:
                textAnswer = textAnswer + ' тринадцать';
                break;
            case 14:
                textAnswer = textAnswer + ' четырнадцать';
                break;
            case 15:
                textAnswer = textAnswer + ' пятнадцать';
                break;
            case 16:
                textAnswer = textAnswer + ' шестнадцать';
                break;
            case 17:
                textAnswer = textAnswer + ' семнадцать';
                break;
            case 18:
                textAnswer = textAnswer + ' восемнадцать';
                break;
            case 19:
                textAnswer = textAnswer + ' девятнадцать';
                break;
        }
    }

    if (String(num).length > 0 && num < 10) {
        switch (num) {
            case 1:
                textAnswer = textAnswer + ' один';
                break;
            case 2:
                textAnswer = textAnswer + ' два';
                break;
            case 3:
                textAnswer = textAnswer + ' три';
                break;
            case 4:
                textAnswer = textAnswer + ' четыре';
                break;
            case 5:
                textAnswer = textAnswer + ' пять';
                break;
            case 6:
                textAnswer = textAnswer + ' шесть';
                break;
            case 7:
                textAnswer = textAnswer + ' семь';
                break;
            case 8:
                textAnswer = textAnswer + ' восемь';
                break;
            case 9:
                textAnswer = textAnswer + ' девять';
                break;
        }
    }

    return (textAnswer.length > 20) ? ' ' + initialNum : textAnswer;
}