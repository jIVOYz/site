var counter = 0;

function onClickButton(el) {
    counter++;
    el.innerHTML = "Вы нажали на кнопку:" + counter;
}

function changeTheme() {
    var chooser = document.getElementById('chooser');
    document.body.style.backgroundColor = chooser.value;
}
