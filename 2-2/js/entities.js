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

let content1 = "تؤكد هذه القاعدة أن تطبيق قواعد تصميم الوسائط التعليمية المتعددة يؤثر بنسبة أكبر في تعلم الطلاب الذين يملكون خلفية علمية قليلة حول المادة التعليمية مقارنة بتأثيره في تعلم الطلاب الذين يملكون معرفة أكبر";
let firstOption = "قاعدة الفروقات الفردية";
let secondOption = "قاعدة الوسائط المتعددة";
let thirdOption = "قاعدة الإحكام";
let fourthOption = null;
let answer = "قاعدة الفروقات الفردية";

const questionNo1 = new Question(content1 ,firstOption,secondOption ,thirdOption ,fourthOption ,answer);

 content1 = 'تؤكد هذه القاعدة أن الطلاب يتعلمون من الكلمات والصور معاً أفضل مما يتعلمون من الكلمات فقط';
 firstOption = "قاعدة الإحكام";
 secondOption = "قاعدة الوسائط المتعددة";
 thirdOption = "قاعدة الفروقات الفردية";
 fourthOption = null;
 answer = "قاعدة الوسائط المتعددة";

const questionNo2 = new Question(content1 ,firstOption,secondOption ,thirdOption ,fourthOption ,answer);


content1 = 'تؤكد هذه القاعدة بأنه يتعلم الطلاب عندما تحذف المادة الفائضة عن الحاجة من العرض أفضل مما يتعلمون عند إيرادها فيه';
firstOption = "قاعدة الوسائط المتعددة";
secondOption = "قاعدة الفروقات الفردية";
thirdOption = "قاعدة الإحكام";
fourthOption = null;
answer = "قاعدة الإحكام";

const questionNo3 = new Question(content1 ,firstOption,secondOption ,thirdOption ,fourthOption ,answer);


const questions = [
    questionNo1,
    questionNo2,
    questionNo3
];