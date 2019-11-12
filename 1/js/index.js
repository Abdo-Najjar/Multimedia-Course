
//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function() {

    new Vue({
    
      //set the scope of the application
      el:"#app",

      //data section
      data(){

        return{
        //question path page
        questionStartPath:"questions.html",
        //exercise audio path
        audioIntroPath :"audio/index.mp3" ,
        //exercise info audio path
        trainingInfoPath : "audio/trainingInfo.mp3"
        }
        
      },
      //methods
      methods: {

          //boot function 
          boot : function(){
              
        //exercise audio object
        let audioIntro = new Audio(this.audioIntroPath);
        //exercise info audio object
        let trainingInfo = new Audio(this.trainingInfoPath);

        //run exercise audio object
          let Intopromise =   audioIntro.play();  


          if (Intopromise !== undefined) {
            Intopromise.then( e=> {
              console.log('promise rejected');

            }).catch(error => {
              audioIntro.play();
            });
          }

        //run exercise info audio object after 'audioIntro' finish
          setTimeout( e =>{
            trainingInfo.play()
          } , 15000);

        },// end if boot function

        //start function
        start : function(){
          //start exercises
          window.location.href = this.questionStartPath;
        }

      },
      //code will executed after the page is ready
      created() {
        
      //set question number to 1.
      window.sessionStorage.setItem("questionNo" , 1);

      //set errors to 0 
      window.sessionStorage.setItem("errors" , 0);
    
      //times 
      window.sessionStorage.setItem("times" , 0);

        //call the boot method
        this.boot();

        
      }
  });
  
});

 