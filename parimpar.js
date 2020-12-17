let parOImpar = function(numero){
    if(numero%2 == 0 && numero != 0){
        console.log("El numero es par");
    }else if(numero%2 !=0 && numero != 0){
       console.log("El numero es impar");
    }else{
        console.log("Error");
    }
}
console.log(parOImpar(1))