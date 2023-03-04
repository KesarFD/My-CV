const h12 = document.querySelector('.introduce-h1');
const ex = document.querySelector('.code-ex')
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        h12.classList.add('hover1');
    }
  }


function isVisible(elem) {

    let coords = elem.getBoundingClientRect();
  
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  
    return topVisible || bottomVisible;
  }
function showVisible() {
    for (let line of document.querySelectorAll('.line')) {
      if (isVisible(line)) {
        line.classList.add('line-hover');
      }
    }
    if(isVisible(ex)) {
        ex.classList.add('ex-hover');
    }
  }
  showVisible();
  window.onscroll = showVisible;