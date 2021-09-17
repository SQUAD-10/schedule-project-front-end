const html = document.querySelector('html');
const switchDarkMode = document.querySelector('#modeSwitch');
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  html.classList.add('dark-mode');
  switchDarkMode.src = "/images/sun.svg";
}

switchDarkMode.addEventListener("click", () => {
  const html = document.querySelector('html');
  html.classList.toggle('dark-mode');

  let theme = "light";
  switchDarkMode.src = "/images/moon.svg";
  if (html.classList.contains('dark-mode')) {
    theme = "dark";
    switchDarkMode.src = "";
    switchDarkMode.src = "/images/sun.svg";
  }
  localStorage.setItem("theme", theme);
});
