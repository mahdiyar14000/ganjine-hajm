const questions = [
{
question:"حجم مکعبی با ضلع 5 سانتی متر چند است؟",
answers:["25","75","125","150"],
correct:2
},
{
question:"حجم مکعب مستطیل با طول 8، عرض 4 و ارتفاع 3 سانتی متر چند است؟",
answers:["96","84","72","48"],
correct:0
},
{
question:"اگر π=3 باشد، حجم استوانه ای با شعاع 3 و ارتفاع 7 چند است؟",
answers:["63","126","189","72"],
correct:2
},
{
question:"فرمول حجم مکعب چیست؟",
answers:[
"ضلع × 4",
"ضلع × ضلع",
"ضلع × ضلع × ضلع",
"محیط × ارتفاع"
],
correct:2
},
{
question:"حجم مکعبی 216 سانتی متر مکعب است. طول ضلع آن چند سانتی متر است؟",
answers:["4","5","6","8"],
correct:2
}
];

let currentQuestion=0;
let score=0;

const startBtn=document.getElementById("startBtn");
const startPage=document.getElementById("startPage");
const gamePage=document.getElementById("gamePage");

const playerName=document.getElementById("playerName");

const helloStudent=document.getElementById("helloStudent");

const questionBox=document.getElementById("questionBox");

const answerBox=document.getElementById("answerBox");

const scoreBox=document.getElementById("score");

startBtn.onclick=function(){

if(playerName.value.trim()==""){

alert("لطفا نام خود را وارد کن.");

return;

}

helloStudent.innerHTML="سلام "+playerName.value+" 🌸";

startPage.style.display="none";

gamePage.style.display="block";
        showQuestion();

};

function showQuestion(){

questionBox.innerHTML=questions[currentQuestion].question;

answerBox.innerHTML="";

for(let i=0;i<questions[currentQuestion].answers.length;i++){

const btn=document.createElement("button");

btn.className="answerBtn";

btn.innerHTML=questions[currentQuestion].answers[i];

btn.onclick=function(){

checkAnswer(i);

};

answerBox.appendChild(btn);

}

scoreBox.innerHTML=score;

}

function checkAnswer(answer){

const correct=questions[currentQuestion].correct;

if(answer===correct){

score++;

alert("✅ آفرین! پاسخ درست بود.");

}else{

alert("❌ پاسخ درست گزینه "
+(correct+1)+" بود.");

}

currentQuestion++;
        if(currentQuestion<questions.length){

showQuestion();

}else{

questionBox.innerHTML="🏆 تبریک "+playerName.value;

answerBox.innerHTML="";

let message=document.createElement("div");

message.className="finish";

message.innerHTML=
"⭐ امتیاز نهایی تو : "
+score+
" از "
+questions.length+
"<br><br>";

if(score==questions.length){

message.innerHTML+="🥇 عالی بود! تو قهرمان گنجینه حجم شدی.";

}else if(score>=4){

message.innerHTML+="🥈 خیلی خوب بود! فقط کمی تمرین بیشتر.";

}else if(score>=2){

message.innerHTML+="🥉 آفرین، ولی بهتره دوباره بازی کنی.";

}else{

message.innerHTML+="📚 دوباره تلاش کن؛ مطمئنم دفعه بعد بهتر می‌شوی.";

}

answerBox.appendChild(message);

}

}
