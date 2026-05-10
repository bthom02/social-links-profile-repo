const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
const themeToggleBtnEl = document.getElementById("theme-toggle-btn");
let isDarkTheme = true;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.setAttribute("data-theme", "dark");
}
else {
    document.body.setAttribute("data-theme", "light");
}

if(themeToggleBtnEl !== null) {
    themeToggleBtnEl.addEventListener("click", () => {
        changePageTheme();
    })
}

if(themeQuery !== null) {
    themeQuery.addEventListener('change', changePageTheme);
}

function changePageTheme() {
    const currentTheme = document.body.getAttribute("data-theme");

    if (currentTheme === "dark") {
        document.body.setAttribute('data-theme', 'light');
        isDarkTheme = false;
    } else {
        document.body.setAttribute('data-theme', 'dark');
        isDarkTheme = true;
    }

    if(isDarkTheme === true) {
        themeToggleBtnEl.textContent = "Light Mode";
    }
    else {
        themeToggleBtnEl.textContent = "Dark Mode";
    }
}