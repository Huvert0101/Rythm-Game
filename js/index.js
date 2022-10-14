// Variables
let f = document.getElementById("f");
let d = document.getElementById("d");
let j = document.getElementById("j");
let k = document.getElementById("k");

// Key pressing
window.addEventListener('keypress', logKey);

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

// Creating notes
var note = document.createElement("div");
note.id = "note";
note.style.width = "180px";
note.style.height = "300px";
note.style.background = "white";
note.style.position = "absolute";

var displayNotes = document.getElementById("notes");
displayNotes.append(note);

// Main Loop
var y = 0;
function mainLoop(){
    note.style.top = y + "px";
    y++;
}

function logKey(e) {
    switch (e.code) {
      case "KeyF":
          f.style.background = "white";
          f.style.color = "black";
          break;
      case "KeyD":
          if(note.style.top >= "300px"){
            note.style.top = "0px";
            y = 0;
          }
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

setInterval(() => {
    mainLoop();
}, 10);