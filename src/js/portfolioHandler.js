      // New Portfolio Section
      var orientation = parseInt(window.orientation)

      function JSExists() {
        $(`.noJS`).fadeOut(250)
        return;
      }

      function changePage(p) {
        // p = Page Number

        // This is hardcoded to support 3 Pages
        function cp() {
          
          $(`.p2`).fadeOut(250)
          $(`.p3`).fadeOut(250)
          $(`.p1`).fadeIn(250)

          $('.selector-1').css({opacity: 1.0})
          $('.selector-2').css({opacity: 0.1})
          $('.selector-3').css({opacity: 0.1})
          return;
        }
        if(!p) {
          cp()
        }
        if(p.length < 1) return cp()
        p = parseInt(p)
        
        if(p <= 1) {
          cp()
          return;
        }
        if(p == 2) {
          $(`.p1`).fadeOut(250)
          $(`.p3`).fadeOut(250)
          $(`.p2`).fadeIn(250)

          $('.selector-1').css({opacity: 0.1})
          $('.selector-2').css({opacity: 1.0})
          $('.selector-3').css({opacity: 0.1})

          return;
        }
        if(p >= 3) {
          $(`.p1`).fadeOut(250)
          $(`.p2`).fadeOut(250)
          $(`.p3`).fadeIn(250)

          $('.selector-1').css({opacity: 0.1})
          $('.selector-2').css({opacity: 0.1})
          $('.selector-3').css({opacity: 1.0})

          return;
        }
      }


      function init() {
        JSExists()
      }

      window.onpageshow = init
      window.addEventListener("resize", init);