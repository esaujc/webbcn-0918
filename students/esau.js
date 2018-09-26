'use strict'
function main(){

  var buttonS1 = document.querySelector('button.hiddeS1');
  var buttonS2 = document.querySelector('button.hiddeS2');
  var sectionS2 = document.querySelector('.experiments');
  var sectionS1 = document.querySelector('.perfil');



  function handleClickS1(e){
    //e.classList.toggle('hidden');
    sectionS1.classList.toggle('hidden');
    if (sectionS1.classList.contains('hidden')){
      e.currentTarget.innerText = 'Show Perfil';
    }else{
      e.currentTarget.innerText = 'Hide Perfil';
    }
  }
  
  function handleClickS2(e){
    //e.classList.toggle('hidden');
    sectionS2.classList.toggle('hidden');
    if (sectionS2.classList.contains('hidden')){
      e.currentTarget.innerText = 'Show Experiments';
    }else{
      e.currentTarget.innerText = ' Hide Experiments';
    }

  }

  buttonS1.addEventListener('click',handleClickS1);
  buttonS2.addEventListener('click',handleClickS2);

// Search Part
  
function findStudents(searchTerm){
  var results = [];
  if (searchTerm){
    results = students.filter(function(student){
    var studentName = student.name.toLowerCase();
      if (studentName.indexOf(searchTerm) !== -1){
        return true;
      }
    })
  }
   return results;
}

function displayResults(results){
  searchResultsElement = document.querySelector('.search-result');
  searchResultsElement.innerHTML = '';
  var searchResultsListElement = document.createElement('ul');

  results.forEach(function(result){
    var resultLink = document.createElement('a');
    resultLink.innerText = result.name;
    resultLink.setAttribute('href','../'+result.url);

    var resultListItem = document.createElement('li');
    resultListItem.appendChild(resultLink);

    searchResultsListElement.appendChild(resultListItem);
  })
  searchResultsElement.appendChild(searchResultsListElement);

}



function handleKeyUp(){

  var searchTerm = input.value.toLowerCase();
  var results = findStudents(searchTerm);
 
  displayResults(results);
  
  

}
   

var input = document.querySelector('.input-student input');
input.addEventListener('keyup', handleKeyUp);
var searchResultsElement ='';

// Esto es para que al pulsar Esc, elimine la lista y mantenga el texto del input
// Al ponerlo fuera, controla escape desde cualquier parte.
document.body.addEventListener('keyup',function(event){
  if (event.key === 'Escape'){
    searchResultsElement.innerHTML = '';
    return;
  }
});

document.body.addEventListener('click',function(event){
 // console.log(event);
//  if (event.target !== input){ // Esto hace que cuando llegue el click propagado del input, no lo tenga en cuenta
  //if (event.key === 'click'){
//    searchResultsElement.innerHTML = ''; //Esta línea da error ahora...
    return;
  //}
// }
});

input.addEventListener('click',function(event){
  event.stopPropagation();
})


// AQUI LA PARTE DEL TIEMPO
var divInterval = document.querySelector('.setInterval');

var buttonInit = document.querySelector('.initInterval');
buttonInit.addEventListener('click',handleClickInit);
var divID = 0;

function handleClickInit(){
buttonInit.setAttribute("disabled", "disabled");
buttonStopInterval.removeAttribute("disabled");
buttonStopInterval.hidden = false;

divInterval.innerText = '';
var timeLeft = 5;

divID = setInterval(function(){
  divInterval.innerText = timeLeft;
  
  if(timeLeft <= 0){
    clearInterval(divID);
    divInterval.innerText = 'BOOOOMM!!!';
    buttonInit.removeAttribute("disabled");
    buttonStopInterval.setAttribute("disabled", "disabled");
    buttonStopInterval.hidden = true;

  }
  timeLeft--;
},1000)

//console.log(divID);

return divID;
}

// var buttonRandom = 1;
// buttonRandom = Math.round(Math.random())*(2-1)+1;
// console.log("Random: " + buttonRandom);
// var clasePrueba = '.stopInterval'+buttonRandom;
// var buttonStopInterval = document.querySelector('.stopInterval'+ buttonRandom);

var buttonStopInterval = document.querySelector('.stopInterval1');
buttonStopInterval.addEventListener('click',handleStopInterval);
buttonStopInterval.setAttribute("disabled", "disabled");
buttonStopInterval.hidden = true;

function handleStopInterval(){
if (divID){
  clearInterval(divID);
  buttonInit.removeAttribute("disabled");
  buttonStopInterval.setAttribute("disabled", "disabled");
  buttonStopInterval.hidden = true;
  divInterval.innerText = '';
  
}
console.log("Paró");

}





}

window.addEventListener('load',main);