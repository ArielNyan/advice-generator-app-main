const id = document.getElementById("id");
const ad = document.getElementById("advice");
const btn = document.getElementById("btn")


function api(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(json => {
        //console.log(json)
        id.innerHTML=json.slip.id
        ad.innerHTML=json.slip.advice
    });
}

