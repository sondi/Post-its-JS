var Board = function( selector ) {
  // Aqui denerá ir el código que tenga que ver con tu tablero 
  
  // Utiliza esta sintaxis para referirte al selector que representa al tablero.
  // De esta manera no dependerás tanto de tu HTML.  
  var $elem = $( selector );
  
  function initialize() {
    // Que debe de pasar cuando se crea un nuevo tablero?
  };

  initialize();
};

var PostIt = function() {
  var self = this;
  function initialize(){
      self.element = $('.post-it').first()
    };
    initialize();
  // Aquí va el código relacionado con un post-it
};


$(function() {
  // Esta es la fucnión que correrá cuando este listo el DOM 
  new Board('#board');
  $('.post-it').draggable();
  $('#board').dblclick(function(x){
  console.log("click");
  post_it = new PostIt();
  (post_it.element).clone().appendTo($('#board')).css({
    'left' : x.pageX,'top'  : x.pageY
  });
  $('#board').on('click', '.close', function(){
    console.log(this);
    // $('.header').parent().remove();
  });
    $('.post-it').draggable({
     handle: '.header'
    });
  });
});
