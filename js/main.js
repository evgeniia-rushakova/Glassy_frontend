var modalSearch = document.querySelector(".modal-search");
var searchLink = document.querySelector(".search-hover");
var loginLink = document.querySelector(".login-hover");
var modalLogin = document.querySelector(".modal-login");
var bucketLink = document.querySelector(".bucket-hover");
var modalBucket = document.querySelector(".modal-bucket");
var contactButton = document.querySelector(".contact-form-button");
var modalFeedback = document.querySelector(".modal-feedback");
var modalclose = document.querySelector(".modal-close");
var email = document.querySelector(".user-email");
var form = document.querySelector(".login-form");
var password = document.querySelector(".user-password");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


searchLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSearch.classList.add("modal-show-search");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalSearch.classList.contains("modal-show-search")) {
      modalSearch.classList.remove("modal-show-search");
      modalSearch.classList.remove("modal-error");
    }
  }
});

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.add("modal-show-login");
});
if (storage) {
  email.value = storage;
  password.focus();
} else {

  email.focus();
}
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove("modal-error");
  modalLogin.offsetWidth = modalLogin.offsetWidth;
  modalLogin.classList.add("modal-error");
  modalLogin.classList.remove("modal-error");

  if (!email.value || !password.value) {
    evt.preventDefault();
    console.log("Нужно ввести почту и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalLogin.classList.contains("modal-show-login")) {
      modalLogin.classList.remove("modal-show-login");
      modalLogin.classList.remove("modal-error");
    }
  }
});
bucketLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBucket.classList.add("modal-show-bucket");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalBucket.classList.contains("modal-show-bucket")) {
      modalBucket.classList.remove("modal-show-bucket");
      modalBucket.classList.remove("modal-show-bucket");
    }
  }
});

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show-feedback");
});
modalclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show-feedback");
});
