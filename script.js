    function myAccFunc() {
      var x = document.getElementById("standard");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-green";
      } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
          x.previousElementSibling.className.replace(" w3-green", "");
      }
    }

    function myAccFunc2() {
      var x = document.getElementById("etc");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-green";
      } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
          x.previousElementSibling.className.replace(" w3-green", "");
      }
    }

    function myAccFunc3() {
      var x = document.getElementById("relsite");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-green";
      } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
          x.previousElementSibling.className.replace(" w3-green", "");
      }
    }

    function w3_open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
    }

    function w3_close() {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
    }

    //Get the button
    var mybutton = document.getElementById("TopBtn");

    // When the user scrolls down 30px from the top of the document, show the button
    window.onscroll = function() {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } 
