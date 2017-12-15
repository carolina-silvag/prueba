$(document).ready(function(){

  $('.comentario').keydown(agregar);

  function agregar() {
      var agregarText = $('.comentario').val();
      
    }
});


function add(){
  /*tomo texto de textareaa*/
  var comments= document.getElementById('comment').value;
  /*limpealo del textarea*/
  document.getElementById('comment').value = '';
  /*el div en donde estan los comentario el html*/
  var newComments= document.createElement('div');
  var cont = document.getElementById('cont');
  var hora =moment().format('LT');

  var paragraph= document.createElement('p');
  var nodoText=document.createTextNode(comments);
  var nodoHour=document.createTextNode(hora);
  paragraph.appendChild(nodoText);
  /*agregar todos los huerfanos al padre(contenedor)*/
  newComments.appendChild(paragraph);
  newComments.appendChild(nodoHour);
  cont.appendChild(newComments);
}
