

//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function() {

new Vue({

    //select scope
    el:'#app',
    
    data() {
        return {
        
            falseAudioPath: "audio/false.mp3",
            
            showAnswersAudioPath :"audio/viewAnswers.mp3" ,

            questionNumber :window.sessionStorage.getItem("questionNo")
        }
    },
    
    //computed section
    computed: {
        //button content
        buttonView : function(){
            if(this.questionNumber >= 4){
                return "عرض النتائج";

            }
            return "السؤال التالي";
        }
    
    
    //methods section
    },methods: {
        //button acction
        nextStep :function(){

                //go to true or false question because it's the second question
                if(this.questionNumber ==2){

                    //run action => go to trueOrFalse html page
                    location.href = "trueOrFalse.html";

                    //exit the method
                    return;
                }

                //go to drag drop question because it's the third question 
                if(this.questionNumber ==3){

                    //run action => go to trueOrFalse html page
                    location.href = "dragdrop2.html";

                    //exit the method
                    return;
                }

                //default action 
                location.href = "review.html";

        },
        //load audio method
        loadAudio:function(){
        
            let path = this.falseAudioPath;
            if(this.questionNumber >= 4){
                path = this.showAnswersAudioPath;

                let times = window.sessionStorage.getItem("times")
                times = parseInt(times) + 1;
                window.sessionStorage.setItem("times" ,times );
            }
            
            const audio = new Audio(path);

            audio.play();

        }
    },

    //after load the page
    created() {
                
        //fire load loadAudio method
        this.loadAudio();

                //select question number
        let qn =window.sessionStorage.getItem("questionNo");

        //select times
        let times =  window.sessionStorage.getItem("times");

       
        //validation for sessionStorage
        if(qn == null || qn == "" || qn == undefined ||times == null || times == undefined || times == ""){

        //go to index.html page
        location.href = "index.html";
        }

       
    },
            
    });
    
});
    