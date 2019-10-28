
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Portfolio Section Handler
      var orientation = parseInt(window.orientation)

      function JSExists() {
        $(`.noJS`).fadeOut(225)
        return;
      }

      function changePage(p) {
        // p = Page Number

        // This is hardcoded to support 3 Pages
        function cp() {
          
          
          setTimeout(() => {
            $(`.p2`).fadeOut(225)
          }, 100)
          setTimeout(() => {
            $(`.p3`).fadeOut(225)
          }, 100)
          setTimeout(() => {
            $(`.p1`).fadeIn(250)
          }, 175)
          

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
          setTimeout(() => {
            $(`.p1`).fadeOut(225)
          }, 100)
          setTimeout(() => {
            $(`.p3`).fadeOut(225)
          }, 100)
          setTimeout(() => {
            $(`.p2`).fadeIn(250)
          }, 175)
          

          $('.selector-1').css({opacity: 0.1})
          $('.selector-2').css({opacity: 1.0})
          $('.selector-3').css({opacity: 0.1})

          return;
        }
        if(p >= 3) {
          setTimeout(() => {
            $(`.p1`).fadeOut(225)
          }, 100)
          setTimeout(() => {
            $(`.p2`).fadeOut(225)
          }, 100)
          setTimeout(() => {
            $(`.p3`).fadeIn(250)
          }, 175)
          

          $('.selector-1').css({opacity: 0.1})
          $('.selector-2').css({opacity: 0.1})
          $('.selector-3').css({opacity: 1.0})

          return;
        }
      }
// Contact Section Handler
      async function emailCopied(a) {
        if(a) {
          copyEmailBtn = document.getElementById("copyEmail")
          copyEmailBtn.classList.add("emailCopySuccessful")
          await sleep(650)
          copyEmailBtn.classList.remove("emailCopySuccessful")
        } else {
          copyEmailBtn = document.getElementById("copyEmail")
          copyEmailBtn.classList.add("emailCopyUnsuccessful")
          await sleep(650)
          copyEmailBtn.classList.remove("emailCopyUnsuccessful")
        }
        
      }
      function shareEmail() {

        if(navigator.share) {
          // If WebShare API supported
          try {
            navigator.share({
              text: "skylarmccauley864@gmail.com"
            })
            emailCopied(true)
          } catch (ex) {
            console.log(ex)
            emailCopied(false)
          }
          
        } else {
          try {
            Clipboard.copy('skylarmccauley864@gmail.com')
            emailCopied(true)
          } catch (ex) {
            console.log(ex)
            emailCopied(false)
          }
          
        }
      }
      function init() {
        JSExists()
      }

      window.onpageshow = init
      window.addEventListener("resize", init);

      window.Clipboard = (function(window, document, navigator) {
        var textArea,
            copy;
    
        function isOS() {
            return navigator.userAgent.match(/ipad|iphone/i);
        }
    
        function createTextArea(text) {
            textArea = document.createElement('textArea');
            textArea.value = text;
            document.body.appendChild(textArea);
        }
    
        function selectText() {
            var range,
                selection;
    
            if (isOS()) {
                range = document.createRange();
                range.selectNodeContents(textArea);
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                textArea.setSelectionRange(0, 999999);
            } else {
                textArea.select();
            }
        }
    
        function copyToClipboard() {        
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    
        copy = function(text) {
            createTextArea(text);
            selectText();
            copyToClipboard();
            
        };
    
        return {
            copy: copy
        };
    })(window, document, navigator);