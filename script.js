console.log("carga correctamente")

function right() {
    let current = document.getElementsByClassName('shadow')[0];

    if (current.nextSibling.nextSibling) {
        current.classList.remove('shadow');
        current.nextSibling.nextSibling.classList.add('shadow');
    }

    if (current.nextSibling.nextSibling) {
        document.getElementById('btn-left').classList.remove('text-muted');
        document.getElementById('btn-rigth').classList.add('text-muted');
    } else {
        document.getElementById('btn-rigth').classList.add('text-muted');
    }
}

function left() {
    let current = document.getElementsByClassName('shadow')[0];

    if (current.previousSibling.previousSibling) {
        current.classList.remove('shadow');
        current.previousSibling.previousSibling.classList.add('shadow');
    }

    if (current.previousSibling.previousSibling) {
        document.getElementById('btn-rigth').classList.remove('text-muted');
        document.getElementById('btn-left').classList.add('text-muted');
    } else {
        document.getElementById('btn-left').classList.add('text-muted');
    }
}
