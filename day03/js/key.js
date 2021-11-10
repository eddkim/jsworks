//while ~ if ~ break (반복 조건문)


while(true){
var key = prompt("계속 반복할까요?", "y/n");
}
if(key=="y"){
    alert("계속 반복합니다.");
}
else if(key=="n"){
     alert("반복을 중단합니다.");
     break;
}
else{
    alert("키를 잘못눌렀어");
}

document.write("프로그램 종료")
