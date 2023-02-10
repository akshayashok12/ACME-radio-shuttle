const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.add('active');
  });
});
const secbuttons = document.querySelectorAll('.btnsec');

secbuttons.forEach(button => {
  button.addEventListener('click', function() {
    secbuttons.forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.add('active');
  });
});