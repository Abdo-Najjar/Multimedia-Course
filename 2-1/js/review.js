//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function () {


    new Vue({
        el: '#app',
        data() {
            return {
                //set errors 
                errors: window.sessionStorage.getItem("errors"),
                times: window.sessionStorage.getItem("times"),
                firstQuestionContent: ' رتب الأحداث التالية لعرض المحتوى من خلال الوسائط المتعددة ',
                secondQuestionContent: "حدد الطريقة المناسبة لكل حدث",
                resultQuesion1: window.sessionStorage.getItem("1"),
                resultQuesion2: window.sessionStorage.getItem("2")

            }
        },
        computed: {
            correctAnswers: function () {
                let errors = parseInt(this.errors);
                return 2 - errors;
            },

            wrongAnswers: function () {
                return this.errors;
            },

            buttonView: function () {
                if (this.times >= 2 || this.errors == 0) {
                    return "عرض الإجابات الصحيحة ";

                }

                return "عودة للأسئلة";
            }

        },
        methods: {
            nextStep: function () {
                if (this.times >= 2 || this.errors == 0) {
                    location.href = "viewAnswer.html";
                    return;
                }

                window.location.href = "sortQuestion.html";
            }
        },
        created() {


            var check1 = window.sessionStorage.getItem("1");
            var check2 = window.sessionStorage.getItem("2");

            if (check1 == null || check2 == null) {
                location.href = 'index.html';
            }


            window.sessionStorage.setItem("errors", 0);
            window.sessionStorage.setItem('questionNo', 0);
        },

    });
});

