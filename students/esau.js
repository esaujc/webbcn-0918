var buttonS1 = document.querySelector('button.hiddeS1');
var buttonS2 = document.querySelector('button.hiddeS2');
var sectionS2 = document.querySelector('section.experiments');
var sectionS1 = document.querySelector('section.perfil');



function handleClickS1(e){
  //e.classList.toggle('hidden');
  sectionS1.classList.toggle('hidden');
}

function handleClickS2(e){
  //e.classList.toggle('hidden');
  sectionS2.classList.toggle('hidden');
}

buttonS1.addEventListener('click',handleClickS1);
buttonS2.addEventListener('click',handleClickS2);