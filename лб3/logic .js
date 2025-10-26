const btn = document.getElementById('BG_Change');

let DarkMode = false;


function changeTheme(){

  const allElements = document.querySelectorAll('body, body *:not(.progress-bar):not(.progress):not(.NoBG):not(.form-check-input)'); //experimental selector
  // const accordionButtons = document.querySelectorAll('.accordion-button');

  DarkMode = !DarkMode;

  document.body.classList.toggle('dark-mode', DarkMode);  //функція tоggle може прибирати та встановлювати в залежності від булевого елемента   

  if (DarkMode) {
    // document.body.classList.remove('bg-light');
    // document.body.classList.add('bg-dark');
    allElements.forEach(el => {
      el.classList.remove('bg-light', 'text-dark');
      el.classList.add('bg-dark', 'text-light');
    });
  } else {
    document.body.classList.remove('bg-dark');
    document.body.classList.add('bg-light');
    allElements.forEach(el => {
      el.classList.add('bg-light', 'text-dark');
      el.classList.remove('bg-dark', 'text-light');
    });
  }
}

btn.addEventListener('click',changeTheme);
changeTheme();



(function () {
  const checkboxes = () => Array.from(document.querySelectorAll('.progress-checkbox'));  // selector for all elements with class progress-checkbox
  const progressBar = document.getElementById('tasksProgress');
  const progressPct = document.getElementById('progressPercent');

  function updateProgress() {
    const boxes = checkboxes();
    const total = boxes.length || 1;
    const checked = boxes.filter(cb => cb.checked).length;
    const percent = Math.round((checked / total) * 100);

    progressBar.style.width = percent + '%';
    progressBar.setAttribute('aria-valuenow', percent);
    progressPct.textContent = percent + '%';

    progressBar.classList.remove('bg-danger', 'bg-warning', 'bg-success');
    if (percent < 21) {
      progressBar.classList.add('bg-danger');
    } else if (percent < 81) {
      progressBar.classList.add('bg-warning');
    } else {
      progressBar.classList.add('bg-success');
    }
  }

  function attachListeners() {
    checkboxes().forEach(cb => {
      cb.removeEventListener('change', updateProgress);
      cb.addEventListener('change', updateProgress);
    });
  }



  attachListeners();
  restoreState();
  updateProgress();
})();

