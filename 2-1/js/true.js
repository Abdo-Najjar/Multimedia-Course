

//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function () {


    new Vue({

        //select scope
        el: '#app',

        data() {
            return {

                trueAudioPath: "audio/true.mp3",

            }
        },

        //computed section
        computed: {
            buttonView: function () {
                if (window.sessionStorage.getItem('questionNo') >= 2) {
                    return "عرض الإجابات الصحيحة";
                }

                return "السؤال التالي";
            },

            //methods section
        }, methods: {

            //button action
            nextStep: function () {

                if(window.sessionStorage.getItem('questionNo') >= 2){
                    location.href = "review.html";   
                    return;
                 }

                location.href = "linkQuestion.html";
            },
            loadAudio: function () {
                if (window.sessionStorage.getItem('questionNo') >= 2) {
                    var times = window.sessionStorage.getItem("times")
                    times = parseInt(times) + 1;
                    window.sessionStorage.setItem("times", times);
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