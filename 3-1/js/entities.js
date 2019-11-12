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

let content1 = "من النصائح التي يمكن تقديمها حول العناصر التي يفضل تطبيق قاعدة التضاد عليها جميع ما يلي ماعدا";
let firstOption = "العناوين الرئيسة والفرعية";
let secondOption = "المفردات المراد تعريفها";
let thirdOption = "المفردات الانتقالية (مثل: أولاً، وثانياً، وأخيراً ... إلخ)";
let fourthOption = "استخدام أرضية متضادة مع الشكل من حيث اللون";
let answer = "استخدام أرضية متضادة مع الشكل من حيث اللون";

const questionNo1 = new Question(content1 ,firstOption,secondOption ,thirdOption ,fourthOption ,answer);

 content1 = "من النصائح التي يمكن تقديمها حول محاذاة الصور والكلمات جميع ما يلي ماعدا";
 firstOption = "تجنب كتابة النص بشكل عمودي أو بشكل مائل";
 secondOption = "البدء بكتابة النص العربي من الجهة اليمنى والنص الإنجليزي من الجهة اليسرى";
 thirdOption = "استخدام التكبير أو تغيير الحجم لإبراز الشكل عن القاعدة";
 fourthOption = "تجنب وضع النص التعليمي في المنتصف (بإستثناء العناوين) لأن ذلك يبطء ويصعب القراءة";
 answer = "استخدام التكبير أو تغيير الحجم لإبراز الشكل عن القاعدة";

const questionNo2 = new Question(content1 ,firstOption,secondOption ,thirdOption ,fourthOption ,answer);


content1 = "من النصائح التي يمكن تقديمها حول تماثل العروض جميع ما يلي ماعدا";
firstOption = "استخدام خلفية موحدة لكامل العرض";
secondOption = "استخدام أرضيات بألوان فاتحة غير مزعجة للعين مع تفضيل اللون الأبيض";
thirdOption = "استخدام طريقة ترقيم للصفحات والمواضيع بشكل متماثل لكامل العرض";
fourthOption = "استخدام مخطط الشاشة أو الصفحة بشكل موحد لكامل العرض بحيث تكون العناوين وأرقام الصفحات والمحتوى في نفس الموقع";
answer = "استخدام أرضيات بألوان فاتحة غير مزعجة للعين مع تفضيل اللون الأبيض";

const questionNo3 = new Question(content1 ,firstOption,secondOption ,thirdOption ,fourthOption ,answer);


const questions = [
    questionNo1,
    questionNo2,
    questionNo3
];