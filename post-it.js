var Board = function( selector ) {
  // Aqui denerá ir el código que tenga que ver con tu tablero 
  
  // Utiliza esta sintaxis para referirte al selector que representa al tablero.
  // De esta manera no dependerás tanto de tu HTML.  
  var $elem = $( selector );
  
  function initialize() {
    // Que debe de pasar cuando se crea un nuevo tablero?
      $elem.dblclick(function(event){
      post_it = new PostIt(event.pageX, event.pageY);
      $elem.append(post_it.$elem);
    });

      $elem.on('click', '.close', function(){
      $(this).closest('.post-it').remove();
    });
  };

  initialize();
};

var PostIt = function(x,y) {
  var self = this;
  function initialize(){
    self.$elem = $('.post-it').first().clone();
    self.style(x,y);
    self.draggable();
  };
  initialize();
  // Aquí va el código relacionado con un post-it
};

PostIt.prototype.style = function(x,y) {
  this.$elem.css({
      'left' : x,'top'  : y, "display": "block"
    });
};

PostIt.prototype.draggable = function() {
  this.$elem.draggable({
      handle: '.header'
  });
};


$(function() {
  // Esta es la fucnión que correrá cuando este listo el DOM 
  new Board('#board');

});



