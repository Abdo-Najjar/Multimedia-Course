

//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function() {

new Vue({

//select scope
el:'#app',

data() {
    return {
        
        trueAudioPath:"audio/true.mp3",

         //number of questions
         numberOfQuestions: questions.length

    }
},

//computed section
computed: {
    buttonView : function(){
        if( window.sessionStorage.getItem('questionNo')>this.numberOfQuestions){
            return "عرض النتائج";
        }

        return "السؤال التالي";
    },
   



//methods section
},methods: {

    //button action
    nextStep :function(){
     location.href = "questions.html";
    },

    loadAudio:function(){
        if( window.sessionStorage.getItem('questionNo')>this.numberOfQuestions){
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
