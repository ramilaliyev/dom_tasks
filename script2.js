const openBtn = document.querySelector('#openOverlay');
const body = document.body;

const successModal = createModal("Well done");


openBtn.addEventListener('click', () => {
    body.appendChild(successModal);
});


function createModal (content) {
    const overlayElement = document.createElement('div');
    overlayElement.classList.add('overlay');

    const template = document.querySelector('#overlayTemplate');

    overlayElement.innerHTML = template.innerHTML;

    overlayElement.addEventListener('click', e => {
        if (e.target === overlayElement) {
            closeElement.click();
        }
    });
    
    // const containerElement = document.createElement('div');
    // containerElement.classList.add('modal-container');
    
    // const contentElement = document.createElement('div');
    // contentElement.classList.add('content');
    const contentElement = overlayElement.querySelector(".content");
    contentElement.innerHTML = /*"Hello world!"*/ content;
    
    // const closeBtn = document.createElement('a');
    // closeBtn.classList.add('close');
    // closeBtn.innerText = 'x';
    
    const closeBtn = overlayElement.querySelector('.close');
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
    
        body.removeChild(overlayElement);
    });
    
    // overlayElement.addEventListener('click', (e) => {
    //     if (!e.target.classList.contains('content')) {
    //         closeBtn.click();
    //     }
    // });
    
    // contentElement.appendChild(closeBtn);
    // containerElement.appendChild(contentElement);
    // overlayElement.appendChild(containerElement);
    // body.appendChild(overlayElement);

    return overlayElement;
}