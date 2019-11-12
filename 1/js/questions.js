//execute after the dom is loaded
document.addEventListener("DOMContentLoaded", function() {


  const qNumber = window.sessionStorage.getItem('questionNo');

  if( qNumber== null || qNumber == undefined||qNumber==0){
      
      //set question number to 1.
      window.sessionStorage.setItem("questionNo" , 1);

      //set errors to 0 
      window.sessionStorage.setItem("errors" , 0);
    
      //times 
      window.sessionStorage.setItem("times" , 0);
  }

  var selectedOption =null;

new Vue({
  
  //set the scope of the vue component
  el:'#app',

  //data section
  data () {
    return {
     
      //questions array
    questions     : questions,
    
    //number of currunt question
    questionNo    : window.sessionStorage.getItem('questionNo'),

    numberOfQuestions :questions.length
    }

  //computed property section
  },computed: {
    
    //Path for question content audio
    questionContentAudioPath: function(){
      return `audio/${this.questionNo}.mp3`;
    },

    //return object of current question
    question : function(){
        return this.questions[this.questionIndex];
    },

    //index of currunt question in questions array defualt value is 0.
      questionIndex : function(){
       return this.questionNo-1;
       },

     //check if current question has third option
      checkThirdOption : function(){
          return this.question.thirdOption === null?  false: true;
      },


     //check if current question has fourth option
     checkfourthOption : function(){
        return this.question.fourthOption === null? false : true;
      }

     

    
  //methods section
  },methods: {
       /**
       * Create object of audio that saies the content of currnet training
       */
      questionContentAudioObject : function(){

        return audio = new Audio(this.questionContentAudioPath);
      }, 
      //method to render page
      renderPage:function(){
        
        let content =   document.querySelector("#content");
        content.innerHTML = this.question.content;

        let option1 =   document.querySelector("#option1");
        option1.innerHTML = this.question.firstOption;

        let option2 =   document.querySelector("#option2");
        option2.innerHTML = this.question.secondOption;

        if(this.checkThirdOption){
          let option3 =   document.querySelector("#option3");
          option3.innerHTML = this.question.thirdOption;
        }
        
        if(this.checkfourthOption){
          let option4 =   document.querySelector("#option4");
          option4.innerHTML = this.question.fourthOption;
        }

      },
    
      //style nav bar
      highLightNavBar:function(){

          let q1 = document.querySelector('#q1');
          q1.classList.add('passedQuestion');

          if(this.questionNo >=2){
            let l1 = document.querySelector('#l1');
            l1.classList.add('passedLine');
            let q2 = document.querySelector('#q2');
            q2.classList.add('passedQuestion');
          }
          
          if(this.questionNo >=3){

            let l2 = document.querySelector('#l2');
            l2.classList.add('passedLine');
      
            let q3 = document.querySelector('#q3');
            q3.classList.add('passedQuestion');
          }


      },
      //render number image
      qNumberImageRinder:function(){
       let qNumber =   document.querySelector("#qNumber");
       qNumber.src = `imags/${this.questionNo}.png`;
      },
      //submit answer 
      submitAnswer : function(){

          if(selectedOption == null){
            Swal.fire({
              type: 'error',
              title: 'خطأ',
              text: 'الرجاء اختيار واحد من الخيارات',
            })
            return;
          }
             
          //increment question number by one.
          let qn = window.sessionStorage.getItem('questionNo');
          let nextQuestionNumber = parseInt(qn) +1;
          window.sessionStorage.setItem('questionNo' ,nextQuestionNumber );


          //if it true answer
         if(selectedOption == this.question.answer){
          
          //set true in sessionStorage 
          window.sessionStorage.setItem(qn , 1);

          //go to true.html page
          window.location.href = "true.html";

          }else{

          //set true in sessionStorage 
          window.sessionStorage.setItem(qn , 0);

            let errors = window.sessionStorage.getItem('errors');
            errors = parseInt(errors) +1;
            window.sessionStorage.setItem('errors' , errors);

            //go to false.html page
          window.location.href = "false.html";
          }

      }
      
   },mounted() {

    
      //add listeners to all options
      for(let i = 1 ; i <=4 ; i ++){

        //select div  that has options
        let option =  document.querySelector('.answer'+i);

        //check if the div is exits
          if(option != null){
              //add event to every div option
            option.addEventListener('click' , function(){

              //set selecedOption
              selectedOption =this.childNodes[1].innerHTML;
             });
          }

      }//end for loop

      //select sound image
      let soundImage = document.querySelector("#soundImage");

      //return audio object
      var audio = this.questionContentAudioObject();

      //play audio object 
      audio.play();

      //check if audio is running

      //add event to sound image 
      soundImage.addEventListener('click' , function(){
            //toggled audio 
          if (audio.duration > 0 && !audio.paused) {

            //Its playing...do your job
            audio.pause();
          } else {

            //Not playing...maybe paused, stopped or never played.
            audio.play();
          }
        
     });
       
       //code abdullah
       
       
        document.getElementById('focusanswer').onclick = function () {
        document.getElementById('focusanswer').focus();
        }
     
     
        
        
     
 
         
         
       
       
       
    //section that has code will executed after the page is ready
   },created() {

        //check if question number is null then redirect to index.html
        if(window.sessionStorage.getItem('questionNo')===null ||this.questionNo ===null|| window.sessionStorage.getItem('questionNo')<0 ){
          window.location.href = "index.html";
        }else if( window.sessionStorage.getItem('questionNo') >this.numberOfQuestions ){

          window.sessionStorage.setItem('questionNo' , 1) ;
          
        location.href = "review.html";
        }

        
        //render page
        this.renderPage();
        
        //highligh nav bar
        this.highLightNavBar();

        //render question number
        this.qNumberImageRinder();
       
       
       
       
       /*
          
        var heightArray = [];
        
        
        for(let i = 1 ; i <= 4 ; i++){
            
            let answer = document.querySelector(`.answer${i}`);
                
            
                if(answer ==null){
                    continue;
                }
            
            let hightAnswer = answer.offsetHeight;
                
            heightArray.push(hightAnswer);
            
        }
       
    
       console.log(heightArray);
       
        var largest= 0;
        var i;
        for (i=0; i<=largest;i++){
       if (heightArray[i]>largest) {
        var largest=heightArray[i];
    }
            
}
       
       console.log(largest);
       
       */
       
       
       
       
       
       
       
       
       
         
        var height1=$('.answer1').height();
         var height2=$('.answer2').height();
         var height3=$('.answer3').height();
         var height4=$('.answer4').height();
        console.log(height4);
         
         
        
       var arr=[height1,height2,height3,height4];
         var largest= 0;
         var i;
        for (i=0; i<=largest;i++){
       if (arr[i]>largest) {
        var largest=arr[i];
    }
            
}
         
         
         
          if (largest<46){
             largest=50;
         }
         
         var sp=largest-2;
         var top=sp*0.5-24;
         
           $('.answer1').css({'height':largest}); 
           $('.answer2').css({'height':largest}); 
           $('.answer3').css({'height':largest}); 
           $('.answer4').css({'height':largest}); 
           $('.spannumber1').css({'height':sp,'padding-top':top});             
           $('.spannumber2').css({'height':sp,'padding-top':top});             
           $('.spannumber3').css({'height':sp,'padding-top':top});             
           $('.spannumber4').css({'height':sp,'padding-top':top});    
           

        var para1 =$('.answer1 p').height();
        var para2 =$('.answer2 p').height();
        var para3 =$('.answer3 p').height();
        var para4 =$('.answer4 p').height();
         var paraTop1=largest-para1;
         var paraTop1=paraTop1*0.12;
         
         var paraTop2=largest-para2;
         var paraTop2=paraTop2*0.12;
         
         var paraTop3=largest-para3;
         var paraTop3=paraTop3*0.12;
         
         var paraTop4=largest-para4;
         var paraTop4=paraTop4*0.12;
         
         
       $('.answer1 p').css({'padding-top':paraTop1}); 
       $('.answer2 p').css({'padding-top':paraTop2}); 
       $('.answer3 p').css({'padding-top':paraTop3}); 
       $('.answer4 p').css({'padding-top':paraTop4}); 
console.log(paraTop2);
       
       
       
       
       
        
     }//end of created section
  });

});

