var header = document.getElementById('header')
header.style.display = 'none'
header.style.animationName = 'header'
//scroll functions
window.onscroll = () => {
    scrollFunction()
  }
  function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var header = document.getElementById('header')
    var slant = document.getElementById('slant')

    if (winScroll > 10) {
        header.style.display = 'flex'
        slant.style.display = 'block'
    } else {
        header.style.display = 'none'
        slant.style.display = 'none'
    }
  
    // if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    //     document.getElementById("first-section").className = "slideUp";
    // }
    // if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    //     document.getElementById("second-section").className = "slideUp2";
    // }
    // if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 1000) {
    //     document.getElementById("projects-div").className = "slideUp3";
    // }
  }

// scroll from landing to main body
function scrollFromLanding() {
  window.scrollTo({ top: 800, behavior: 'smooth' })
}