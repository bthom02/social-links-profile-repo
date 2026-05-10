const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
const themeToggleBtnEl = document.querySelector(".theme-toggle-btn");
let isDarkTheme = document.body.getAttribute("data-theme") === "dark";

if (window.matchMedia && themeQuery.matches) {
    document.body.setAttribute("data-theme", "dark");
    themeToggleBtnEl && (themeToggleBtnEl.textContent = 'Light Mode');
    themeToggleBtnEl?.setAttribute('aria-pressed', 'true');
}
else {
    document.body.setAttribute("data-theme", "light");
    themeToggleBtnEl && (themeToggleBtnEl.textContent = 'Dark Mode');
    themeToggleBtnEl?.setAttribute('aria-pressed', 'false');
}

themeToggleBtnEl?.addEventListener("click", () => {
    changePageTheme();
});

themeQuery?.addEventListener('change', changePageTheme);

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
        themeToggleBtnEl && (themeToggleBtnEl.textContent = 'Light Mode');
        themeToggleBtnEl?.setAttribute('aria-pressed', 'true');
    }
    else {
        themeToggleBtnEl && (themeToggleBtnEl.textContent = 'Dark Mode');
        themeToggleBtnEl?.setAttribute('aria-pressed', 'false');
    }
}