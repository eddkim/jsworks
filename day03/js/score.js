var score = prompt("점수를 입력하세요.")
var grade = "";

if (score>=90){
    grade ="A";
}
else if(score<90&&score>=80){
    grade = "B";
}
else if(score<80&&score>=70){
    grade = "C";
}
else if(score<70&&score>=60){
    grade = "D";
}
else if(score<60&&score>=50){
    grade = "F";
}
document.write("당신의 점수는 "+score+"점 입니다<br>");
    document.write("<p>학점은 <span class = 's'>"+grade+"</span>입니다.</p>");
