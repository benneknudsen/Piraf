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


  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
  
      }
    });
  }
  
  
  
  
  
  $(document).ready(function () {
    $('#drawer-toggle').click(function () {
      $('#nav-icon1').toggleClass('open');
    });
  });
  
  
  $(document).ready(function () {
    $('#drawer-togglem').click(function () {
      $('#nav-icon1m').toggleClass('open');
    });
  });
  
  
  var dropdown1 = document.getElementsByClassName("dropdown-btn-m");
  var i;
  
  for (i = 0; i < dropdown1.length; i++) {
    dropdown1[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
  
  
  $(".rotate").click(function () {
    $(this).toggleClass("down");
  })
  
  
  $(document).ready(function () {
    $('.dropdown-btn-m').click(function () {
      $('.dropdown-container').toggleClass('up');
    });
  });
  
  
  
  $(document).ready(function () {
    $('.arrow').click(function () {
      $('.roter').toggleClass('ned');
    });
  });
  
  $(document).ready(function () {
    $('.arrow1').click(function () {
      $('.roter1').toggleClass('ned');
    });
  });

  $(document).ready(function () {
    $('.arrow2').click(function () {
      $('.roter2').toggleClass('ned');
    });
  });

  $(document).ready(function () {
    $('.arrow3').click(function () {
      $('.roter3').toggleClass('ned');
    });
  });
  
  $(document).ready(function () {
    $('.arrow4').click(function () {
      $('.roter4').toggleClass('ned');
    });
  });
  


  $("#nav-home").click(function() {
    window.location.href = 'index.html'
  });