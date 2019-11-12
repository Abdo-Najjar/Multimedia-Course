//map for sort question
var sortQuestionMap = {};
// add a item
//2
sortQuestionMap[1] = 'التعريف بأهداف الدرس';
//1
sortQuestionMap[2] = 'جذب انتباه المتعلم';
//4
sortQuestionMap[3] = 'عرض محتوى الدرس';
//6
sortQuestionMap[4] = 'تعزيز الاحتفاظ بالتعلم';
//5
sortQuestionMap[5] = 'تقديم المساعدة وتوجيه التعلم';
//3
sortQuestionMap[6] = 'استدعاء التعلم السابق';

//array for sort question
sortQuestionArray = [];


//add elements to sortQuestionArray
for (let i = 1; i <= 6; i++) {
    sortQuestionArray.push(sortQuestionMap[i]);
}

//right sort Answer
//rightSortAnswer = [2,4,6,3,1,5];
rightSortAnswer = [2,1,4,6,5,3];


//array of numbers from 1 to 6
numbersArray = [1, 2, 3, 4, 5, 6];




//link Question Map
//sorted paragraphes
var sortedParagraphes = [
    'جذب انتباه المتعلم',
    'التعريف بأهداف الدرس',
    'استدعاء التعلم السابق',
    'عرض محتوى الدرس',
    'تقديم المساعدة وتوجيه التعلم',
    'تعزيز الاحتفاظ بالتعلم',
];


//unsorted Paragraphes 
var unsoredParagraphesMap = {
    1: 'عرض مشكلة تحتاج إلى حل، أو طرح سؤال على المتعلمين',
    2: 'عرض الأداء المتوقع من المتعلمين بعد انتهاء الدرس',
    3: 'تلخيص المعلم للدرس السابق وإيضاح علاقته بالدرس الحالي',
    4: 'مراعاة تنظيم المحتوى وتقديم الشرح والأمثلة المناسبة التي تيسر فهم المحتوى',
    5: 'الترميز، وعرض الصور ذات العلاقة، ورسم خرائط مفاهيم، ومقارنة المفاهيم المشابهة، وعرض نماذج لمواقف من الحياة اليومية',
    6: 'تلخيص الدرس، أو عرض خرائط مفاهيم',
};



var unsoredParagraphes = [];

//add elements to unsoredParagraphes
for (let i = 1; i <= 6; i++) {
    unsoredParagraphes.push(unsoredParagraphesMap[i]);
}

//suffle 
var unsoredParagraphesSuffled = shuffle(unsoredParagraphes);



//suffle array 
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

//check if there is multiple value
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

//add remove method to array object using prototype
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

