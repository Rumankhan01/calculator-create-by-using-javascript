let outputScreen = document.getElementById("outputscreen")
function display (num){
    outputScreen.value += num
}
function  calculate(){
try{
    outputScreen.value = eval
    (outputScreen.value);
    
}
catch(err)
{
    alert("invalid")
}
}

function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value
    .slice(0,-1)
}
