

function showSignUp(){
  document.getElementsByClassName('login-form')[0].style.display = "none";
  document.getElementsByClassName('registration-form')[0].style.display = "block";
}

document.getElementById('btn-one-way').addEventListener('click', function(){
  let departDate = document.getElementsByClassName('depart-date')[0];
  departDate.style.width = "100%";
  let returnDate = document.getElementsByClassName('return-date')[0];
  returnDate.style.display = "none";

});
document.getElementById('btn-round-trip').addEventListener('click', function(){
  let departDate = document.getElementsByClassName('depart-date')[0];
  departDate.style.width = "47%";
  let returnDate = document.getElementsByClassName('return-date')[0];
  returnDate.style.display = "inline-block";

});
