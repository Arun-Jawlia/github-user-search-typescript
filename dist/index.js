"use strict";
const getUsername = document.getElementById('#user');
const formSubmit = document.querySelector('#form');
// const formSubmit : HTMLFormElement | null = document.querySelector('.form') as HTMLFormElement
const Url = 'https://api.github.com/users';
const main_container = document.querySelector('.main-container');
// resuable function
async function myCustumFunction(url, option) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Network error: ${res.status}}`);
    }
    const data = await res.json();
    // console.log(data)
    return data;
}
// Function call 
const fetchUserData = (url) => {
    myCustumFunction(url, {});
};
fetchUserData(Url);
