const footerCallbackForm = document.querySelector('.registration-form');
const orderCallbackForm = document.querySelector('.order-form');
footerCallbackForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(footerCallbackForm);
  sendDateFromCallBackForm(formData);
});
orderCallbackForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(orderCallbackForm);
  sendDateFromCallBackForm(formData);
});

function sendDateFromCallBackForm(formData) {
  data = {
    user_name: formData.get('name'),
    user_phone: formData.get('phone'),
    user_comment: formData.get('comment'),
  };

  fetch('http://sampsoft.h1n.ru/hellEn.php', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(data),
  })
    .then(r => r.json())
    .then(console.log);
}
