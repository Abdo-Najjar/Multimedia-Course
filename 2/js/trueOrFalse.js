

//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function() {

var selectedOption = null;

//vue instence
new Vue({
    

    //select scope
    el:'#app',

    //data section
    data() {
        return {
            audioPath : "audio/2.mp3" , 
            
            //wrong answer
            option1 : 'صح',

            //correct answer
            option2 : 'خطأ'

        }
    },
    //computed property section
    computed: {

       

    //methods section
    },methods: {
        
        //method execute after submit answer
        submitAnswer : function(){

            //validation
           if(selectedOption == null){

            Swal.fire({
                type: 'error',
                title: 'خطأ',
                text: 'الرجاء اختيار واحد من الخيارات',
              });
            return;
           }

            //increase questionNo by one in sessionStorage

          //get questionNo from sessionStorage
          let qn = window.sessionStorage.getItem("questionNo");
          
          //increase qn variable by one
          qn = parseInt(qn) + 1;
          
          //set questionNo in sessionStorage
          window.sessionStorage.setItem("questionNo" , qn);


           if(selectedOption == this.option1){
              //select errors from sessionStorage
              let errors = window.sessionStorage.getItem("errors");
            
              //increase errors by one 
              errors = parseInt(errors) + 1;
              
              //set errors to new value
              window.sessionStorage.setItem("errors" , errors);
  
              //add flag 
              qn = qn -1;
              window.sessionStorage.setItem( "2" , 0);
              
              
            
              //go to false.html page
              window.location.href = "false.html";
  
              return;
            }
  
            
              window.sessionStorage.setItem( "2" , 1);
  
            // if answer is true then go to true answer page
              window.location.href = "true.html";
        },


        //rander Page
        randerPage:function(){

            //select content section
          let contnet =  document.querySelector("#content");
          
          //put content section
          contnet.innerHTML = "بدأت الوسائط المتعددة في الظهور على شكل أفلام صامتة";

          //select first option 
          let option1 = document.querySelector("#option1");
            
            //put option1 content
            option1.innerHTML = this.option1;

          //select second option
          let option2 = document.querySelector("#option2");
            
            //put option2 content
            option2.innerHTML = this.option2;

        },
        //return audio of question object
        questionContentAudioObject : function(){
            return new Audio(this.audioPath);
        }

    },mounted() {


      //add listeners to all options
      for(let i = 1 ; i <=4 ; i ++){

        //select div  that has options
        let option =  document.querySelector('.answer'+i);

        //check if the div is exits
          if(option != null){
              //add event to every div option
            option.addEventListener('click' , function(){

              //set selecedOption
              selectedOption =this.childNodes[1].innerHTML;
             });
          }

      }//end for loop



        //select sound image
      let soundImage = document.querySelector("#soundImage");

      //return audio object
      var audio = this.questionContentAudioObject();

      //play audio object 
      audio.play();

      //add event to sound image 
      soundImage.addEventListener('click' , function(){
            //toggled audio 
          if (audio.duration > 0 && !audio.paused) {

            //Its playing...do your job
            audio.pause();
          } else {

            //Not playing...maybe paused, stopped or never played.
            audio.play();
          }
        
     });//end add listener
        
    },created() {
        
        //select question number
        let qn =window.sessionStorage.getItem("questionNo");

        //select times
        let times =  window.sessionStorage.getItem("times");

     
            
        //validation for sessionStorage
        if(qn == null || qn == "" || qn == undefined ||times == null || times == undefined || times == ""){

            //go to index.html page
            location.href = "index.html";
        }

          //go to true or false question because it's the second question
          if(qn ==1){

            //run action => go to trueOrFalse html page
            location.href = "dragdrop.html";

            //exit the method
            return;
        }

        //go to drag drop question because it's the third question 
        if(qn ==3){

            //run action => go to trueOrFalse html page
            location.href = "dragdrop2.html";

            //exit the method
            return;
        }

  
        //go to review page if true
        if(qn >=4){

          window.location.href = "review.html";

        }


        this.randerPage();


      },
    })
});
