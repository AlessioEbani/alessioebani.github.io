//disease
let bodyParts=["il braccio","la gamba","il torace","la testa","la mano","il piede","il pisello","il ginocchio", "i polsi", "l\'orecchio"];
let desease=["Mi fa male ","Mi sono rotto ","Non riesco piu\' a muovere ","Non mi funziona ", "Non sento piu\' con "];
//confirm
let confirm = ["Dai... verro\' ","Via giu\', ora vengo ","5 minuti e arrivo, stronzo! ","Mi tocca veni\' "];

function getBodyDesease(){
    let excuse="";
    excuse+=desease[Math.floor(Math.random()*desease.length)];
    excuse+=bodyParts[Math.floor(Math.random()*bodyParts.length)];
    return excuse;
}

function getConfirm(){
    return confirm[Math.floor(Math.random()*confirm.length)];
}