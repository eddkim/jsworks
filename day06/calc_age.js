function calcAge(){
    //현재년도,출생연도 입력
    const CURRENT = 2021;
    var birth = prompt("출생년도를 입력하세요");
    var age;

//계산
age = CURRENT-birth+1;

//출력(p태그)
document.getElementById("result").innerHTML="나이는"+age;
}