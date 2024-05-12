// template_p7yqnce
// service_ev3p7ko
// CjztJaVfCr5f5FXRR
let isModalOpen = false;
let contrastToggle = false;

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    document.body.classList += " dark-theme"
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_ev3p7ko',
            'template_p7yqnce',
            event.target,
            'CjztJaVfCr5f5FXRR'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
          })
          .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
              "The email service is temporarily unavailable. Please contact me directly on natashapng.png@email.com"
            );
          });
}

function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open');
    }

    isModalOpen = !isModalOpen;
    document.body.classList += " modal--open";
}

