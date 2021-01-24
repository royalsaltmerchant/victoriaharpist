//hamburger
function hamburger() {
    var button = document.getElementById("container");
    var content = document.getElementById("container-content");
    var whole = document.getElementById("whole");
    button.classList.toggle("change")
    if(content.style.display !== 'flex') {
      content.style.display = 'flex';
    //   whole.style.opacity = 0.1;
    }
    else {
      content.style.display = 'none';
    //   whole.style.opacity = 1;
    }
  }
//end hamburger

