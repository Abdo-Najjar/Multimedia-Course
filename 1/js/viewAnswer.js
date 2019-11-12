

//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function() {


new Vue({
    el:"#table",
    
    //data section
    data() {
        return {
            //all questions
            questions:questions
        
        }
    },
     created() {
        
      //set question number to 1.
      window.sessionStorage.clear();

     
    },
    
    });
});
