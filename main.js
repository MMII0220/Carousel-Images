document.addEventListener('DOMContentLoaded', () => {
  let prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    image = document.querySelectorAll('.image'),
    dot = document.querySelectorAll('.dot'),
    i = 0;

  openImage();

  next.addEventListener('click', () => {
    if (i >= 7) i = 0;
    else i++;

    closeImage();
    openImage();
  });

  prev.addEventListener('click', () => {
    if (i <= 0) i = 7;
    else i--;

    closeImage();
    openImage();
  });

  function openImage() {
    image[i].classList.add('active__image');

    dot[i].classList.add('active__dot');
  }

  function closeImage() {
    image.forEach((item) => {
      item.classList.remove('active__image');
    });

    dot.forEach((item) => {
      item.classList.remove('active__dot');
    });
  }
});
