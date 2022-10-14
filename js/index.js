// Variables
let f = document.getElementById("f");
let d = document.getElementById("d");
let j = document.getElementById("j");
let k = document.getElementById("k");

// Key pressing
window.addEventListener('keypress', logKey);

function logKey(e) {
  switch (e.code) {
    case "KeyF":
        f.style.background = "white";
        f.style.color = "black";
        break;
    case "KeyD":
        d.style.background = "white";
        d.style.color = "black";
    break;
    case "KeyJ":
        j.style.background = "white";
        j.style.color = "black";
    break;
    case "KeyK":
        k.style.background = "white";
        k.style.color = "black";
    break;
    default:
        break;
  }
}

// Key offs
window.addEventListener("keyup", Keyoff);

function Keyoff(e){
    switch (e.code) {
        case "KeyF":
            f.style.background = "black";
            f.style.color = "white";
            break;
        case "KeyD":
            d.style.background = "black";
            d.style.color = "white";
        break;
        case "KeyJ":
            j.style.background = "black";
            j.style.color = "white";
        break;
        case "KeyK":
            k.style.background = "black";
            k.style.color = "white";
        break;
        default:
        break;
    }
}