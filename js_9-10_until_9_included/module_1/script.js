'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';

const adminLoginRequest = prompt('Input admin login');

if (!adminLoginRequest) {
    alert('Отменено пользователем!');
} else if (adminLoginRequest !== adminLogin) {
    alert('Доступ запрещен, неверный логин!');
} else {
    const adminPasswordRequest = prompt('Input admin password');
    
    if (!adminPasswordRequest) {
        alert('Отменено пользователем!');
    } else if (adminPasswordRequest !== adminPassword) {
        alert('Доступ запрещен, неверный пароль!');
    } else {
        alert('Добро пожаловать!');
    }
}