const colorInput = document.querySelector('#primary-color');
const toggle = document.querySelector('.customizer-toggle');
const panel = document.querySelector('.customizer-panel');

colorInput.addEventListener('input', (event) => {
  document.documentElement.style.setProperty('--primary', event.target.value);
});

toggle.addEventListener('click', () => {
  const isOpen = panel.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('[contenteditable="true"]').forEach((element) => {
  element.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      element.blur();
    }
  });
});
