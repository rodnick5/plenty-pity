window.onload = () => {
  document.body.classList.remove('preload');
}

let btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener('click', function checkForm(){
    let sendText = document.querySelector('.succes-send');
    let blockInputs = document.querySelector('.inputs-wrap');
    inputs = document.querySelectorAll('.inputs');
    inputs.forEach(item => {
        if(item.value == null || item.value == ''){
           item.nextElementSibling.classList.add('active-require');
        } else {
            btnSubmit.textContent = 'Sending';
            setTimeout(() => {
                blockInputs.classList.add('hidden-block');
                sendText.classList.add('active-require');
            }, 1000);
            

        }
    })

});

let animItems = document.querySelectorAll('.anim-item');
if (animItems.length > 0) {
  window.addEventListener('scroll' , animOnScroll);
  function animOnScroll(){
    for(var animItem of animItems){
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 4;
      var animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active-item');
      }
    }
  }
  function offset(elem){
    let rect = elem.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop}
  }
  animOnScroll();
}

let burgerIcon = document.querySelector('.burger-icon');
let closeIcon = document.querySelector('.close-icon');
let arr = [burgerIcon , closeIcon];
arr.forEach(item => {
    item.addEventListener('click', () => {
    let menuBlock = document.querySelector('.menu-block');
    menuBlock.classList.toggle('_active-menu');
    burgerIcon.classList.toggle('hidden-block');
    closeIcon.classList.toggle('hidden-block');
    })
})