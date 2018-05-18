document.addEventListener('click', (event) => {
    let elem = event.target,
        rootBox = elem.parentNode.parentNode;
    if (elem.className === 'value' || elem.className === 'open') {
        if (rootBox.classList.contains('edit')) rootBox.style.zIndex = '1';
        else rootBox.style.zIndex = '999';
        rootBox.classList.toggle('edit');
        if (rootBox.classList.contains('changed')) rootBox.classList.remove('changed');
        if (rootBox.classList.contains('input-select')) rootBox.querySelector('.input').focus();
    } else if (elem.classList.contains('tab-title')) {
        let tabsTitle = Array.from(document.getElementsByClassName('tab-title')),
            tabsInfo = Array.from(document.getElementsByClassName('tab-info'))
            for (let item of tabsTitle) item.classList.remove('tab-title-current');
        for (let item of tabsInfo) item.classList.remove('tab-info-current');
        document.querySelector('.' + elem.dataset.title + '-title').classList.add('tab-title-current');
        document.querySelector('.' + elem.dataset.title + '-info').classList.add('tab-info-current');
    } else if (elem.classList.contains('black') || elem.classList.contains('modal-close')) {
        hideModal();
    }
})
document.addEventListener('click', (event) => {
    let elem = event.target,
        rootBox = elem.parentNode.parentNode;
    if (elem.className !== 'remove') return;
    if (rootBox.classList.contains('changed')) rootBox.classList.remove('changed');
})
document.addEventListener('click', (event) => {
    let elem = event.target,
        rootBox = elem.parentNode.parentNode;
    if (elem.className !== 'close') return;
    rootBox.classList.remove('edit');
})

document.addEventListener('keyup', (event) => {
    if (event.keyCode === 27) hideModal();
})

function showModal(modal) {
    document.querySelector('.' + modal).classList.add('show');
}

function hideModal() {
    let modals = Array.from(document.getElementsByClassName('modal'));
    for (modal of modals) modal.classList.remove('show')
}