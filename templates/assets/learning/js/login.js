var formFields = document.querySelectorAll('input');
// Form validation
var loginForm = document.querySelector('#signIn');
var emailEl = document.querySelector('#email');
var passwordEl = document.querySelector('#password');
var emailInput = document.getElementById('email');
var emailError = document.querySelector('.error-email');
var genericError = document.querySelector('.generic-error');

var validateEmail = function validateEmail() {
  var valid = false;
  var email = emailEl.value.trim();
  if (!isRequired(email) || (!isEmailValid(email) && email.length > 0)) {
    emailError.classList.add('show');
  } else {
    showSuccess(emailEl, '');
    valid = true;
  }
  return valid;
};

var validatePassword = function validatePassword() {
  var valid = false;
  var password = passwordEl.value.trim();
  if (!isRequired(password)) {
    showError(passwordEl, 'Password cannot be blank.');
  } else {
    showSuccess(passwordEl, '');
    valid = true;
  }
  return valid;
};

var isEmailValid = function isEmailValid(email) {
  var reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};

var isPasswordValidated = function isPasswordValidated(password) {
  var re = new RegExp(
    /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()/])[a-zA-Z0-9!@#$%^&*()/]{8,}$/
  );
  return re.test(password);
};

var isRequired = function isRequired(value) {
  return value === '' ? false : true;
};

var showError = function showError(input, message) {
  var formField = input.parentElement;
  formField.classList.add('error');

  var error = formField.querySelector('small');
  var input = formField.querySelector('input');

  error.textContent = message;

  if (formField.classList.contains('error')) {
    error.classList.add('error-icon');
    input.classList.add('error-input');
  }

  const fragment = document.createDocumentFragment();
  const li = fragment.appendChild(document.createElement('li'));
  li.innerHTML = message;
};

var showSuccess = function showSuccess(input) {
  var formField = input.parentElement;
  formField.classList.remove('error');
  var error = formField.querySelector('small');
  var input = formField.querySelector('input');

  error.textContent = '';
  error.classList.remove('error-icon');
  input.classList.remove('error-input');
};

if (loginForm) {
  console.log('BEFORE PREVENT DEFAULT');
  e.preventDefault();
  console.log('AFTER PREVENT DEFAULT');

  if (emailInput.value === '') {
    emailError.classList.add('show'); // add 'show' class to error message
    genericError.classList.add('show'); // add 'show' class to error message
  } else if (emailInput.value !== '') {
    emailError.classList.remove('show'); // remove 'show' class from error message
    genericError.classList.remove('show'); // remove 'show' class to error message
  }

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var isEmailValid = validateEmail(),
      isPasswordValid = validatePassword();
    var isFormValid = isEmailValid && isPasswordValid;

    if (isFormValid) {
      document.getElementById('signIn').submit();
    }
  });
}

var icon = document.querySelector('.visibility-icon');
var inputPass = document.querySelector('#password');

icon.addEventListener('click', function () {
  visibilityIcon();
});

for (i = 0; i < iconBtn.length; i++) {
  iconBtn[i].addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      visibilityIcon();
    }
  });
}
function visibilityIcon() {
  if (inputPass.type === 'password') {
    icon.src = 'assets/learning/img/visibility_on.svg';
    icon.alt = 'show password';
    inputPass.type = 'text';
  } else {
    icon.src = 'assets/learning/img/visibility_off.svg';
    icon.alt = 'hide password';
    inputPass.type = 'password';
  }
}
