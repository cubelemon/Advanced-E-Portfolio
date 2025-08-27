// template_p7yqnce
// service_ev3p7ko
// CjztJaVfCr5f5FXRR
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;



// ...existing code...



document.addEventListener("mousemove", updateGradient);

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;


    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme"
    }
    else {
      document.body.classList.remove("dark-theme")
    }
  }

  
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_ev3p7ko',
            'template_95u5byw',
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

function updateGradient(event) {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  const background = document.getElementById("background");
  background.style.background = `radial-gradient(
      circle at ${x * 100}% ${y * 100}%, 
      #fceabb, 
      transparent 50%
    ),
    radial-gradient(
      circle at ${(1 - x) * 100}% ${(1 - y) * 100}%, 
#84ddda, 
      transparent 50%
    )`;
}