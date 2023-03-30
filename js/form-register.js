function openForm(evt, formName) {
  var i, tabcontent, tablink;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].classList.remove("active");
  }
  document.getElementById(formName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

document.addEventListener("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(event.target);
  var data = {};
  for (var [key, value] of formData.entries()) {
    data[key] = value;
  }
  console.log(data);
  event.target.reset();
});
