(function() {
 
    window.inputNumber = function(el) {
  
      var min = el.attr('min') || false;
      var max = el.attr('max') || false;
  
      var els = {};
  
      els.dec = el.prev();
      els.inc = el.next();
  
      el.each(function() {
        init($(this));
      });
  
      function init(el) {
  
        els.dec.on('click', decrement);
        els.inc.on('click', increment);
  
        function decrement() {
          var value = el[0].value;
          value--;
          if(!min || value >= min) {
            el[0].value = value;
          }
        }
  
        function increment() {
          var value = el[0].value;
          value++;
          if(!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    }
  })();
  
  inputNumber($('.input-number'));


  $(document).ready(function(){
    //the trigger on hover when cursor directed to this class
      $(".core-menu li").hover(
      function(){
        //i used the parent ul to show submenu
          $(this).children('ul').slideDown('750');
      }, 
        //when the cursor away 
      function () {
          $('ul', this).slideUp('750');
      });
    //this feature only show on 750px device width
      $(".hamburger-menu").click(function(){
        $(".burger-1, .burger-2, .burger-3").toggleClass("open");
          $(".core-menu").slideToggle("750");
      });
  });


  (function($) {
    $(function() {
      $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
      $('#nav-toggle').click(function() {
    $('nav ul').toggle();
  });
    });
  })(jQuery);