'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
console.log('Существующий список логинов: ', logins);
const login = prompt('Введите имя пользователя: ', '');

const isLoginValid = function (login) {

    if (login.length >= 4 && login.length <= 16) {
        return true;
    }
    return false;
};
const isLoginValidResult = isLoginValid(login);


const isLoginUnique = function (allLogins, login) {

    if (!allLogins.includes(login)) {
        return true;
    }
    return false;
};
const isLoginUniqueResult = isLoginUnique(logins, login);

const addLogin = function (allLogins, login) {

    console.log('Введённый логин: ', login);
    console.log('Количество символов: ', login.length);
    console.log('Валидность символов (4-16): ', isLoginValidResult);

    if (!isLoginValidResult) {
        return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    }

    if (!isLoginUniqueResult) {
        return console.log('Такой логин уже используется!')
    } else {
        allLogins.push(login);
        console.log('Новый список имён: ', logins);
        return console.log('Логин успешно добавлен!');
    }
};

// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

addLogin(logins, login);
