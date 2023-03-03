const h12 = document.querySelector('.introduce-h1');

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        h12.classList.add('hover1');
    }
  }
