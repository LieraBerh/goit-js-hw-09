const formData = {
  email: '',
  message: '',
};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', handleFormInput);

function handleFormInput(event) {
  formData.email = formEl.elements.email.value;
  formData.message = formEl.elements.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const storedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (storedFormData) {
  formData.email = storedFormData.email;
  formData.message = storedFormData.message;
  formEl.elements.email.value = formData.email;
  formEl.elements.message.value = formData.message;
}

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  formEl.reset();
}
