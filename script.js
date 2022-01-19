console.log("carga correctamente")

function right() {
    let current = document.getElementsByClassName('mostrar')[0];

    if (current.nextSibling.nextSibling) {
        current.classList.remove('mostrar');
        current.nextSibling.nextSibling.classList.add('mostrar');
    }

    if (current.nextSibling.nextSibling) {
        document.getElementById('btn-left').classList.remove('text-muted');
        document.getElementById('btn-rigth').classList.add('text-muted');
    } else {
        document.getElementById('btn-rigth').classList.add('text-muted');
    }
}

function left() {
    let current = document.getElementsByClassName('mostrar')[0];

    if (current.previousSibling.previousSibling) {
        current.classList.remove('mostrar');
        current.previousSibling.previousSibling.classList.add('mostrar');
    }

    if (current.previousSibling.previousSibling) {
        document.getElementById('btn-rigth').classList.remove('text-muted');
        document.getElementById('btn-left').classList.add('text-muted');
    } else {
        document.getElementById('btn-left').classList.add('text-muted');
    }
}
