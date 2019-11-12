

//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function() {

new Vue({

    //select scope
    el:'#app',
    
    data() {
        return {
        
            falseAudioPath: "audio/false.mp3",
            
            showAnswersAudioPath :"audio/viewAnswers.mp3" ,

        //number of questions
        numberOfQuestions: questions.length
        
        }
    },
    
    //computed section
    computed: {
        //button content
        buttonView : function(){
            if( window.sessionStorage.getItem('questionNo')>this.numberOfQuestions){
                return "عرض النتائج";

            }
            return "السؤال التالي";
        }
    
    
    //methods section
    },methods: {
        //button acction
        nextStep :function(){
                location.href = "questions.html";
        },
        //load audio method
        loadAudio:function(){
        
            let path = this.falseAudioPath;
            if( window.sessionStorage.getItem('questionNo')>this.numberOfQuestions){
                path = this.showAnswersAudioPath;

                var times = window.sessionStorage.getItem("times")
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

        
    },
    
    });
    
});
    