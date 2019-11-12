

//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function () {

    new Vue({

        //select scope
        el: '#app',

        data() {
            return {

                falseAudioPath: "audio/false.mp3",

                showAnswersAudioPath: "audio/viewAnswers.mp3",

            }
        },
        //computed section
        computed: {
            //button content
            buttonView: function () {
                if (window.sessionStorage.getItem('questionNo') >= 2) {
                    return "عرض النتائج";
                }
                return "السؤال التالي";
            }

            //methods section
        }, methods: {
            //button acction
            nextStep: function () {

                if(window.sessionStorage.getItem('questionNo') >= 2){
                    location.href = "review.html";   
                    return;
                 }

                location.href = "linkQuestion.html";
            },
            //load audio method
            loadAudio: function () {
                let path = this.falseAudioPath;
                if (window.sessionStorage.getItem('questionNo') >= 2) {
                    path = this.showAnswersAudioPath;
                    var times = window.sessionStorage.getItem("times")
                    times = parseInt(times) + 1;
                    window.sessionStorage.setItem("times", times);
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
