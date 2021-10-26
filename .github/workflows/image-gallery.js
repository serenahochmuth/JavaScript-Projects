//* when the thumbnail is clicked on, there is an expanded, larger version in the display area. The caption is also shown below the larger image. *//
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
//* White border appears when thumbnail is clicked on, and previous border disappears when another thumbnail is selected *//
var previous;
function mark(current) {

    // Retreives the id of current element that is clicked
    var id = current.id;

    /** If/else statement - if previous element was selected or clicked on, then that border will be removed and applied to the current element*/
    if(previous){
        previous.style.border = "none"; // sets to no border for previous image
        current.style.border = "2px solid white"; // sets a border on the current selected image
        previous = document.getElementById(id);
    } else {
        current.style.border = "2px solid white"; //
        previous = document.getElementById(id);
    }
}
//* reveals the caption when the thumbnail is hovered over. It is separated by each thumbnail because one command alone doesn't differentiate hovering. *//
function caption(x) {
  document.getElementById("caption").style.color = "white";
  }
  function nocaption(x) {
  document.getElementById("caption").style.color = "#322F2F";
      }

  function caption2(x) {
  document.getElementById("caption2").style.color = "white";
      }
  function nocaption2(x) {
  document.getElementById("caption2").style.color = "#322F2F";
      }

  function caption3(x) {
  document.getElementById("caption3").style.color = "white";
      }
  function nocaption3(x) {
  document.getElementById("caption3").style.color = "#322F2F";
      }

  function caption4(x) {
  document.getElementById("caption4").style.color = "white";
      }
  function nocaption4(x) {
  document.getElementById("caption4").style.color = "#322F2F";
      }
  function caption5(x) {
  document.getElementById("caption5").style.color = "white";
          }
  function nocaption5(x) {
  document.getElementById("caption5").style.color = "#322F2F";
          }
