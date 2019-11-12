class Question {
    constructor(content, firstOption, secondOption, thirdOption, fourthOption, answer) {
        this.content = content;
        this.firstOption = firstOption;
        this.secondOption = secondOption;
        this.thirdOption = thirdOption;
        this.fourthOption = fourthOption;
        this.answer = answer;
    }
}

let content1 = "من أمثلة الوسائط المتعددة؟";
let firstOption = "الأفلام";
let secondOption = "الانفوجرافيك";
let thirdOption = "السبورة الخشبية";
let fourthOption = "أ و ب";
let answer = "أ و ب";

//First question
const questionNo1 = new Question(content1, firstOption, secondOption, thirdOption, fourthOption, answer);

content1 = "كان الإستخدام السابق للوسائط المتعددة يركز على مدى فاعليتها";
firstOption = "صح";
secondOption = "خطاً";
thirdOption = null;
fourthOption = null;
answer = "خطاً";

const questionNo2 = new Question(content1, firstOption, secondOption, thirdOption, fourthOption, answer);


content1 = ":تتمثل فوائد الوسائط المتعددة (من جانب الفاعلية) فيما يلي";
firstOption = "اختصار مدة تقديم المحتوى وتقديمه في مدة قصيرة";
secondOption = "تيسير تعلم المفاهيم المجردة";
thirdOption = "وصول المتعلم للمعرفة المطلوبة بأسلوب شيق وجذاب";
fourthOption = null;
answer = "تيسير تعلم المفاهيم المجردة";

const questionNo3 = new Question(content1, firstOption, secondOption, thirdOption, fourthOption, answer);



const questions = [
    questionNo1,
    questionNo2,
    questionNo3
];


