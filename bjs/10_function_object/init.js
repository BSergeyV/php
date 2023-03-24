// генерация новых данных
window.onload = function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('birthdayOutput').innerText = initPerson.birthday;
    document.getElementById('professionOutput').innerText = initPerson.profession;
};

// реализация очистки данных при нажатии на кнопку
document.getElementById('btnErase').addEventListener('click', function () {
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('birthdayOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
});

// реализация генерации новых данных при нажатии на кнопку
document.getElementById('btnGenerate').addEventListener('click', function () {
    window.onload();
});

