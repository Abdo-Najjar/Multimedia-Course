class Question{
    constructor(content ,  firstOption ,secondOption , thirdOption , fourthOption , answer ){
        this.content = content;
        this.firstOption = firstOption;
        this.secondOption = secondOption;
        this.thirdOption = thirdOption ;
        this.fourthOption = fourthOption;
        this.answer = answer;
    }
}

let content = "من معايير تقييم الوسائط المتعددة تطبيق قاعدة النصوص";
let firstOption = "صح";
let secondOption = "خطأ";
let thirdOption = null;
let fourthOption = null;
let answer = "صح";

const questionNo1 = new Question(content ,firstOption,secondOption ,thirdOption ,fourthOption ,answer);

 content = "من معايير تقييم الوسائط المتعددة ملائمة طريقة تدفق المعلومات";
 firstOption = "صح";
 secondOption = "خطأ";
 thirdOption = null;
 fourthOption = null;
 answer = 'صح';

const questionNo2 = new Question(content ,firstOption,secondOption ,thirdOption ,fourthOption ,answer);




const questions = [
    questionNo1,
    questionNo2
];