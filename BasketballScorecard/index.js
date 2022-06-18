let homescore = document.getElementById("hscore")
let guestscore = document.getElementById("gscore")

function plus1h(){
    var hscore = homescore.textContent
    homescore.textContent=Number(hscore)+1
}

function plus2h(){
    var hscore = homescore.textContent
    homescore.textContent=Number(hscore)+2
}

function plus3h(){
    var hscore = homescore.textContent
    homescore.textContent=Number(hscore)+3
}

function plus1g(){
    var gscore = guestscore.textContent
    guestscore.textContent=Number(gscore)+1
}

function plus2g(){
    var gscore = guestscore.textContent
    guestscore.textContent=Number(gscore)+2
}

function plus3g(){
    var gscore = guestscore.textContent
    guestscore.textContent=Number(gscore)+3
}

function reset(){
    homescore.textContent=0
    guestscore.textContent=0
}