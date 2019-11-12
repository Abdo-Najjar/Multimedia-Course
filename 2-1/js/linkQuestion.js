
//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function () {

  //array options numbers after sorted 
  var sortedOptions = [];

  var vue = new Vue({
    el: "#app",

    //data section
    data() {
      return {
        //question content path
        audioPath: "audio/2.mp3",

        //array of numbers
        numbersArrayInside: numbersArray,

        //unsored Paragraphes Suffled
        unsoredParagraphesSuffled: unsoredParagraphesSuffled,

        //softed paragraphes
        sortedParagraphes: sortedParagraphes
      }
    },

    //method section
    methods: {

      //method to return object of audio
      questionContentAudioObject: function () {
        let audio = new Audio(this.audioPath);
        return audio;
      }

    },
    //mounted section 
    mounted() {


      var qn = window.sessionStorage.getItem('questionNo');

      if (qn >= 2) {

        location.href = "review.html";
      }


      //select all selects from dom
      let selects = document.querySelectorAll('select');

      //select submit button
      let submit = document.querySelector('#submit');

      //add event listener to submit button
      submit.addEventListener('click', function () {


        sortedOptions = [];

        selects.forEach(select => {

          if (select.value != "" && select.value != null && select.value != undefined) {

            let value = parseInt(select.value);

            sortedOptions.push(value);
          }

        });

        let answerMap = {};

        //validation 
        if (sortedOptions.length == numbersArray.length) {
          if (!hasDuplicates(sortedOptions)) {

            for (let i = 0; i < sortedOptions.length; i++) {
              answerMap[sortedOptions[i]] = unsoredParagraphesSuffled[i];
            }


            var isCorrectAnswer = true;

            //check if it correct 
            for (let i = 1; i <= sortQuestionArray.length; i++) {

              if (unsoredParagraphesMap[i] != answerMap[i]) {
                isCorrectAnswer = false;
              }
            }

            //increase questionNo by one in sessionStorage
            let qn = window.sessionStorage.getItem('questionNo');
            qn = parseInt(qn) + 1;
            window.sessionStorage.setItem('questionNo', qn)

            //action after answer all options 
            if (isCorrectAnswer) {

              //Store in sessionStorage that has true answer 
              window.sessionStorage.setItem(2, 1);

              //go to true answer page
              window.location.href = "true.html";

            } else {
              //store in sessionStorage that has false answer
              window.sessionStorage.setItem(2, 0);

              //add to errors sessionStorage 
              var errors = window.sessionStorage.getItem("errors")
              errors = parseInt(errors) + 1;
              window.sessionStorage.setItem("errors", errors);

              //go to false answer page
              window.location.href = "false.html";
            }

          } else {
            //fire if has more has duplicates numbers
            Swal.fire({
              type: 'error',
              title: 'خطأ',
              text: 'يوجد اكثر من خيار له نفس الرقم',
            })
            return;
          }
        } else {

          //fire when there is no option selected
          Swal.fire({
            type: 'error',
            title: 'خطأ',
            text: 'الرجاء ترتيب جميع الخيارات',
          })
          return;
        }
      });

      //select sound image
      let soundImage = document.querySelector("#soundImage");

      //return audio object
      var audio = this.questionContentAudioObject();

      //play audio object 
      audio.play();

      //add event to sound image 
      soundImage.addEventListener('click', function () {

        //toggled audio 
        if (audio.duration > 0 && !audio.paused) {

          //Its playing...do your job
          audio.pause();
        } else {

          //Not playing...maybe paused, stopped or never played.
          audio.play();
        }
      });//end of adding event listener

    }, created() {

      var qn = window.sessionStorage.getItem('questionNo');

      if (qn == null || qn == undefined) {
        location.href = "index.html";
      }

      if (qn == 0) {
        location.href = "sortQuestion.html";
      }

    }



  });

});
