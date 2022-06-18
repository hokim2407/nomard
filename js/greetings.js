const loginForm = document.querySelector("form#login-form");
const loginName = document.querySelector("input[name='login-name']");
const userName = document.querySelector("#name");
const mainContainer = document.querySelector("#main-section");

const HIDDEN = "hidden";
const USERNAME = "hidden";

const setUserName = (username) => {
    loginForm.classList.add(HIDDEN);
    mainContainer.classList.toggle(HIDDEN);

    let greeting = "Hello";
    const hour = new Date().getHours;
    if (hour < 5) greeting = "It's time to go to bad";
    else if (hour < 9) greeting = "Good morning";
    else if (hour < 17) greeting = "Good afternoon";
    else if (hour < 21) greeting = "Good evening";
    else greeting = "Good night";
    userName.textContent = `${greeting}, ${username}`;

    localStorage.setItem(USERNAME, username);
};

const submitUserName = (e) => {
    e.preventDefault();
    setUserName(loginName.value);
};

const preName = localStorage.getItem(USERNAME);
if (preName) {
    setUserName(preName);
} else {
    loginForm.classList.toggle(HIDDEN);
    loginForm.addEventListener("submit", submitUserName);
}
