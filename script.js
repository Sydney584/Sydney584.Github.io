let h2 = document.createElement('h2')
h2.textContent = "This content added by JavaScript"
document.querySelector('body').appendChild(h2);

const input = document.getElementById('send email');

function clickAlert() {
  alert('Remeber to send me an Email');
}

input.addEventListener('click', clickAlert);
        