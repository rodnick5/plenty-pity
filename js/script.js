window.onload = () => {
  document.body.classList.remove('preload');
}

let btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener('click', function checkForm(){
    let sendText = document.querySelector('.succes-send');
    let blockInputs = document.querySelector('.inputs-wrap');
    let inputs = document.querySelectorAll('.inputs');
    let inputsValues = [];
    for(let key of inputs){
      inputsValues.push(key.value);
    }
    inputs.forEach(item => {  
        if(!item.value){
           item.nextElementSibling.classList.add('active-require');
        } 
        if(_.all(inputsValues)) {
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

let menuIcons = document.querySelectorAll('.menu-icon');
menuIcons.forEach(item => {
    item.addEventListener('click', () => {
    document.querySelector('.menu-block').classList.toggle('_active-menu');
    document.querySelector('.burger-icon').classList.toggle('hidden-block');
    document.querySelector('.close-icon').classList.toggle('hidden-block');
    })
})