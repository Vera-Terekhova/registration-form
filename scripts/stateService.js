'use strict'

let users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];

//--- ? - работает как if  : - работает как else - тернарный (условный) оператор, в наших условиях при else записывается пустой массив  
//------запись в локал сторедж----------------
export function saveUser(userData) {

    let result = users.find(user => user.email == userData.email);
    
    if (!result) {
        users.push(userData);
        localStorage.users = JSON.stringify(users);
        return true;
    } else {
        return false;
    };
}

export function validateUsers(userData) {
    users = JSON.parse(localStorage.getItem('users'));

    let result = users.find(user => user.email == userData.email && user.password == userData.password);

    if (result) {
        return true;
    }

    return false;
}