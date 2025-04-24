const lupita = document.querySelector('#lupita');

lupita.addEventListener('click', borderFunction);

function borderFunction() {
    if (lupita.style.border == "") {
        lupita.style.border = '2px solid red';
    } else {
        lupita.style.border = "";
    }
}
   