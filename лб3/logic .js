const btn = document.getElementById('BG_Change');

let DarkMode = true;
btn.addEventListener('click', () => {
    DarkMode = !DarkMode;

    if (DarkMode) {
      document.body.classList.remove('bg-light');
      document.body.classList.add('bg-dark');



      btn.textContent = 'Light mode';
    } else {
      document.body.classList.remove('bg-dark');
      document.body.classList.add('bg-light');

      btn.textContent = 'Dark mode';
    }
});
