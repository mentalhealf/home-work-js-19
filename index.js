//1.
// const openModalBtn = document.querySelector('[data-action="open-modal"]');
// const closeModalBtn = document.querySelector('[data-action="close-modal"]');
// const backdrop = document.querySelector(".js-backdrop");

// const openModal = () => {
//   document.body.classList.add("show-modal");
// };

// const closeModal = () => {
//   document.body.classList.remove("show-modal");
// };

// openModalBtn.addEventListener("click", openModal);
// closeModalBtn.addEventListener("click", closeModal);

// backdrop.addEventListener("click", (event) => {
//   if (event.target === backdrop) {
//     closeModal();
//   }
// });

// document.addEventListener("keydown"),
//   (event) => {
//     if (
//       event.key === "Escape" &&
//       document.body.classList.contains("show-modal")
//     ) {
//       closeModal();
//     }
//   };

//2. and 3.
// const colorRadios = document.querySelectorAll('input[name="color"]');
// colorRadios.forEach(radio => {
//     radio.addEventListener('change', event => {
  
//       document.body.style.backgroundColor = event.target.value;
//     });
//   });

//4.
// const nameInput = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');
// nameInput.addEventListener('input', event => {
//     const inputValue = event.target.value.trim();
  
//     nameOutput.textContent = inputValue === '' ? 'незнайомець' : inputValue;
//   });

  //5.

  const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');
textSpan.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener('input', event => {
    const fontSize = event.target.value; 
    textSpan.style.fontSize = `${fontSize}px`; 
  });
