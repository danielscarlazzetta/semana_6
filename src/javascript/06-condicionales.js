

//Definir las variables
let edad = 30;
let limiteEdad= 18;

//if
if( edad >= limiteEdad){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");    
}

console.log("-----------"); 

//If anidado
if( edad >= limiteEdad){
    console.log("Es mayor de edad");
    
    if(edad == 20){
        console.log("El usuario tiene 20 años");
    }else if( edad >= 21 ){
        console.log("Es adulto en todos laddos");
        
    }

}else{
    console.log("Es menor de edad");    
}

console.log("-----------"); 