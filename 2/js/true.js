

//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function() {

new Vue({

//select scope
el:'#app',

data() {
    return {
        
        trueAudioPath:"audio/true.mp3",

        questionNumber :window.sessionStorage.getItem("questionNo")

    }
},

//computed section
computed: {
    buttonView : function(){
        if(this.questionNumber >= 4){
            return "عرض النتائج";

        }
        return "السؤال التالي";
    },
   



//methods section
},methods: {

    //button action
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

    loadAudio:function(){
        if(this.questionNumber >= 4){
            var times = window.sessionStorage.getItem("times")
            times = parseInt(times) + 1;
            window.sessionStorage.setItem("times" ,times );
        }

        let audio = new Audio(this.trueAudioPath);
        audio.play();
    }
},

    //after load the page
    created() {


        //load audio of true page
        this.loadAudio();

    },

    });

});
