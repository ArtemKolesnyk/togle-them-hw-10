const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
checkboxRef.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
  if (e.target.checked) {
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
onSaveTheme();
function onSaveTheme() {
  const saveTheme = localStorage.getItem('theme');
  if (saveTheme === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    checkboxRef.checked = true;
  }
}
