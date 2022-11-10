let bodyParts=["il braccio","la Gamba","il torace","la testa","la mano","il piede","il pisello","il ginocchio", "i polsi"];
let desease=["Mi fa male ","Mi sono rotto ","Non riesco più a muovere "]


function GetBodyDesease(){
    let excuse="";
    excuse+=Math.floor(Math.random*desease.length);
    excuse+=Math.floor(Math.random*bodyParts.length);
    return excuse;
}
function getExcuse(excuseId){
    
}