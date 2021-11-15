var num=1; //전역변수
function nextGal(){
    
    num++;
    if(num>7)
    num =1;
    document.getElementById("pic").src="../images/img"+num+".jpg"
}

function prevGal(){
    num--;
    if(num<1)
    num=7;
    document.getElementById("pic").src="../images/img"+num+".jpg"
}