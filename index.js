const input = document.getElementById('button');

function addingEventListener() {
    input.addEventListener('click', clickAlert);
}


function clickAlert() {
  alert('I was clicked!');
}


