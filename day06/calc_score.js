//성적계산
//자료입력
var score = [

    [80,70],
    [90,60],
    [70,75],
    [100,90],
    [85,70]
];

var sum = [0,0]
var avg = [0.0, 0.0];

//점수 합계
for(var i = 0; i < score.length; i++){
    sum[0]+=score[i][0];//1열
    sum[1]+=score[i][1];//2열
}
avg[0]= sum[0]/score.length;
avg[1]= sum[1]/score.length;

document.write("국어 총점 : "+sum[0]+"<br>");
document.write("수학 총점 : "+sum[1]+"<br>");
document.write("국어평균 : "+avg[0]+"<br>");
document.write("수학평균 : "+avg[1]+"<br>");

