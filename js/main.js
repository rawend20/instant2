function covertvalue(){
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");
    if(dollar==""){
        
    result.innerHTML = "Enter data";
    }else if(isNaN(dollar)){
        result.innerHTML="Enter number not text";
    }else if(dollar<0){
        result.innerHTML="Enter positive number";
    }else if(dollar==0){
        result.innerHTML="Enter number rather than zero";
    }else{
        result.innerHTML= dollar * 50 + "Egyption pound";
    }
    return false;
}