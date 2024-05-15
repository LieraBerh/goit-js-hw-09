const formData = {
  email: '',
  message: '',
};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', handleFormInput);
