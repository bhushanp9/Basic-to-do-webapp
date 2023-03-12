const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
});
