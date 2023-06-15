// Получаем ссылки на список и изображения
const myList = document.getElementById('myList');
const images = document.querySelectorAll('.whatWeDo-list__img');

myList.addEventListener('mouseover', function(event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    hideAllImages();
     event.target.classList.add('clicked');

    const firstImageId = event.target.getAttribute('data-firstImage');
    const secondImageId = event.target.getAttribute('data-secondImage');
    const selectedFirstImage = document.getElementById(firstImageId);
    const selectedSecondImage = document.getElementById(secondImageId);
    if (selectedFirstImage && selectedSecondImage) {
      selectedFirstImage.classList.add('show');
      selectedSecondImage.classList.add('show');
    }
  }
});

function hideAllImages() {
  images.forEach(function(image) {
     image.classList.remove('show');
     myList.querySelectorAll('.whatWeDo-list__point').forEach((e) => {
      e.classList.remove('clicked'); 
     })
  });
}