let emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit');
const error = document.getElementById('error');
const errorImg = document.getElementById('errorImg')
function validateEmail (emailInput) {
  const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(emailInput.value.match(mailFormat)){
    error.style.display = 'none';
    errorImg.style.display = 'none';
    emailInput.style.border = "1px solid var(--primary-desasturated-red)"
    emailInput.value = '';
    // return true;
  }else {
    emailInput.style.border = "2px solid var(--primary-soft-red)";
    error.style.display = 'block';
    errorImg.style.display = 'block';
    // return false;
  }
}

submitBtn.addEventListener('click',function(){
  // let value = validateEmail(emailInput);
  validateEmail(emailInput);
})