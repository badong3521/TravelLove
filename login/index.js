const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const check = $(".showPassword");
const login = {
  handleCheckValue: function () {},
  showPassword: function () {
    check.onclick = function () {
      if ($("#password").type === "password") {
        $("#password").type = "text";
      } else {
        $("#password").type = "password";
      }
    };
  },

  start: function () {
    this.handleCheckValue();
    this.showPassword();
  },
};

login.start();
