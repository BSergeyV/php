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
answerField.innerText = `Вы загадали число ${answerNumber }?`;

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
    answerField.innerText = `Вы загадали число ${answerNumber }?`;

    minValue = 0;
    maxValue = 100;
    orderNumber = 0;


    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    
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
                `Вы загадали число ${answerNumber }?`: (phraseRandom === 2) ?
                `Ваше число ${answerNumber }?`:
                `Наверное, это число ${answerNumber }?`;
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
                maxValue = answerNumber  + 1;
                answerNumber  = Math.floor((maxValue + minValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                const phraseRandom = Math.round( Math.random() * 2);
                answerField.innerText = (phraseRandom === 1) ?
                `Вы загадали число ${answerNumber }?`: (phraseRandom === 2) ?
                `Ваше число ${answerNumber }?`:
                `Наверное, это число ${answerNumber }?`;
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
            `Вы загадали число ${answerNumber }?`: (phraseRandom === 2) ?
            `Ваше число ${answerNumber }?`:
            `Наверное, это число ${answerNumber }?`;
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
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 2);
            answerField.innerText = (phraseRandom === 1) ?
            `Вы загадали число ${answerNumber }?`: (phraseRandom === 2) ?
            `Ваше число ${answerNumber }?`:
            `Наверное, это число ${answerNumber }?`;
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

