let buttons = document.querySelectorAll(".positions__section button")

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

for (let i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click",popup)
}