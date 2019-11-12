

//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function () {


  //temp to store dragged image id
  var draggedImage = null;


  //Vue instance (Object)
  new Vue({

    //select scope of vue object
    el: "#app",

    //data section
    data() {
      return {

        questionAudioPath: "audio/1.mp3",

        falseAudioPath: "audio/false.mp3",


      };
    },
    //methods section
    methods: {

      //method that return audio object of current question content
      questionContentAudioObject: function () {
        return new Audio(this.questionAudioPath);
      },

      //method run after submition (submiting conform button)
      submitAnswer: function () {

        //check if inputs aren't validate 
        if (!this.areInputsValidate()) {

          Swal.fire({
            type: 'error',
            title: 'خطأ',
            text: 'الرجاء الإجابة على جميع الأسالة',
          });

          //exit
          return;
        }


        //increase questionNo by one in sessionStorage

        //get questionNo from sessionStorage
        let questionNo = window.sessionStorage.getItem("questionNo");

        //increase qn variable by one
        qn = parseInt(questionNo) + 1;

        //set questionNo in sessionStorage
        window.sessionStorage.setItem("questionNo", qn);


        //check if answer isn't true
        if (!this.isAnswerTrue()) {

          //select errors from sessionStorage
          let errors = window.sessionStorage.getItem("errors");

          //increase errors by one 
          errors = parseInt(errors) + 1;

          //set errors to new value
          window.sessionStorage.setItem("errors", errors);

          //add flag 
          qn = qn - 1;
          window.sessionStorage.setItem("1", 0);


          new Audio(this.falseAudioPath).play();

          Swal.fire({
            type: 'error',
            title: "إجابتك خاطئة",
            confirmButtonText: "السؤال التالي",
            html: `الإجابات الخاطئة : ${this.countWrongAnswers()}  <br>  الإجابات الصحيحة : ${4 - this.countWrongAnswers()}`
          }).then(e => {

            window.sessionStorage.setItem(qn, 0);

            //reload page
            window.location.href = "trueOrFalse.html";
          });

          return;
        }

        //add flag 
        window.sessionStorage.setItem("1", 1);

        // if answer is true then go to true answer page
        window.location.href = "true.html";
      },

      //method that has bool value if inputs are validated
      areInputsValidate: function () {


        //variable that has bool value if inputs are validate or not
        let isValid = true;

        //select hold values div 
        let holdsContainsers = document.querySelectorAll('.hold');

        //loop for holdsContainsers array 
        holdsContainsers.forEach(hold => {

          //check child nodes
          if (hold.childNodes.length != 0) {
            isValid = false;
          }

        });

        return isValid;
      },


      //method that has bool value if answer is correct
      isAnswerTrue: function () {
        // variable that has bool value if answer is true or not
        let isTrue = true;
        //return isTrue

        if (this.countWrongAnswers() > 0) {
          isTrue = false;
        }

        return isTrue;
      },

      countWrongAnswers: function () {
        //select all options (images)
        var options = document.querySelectorAll('.option');

        //checker variable 
        let checker = 1;

        //error counter
        let errorCounter = 0;

        //loop on options
        options.forEach(option => {

          //fetch src from option
          let src = option.src;

          //check from answer is it right or not
          var check = src.includes(`first-${checker}`);

          //resect isTrue variable
          if (!check) {
            isTrue = false;
            errorCounter++;
          }

          //increment checker by one
          checker++;
        });

        return errorCounter;
      }

    },//end of methods secion


    //mounted section (add events section , or execution section)
    mounted() {

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

      });//end add listener


      //select all fields that can be has image inside of it. (container)
      var containers = document.querySelectorAll('.empty');

      //select all images 
      var imgs = document.querySelectorAll('.option')

      //add eventlistener to all images
      imgs.forEach(img => {

        img.addEventListener('dragstart', ev => {

          //Image that has been dragged 
          let selectedImage = ev.target;

          //set draggedImageID variable 
          draggedImage = selectedImage;
        });

      });


      //addevent listnener to all divs containers
      containers.forEach(container => {

        container.addEventListener('dragover', ev => {
          //allow to dragover div container (Enter div container)
          ev.preventDefault();

          //add hover class into empty div's classes
          ev.target.classList.add('hovered');

        });


        //when drag leaves 
        container.addEventListener('drop', ev => {
          ev.preventDefault();
          //select container
          let markedItem = ev.target;

          //boolean variable to check if targeted elemet is Image or not
          let isImage = markedItem.className.includes('option');

          //validaion for avoid multiple img append 
          if (isImage) {

            //alert message 
            Swal.fire({
              type: 'error',
              title: 'خطأ',
              text: 'الرجاء وضع الإجابة في مكان فارغ'
            });

            //exit function (don't do anything)
            return;
          }

          //code will execute if  isImage variable has false value

          //get number of childern from div container
          let numberOfChildern = markedItem.children.length;

          if (numberOfChildern > 0) {

            //alert message 
            Swal.fire({
              type: 'error',
              title: 'خطأ',
              text: 'الرجاء وضع الإجابة في مكان فارغ'
            });

            //exit function (don't do anything)
            return;
          }

          //add image into that div
          markedItem.append(draggedImage);

          //remove hover class into empty div's classes
          ev.target.classList.remove('hovered');
        });

        //when dragleave div container 
        container.addEventListener('dragleave', ev => {

          //remove hover class into empty div's classes
          ev.target.classList.remove('hovered');

        });

      });



      // execution section (boot section) 
    }, created() {


      //select question number
      let qn = window.sessionStorage.getItem("questionNo");

      //select times
      let times = window.sessionStorage.getItem("times");

      //validation for sessionStorage
      if (qn == null || qn == "" || qn == 0 || qn == undefined || times == null || times == undefined || times == "") {

        //go to index.html page
        location.href = "index.html";
      }


      //go to true or false question because it's the second question
      if (qn == 2) {

        //run action => go to trueOrFalse html page
        location.href = "trueOrFalse.html";

        //exit the method
        return;
      }

      //go to drag drop question because it's the third question 
      if (qn == 3) {

        //run action => go to trueOrFalse html page
        location.href = "dragdrop2.html";

        //exit the method
        return;
      }


      //go to review page if true
      if (qn >= 4) {

        window.location.href = "review.html";

      }


    },
  });

});
