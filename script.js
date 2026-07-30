const questions = [
{
q:"حجم مکعبی با ضلع ۴ سانتی متر چند است؟",
a:["16","64","32","8"],
c:1
},
{
q:"حجم منشوری با طول ۵، عرض ۳ و ارتفاع ۲ سانتی متر؟",
a:["30","20","15","10"],
c:0
},
{
q:"حجم استوانه از چه رابطه ای به دست می آید؟",
a:["مساحت قاعده × ارتفاع","محیط × ارتفاع","طول × عرض","قطر × ارتفاع"],
c:0
},
{
q:"اگر حجم جسمی ۴۸ و مساحت قاعده آن ۸ باشد، ارتفاع چند است؟",
a:["۴","۶","۸","۱۰"],
c:1
},
{
q:"حجم مکعب مستطیل با ابعاد ۱۰،۲ و۳؟",
a:["50","60","30","20"],
c:1
}
];

let score=0;
let current=0;

function startGame(){

let name=document.getElementById("studentName").value;

if(name==""){
alert("نام خود را وارد کن.");
return;
}

document.getElementById("start").style.display="none";

showQuestion();

}

function showQuestion(){

if(current>=questions.length){

document.getElementById("questionBox").innerHTML="🎉 آفرین!";

document.getElementById("answers").innerHTML="امتیاز نهایی: "+score+" از "+questions.length;

return;

}

document.getElementById("questionBox").innerHTML=questions[current].q;

let html="";

for(let i=0;i<4;i++){

html+="<button onclick='check("+i+")'>"+questions[current].a[i]+"</button>";

}

document.getElementById("answers").innerHTML=html;

document.getElementById("score").innerHTML="امتیاز: "+score;

}

function check(n){

if(n==questions[current].c){

score++;

alert("✅ آفرین! پاسخ درست است.");

}else{

alert("❌ پاسخ درست نبود.");

}

current++;

showQuestion();

}} else {
        alert("❌ پاسخ نادرست!");
    }

    current++;

    showQuestion();
}
