//유효성 검사
function checkMember(){
    var form = document.regForm;
    var id = form.mid.value;

    if(id.length !=5){
        alert("아이디는 5까지 가능합니다.");
        form.id.select()
        return false;
    }
    else if(PeriodicWave.length < 4 || PeriodicWave.length > 8){
        alert("비밀번호는 4~8자까지 가능합니다.");
        form.pwd.select()
        return false;
    }
    else{
        form.submit();  //폼이 전송 됨

    }
}