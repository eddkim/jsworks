//나이가 8세 미만이면 "미취학아동" 14세 미만은 "초딩"

var age = prompt("나이를 입력하세요");
var charge = 0;
if (age <8){
    document.write("미취학 아동입니다.");
    charge=1000;

}
else if(age >=8 && age <14){
    document.write("초딩입니다.");
    charge=2000;
}
else if(age>=14 && age<20){
    document.write("중고딩입니다.");
    charge=3000;
}
else(age >=20);{
    document.write("일반인입니다.")
    charge=4000;
}

document.write("<p>입장료는 "+<span id="a">charge</span>+"원 입니다.</p>");