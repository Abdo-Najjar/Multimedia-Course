

//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function() {

    

   

new Vue ({
    //select scope section
    el:"#app",

    //data section
    data() {
        return {

            //first question content
            firstQuestionContent:  questions[0],

            //second question content
            secondQuestionContent: questions[1],

            //third question content
            thirdQuestionContent:   questions[2],

            //number errors
            errors :window.sessionStorage.getItem("errors"),

            //Number of questions 
            numberOfQuestion : questions.length,

            //result first question
            resultQuesion1 :window.sessionStorage.getItem("1"),

            //result second question
            resultQuesion2 :window.sessionStorage.getItem("2"),

            //result third question
            resultQuesion3 : window.sessionStorage.getItem("3"),

        }
    },
    
    //computed proparty section
    computed: {
        //count wrong answers 
        wrongAnswers: function(){
            return this.errors;
        },
        //count correct answers
        correctAnswers : function(){

            return this.numberOfQuestion - this.errors;
        },
        //Button contnet 
        buttonView : function () {
                
            let errors = window.sessionStorage.getItem("errors");
            let times =  window.sessionStorage.getItem("times");

           if(errors!=0 &&times<3){
            return "عودة للأسئلة"; 
         }
        return "عرض الإجابات الصحيحة";
        }
    },
    //methods section
    methods: {
        
        //button method 
        nextStep : function(){
      
            let errors = window.sessionStorage.getItem("errors");
            let times =  window.sessionStorage.getItem("times");

           if(errors!=0 &&times<3){
                //set errors to 0 
                 window.sessionStorage.setItem("errors" , 0);
                //set question number to 1.
                window.sessionStorage.setItem("questionNo" , 1);

                 location.href = "dragdrop.html";
                 return;
                }
             location.href = "viewAnswer.html";
        }
    },created() {

        let check1 =window.sessionStorage.getItem("1");
        let check2 =window.sessionStorage.getItem("2");
        let check3 =window.sessionStorage.getItem("3");
          
            if(check1 == null || check2 == null ||check3 == null ){

                location.href ="index.html";

            }


    },

    });

});
