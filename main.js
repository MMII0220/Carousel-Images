document.addEventListener('DOMContentLoaded', () => {
  let prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    image = document.querySelector('.image'),
    images = document.querySelector('.carousel__images');
  console.log(image[0]);
  next.addEventListener('click', () => {
    for (let i = 0; i < images.length; i++) {}
  });
});
