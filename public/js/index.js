console.log('hello');

const btn = document.querySelector('#enter-admin');
const modal = document.querySelector('.popup-consultation');
const close = document.querySelector('.popup-consultation .popup-close');
const mainForm = document.querySelector('.main-form');

btn.addEventListener('click', (e) => {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
  document.body.style.marginRight = '0px';
});

document.login.addEventListener('submit', async (event) => {
  event.preventDefault();
  const delDiv = document.querySelectorAll('.auth');
  delDiv.forEach((el) => {
    el.remove();
  });
  const {
    login: { value: login },
    password: { value: password },
    action,
    method,
  } = event.target;
  let jsonResponse;
  try {
    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password,
      }),
    });
    jsonResponse = await response.json();
  } catch (e) {
    console.error(e);
  }
  if (jsonResponse && jsonResponse.authenticated) {
    window.location = 'http://localhost:3000/admin';
  } else {
    const newDiv = document.createElement('div');
    newDiv.classList.add('auth');
    newDiv.style.color = 'red';
    newDiv.innerText = 'Введите правильный пароль или логин!';
    mainForm.appendChild(newDiv);
  }
});
