var number;

function isEven(num){
    if(num % 2 == 0){
        return true;
    }
    else return false;
}

function factorial(numb){
    var result = 1;
    for(var i = 2; i <= numb; i++){
        result *= i;
    }
    return result;
}

function kebabToSnake(stringic){
    var str = stringic;
    str = str.replace("-", "_");
}