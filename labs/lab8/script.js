function toggleTheme() {
    body = document.body;
    body.classList.toggle("dark-mode");
  }
toggleTheme()


buttonVariable= document.getElementById("toggleButton");
buttonVariable.onclick = toggleTheme;