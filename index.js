const h12 = document.querySelector('.introduce-h1');
const ex = document.querySelector('.code-ex')
const theme = document.querySelector('#theme-link')
const btn = document.querySelector('.theme-btn')
const themeImg = document.querySelector('.moon')

btn.addEventListener('click', function() {
  if (theme.getAttribute('href') == "style.css") {
    theme.href = "dark.css";
    themeImg.src = "assets/png/sun.png"
  } else {
    theme.href = "style.css";
    themeImg.src = "assets/png/moon.png"
  }
})

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