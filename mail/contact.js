$("#submit-form").submit((e) => {
  e.preventDefault();
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbznNyf8b48S8lv_3FlEMdd1IAs7i20Kry_uahAv23zufaPX6Jk/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Error");
    },
  });
});

