let button = document.querySelector(".consultedposition__button")

function popup() {
  fetch('popUpJobApplied.html').then((response) => {
      return response.text();
  }).then((text) => {
    let sec = document.querySelector("#PopUp")
    sec.innerHTML = text;
    document.querySelector('.button').addEventListener('click', ()=> {
    sec.innerHTML=""
  });
    document.querySelector('.popupbackground').addEventListener('click', ()=> {
    sec.innerHTML=""
  });
  document.querySelector('.close-btn').addEventListener('click', ()=> {
    sec.innerHTML=""
  });
  });
}

button.addEventListener("click",popup)